import type { Transition } from "motion/react";

/**
 * Shared motion tokens so every animation across the site reads as one system.
 * Entrances ease out generously; exits are quick so navigation never feels slow.
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const ENTER: Transition = { duration: 0.6, ease: EASE_OUT };
export const EXIT: Transition = { duration: 0.22, ease: EASE_IN_OUT };
