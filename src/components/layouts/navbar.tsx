"use client";

import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MobileSidebar } from "./mobile-sidebar";
import { UserMenu } from "./user-menu";

interface NavbarProps {
  collapsed: boolean;
  onToggleSidebar: () => void;
}

export function Navbar({
  collapsed,
  onToggleSidebar,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-2">
        {/* Mobile Menu */}
        <MobileSidebar />

        {/* Desktop Collapse */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={onToggleSidebar}
        >
          <PanelLeft
            className={`h-5 w-5 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        {/* Next Step */}

        <UserMenu />
      </div>
    </header>
  );
}