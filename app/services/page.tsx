import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
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
          <Eyebrow className="mb-4">Our Services</Eyebrow>
          <h1 className="mb-4 font-serif text-[40px] font-semibold text-navy sm:text-[44px]">
            General services and contracting, under one roof.
          </h1>
          <p className="mx-auto max-w-[640px] text-[17px] text-muted">
            Solutions-driven support for individuals, businesses, and large-scale
            industrial clients — delivered with reliability, safety, and
            operational excellence.
          </p>
        </Container>
      </section>

      {/* General services */}
      <section>
        <Container className="pt-14 pb-4">
          <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[28px] font-semibold text-navy">
              General Services
            </h2>
            <p className="text-[14.5px] text-muted">
              Facility, workplace, and operational support for everyday continuity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((s) => (
              <ServiceCard key={s.slug} service={s} showLearnMore />
            ))}
          </div>
        </Container>
      </section>

      {/* Contracting services */}
      <section>
        <Container className="pt-6 pb-22">
          <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[28px] font-semibold text-navy">
              Contracting Services
            </h2>
            <p className="text-[14.5px] text-muted">
              Civil, electrical, mechanical, and structural project execution.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <ServiceCard key={s.slug} service={s} showLearnMore />
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="bg-cream-alt">
        <Container className="py-18">
          <h2 className="mb-9 text-center font-serif text-[28px] font-semibold text-navy">
            Why Clients Choose Helmont
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <div key={adv.num} className="flex items-start gap-3.5">
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
              </div>
            ))}
          </div>
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
