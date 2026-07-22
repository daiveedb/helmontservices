import { type ReactNode } from "react";

/** Small uppercase kicker/label used above headings. */
export default function Eyebrow({
  children,
  tone = "terracotta",
  className = "",
}: {
  children: ReactNode;
  tone?: "terracotta" | "peach";
  className?: string;
}) {
  const color = tone === "peach" ? "text-peach" : "text-terracotta";
  return (
    <div
      className={`text-[13px] font-extrabold uppercase tracking-[0.1em] ${color} ${className}`}
    >
      {children}
    </div>
  );
}
