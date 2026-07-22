import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "navy" | "outline" | "outlineLight" | "white";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-bold transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-white shadow-[0_8px_20px_rgba(193,80,46,0.28)] hover:bg-terracotta-dark hover:-translate-y-0.5",
  navy: "bg-navy text-white hover:-translate-y-0.5",
  outline: "border-[1.5px] border-navy bg-white text-navy hover:bg-navy hover:text-white",
  outlineLight:
    "border-[1.5px] border-white/50 bg-transparent text-white hover:bg-white/10",
  white: "bg-white text-terracotta hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
