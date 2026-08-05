"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Typewriter from "@/components/motion/Typewriter";
import { EASE_OUT } from "@/components/motion/tokens";
import type { Media } from "@/lib/services";

const HOLD_MS = 6500;

/**
 * Full-bleed home hero: large photography crossfading behind the headline, with
 * a slow push-in on each frame. The first slide is loaded eagerly as the LCP
 * image; the rest stay lazy until they're needed.
 *
 * Visitors who prefer reduced motion get a single still frame — no crossfade,
 * no push-in, no timer.
 */
export default function HeroSlideshow({
  slides,
  eyebrow,
  headline,
  body,
}: {
  slides: Media[];
  eyebrow: string;
  headline: string;
  body: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      HOLD_MS,
    );
    return () => clearInterval(timer);
  }, [reduce, slides.length]);

  const active = reduce ? slides[0] : slides[index];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-2rem)] flex-col justify-end overflow-hidden bg-navy pt-28 pb-12 sm:min-h-[92svh] sm:pt-36 lg:pb-20">
      {/* Photography */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={active.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduce ? 1 : 1.06 }}
              animate={{ scale: reduce ? 1 : 1.14 }}
              transition={{ duration: 12, ease: "linear" }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                quality={85}
                loading={active.src === slides[0].src ? "eager" : "lazy"}
                fetchPriority={active.src === slides[0].src ? "high" : "auto"}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Scrim: the two gradients compound, so each stays light. Dark enough
            at the bottom-left to carry white type, open elsewhere so the
            photograph still reads as the subject. */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/15 to-transparent" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
          }}
          className="max-w-[820px]"
        >
          <Item className="mb-5">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              {eyebrow}
            </span>
          </Item>
          <Item className="mb-6">
            <h1 className="font-serif text-[40px] leading-[1.04] font-semibold text-white sm:text-[62px] lg:text-[72px]">
              <Typewriter
                text={headline}
                speed={26}
                startDelay={420}
                caretClassName="bg-peach"
              />
            </h1>
          </Item>
          <Item className="mb-9">
            <p className="max-w-[560px] text-[17px] leading-relaxed text-white/80 sm:text-lg">
              {body}
            </p>
          </Item>
          <Item>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/services">Explore Services</Button>
              <Button href="/contact" variant="outlineLight">
                Request a Quote
              </Button>
            </div>
          </Item>
        </motion.div>

        {/* Slide controls */}
        {!reduce && slides.length > 1 && (
          <div className="mt-8 flex items-center gap-3 lg:mt-12">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show hero image ${i + 1} of ${slides.length}`}
                aria-current={i === index}
                className="group py-3"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-14 bg-terracotta"
                      : "w-7 bg-white/35 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function Item({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
