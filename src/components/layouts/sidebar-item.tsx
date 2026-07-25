"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/navigation.types";

interface SidebarItemProps {
  item: NavigationItem;
  collapsed?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  item,
  collapsed = false,
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.href !== "/dashboard" && pathname.startsWith(item.href));

  const Icon = item.icon;

  return (
    <Link
  href={item.href}
  onClick={onClick}
  aria-current={isActive ? "page" : undefined}
  className={cn(
    "group flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200",
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:bg-accent hover:text-foreground",
    collapsed && "justify-center px-0"
  )}
>
      <Icon
        className={cn(
          "h-5 w-5 shrink-0",
          !collapsed && "mr-3"
        )}
      />

      {!collapsed && (
        <span className="truncate">
          {item.title}
        </span>
      )}
    </Link>
  );
}