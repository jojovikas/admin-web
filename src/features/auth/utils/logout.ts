
import { authSession } from "@/lib/auth/auth-session";
import { useAuthStore } from "../store/auth.store";

export function logout(redirect = true) {
  /**
   * Clear access token
   */
  authSession.clear();

  /**
   * Clear auth state
   */
  useAuthStore.getState().logout();

  /**
   * Redirect to login
   */
  if (redirect && typeof window !== "undefined") {
    window.location.replace("/login");
  }
}