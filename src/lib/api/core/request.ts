import type {
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { axiosInstance } from "./axios";

export async function request<T>(
  config: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> =
    await axiosInstance(config);

  return response.data;
}