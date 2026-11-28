"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type Dot = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  glow: number;
};

type Ripple = { x: number; y: number; time: number };

export function InteractiveDots({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dots: Dot[] = [];
    const ripples: Ripple[] = [];
    const pointer = { x: -9999, y: -9999, inside: false };
    let width = 0;
    let height = 0;
    let elapsed = 0;
    let lastFrame = 0;
    let frame = 0;
    let visible = true;
    const sprites: HTMLCanvasElement[] = [];

    const getInk = () => {
      const values = getComputedStyle(document.documentElement)
        .getPropertyValue("--dot-ink")
        .trim()
        .split(/[\s,]+/)
        .map(Number);
      if (values.length < 3 || values.some(Number.isNaN)) {
        return { r: 115, g: 115, b: 115 };
      }
      return { r: values[0], g: values[1], b: values[2] };
    };

    const buildSprites = () => {
      const ink = getInk();
      sprites.length = 0;
      for (let i = 0; i < 20; i += 1) {
        const sprite = document.createElement("canvas");
        sprite.width = 32;
        sprite.height = 32;
        const spriteContext = sprite.getContext("2d");
        if (spriteContext) {
          spriteContext.beginPath();
          spriteContext.fillStyle = `rgba(${ink.r}, ${ink.g}, ${ink.b}, ${
            0.3 + (i / 19) * 0.7
          })`;
          spriteContext.arc(16, 16, 16, 0, 2 * Math.PI);
          spriteContext.fill();
        }
        sprites.push(sprite);
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots.length = 0;

      const columns = Math.floor(width / 9);
      const rows = Math.floor(height / 9);
      const offsetX = (width - (columns - 1) * 9) / 2;
      const offsetY = (height - (rows - 1) * 9) / 2;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const dotX = offsetX + 9 * column;
          const dotY = offsetY + 9 * row;
          dots.push({
            ox: dotX,
            oy: dotY,
            x: dotX,
            y: dotY,
            vx: 0,
            vy: 0,
            glow: 0,
          });
        }
      }
      buildSprites();
    };

    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      if (!lastFrame) lastFrame = time;
      const delta = Math.min(0.05, Math.max(0, (time - lastFrame) / 1000));
      lastFrame = time;
      if (!visible || document.hidden || delta === 0) return;

      elapsed += delta;
      context.clearRect(0, 0, width, height);

      const rise = 1 - Math.pow(0.85, 60 * delta);
      const decay = Math.pow(0.85, 60 * delta);

      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        ripples[i].time += delta;
        if (ripples[i].time > 1.7) ripples.splice(i, 1);
      }

      for (const dot of dots) {
        let forceX = 0;
        let forceY = 0;
        let glow = 0;

        if (pointer.inside) {
          const dx = dot.ox - pointer.x;
          const dy = dot.oy - pointer.y;
          const distanceSq = dx * dx + dy * dy;
          if (distanceSq < 14400) {
            const distance = Math.sqrt(distanceSq) || 1;
            const proximity = 1 - distance / 120;
            const force = proximity * proximity * 52;
            forceX += (dx / distance) * force;
            forceY += (dy / distance) * force;
            glow = proximity;
          }
        }

        for (const ripple of ripples) {
          const dx = dot.ox - ripple.x;
          const dy = dot.oy - ripple.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const ring = Math.abs(distance - 220 * ripple.time);
          if (ring < 34) {
            const strength =
              (1 - ring / 34) * (1 - ripple.time / 1.7);
            glow = Math.max(glow, strength);
            forceX += (dx / distance) * strength * 24;
            forceY += (dy / distance) * strength * 24;
          }
        }

        forceX += (dot.ox - dot.x) * 6.4;
        forceY += (dot.oy - dot.y) * 6.4;
        dot.vx = (dot.vx + forceX * delta) * decay;
        dot.vy = (dot.vy + forceY * delta) * decay;
        dot.x += dot.vx * delta * 60;
        dot.y += dot.vy * delta * 60;
        dot.glow += (glow - dot.glow) * rise;

        const shimmer =
          (Math.sin(0.8 * elapsed + 0.015 * dot.ox + 0.02 * dot.oy) + 1) *
          0.04;
        const total = Math.min(1, dot.glow + shimmer);

        context.globalAlpha = Math.min(
          1,
          0.48 + shimmer + 0.5 * dot.glow
        );
        context.drawImage(
          sprites[Math.floor(19 * total)],
          dot.x - 1,
          dot.y - 1,
          2,
          2
        );
      }

      context.globalAlpha = 1;
    };

    const setPointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.inside = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      setPointer(event.clientX, event.clientY);
      const rect = container.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      container.dataset.hover = "true";
      container.style.setProperty("--hero-x", `${(offsetX * 20).toFixed(1)}px`);
      container.style.setProperty("--hero-y", `${(offsetY * 12).toFixed(1)}px`);
    };

    const onPointerDown = (event: PointerEvent) => {
      setPointer(event.clientX, event.clientY);
      ripples.push({ x: pointer.x, y: pointer.y, time: 0 });
      if (ripples.length > 8) ripples.splice(0, ripples.length - 8);
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      pointer.x = -9999;
      pointer.y = -9999;
      container.dataset.hover = "false";
      container.style.setProperty("--hero-x", "0px");
      container.style.setProperty("--hero-y", "0px");
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const mutationObserver = new MutationObserver(buildSprites);
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    container.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointerleave", onPointerLeave);
    container.addEventListener("pointercancel", onPointerLeave);

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("pointercancel", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("hero-dot-field", className)}
      aria-label="Interactive dot field"
    >
      <img
        ref={imageRef}
        src="/images/hero-dot-field.webp"
        alt=""
        aria-hidden
        loading="eager"
        decoding="async"
        className="hero-dot-image"
      />
      <canvas ref={canvasRef} aria-hidden className="block h-full w-full" />
    </div>
  );
}
