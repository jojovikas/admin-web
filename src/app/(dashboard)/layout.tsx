import { AppLayout } from "@/components/layouts/app-layout";
import type { ReactNode } from "react";



interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}