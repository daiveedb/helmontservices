import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import Partners from "@/components/Partners";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  generalServices,
  contractingServices,
  ADVANTAGES,
  CLIENT_SEGMENTS,
} from "@/lib/services";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dots-cream">
        <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-22">
          <Stagger stagger={0.14} amount={0}>
            <StaggerItem className="mb-4.5">
              <Eyebrow>General Services &amp; Contracting</Eyebrow>
            </StaggerItem>
            <StaggerItem className="mb-6">
              <h1 className="font-serif text-[44px] leading-[1.08] font-semibold text-navy sm:text-[56px]">
                <Typewriter
                  text="Dependable services, engineered for lasting results."
                  speed={26}
                  startDelay={420}
                />
              </h1>
            </StaggerItem>
            <StaggerItem className="mb-9">
              <p className="max-w-[520px] text-lg leading-relaxed text-muted">
                Helmont Services delivers high-quality general services and
                contracting support to individuals, businesses, and large-scale
                industrial clients — built on reliability, safety, and
                operational excellence.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" variant="navy">
                  Explore Services
                </Button>
                <Button href="/contact" variant="outline">
                  Request a Quote
                </Button>
              </div>
            </StaggerItem>
          </Stagger>
          <Reveal
            direction="left"
            delay={0.15}
            duration={0.8}
            scaleFrom={0.94}
            amount={0}
            className="relative aspect-4/5 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(11,46,79,0.18)]"
          >
            <Image
              src="/images/power-plant-kaduna.jpg"
              alt="Gas turbine generator package on an active Helmont power plant site"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      {/* Client segments strip */}
      <section className="border-y border-navy/10 bg-cream-alt px-6 py-5.5 sm:px-8">
        <Container className="!px-0">
          <Stagger
            stagger={0.07}
            className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-navy"
          >
            {CLIENT_SEGMENTS.map((seg, i) => (
              <StaggerItem key={seg}>
                <span className="flex items-center gap-x-7">
                  {i > 0 && <span className="text-terracotta">·</span>}
                  {seg.replace(" Clients", "").replace(" Service Providers", "")}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-22">
          <Reveal className="mb-13 flex flex-wrap items-end justify-between gap-10 border-b border-navy/15 pb-7">
            <div>
              <div className="mb-4 font-mono text-xs tracking-[0.14em] text-terracotta">
                01 — WHAT WE DO
              </div>
              <h2 className="max-w-[620px] font-serif text-4xl leading-[1.08] font-semibold text-navy sm:text-[46px]">
                Two divisions, one standard of delivery.
              </h2>
            </div>
            <p className="max-w-[300px] text-[15px] leading-relaxed text-muted">
              From everyday facility support to full-scale contracting projects,
              tailored to the needs of every client we serve.
            </p>
          </Reveal>

          <Reveal
            direction="none"
            className="mb-4.5 font-mono text-xs tracking-[0.12em] text-navy/55"
          >
            GENERAL SERVICES
          </Reveal>
          <Stagger className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal
            direction="none"
            className="mb-4.5 font-mono text-xs tracking-[0.12em] text-navy/55"
          >
            CONTRACTING SERVICES
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-cream-alt">
        <Container className="grid items-center gap-16 py-22 lg:grid-cols-2">
          <Reveal
            direction="right"
            scaleFrom={0.95}
            duration={0.75}
            className="relative order-2 aspect-5/4 overflow-hidden rounded-[20px] lg:order-1"
          >
            <Image
              src="/images/technicians-onsite.jpg"
              alt="Helmont technicians reviewing work on an industrial rooftop"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Stagger stagger={0.1} className="order-1 lg:order-2">
            <StaggerItem className="mb-4">
              <Eyebrow>Who We Are</Eyebrow>
            </StaggerItem>
            <StaggerItem className="mb-4.5">
              <h2 className="font-serif text-4xl font-semibold text-navy">
                Built on integrity, safety, and technical competence.
              </h2>
            </StaggerItem>
            <StaggerItem className="mb-7">
              <p className="text-base leading-relaxed text-muted">
                Our service philosophy combines hands-on industry expertise with
                modern tools and processes to ensure efficient, cost-effective
                results for every client.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/about"
                className="inline-block border-b-2 border-terracotta pb-1 text-[15px] font-bold text-navy"
              >
                Learn about us →
              </Link>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Why Helmont */}
      <section>
        <Container className="py-22">
          <Reveal>
            <div className="mb-4 font-mono text-xs tracking-[0.14em] text-terracotta">
              02 — WHY HELMONT
            </div>
            <h2 className="mb-13 max-w-[620px] font-serif text-4xl leading-[1.08] font-semibold text-navy sm:text-[44px]">
              Reasons clients keep coming back.
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <StaggerItem key={adv.num} className="border-t border-navy/15 pt-5">
                <div className="mb-3.5 font-serif text-5xl leading-none font-semibold text-navy">
                  {adv.num}
                </div>
                <div className="mb-1.5 text-base font-bold text-navy">
                  {adv.title}
                </div>
                <div className="text-sm leading-relaxed text-muted">
                  {adv.body}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Partners */}
      <Partners />

      {/* CTA */}
      <CtaBand
        title="Let's build something reliable together."
        subtitle="Reach out for a quote, a site visit, or to discuss your project scope."
      />
    </>
  );
}
