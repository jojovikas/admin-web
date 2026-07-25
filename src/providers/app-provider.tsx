"use client";

import { useEffect } from "react";
import { setupInterceptors } from "../lib/api/core/interceptor";


export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return children;
}