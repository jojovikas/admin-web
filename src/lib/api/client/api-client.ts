import type { AxiosRequestConfig } from "axios";

import { request } from "../core/request";

export const apiClient = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) =>
    request<T>({
      ...config,
      method: "GET",
      url,
    }),

  post: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) =>
    request<T>({
      ...config,
      method: "POST",
      url,
      data,
    }),

  put: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) =>
    request<T>({
      ...config,
      method: "PUT",
      url,
      data,
    }),

  patch: <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) =>
    request<T>({
      ...config,
      method: "PATCH",
      url,
      data,
    }),

  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) =>
    request<T>({
      ...config,
      method: "DELETE",
      url,
    }),
};