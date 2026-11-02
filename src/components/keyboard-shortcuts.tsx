"use client";

import { useRouter } from "@bprogress/next/app";
import { useHotkeys } from "react-hotkeys-hook";

export function KeyboardShortcuts() {
  const router = useRouter();

  useHotkeys("g>h", () => router.push("/"));
  useHotkeys("g>p", () => router.push("/projects"));
  useHotkeys("g>c", () => router.push("/credentials"));
  useHotkeys("g>t", () => router.push("/contact"));

  return null;
}
