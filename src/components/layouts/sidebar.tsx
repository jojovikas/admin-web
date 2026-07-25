"use client";

import Link from "next/link";

import { appConfig } from "@/config/app";

import { SidebarContent } from "./sidebar-content";

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({
  collapsed = false,
}: SidebarProps) {
  return (
    <aside
      className={[
        "hidden border-r bg-background transition-all duration-300 lg:flex lg:flex-col",
        collapsed ? "w-[72px]" : "w-[280px]",
      ].join(" ")}
    >
      <div className="flex h-16 items-center border-b px-5">
        <Link
          href="/dashboard"
          className="truncate text-lg font-bold"
        >
          {collapsed
            ? appConfig.appName
                .split(" ")
                .map((word) => word[0])
                .join("")
            : appConfig.appName}
        </Link>
      </div>

      <SidebarContent collapsed={collapsed} />
    </aside>
  );
}