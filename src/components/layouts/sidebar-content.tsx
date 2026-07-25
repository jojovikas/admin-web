"use client";

import { navigation } from "@/config/navigation";

import { SidebarItem } from "./sidebar-item";

interface SidebarContentProps {
  collapsed?: boolean;
  onItemClick?: () => void;
}

export function SidebarContent({
  collapsed = false,
  onItemClick,
}: SidebarContentProps) {
  return (
    <nav className="flex-1 space-y-1 overflow-y-auto p-3">
      {navigation.map((item) => (
        <SidebarItem
          key={item.href}
          item={item}
          collapsed={collapsed}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
}