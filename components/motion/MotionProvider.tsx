"use client";

import { MotionConfig } from "motion/react";
import { type ReactNode } from "react";

/**
 * App-wide motion context. `reducedMotion="user"` makes every `motion` element
 * drop transform/layout animation for visitors who ask for reduced motion,
 * while still allowing gentle opacity fades — so no component needs its own
 * media-query handling.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
