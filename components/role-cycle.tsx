"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/cn";

export function RoleCycle({
  roles,
  holdMs = 2600,
  boxClassName = "h-6 md:h-7",
}: {
  roles: string[];
  holdMs?: number;
  boxClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (roles.length < 2) return;
    const interval = window.setInterval(
      () => setIndex((value) => (value + 1) % roles.length),
      holdMs,
    );
    return () => window.clearInterval(interval);
  }, [roles.length, holdMs]);

  const longest = useMemo(
    () => roles.reduce((acc, role) => (role.length > acc.length ? role : acc), ""),
    [roles],
  );
  const current = roles[index];
  const srText = roles.join(" · ");

  return (
    <span aria-live="off">
      <span className="sr-only">{srText}</span>
      <span
        aria-hidden
        className={cn(
          "relative inline-block overflow-hidden align-bottom",
          boxClassName,
        )}
      >
        <span className="invisible block whitespace-nowrap">{longest}</span>
        <AnimatePresence initial={false}>
          <motion.span
            key={current}
            className="absolute inset-0 flex items-center whitespace-nowrap"
            initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { y: "0%" }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 220, damping: 30, mass: 0.9 }
            }
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
