"use client";

import { ReactNode, useEffect } from "react";
import { setupInterceptors } from "@/lib/api/core/interceptor";
import { QueryProvider } from "./query-provider";
import { AppearanceProvider } from "@/features/settings/providers/appearance-provider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return (
    <QueryProvider>
      <AppearanceProvider>{children}</AppearanceProvider>
    </QueryProvider>
  );
}
