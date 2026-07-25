"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authSession } from "@/lib/auth/auth-session";
import { authService } from "@/features/auth/services/auth.service";
import { FullScreenLoader, Loader } from "../shared/loader";

interface GuestGuardProps {
  children: ReactNode;
}

export function GuestGuard({
  children,
}: GuestGuardProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        // Already has access token
        if (authSession.getAccessToken()) {
          router.replace("/dashboard");
          return;
        }

        // Try restoring session
        await authService.refreshToken();

        router.replace("/dashboard");
      } catch {
        // Not authenticated, allow access to auth pages
        setIsLoading(false);
      }
    };

    authenticate();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        {/* <Loader/> */}
        <FullScreenLoader className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
      </div>
    );
  }

  return <>{children}</>;
}