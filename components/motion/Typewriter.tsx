"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Types `text` out one character at a time behind a blinking caret.
 *
 * The characters that haven't been "typed" yet stay in the flow as transparent
 * text, so every glyph occupies its final position from the first frame: no
 * layout shift, and no re-centering wobble under a centred heading. The caret
 * is absolutely positioned inside that transparent run — it sits exactly at the
 * cursor without taking up any inline space of its own. An `sr-only` copy gives
 * screen readers and crawlers the real heading, and visitors who prefer reduced
 * motion simply get the finished text.
 */
export default function Typewriter({
  text,
  className = "",
  caretClassName = "bg-terracotta",
  speed = 30,
  startDelay = 220,
  /** Hide the caret once typing finishes (after a short beat). */
  hideCaretWhenDone = true,
}: {
  text: string;
  className?: string;
  caretClassName?: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Milliseconds to wait before the first character. */
  startDelay?: number;
  hideCaretWhenDone?: boolean;
}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [caretVisible, setCaretVisible] = useState(true);

  // Start over if the string itself changes (React's "adjust state on prop
  // change" pattern — cheaper than an effect and avoids a flash of stale text).
  const [typedText, setTypedText] = useState(text);
  if (typedText !== text) {
    setTypedText(text);
    setCount(0);
    setCaretVisible(true);
  }

  useEffect(() => {
    if (reduce) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, reduce]);

  const done = reduce || count >= text.length;

  useEffect(() => {
    if (!done || !hideCaretWhenDone || reduce) return;
    const timeout = setTimeout(() => setCaretVisible(false), 1400);
    return () => clearTimeout(timeout);
  }, [done, hideCaretWhenDone, reduce]);

  const showCaret = !reduce && caretVisible;

  const typed = reduce ? text : text.slice(0, count);
  const untyped = reduce ? "" : text.slice(count);

  return (
    <span className={className}>
      <span aria-hidden>{typed}</span>
      {/* Still-to-come characters: transparent, but holding their real slots. */}
      <span aria-hidden className="relative text-transparent">
        {showCaret && (
          <motion.span
            className={`absolute top-[0.1em] left-[0.04em] w-[0.06em] rounded-full ${caretClassName}`}
            style={{ height: "0.8em" }}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 0.9,
              times: [0, 0.5, 0.5, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
        {untyped}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
