"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import { appConfig } from "@/config/app";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { SidebarContent } from "./sidebar-content";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[280px] p-0"
      >
        {/* Header */}
        <div className="flex h-16 items-center border-b px-5">
          <Link
            href="/dashboard"
            className="text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            {appConfig.appName}
          </Link>
        </div>

        {/* Navigation */}
        <SidebarContent
          onItemClick={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}