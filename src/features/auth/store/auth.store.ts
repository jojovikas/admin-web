import { create } from "zustand";
import { User } from "../types/user.types";



interface AuthState {
  user: User | null;
  accessToken: string | null;

  isAuthenticated: boolean;

  setUser: (user: User | null) => void;

  setAccessToken: (token: string | null) => void;

  login: (
    user: User,
    accessToken: string
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,

    accessToken: null,

    isAuthenticated: false,

    setUser: (user) =>
      set({
        user,
      }),

    setAccessToken: (token) =>
      set({
        accessToken: token,
      }),

    login: (user, accessToken) =>
      set({
        user,
        accessToken,
        isAuthenticated: true,
      }),

    logout: () =>
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      }),
  }));