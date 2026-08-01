import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { generalServices, contractingServices, ADVANTAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "General services and contracting under one roof — facility support, civil, electrical, mechanical, HVAC, plumbing, and full project execution.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dots-cream">
        <Container className="py-20 text-center">
          <Stagger stagger={0.12} amount={0}>
            <StaggerItem className="mb-4">
              <Eyebrow>Our Services</Eyebrow>
            </StaggerItem>
            <StaggerItem className="mb-4">
              <h1 className="font-serif text-[40px] font-semibold text-navy sm:text-[44px]">
                <Typewriter text="General services and contracting, under one roof." />
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto max-w-[640px] text-[17px] text-muted">
                Solutions-driven support for individuals, businesses, and
                large-scale industrial clients — delivered with reliability,
                safety, and operational excellence.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* General services */}
      <section>
        <Container className="pt-14 pb-4">
          <Reveal className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[28px] font-semibold text-navy">
              General Services
            </h2>
            <p className="text-[14.5px] text-muted">
              Facility, workplace, and operational support for everyday continuity.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        <Container className="pt-6 pb-22">
          <Reveal className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[28px] font-semibold text-navy">
              Contracting Services
            </h2>
            <p className="text-[14.5px] text-muted">
              Civil, electrical, mechanical, and structural project execution.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} showLearnMore />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Why choose */}
      <section className="bg-cream-alt">
        <Container className="py-18">
          <Reveal>
            <h2 className="mb-9 text-center font-serif text-[28px] font-semibold text-navy">
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
        buttonLabel="Talk to Us"
        tone="plain"
      />
    </>
  );
}
