import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { axiosInstance } from "./axios";
import { authSession } from "@/lib/auth/auth-session";
import { authService } from "@/features/auth/services/auth.service";
import { logout } from "@/features/auth/utils/logout";

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let interceptorsInitialized = false;

let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

export const setupInterceptors = () => {
  /**
   * Prevent duplicate interceptor registration
   */
  if (interceptorsInitialized) {
    return;
  }

  interceptorsInitialized = true;

  /**
   * REQUEST INTERCEPTOR
   */
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = authSession.getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
  );

  /**
   * RESPONSE INTERCEPTOR
   */
  axiosInstance.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
      const originalRequest = error.config as RetryAxiosRequestConfig;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      /**
       * Don't try to refresh the refresh endpoint itself
       */
      const requestUrl = originalRequest.url ?? "";

      if (requestUrl.includes("/auth/refresh-token")) {
    logout();

        return Promise.reject(error);
      }

      /**
       * Ignore non-401 or already retried requests
       */
      if (error.response?.status !== 401 || originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      /**
       * If refresh is already in progress,
       * queue this request.
       */
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;

              resolve(axiosInstance(originalRequest));
            },
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        /**
         * Refresh access token
         */
        const accessToken = await authService.refreshToken();

        /**
         * Retry queued requests
         */
        processQueue(null, accessToken);

        /**
         * Retry original request
         */
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        /**
         * Reject queued requests
         */
        processQueue(refreshError);

        /**
         * Clear auth session
         */
        logout();

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    },
  );
};
