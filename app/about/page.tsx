import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import StatsBand from "@/components/StatsBand";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { VALUES, ORG_ROLES, HSE_ITEMS, CLIENT_SEGMENTS } from "@/lib/services";
import { PAGE_BANNERS, FEATURE, PROJECT_GALLERY } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A dynamic, solutions-driven service partner delivering general services and contracting support with reliability, safety, and operational excellence.",
};

const STATS = [
  { value: `${ORG_ROLES.length}`, label: "Personnel disciplines in-house" },
  { value: `${VALUES.length}`, label: "Core values guiding delivery" },
  { value: `${CLIENT_SEGMENTS.length}`, label: "Client sectors served" },
  { value: "Zero", label: "Harm policy on every project" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={PAGE_BANNERS.about}
        eyebrow="About Us"
        title={
          <Typewriter
            text="A dynamic, solutions-driven service partner."
            caretClassName="bg-peach"
          />
        }
        subtitle="Helmont Services is committed to delivering high-quality general services and contracting support to individuals, businesses, and large-scale industrial clients — with a strong focus on reliability, safety, and operational excellence."
        size="tall"
      />

      {/* Mission / Vision */}
      <section className="bg-cream-alt">
        <Container className="grid gap-8 py-18 lg:grid-cols-2">
          <Reveal direction="right" className="rounded-[18px] bg-dots-navy p-10">
            <Eyebrow tone="peach" className="mb-4">
              Mission
            </Eyebrow>
            <p className="font-serif text-[22px] leading-[1.55] text-white">
              Our service philosophy is built on professionalism, integrity,
              technical competence, and timely delivery — combining hands-on
              industry expertise with modern tools and processes for efficient,
              cost-effective results.
            </p>
          </Reveal>
          <Reveal
            direction="left"
            delay={0.1}
            className="rounded-[18px] border border-navy/10 bg-white p-10"
          >
            <Eyebrow className="mb-4">Vision</Eyebrow>
            <p className="font-serif text-[22px] leading-[1.55] text-navy">
              To become a leading provider of general services and contracting
              solutions, recognized for excellence, customer satisfaction, and
              innovative operational delivery.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Our people */}
      <SplitFeature
        image={FEATURE.team}
        inset={PROJECT_GALLERY[2]}
        eyebrow="Organization & Personnel"
        title="A multidisciplinary team on every engagement."
        reverse
      >
        <p>
          We boast a multidisciplinary team ensuring efficient communication,
          execution, and customer satisfaction across both divisions.
        </p>
        <ul className="flex flex-col gap-3">
          {ORG_ROLES.map((role) => (
            <li
              key={role}
              className="flex items-center gap-3 text-[15px] font-medium text-navy"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
              {role}
            </li>
          ))}
        </ul>
      </SplitFeature>

      <StatsBand image={FEATURE.stats} stats={STATS} />

      {/* Core values */}
      <section>
        <Container className="py-20 lg:py-24">
          <Reveal className="mb-11 text-center">
            <Eyebrow className="mb-4">What Guides Us</Eyebrow>
            <h2 className="font-serif text-[34px] font-semibold text-navy sm:text-[40px]">
              Core Values
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((val) => (
              <StaggerItem
                key={val.title}
                className="h-full rounded-2xl border border-navy/10 bg-white p-6.5"
              >
                <div className="mb-2 text-[17px] font-bold text-navy">
                  {val.title}
                </div>
                <div className="text-sm leading-relaxed text-muted">
                  {val.body}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* HSE — photographic */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src={FEATURE.hse.src}
            alt={FEATURE.hse.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/88" />
        </div>
        <Container className="grid gap-14 py-20 lg:grid-cols-2 lg:py-24">
          <Reveal direction="right">
            <Eyebrow tone="peach" className="mb-4">
              Health, Safety &amp; Environment
            </Eyebrow>
            <h2 className="mb-5 font-serif text-[32px] leading-[1.14] font-semibold text-white sm:text-[40px]">
              Safety is the standard, not the exception.
            </h2>
            <p className="text-base leading-relaxed text-white/75">
              Helmont Services integrates international HSE standards into its
              operations — from the first risk assessment through to handover.
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <ul className="mb-8 flex flex-col gap-4">
              {HSE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 pb-4 text-[15px] font-medium text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-[14px] border-[1.5px] border-terracotta px-5.5 py-4.5">
              <p className="font-serif text-[17px] text-white italic">
                Our &ldquo;Zero Harm Policy&rdquo; guides all project execution.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Client segments */}
      <section className="bg-cream-alt">
        <Container className="py-20 text-center">
          <Reveal>
            <Eyebrow className="mb-5">Client Segments Served</Eyebrow>
          </Reveal>
          <Stagger stagger={0.06} className="flex flex-wrap justify-center gap-3">
            {CLIENT_SEGMENTS.map((seg) => (
              <StaggerItem
                key={seg}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(11,46,79,0.06)]"
              >
                {seg}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand
        title="Want to work with us?"
        subtitle="Tell us about your site, your schedule, and the outcome you need."
        buttonLabel="Get in Touch"
        image={PAGE_BANNERS.contact}
      />
    </>
  );
}
