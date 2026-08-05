import Link from "next/link";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ServiceCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import SplitFeature from "@/components/SplitFeature";
import StatsBand from "@/components/StatsBand";
import ProjectGallery from "@/components/ProjectGallery";
import Partners from "@/components/Partners";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  SERVICES,
  generalServices,
  contractingServices,
  ADVANTAGES,
  CLIENT_SEGMENTS,
} from "@/lib/services";
import { HERO_SLIDES, FEATURE, PROJECT_GALLERY } from "@/lib/media";

const STATS = [
  { value: `${SERVICES.length}`, label: "Service lines" },
  { value: "02", label: "Divisions under one roof" },
  { value: `${CLIENT_SEGMENTS.length}`, label: "Client sectors served" },
  { value: "Zero", label: "Harm policy on every site" },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow
        slides={HERO_SLIDES}
        eyebrow="General Services & Contracting"
        headline="Dependable services, engineered for lasting results."
        body="Helmont Services delivers high-quality general services and contracting support to individuals, businesses, and large-scale industrial clients — built on reliability, safety, and operational excellence."
      />

      {/* Client segments strip */}
      <section className="border-b border-navy/10 bg-cream-alt px-6 py-5.5 sm:px-8">
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
        <Container className="py-20 lg:py-24">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-10 border-b border-navy/15 pb-7">
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
            className="mb-5 font-mono text-xs tracking-[0.12em] text-navy/55"
          >
            GENERAL SERVICES
          </Reveal>
          <Stagger className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal
            direction="none"
            className="mb-5 font-mono text-xs tracking-[0.12em] text-navy/55"
          >
            CONTRACTING SERVICES
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Who we are */}
      <SplitFeature
        image={FEATURE.team}
        inset={PROJECT_GALLERY[3]}
        eyebrow="Who We Are"
        title="Built on integrity, safety, and technical competence."
        tone="cream"
      >
        <p>
          Our service philosophy combines hands-on industry expertise with modern
          tools and processes to ensure efficient, cost-effective results for
          every client.
        </p>
        <p>
          Certified personnel, structured project management, and a strong vendor
          network mean the same standard of delivery whether we are maintaining a
          facility or executing a major build.
        </p>
        <Link
          href="/about"
          className="inline-block self-start border-b-2 border-terracotta pb-1 text-[15px] font-bold text-navy"
        >
          Learn about us →
        </Link>
      </SplitFeature>

      <StatsBand image={FEATURE.stats} stats={STATS} />

      {/* Recent work */}
      <ProjectGallery />

      {/* Why Helmont */}
      <section>
        <Container className="py-20 lg:py-24">
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

      <Partners />

      <CtaBand
        title="Let's build something reliable together."
        subtitle="Reach out for a quote, a site visit, or to discuss your project scope."
        image={FEATURE.cta}
      />
    </>
  );
}
