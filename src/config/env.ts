export const env = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "Admin Web",

  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "",

  NODE_ENV: process.env.NODE_ENV,
} as const;