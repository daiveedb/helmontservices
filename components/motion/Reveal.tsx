"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import { EASE_OUT } from "./tokens";

/** Where the element travels *to* as it settles into place. */
type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades (and drifts) its children in the first time they scroll into view.
 * Elements already on screen at load animate immediately, so it doubles as an
 * on-entry animation for above-the-fold content.
 */
export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance,
  scaleFrom = 1,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Override the default 28px travel distance. */
  distance?: number;
  /** Start slightly scaled for image/card reveals. */
  scaleFrom?: number;
  /** Fraction of the element that must be visible before it fires. */
  amount?: number;
  once?: boolean;
}) {
  const base = OFFSETS[direction];
  const scale = distance === undefined ? 1 : distance / 28;
  const x = base.x * scale;
  const y = base.y * scale;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale: scaleFrom }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
