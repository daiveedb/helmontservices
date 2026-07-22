import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import Partners from "@/components/Partners";
import CtaBand from "@/components/CtaBand";
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
          <div>
            <Eyebrow className="mb-4.5">General Services &amp; Contracting</Eyebrow>
            <h1 className="mb-6 font-serif text-[44px] leading-[1.08] font-semibold text-navy sm:text-[56px]">
              Dependable services, engineered for lasting results.
            </h1>
            <p className="mb-9 max-w-[520px] text-lg leading-relaxed text-muted">
              Helmont Services delivers high-quality general services and
              contracting support to individuals, businesses, and large-scale
              industrial clients — built on reliability, safety, and operational
              excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/services" variant="navy">
                Explore Services
              </Button>
              <Button href="/contact" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(11,46,79,0.18)]">
            <Image
              src="/images/hvac-rooftop-team.jpg"
              alt="Helmont field team servicing rooftop HVAC equipment on an active industrial site"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Client segments strip */}
      <section className="border-y border-navy/10 bg-cream-alt px-6 py-5.5 sm:px-8">
        <Container className="!px-0">
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-navy">
            {CLIENT_SEGMENTS.map((seg, i) => (
              <span key={seg} className="flex items-center gap-x-7">
                {i > 0 && <span className="text-terracotta">·</span>}
                {seg.replace(" Clients", "").replace(" Service Providers", "")}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-22">
          <div className="mb-13 flex flex-wrap items-end justify-between gap-10 border-b border-navy/15 pb-7">
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
          </div>

          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-navy/55">
            GENERAL SERVICES
          </div>
          <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mb-4.5 font-mono text-xs tracking-[0.12em] text-navy/55">
            CONTRACTING SERVICES
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contractingServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-cream-alt">
        <Container className="grid items-center gap-16 py-22 lg:grid-cols-2">
          <div className="relative order-2 aspect-5/4 overflow-hidden rounded-[20px] lg:order-1">
            <Image
              src="/images/technicians-onsite.jpg"
              alt="Helmont technicians reviewing work on an industrial rooftop"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow className="mb-4">Who We Are</Eyebrow>
            <h2 className="mb-4.5 font-serif text-4xl font-semibold text-navy">
              Built on integrity, safety, and technical competence.
            </h2>
            <p className="mb-7 text-base leading-relaxed text-muted">
              Our service philosophy combines hands-on industry expertise with
              modern tools and processes to ensure efficient, cost-effective
              results for every client.
            </p>
            <Link
              href="/about"
              className="inline-block border-b-2 border-terracotta pb-1 text-[15px] font-bold text-navy"
            >
              Learn about us →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Helmont */}
      <section>
        <Container className="py-22">
          <div className="mb-4 font-mono text-xs tracking-[0.14em] text-terracotta">
            02 — WHY HELMONT
          </div>
          <h2 className="mb-13 max-w-[620px] font-serif text-4xl leading-[1.08] font-semibold text-navy sm:text-[44px]">
            Reasons clients keep coming back.
          </h2>
          <div className="grid grid-cols-1 gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <div key={adv.num} className="border-t border-navy/15 pt-5">
                <div className="mb-3.5 font-serif text-5xl leading-none font-semibold text-navy">
                  {adv.num}
                </div>
                <div className="mb-1.5 text-base font-bold text-navy">
                  {adv.title}
                </div>
                <div className="text-sm leading-relaxed text-muted">
                  {adv.body}
                </div>
              </div>
            ))}
          </div>
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
