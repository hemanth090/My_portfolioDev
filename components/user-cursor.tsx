"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type UserCursorProps = {
  name?: string;
  color?: string;
  textColor?: string;
  size?: number;
  labelTiltStrength?: number;
  showLabel?: boolean;
  pressScale?: number;
};

const POSITION_SPRING = { stiffness: 380, damping: 32, mass: 0.6 };
const LABEL_SPRING = { stiffness: 220, damping: 26, mass: 0.7 };
const PRESS_SPRING = { stiffness: 500, damping: 28, mass: 0.5 };
const ROTATE_SPRING = { stiffness: 200, damping: 24, mass: 0.6 };

export function UserCursor({
  name = "hi",
  color = "var(--foreground)",
  textColor = "var(--background)",
  size = 31,
  labelTiltStrength = 25,
  showLabel = true,
  pressScale = 0.92,
}: UserCursorProps) {
  const [isCoarse, setIsCoarse] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const arrowX = useSpring(x, POSITION_SPRING);
  const arrowY = useSpring(y, POSITION_SPRING);
  const labelXBase = useSpring(x, LABEL_SPRING);
  const labelYBase = useSpring(y, LABEL_SPRING);
  const scaleValue = useMotionValue(1);
  const scale = useSpring(scaleValue, PRESS_SPRING);
  const rotateValue = useMotionValue(0);
  const rotate = useSpring(rotateValue, ROTATE_SPRING);

  const lastPosition = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    if (!window.matchMedia) return;

    const media = window.matchMedia("(pointer: coarse)");
    const onChange = () => setIsCoarse(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    scaleValue.set(pressed ? pressScale : 1);
  }, [pressed, pressScale, scaleValue]);

  useEffect(() => {
    if (isCoarse) return;

    document.documentElement.classList.add("custom-cursor");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const now = performance.now();
      let vx = 0;
      let vy = 0;

      if (lastPosition.current) {
        const dt = Math.max(1, now - lastPosition.current.t);
        vx = ((clientX - lastPosition.current.x) / dt) * 1000;
        vy = ((clientY - lastPosition.current.y) / dt) * 1000;
      }

      lastPosition.current = { x: clientX, y: clientY, t: now };
      x.set(clientX);
      y.set(clientY);

      const speed = Math.min(1, Math.hypot(vx, vy) / 1500);
      const direction = vx === 0 ? 0 : vx > 0 ? 1 : -1;
      rotateValue.set(direction * speed * labelTiltStrength);
      setVisible(true);
    };

    const onMouseDown = () => setPressed(true);
    const onMouseUp = () => setPressed(false);
    const onEnter = () => setVisible(true);
    const onLeave = () => {
      setVisible(false);
      lastPosition.current = null;
      rotateValue.set(0);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      setPressed(false);
    };
  }, [isCoarse, labelTiltStrength, x, y, rotateValue]);

  const labelOffset = useMemo(
    () => ({ x: 0.9 * size, y: 0.2 * size + 6 }),
    [size],
  );

  const labelX = useTransform(labelXBase, (value) => value + labelOffset.x);
  const labelY = useTransform(labelYBase, (value) => value + labelOffset.y);

  if (isCoarse) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      {showLabel && (
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
      )}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: arrowX,
          y: arrowY,
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
