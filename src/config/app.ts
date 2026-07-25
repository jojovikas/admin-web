import { env } from "./env";

export const appConfig = {
  appName: env.NEXT_PUBLIC_APP_NAME,
  apiUrl: env.NEXT_PUBLIC_API_URL,
} as const;