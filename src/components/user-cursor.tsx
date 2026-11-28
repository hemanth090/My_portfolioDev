"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export function UserCursor({
  name = "hi",
  color = "var(--foreground)",
  textColor = "var(--background)",
  size = 31,
  labelTiltStrength = 25,
  pressScale = 0.92,
}: {
  name?: string;
  color?: string;
  textColor?: string;
  size?: number;
  labelTiltStrength?: number;
  pressScale?: number;
}) {
  const [coarsePointer, setCoarsePointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarsePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  const fastSpring = { stiffness: 380, damping: 32, mass: 0.6 };
  const slowSpring = { stiffness: 220, damping: 26, mass: 0.7 };

  const fastX = useSpring(x, fastSpring);
  const fastY = useSpring(y, fastSpring);
  const slowX = useSpring(x, slowSpring);
  const slowY = useSpring(y, slowSpring);

  const scale = useSpring(1, { stiffness: 500, damping: 28, mass: 0.5 });
  const tilt = useMotionValue(0);
  const rotate = useSpring(tilt, { stiffness: 200, damping: 24, mass: 0.6 });

  const labelX = useTransform(slowX, (value) => value + 0.9 * size);
  const labelY = useTransform(slowY, (value) => value + 0.2 * size + 6);

  const lastPoint = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    scale.set(pressed ? pressScale : 1);
  }, [pressed, pressScale, scale]);

  useEffect(() => {
    if (coarsePointer) return;

    document.documentElement.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      const time = performance.now();
      let velocityX = 0;
      let velocityY = 0;
      const previous = lastPoint.current;

      if (previous) {
        const elapsed = Math.max(1, time - previous.t);
        velocityX = ((event.clientX - previous.x) / elapsed) * 1000;
        velocityY = ((event.clientY - previous.y) / elapsed) * 1000;
      }

      lastPoint.current = { x: event.clientX, y: event.clientY, t: time };
      x.set(event.clientX);
      y.set(event.clientY);

      const speed = Math.min(1, Math.hypot(velocityX, velocityY) / 1500);
      const direction = velocityX === 0 ? 0 : velocityX > 0 ? 1 : -1;
      tilt.set(direction * speed * labelTiltStrength);
      setVisible(true);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onEnter = () => setVisible(true);
    const onLeave = () => {
      setVisible(false);
      lastPoint.current = null;
      tilt.set(0);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      setPressed(false);
    };
  }, [coarsePointer, labelTiltStrength, tilt, x, y]);

  if (coarsePointer) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: labelX,
          y: labelY,
          rotate,
          scale,
          background: color,
          borderRadius: 999,
          padding: `${0.18 * size}px ${0.36 * size}px`,
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
          opacity: visible ? 1 : 0,
          transformOrigin: "0% 50%",
          transition: "opacity 140ms ease",
          willChange: "transform, opacity",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            color: textColor,
            fontSize: Math.max(7, 0.43 * size),
            lineHeight: 1.1,
            fontWeight: 600,
            whiteSpace: "nowrap",
            letterSpacing: 0.1,
          }}
        >
          {name}
        </div>
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: fastX,
          y: fastY,
          scale,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          transformOrigin: "0% 0%",
          transition: "opacity 140ms ease",
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "visible" }}
        >
          <path
            d="M5 3 L23 14 L14 16 L11 24 Z"
            fill={color}
            stroke="rgba(0,0,0,0.18)"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
