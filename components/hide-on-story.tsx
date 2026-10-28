"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * The /story route is a full-screen motion experience: the site chrome would
 * compete with it and leave focusable links behind the overlay, so it is
 * hidden on that route only. Every other route keeps the normal shell.
 */
export function HideOnStory({ children }: { children: ReactNode }) {
  const pathname = (usePathname() || "/").replace(/\/+$/, "") || "/";
  if (pathname === "/story") return null;
  return <>{children}</>;
}
