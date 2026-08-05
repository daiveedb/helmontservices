import Image from "next/image";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Media } from "@/lib/services";

/**
 * Full-bleed photographic banner used at the top of every inner page. It sits
 * beneath the fixed header, so the top padding clears the floating nav pill.
 */
export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  above,
  children,
  size = "default",
}: {
  image: Media;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  /** Rendered above the eyebrow — breadcrumbs, for example. */
  above?: ReactNode;
  /** Rendered under the subtitle — buttons, for example. */
  children?: ReactNode;
  size?: "default" | "tall";
}) {
  return (
    <section
      className={`relative isolate flex flex-col justify-end overflow-hidden bg-navy ${
        size === "tall"
          ? "min-h-[72svh] pt-40 pb-16"
          : "min-h-[58svh] pt-36 pb-14"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          quality={85}
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
        {/* Compounding gradients — keep each light so the photo survives. */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent" />
      </div>

      <Container>
        <Stagger stagger={0.1} amount={0} className="max-w-[760px]">
          {above && <StaggerItem className="mb-5">{above}</StaggerItem>}
          <StaggerItem className="mb-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              {eyebrow}
            </span>
          </StaggerItem>
          <StaggerItem className={subtitle ? "mb-5" : ""}>
            <h1 className="font-serif text-[38px] leading-[1.06] font-semibold text-white sm:text-[52px]">
              {title}
            </h1>
          </StaggerItem>
          {subtitle && (
            <StaggerItem>
              <p className="max-w-[600px] text-[17px] leading-relaxed text-white/80">
                {subtitle}
              </p>
            </StaggerItem>
          )}
          {children && <StaggerItem className="mt-8">{children}</StaggerItem>}
        </Stagger>
      </Container>
    </section>
  );
}
