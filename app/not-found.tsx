"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Eyebrow } from "@/components/section-heading";

export default function NotFound() {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.title = "Page not found - Naveen Hemanth";
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main>
      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <Eyebrow>404</Eyebrow>
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        This page doesn&apos;t exist.
      </h1>
      <div className="screen-line-bottom relative px-4 py-5 sm:px-6">
        <p className="text-muted-foreground max-w-prose text-sm leading-relaxed">
          The link may be broken, or the page moved. Head back home, or press{" "}
          <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4">
            ⌘K
          </kbd>{" "}
          to search the site.
        </p>
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 mt-4 inline-flex h-7 shrink-0 items-center gap-2 rounded-md px-1 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back home
        </Link>
      </div>
    </main>
  );
}
