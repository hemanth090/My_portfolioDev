"use client";

import { useEffect, useRef } from "react";

export function MagneticLink({
  href,
  className,
  children,
  external = true,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const content = contentRef.current;
    if (!link || !content) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frame = 0;
    let lastTime = performance.now();
    let currentX = 0;
    let currentY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;
      const damping = Math.exp(-13.5 * delta);

      velocityX = (velocityX + (targetX - currentX) * 105 * delta) * damping;
      velocityY = (velocityY + (targetY - currentY) * 105 * delta) * damping;
      currentX += velocityX * delta;
      currentY += velocityY * delta;

      content.style.transform = `translate3d(${currentX.toFixed(
        2
      )}px, ${currentY.toFixed(2)}px, 0)`;

      const settled =
        Math.abs(targetX - currentX) < 0.02 &&
        Math.abs(targetY - currentY) < 0.02 &&
        Math.abs(velocityX) < 0.02 &&
        Math.abs(velocityY) < 0.02;

      frame = settled ? 0 : requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frame) {
        lastTime = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      start();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reduceMotion.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        currentX = 0;
        currentY = 0;
        velocityX = 0;
        velocityY = 0;
        targetX = 0;
        targetY = 0;
        content.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const linkRect = link.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const offsetX = event.clientX - (linkRect.left + linkRect.width / 2);
      const offsetY = event.clientY - (linkRect.top + linkRect.height / 2);
      const distance = Math.hypot(offsetX, offsetY);
      const range = Math.max(linkRect.width, linkRect.height) + 42;

      if (distance >= range) {
        reset();
        return;
      }

      const maxX = Math.max(0, (linkRect.width - contentRect.width) / 2 - 2);
      const maxY = Math.max(0, (linkRect.height - contentRect.height) / 2 - 2);
      const strength = 0.28 * (1 - distance / range);

      targetX = Math.max(-maxX, Math.min(maxX, offsetX * strength));
      targetY = Math.max(-maxY, Math.min(maxY, offsetY * strength));
      start();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", reset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      data-ui-feedback="tap"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      <span
        ref={contentRef}
        className="pointer-events-none inline-flex items-center gap-[5px]"
      >
        {children}
      </span>
    </a>
  );
}
