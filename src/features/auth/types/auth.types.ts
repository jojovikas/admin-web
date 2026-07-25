  import type { User } from "./user.types";

  /* ============================
  * Login
  * ============================ */

  export interface LoginRequest {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    user: User;
    accessToken: string;
  }

  /* ============================
  * Register
  * ============================ */

  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }

  export type RegisterResponse = User;

  /* ============================
  * Refresh Token
  * ============================ */

  export interface RefreshTokenResponse {
    accessToken: string;
  }





