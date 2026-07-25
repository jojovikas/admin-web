"use client";

import { Button } from "@/components/ui/button";
import { authService } from "@/features/auth/services/auth.service";

export default function DashboardPage() {
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Button
          variant="destructive"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}