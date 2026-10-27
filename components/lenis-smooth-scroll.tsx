"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export function LenisSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const previousScrollBehavior = useRef<string | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const destroy = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      observerRef.current?.disconnect();
      observerRef.current = null;
      lenisRef.current?.destroy();
      lenisRef.current = null;
      if (previousScrollBehavior.current !== null) {
        document.documentElement.style.scrollBehavior =
          previousScrollBehavior.current;
        previousScrollBehavior.current = null;
      }
    };

    const start = () => {
      if (lenisRef.current) return;

      previousScrollBehavior.current =
        document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      const lenis = new Lenis({ anchors: true, autoRaf: false, lerp: 0.18 });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);

      const sync = () => {
        if (
          document.body.hasAttribute("data-scroll-locked") ||
          document.body.style.overflow === "hidden"
        ) {
          lenis.stop();
        } else {
          lenis.start();
        }
      };

      sync();
      const observer = new MutationObserver(sync);
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-scroll-locked", "style"],
      });
      observerRef.current = observer;
    };

    const sync = () => {
      if (finePointer.matches && !reducedMotion.matches) {
        start();
      } else {
        destroy();
      }
    };

    sync();
    finePointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      finePointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
      destroy();
    };
  }, []);

  return null;
}
