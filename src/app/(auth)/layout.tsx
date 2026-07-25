import { ReactNode } from "react";
import { GuestGuard } from "@/components/auth/guest-guard";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <GuestGuard>
      {children}
    </GuestGuard>
  );
}