import { ApiResponse } from "@/types/api";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";
import { API_ENDPOINTS, apiClient } from "@/lib/api";

export const authApi = {
  login(data: LoginRequest) {
    return apiClient.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );
  },
};