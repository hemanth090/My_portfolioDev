"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export const MAGNETIC_BUTTON_CLASS =
  "focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]";

export function MagneticButton({
  href,
  label,
  icon,
  external = true,
  className,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    const inner = innerRef.current;
    if (!anchor || !inner) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let lastTime = performance.now();
    let currentX = 0;
    let currentY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let targetX = 0;
    let targetY = 0;

    const tick = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;
      const damping = Math.exp(-13.5 * delta);

      velocityX = (velocityX + (targetX - currentX) * 105 * delta) * damping;
      velocityY = (velocityY + (targetY - currentY) * 105 * delta) * damping;
      currentX += velocityX * delta;
      currentY += velocityY * delta;

      inner.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      const settled =
        Math.abs(targetX - currentX) < 0.02 &&
        Math.abs(targetY - currentY) < 0.02 &&
        Math.abs(velocityX) < 0.02 &&
        Math.abs(velocityY) < 0.02;

      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const kick = () => {
      if (raf) return;
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches) {
        cancelAnimationFrame(raf);
        raf = 0;
        currentX = currentY = velocityX = velocityY = targetX = targetY = 0;
        inner.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const bounds = anchor.getBoundingClientRect();
      const innerBounds = inner.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(offsetX, offsetY);
      const range = Math.max(bounds.width, bounds.height) + 42;

      if (distance >= range) {
        reset();
        return;
      }

      const maxX = Math.max(0, (bounds.width - innerBounds.width) / 2 - 2);
      const maxY = Math.max(0, (bounds.height - innerBounds.height) / 2 - 2);
      const strength = 0.28 * (1 - distance / range);

      targetX = Math.max(-maxX, Math.min(maxX, offsetX * strength));
      targetY = Math.max(-maxY, Math.min(maxY, offsetY * strength));
      kick();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", reset);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <a
      ref={anchorRef}
      href={href}
      data-ui-feedback="tap"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(MAGNETIC_BUTTON_CLASS, className)}
    >
      <span
        ref={innerRef}
        className="pointer-events-none inline-flex items-center gap-[5px]"
      >
        {icon}
        {label}
      </span>
    </a>
  );
}
