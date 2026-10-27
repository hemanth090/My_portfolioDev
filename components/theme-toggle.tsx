"use client";

import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/cn";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DURATION = 400;

function pctX(value: number) {
  return `${(value / (window.innerWidth || 1)) * 100}%`;
}

function pctY(value: number) {
  return `${(value / (window.innerHeight || 1)) * 100}%`;
}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const isTransitioning = useRef(false);
  const animationRef = useRef<Animation | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => setMounted(true), []);

  // If the component unmounts mid-transition, don't leave the document stuck
  // in the "transitioning" state.
  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target) {
        if (
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable
        ) {
          return;
        }
      }
      if (event.key.toLowerCase() !== "d") return;
      buttonRef.current?.querySelector("button")?.click();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => {
    const container = buttonRef.current;
    if (!container) return;
    if (isTransitioning.current) return;
    if (document.documentElement.dataset.themeTransition === "active") return;

    const root = document.documentElement;

    // Read the truth from the DOM rather than React state so a click that
    // lands right after a previous transition can never toggle to the same
    // theme (which looked like a "nothing happened" glitch).
    const next = root.classList.contains("dark") ? "light" : "dark";

    // Flip the class synchronously as part of the view-transition update.
    // next-themes normally applies the class in an effect; on a busy main
    // thread that can land after Chrome has taken the "new" snapshot, which
    // produced the occasional reveal-then-snap glitch.
    const applyTheme = () => {
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
      setTheme(next);
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      typeof document.startViewTransition !== "function" ||
      reduceMotion
    ) {
      applyTheme();
      return;
    }

    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const radius = Math.hypot(
      Math.max(cx, viewportWidth - cx),
      Math.max(cy, viewportHeight - cy),
    );

    const clipPaths = [
      `circle(0% at ${pctX(cx)} ${pctY(cy)})`,
      `circle(${
        (radius / (Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2)) * 100
      }% at ${pctX(cx)} ${pctY(cy)})`,
    ];

    isTransitioning.current = true;

    // Set the custom properties before flagging the document so the first
    // paint of the transition always has a valid starting clip-path.
    root.style.setProperty("--theme-transition-duration", `${DURATION}ms`);
    root.style.setProperty("--theme-transition-clip-from", clipPaths[0]);
    root.dataset.themeTransition = "active";

    let cleanedUp = false;
    let fallbackTimer = 0;

    const cleanup = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      window.clearTimeout(fallbackTimer);
      isTransitioning.current = false;
      delete root.dataset.themeTransition;
      root.style.removeProperty("--theme-transition-duration");
      root.style.removeProperty("--theme-transition-clip-from");
      animationRef.current?.cancel();
      animationRef.current = null;
      if (cleanupRef.current === cleanup) cleanupRef.current = null;
    };

    cleanupRef.current = cleanup;

    // Safety net: never keep the toggle locked if `finished` never settles
    // (interrupted transition, tab backgrounded, etc.).
    fallbackTimer = window.setTimeout(cleanup, DURATION + 400);

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    transition.finished.finally(cleanup).catch(() => {});

    transition.ready
      .then(() => {
        animationRef.current = root.animate(
          { clipPath: clipPaths },
          {
            duration: DURATION,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        cleanup();
      });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span ref={buttonRef} className="inline-flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? isDark
                  ? "Switch to light theme"
                  : "Switch to dark theme"
                : "Toggle theme"
            }
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-8 rounded-full active:scale-95 [&_svg]:size-4",
              className,
            )}
          >
            {isDark ? <Sun /> : <Moon />}
            <span className="sr-only">Toggle theme</span>
          </button>
        </span>
      </TooltipTrigger>
      <TooltipContent>Toggle theme (D)</TooltipContent>
    </Tooltip>
  );
}
