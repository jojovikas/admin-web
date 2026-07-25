"use client";

import { ReactNode, useEffect } from "react";
import { setupInterceptors } from "@/lib/api/core/interceptor";
import { QueryProvider } from "./query-provider";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return <QueryProvider>{children}</QueryProvider>;
}