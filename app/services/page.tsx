import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import StatsBand from "@/components/StatsBand";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  SERVICES,
  generalServices,
  contractingServices,
  ADVANTAGES,
  CLIENT_SEGMENTS,
} from "@/lib/services";
import { PAGE_BANNERS, FEATURE } from "@/lib/media";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "General services and contracting under one roof — facility support, civil, electrical, mechanical, HVAC, plumbing, and full project execution.",
};

const STATS = [
  { value: `${generalServices.length}`, label: "General service lines" },
  { value: `${contractingServices.length}`, label: "Contracting disciplines" },
  { value: `${CLIENT_SEGMENTS.length}`, label: "Client sectors served" },
  { value: `${SERVICES.length}`, label: "Ways we can help" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={PAGE_BANNERS.services}
        eyebrow="Our Services"
        title={
          <Typewriter
            text="General services and contracting, under one roof."
            caretClassName="bg-peach"
          />
        }
        subtitle="Solutions-driven support for individuals, businesses, and large-scale industrial clients — delivered with reliability, safety, and operational excellence."
      />

      {/* General services */}
      <section>
        <Container className="pt-18 pb-6">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-navy/15 pb-6">
            <div>
              <div className="mb-3 font-mono text-xs tracking-[0.14em] text-terracotta">
                01 — GENERAL SERVICES
              </div>
              <h2 className="font-serif text-[30px] font-semibold text-navy sm:text-[36px]">
                Everyday operational support
              </h2>
            </div>
            <p className="max-w-[320px] text-[14.5px] leading-relaxed text-muted">
              Facility, workplace, and operational support that keeps sites
              running without interruption.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} showLearnMore />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Contracting services */}
      <section>
        <Container className="pt-14 pb-20">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-navy/15 pb-6">
            <div>
              <div className="mb-3 font-mono text-xs tracking-[0.14em] text-terracotta">
                02 — CONTRACTING SERVICES
              </div>
              <h2 className="font-serif text-[30px] font-semibold text-navy sm:text-[36px]">
                Project delivery, end to end
              </h2>
            </div>
            <p className="max-w-[320px] text-[14.5px] leading-relaxed text-muted">
              Civil, electrical, mechanical, and structural execution from scope
              through handover.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} showLearnMore />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <StatsBand image={FEATURE.stats} stats={STATS} />

      {/* Why choose */}
      <section className="bg-cream-alt">
        <Container className="py-20">
          <Reveal>
            <h2 className="mb-10 text-center font-serif text-[30px] font-semibold text-navy sm:text-[36px]">
              Why Clients Choose Helmont
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <StaggerItem key={adv.num} className="flex items-start gap-3.5">
                <div className="font-serif text-xl font-semibold text-terracotta">
                  {adv.num}
                </div>
                <div>
                  <div className="text-[15px] font-bold text-navy">
                    {adv.title}
                  </div>
                  <div className="text-[13.5px] leading-relaxed text-muted">
                    {adv.body}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand
        title="Don't see exactly what you need?"
        subtitle="We scope bespoke packages across both divisions — tell us the requirement."
        buttonLabel="Talk to Us"
        image={FEATURE.cta}
      />
    </>
  );
}
