import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/motion/Typewriter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  SERVICES,
  getService,
  generalServices,
  contractingServices,
  ADVANTAGES,
} from "@/lib/services";
import { FEATURE } from "@/lib/media";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.blurb };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = (
    service.category === "General Services"
      ? generalServices
      : contractingServices
  )
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // The banner already shows the lead photo — don't repeat it in the gallery.
  const gallery = (service.gallery ?? []).filter(
    (img) => img.src !== service.image.src,
  );

  return (
    <>
      <PageHero
        image={service.image}
        eyebrow={service.category}
        title={<Typewriter text={service.title} speed={45} caretClassName="bg-peach" />}
        subtitle={service.blurb}
        size="tall"
        above={
          <nav className="flex flex-wrap items-center gap-2 text-[13.5px] text-white/70">
            <Link href="/services" className="font-semibold text-white hover:text-peach">
              Services
            </Link>
            <span>/</span>
            <span>{service.category}</span>
            <span>/</span>
            <span className="font-semibold text-peach">{service.title}</span>
          </nav>
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact">Request This Service</Button>
          <Button href="/services" variant="outlineLight">
            All Services
          </Button>
        </div>
      </PageHero>

      {/* What's included — checklist beside a supporting photo */}
      <section className="bg-cream-alt">
        <Container className="grid items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal
            direction="right"
            scaleFrom={0.97}
            duration={0.75}
            className="relative aspect-4/3 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(11,46,79,0.18)]"
          >
            <Image
              src={(gallery[0] ?? service.image).src}
              alt={(gallery[0] ?? service.image).alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Scope</Eyebrow>
              <h2 className="mb-8 font-serif text-[30px] leading-[1.15] font-semibold text-navy sm:text-[38px]">
                What&rsquo;s Included
              </h2>
            </Reveal>
            <Stagger stagger={0.07} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.points.map((pt) => (
                <StaggerItem
                  key={pt}
                  className="flex h-full items-center gap-3 rounded-xl bg-white px-5.5 py-5 shadow-[0_2px_10px_rgba(11,46,79,0.05)]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                  <span className="text-[15px] font-semibold text-navy">
                    {pt}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section>
          <Container className="py-20">
            <Reveal className="mb-9">
              <Eyebrow className="mb-4">In the Field</Eyebrow>
              <h2 className="font-serif text-[30px] font-semibold text-navy sm:text-[38px]">
                {service.title}
              </h2>
            </Reveal>
            <Stagger
              stagger={0.1}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {gallery.map((img) => (
                <StaggerItem key={img.src}>
                  <figure className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-navy">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      {/* Why Helmont */}
      <section className="bg-cream-alt">
        <Container className="py-20">
          <Reveal>
            <h2 className="mb-10 font-serif text-[30px] font-semibold text-navy sm:text-[36px]">
              Why Helmont Services
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <StaggerItem key={adv.num} className="border-t border-navy/15 pt-4">
                <div className="mb-1 text-[15px] font-bold text-navy">
                  {adv.title}
                </div>
                <div className="text-[13.5px] leading-relaxed text-muted">
                  {adv.body}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section>
          <Container className="py-20">
            <Reveal className="mb-9">
              <Eyebrow className="mb-4">Related</Eyebrow>
              <h2 className="font-serif text-[28px] font-semibold text-navy sm:text-[34px]">
                More {service.category.toLowerCase()}
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <StaggerItem key={s.slug} className="h-full">
                  <ServiceCard service={s} showLearnMore />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CtaBand
        title="Ready to request this service?"
        subtitle="Send us the scope and we'll come back with a clear, costed proposal."
        image={FEATURE.cta}
      />
    </>
  );
}
