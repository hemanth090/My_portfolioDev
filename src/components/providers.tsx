"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";

import { SoundProvider } from "@/components/sound-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <SoundProvider>
        <TooltipPrimitive.Provider delayDuration={0}>
          {children}
        </TooltipPrimitive.Provider>
      </SoundProvider>
    </ThemeProvider>
  );
}
