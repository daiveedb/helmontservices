import Image from "next/image";
import { type ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import type { Media } from "@/lib/services";

/**
 * Edge-to-edge half-photo section: the image runs flush to the viewport edge
 * while the copy stays aligned to the page's text column. `reverse` puts the
 * photograph on the right.
 */
export default function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
  tone = "light",
  inset,
}: {
  image: Media;
  eyebrow: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  tone?: "light" | "navy" | "cream";
  /** Small secondary photo overlapping the main one. */
  inset?: Media;
}) {
  const bg =
    tone === "navy" ? "bg-navy" : tone === "cream" ? "bg-cream-alt" : "bg-cream";
  const dark = tone === "navy";

  return (
    <section className={`${bg} overflow-hidden`}>
      <div className="grid lg:grid-cols-2">
        <Reveal
          direction={reverse ? "left" : "right"}
          duration={0.8}
          scaleFrom={0.97}
          className={`relative min-h-[340px] sm:min-h-[440px] lg:min-h-[600px] ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {inset && (
            <div className="absolute right-6 bottom-6 hidden h-[190px] w-[260px] overflow-hidden rounded-xl border-4 border-cream shadow-[0_18px_40px_rgba(11,46,79,0.3)] sm:block">
              <Image
                src={inset.src}
                alt={inset.alt}
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          )}
        </Reveal>

        <div
          className={`flex items-center px-6 py-16 sm:px-10 lg:py-24 ${
            reverse ? "lg:order-1 lg:justify-end lg:pr-16" : "lg:pl-16"
          }`}
        >
          <Reveal
            direction={reverse ? "right" : "left"}
            delay={0.1}
            className="max-w-[560px]"
          >
            <Eyebrow tone={dark ? "peach" : "terracotta"} className="mb-4">
              {eyebrow}
            </Eyebrow>
            <h2
              className={`mb-5 font-serif text-[32px] leading-[1.12] font-semibold sm:text-[42px] ${
                dark ? "text-white" : "text-navy"
              }`}
            >
              {title}
            </h2>
            <div
              className={`flex flex-col gap-5 text-base leading-relaxed ${
                dark ? "text-white/75" : "text-muted"
              }`}
            >
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
