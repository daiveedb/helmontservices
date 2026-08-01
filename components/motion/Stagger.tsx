"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { EASE_OUT } from "./tokens";

const ITEM: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

/**
 * Container that cascades its `<StaggerItem>` children in as it enters view.
 * Render it *as* the grid/flex row so items stay direct layout children.
 */
export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds between each child. */
  stagger?: number;
  /** Seconds before the first child starts. */
  delay?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={ITEM}>
      {children}
    </motion.div>
  );
}

export default Stagger;
