import { authSession } from "@/lib/auth/auth-session";
import { authApi } from "../api/auth.api";


import type { LoginRequest } from "../types/auth.types";

export const authService = {
  async login(data: LoginRequest) {
    const response = await authApi.login(data);

    authSession.setAccessToken(response.data.accessToken);

    return response;
  },
};