"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

function NavItem({ title, href, className }: NavItem & { className?: string }) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "font-geist-pixel-square text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {title}
    </Link>
  );
}

export default function Nav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <nav className={cn("flex items-center gap-5", className)}>
      {items.map(({ title, href }) => {
        return <NavItem key={href} title={title} href={href} />;
      })}
    </nav>
  );
}
