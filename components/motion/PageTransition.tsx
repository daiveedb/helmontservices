"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { EASE_IN_OUT, EASE_OUT } from "./tokens";

/**
 * Cross-fades route changes. `mode="wait"` holds the outgoing page until its
 * exit finishes, so pages never overlap mid-navigation. `initial={false}` keeps
 * the very first paint static — the hero handles its own entrance.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.22, ease: EASE_IN_OUT } }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
