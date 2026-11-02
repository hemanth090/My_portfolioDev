"use client";

import { AppProgressProvider } from "@bprogress/next";
import { MotionConfig } from "motion/react";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import ThemeProvider from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AppProgressProvider
        color="var(--foreground)"
        height="2px"
        delay={500}
        options={{ showSpinner: false }}
      >
        <Toaster position="top-center" />
        <TooltipProvider>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </TooltipProvider>
        <KeyboardShortcuts />
      </AppProgressProvider>
    </ThemeProvider>
  );
}
