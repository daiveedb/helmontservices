import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { VALUES, ORG_ROLES, HSE_ITEMS, CLIENT_SEGMENTS } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A dynamic, solutions-driven service partner delivering general services and contracting support with reliability, safety, and operational excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dots-cream">
        <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <Stagger stagger={0.12} amount={0}>
            <StaggerItem className="mb-4">
              <Eyebrow>About Us</Eyebrow>
            </StaggerItem>
            <StaggerItem className="mb-5.5">
              <h1 className="font-serif text-[40px] leading-[1.15] font-semibold text-navy sm:text-[46px]">
                <Typewriter text="A dynamic, solutions-driven service partner." />
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[17px] leading-relaxed text-muted">
                Helmont Services is committed to delivering high-quality general
                services and contracting support to individuals, businesses, and
                large-scale industrial clients. With a strong focus on
                reliability, safety, and operational excellence, we provide
                tailored solutions that meet the evolving needs of clients
                across multiple sectors.
              </p>
            </StaggerItem>
          </Stagger>
          <Reveal
            direction="left"
            delay={0.15}
            duration={0.8}
            scaleFrom={0.94}
            amount={0}
            className="relative aspect-4/5 overflow-hidden rounded-[20px]"
          >
            <Image
              src="/images/technicians-onsite.jpg"
              alt="Helmont team on an industrial site"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

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

      {/* Core values */}
      <section>
        <Container className="py-22">
          <Reveal>
            <h2 className="mb-11 text-center font-serif text-[32px] font-semibold text-navy">
              Core Values
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((val) => (
              <StaggerItem
                key={val.title}
                className="h-full rounded-2xl border border-navy/10 p-6.5"
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

      {/* Org & HSE */}
      <section className="bg-dots-navy">
        <Container className="grid gap-16 py-20 lg:grid-cols-2">
          <Reveal direction="right">
            <Eyebrow tone="peach" className="mb-4">
              Organization &amp; Personnel
            </Eyebrow>
            <p className="mb-6 text-base leading-relaxed text-white/80">
              We boast a multidisciplinary team ensuring efficient communication,
              execution, and customer satisfaction.
            </p>
            <ul className="flex flex-col gap-3">
              {ORG_ROLES.map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-3 text-[15px] font-medium text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <Eyebrow tone="peach" className="mb-4">
              Health, Safety &amp; Environment
            </Eyebrow>
            <p className="mb-6 text-base leading-relaxed text-white/80">
              Helmont Services integrates international HSE standards into its
              operations. We ensure:
            </p>
            <ul className="mb-6 flex flex-col gap-3">
              {HSE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-medium text-white"
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
      <section>
        <Container className="py-20 text-center">
          <Reveal>
            <Eyebrow className="mb-5">Client Segments Served</Eyebrow>
          </Reveal>
          <Stagger stagger={0.06} className="flex flex-wrap justify-center gap-3">
            {CLIENT_SEGMENTS.map((seg) => (
              <StaggerItem
                key={seg}
                className="rounded-full bg-cream-alt px-5 py-2.5 text-sm font-semibold text-navy"
              >
                {seg}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand
        title="Want to work with us?"
        buttonLabel="Get in Touch"
        tone="terracotta"
      />
    </>
  );
}
