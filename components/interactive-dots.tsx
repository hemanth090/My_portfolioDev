"use client";

import { useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    let raf = 0;
    let lastTime = 0;
    let elapsed = 0;
    let visible = true;
    let sprites: HTMLCanvasElement[] = [];

    const readColor = () => {
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
      const color = readColor();
      sprites = Array.from({ length: 20 }, (_, index) => {
        const sprite = document.createElement("canvas");
        sprite.width = 32;
        sprite.height = 32;
        const ctx = sprite.getContext("2d");
        if (ctx) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
            0.3 + (index / 19) * 0.7
          })`;
          ctx.arc(16, 16, 16, 0, 2 * Math.PI);
          ctx.fill();
        }
        return sprite;
      });
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots.length = 0;

      const spacing = 9;
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      const originX = (width - (cols - 1) * spacing) / 2;
      const originY = (height - (rows - 1) * spacing) / 2;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = originX + spacing * col;
          const y = originY + spacing * row;
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0, glow: 0 });
        }
      }
      buildSprites();
    };

    const frame = (time: number) => {
      raf = requestAnimationFrame(frame);
      if (!lastTime) lastTime = time;
      const delta = Math.min(0.05, Math.max(0, (time - lastTime) / 1000));
      lastTime = time;
      if (!visible || document.hidden || delta === 0) return;

      elapsed += delta;
      context.clearRect(0, 0, width, height);

      const lerp = 1 - Math.pow(0.85, 60 * delta);
      const damping = Math.pow(0.85, 60 * delta);

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        ripples[index].time += delta;
        if (ripples[index].time > 1.7) ripples.splice(index, 1);
      }

      for (const dot of dots) {
        let ax = 0;
        let ay = 0;
        let glow = 0;

        if (pointer.inside) {
          const dx = dot.ox - pointer.x;
          const dy = dot.oy - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) {
            const dist = Math.sqrt(distSq) || 1;
            const strength = 1 - dist / 120;
            const force = strength * strength * 52;
            ax += (dx / dist) * force;
            ay += (dy / dist) * force;
            glow = strength;
          }
        }

        for (const ripple of ripples) {
          const dx = dot.ox - ripple.x;
          const dy = dot.oy - ripple.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ring = Math.abs(dist - 220 * ripple.time);
          if (ring < 34) {
            const strength = (1 - ring / 34) * (1 - ripple.time / 1.7);
            glow = Math.max(glow, strength);
            ax += (dx / dist) * strength * 24;
            ay += (dy / dist) * strength * 24;
          }
        }

        ax += (dot.ox - dot.x) * 6.4;
        ay += (dot.oy - dot.y) * 6.4;
        dot.vx = (dot.vx + ax * delta) * damping;
        dot.vy = (dot.vy + ay * delta) * damping;
        dot.x += dot.vx * delta * 60;
        dot.y += dot.vy * delta * 60;
        dot.glow += (glow - dot.glow) * lerp;

        const wobble =
          (Math.sin(0.8 * elapsed + 0.015 * dot.ox + 0.02 * dot.oy) + 1) *
          0.04;
        const intensity = Math.min(1, dot.glow + wobble);

        context.globalAlpha = Math.min(1, 0.48 + wobble + 0.5 * dot.glow);
        context.drawImage(
          sprites[Math.floor(19 * intensity)],
          dot.x - 1,
          dot.y - 1,
          2,
          2,
        );
      }

      context.globalAlpha = 1;
    };

    const setPointer = (clientX: number, clientY: number) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = clientX - bounds.left;
      pointer.y = clientY - bounds.top;
      pointer.inside = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      setPointer(event.clientX, event.clientY);
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
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    const mutationObserver = new MutationObserver(buildSprites);
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointerleave", onPointerLeave);
    container.addEventListener("pointercancel", onPointerLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
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
      className={className}
      aria-label="Interactive dot field"
    >
      <canvas ref={canvasRef} aria-hidden className="block h-full w-full" />
    </div>
  );
}
