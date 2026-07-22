import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/CtaBand";
import {
  SERVICES,
  getService,
  generalServices,
  contractingServices,
  ADVANTAGES,
} from "@/lib/services";

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

  return (
    <>
      {/* Breadcrumb */}
      <Container className="flex gap-2 pt-8 text-[13.5px] text-muted">
        <Link href="/services" className="font-semibold text-navy">
          Services
        </Link>
        <span>/</span>
        <span>{service.category}</span>
        <span>/</span>
        <span className="font-semibold text-terracotta">{service.title}</span>
      </Container>

      {/* Hero */}
      <section className="bg-dots-cream">
        <Container className="grid items-center gap-16 pt-9 pb-15 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 text-xs font-extrabold tracking-[0.08em] text-terracotta uppercase">
              {service.category}
            </div>
            <h1 className="mb-5 font-serif text-[38px] leading-[1.15] font-semibold text-navy sm:text-[42px]">
              {service.title}
            </h1>
            <p className="mb-8 text-[17px] leading-relaxed text-muted">
              {service.blurb}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="navy">
                Request This Service
              </Button>
              <Button href="/services" variant="outline">
                All Services
              </Button>
            </div>
          </div>

          {service.gallery ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(11,46,79,0.18)]">
              <Image
                src={service.gallery[0].src}
                alt={service.gallery[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-4/3 items-center justify-center rounded-[20px] bg-cream-alt p-6 text-center">
              <span className="font-serif text-2xl font-semibold text-navy/70">
                {service.title}
              </span>
            </div>
          )}
        </Container>
      </section>

      {/* Project gallery */}
      {service.gallery && service.gallery.length > 1 && (
        <section>
          <Container className="py-18">
            <h2 className="mb-2 font-serif text-[28px] font-semibold text-navy">
              Project Gallery
            </h2>
            <p className="mb-8 text-[15px] text-muted">
              A look at recent {service.title.toLowerCase()} work from our teams
              on site.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {service.gallery.map((img) => (
                <figure
                  key={img.src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl border border-navy/10"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* What's included */}
      <section className="bg-cream-alt">
        <Container className="py-18">
          <h2 className="mb-8 font-serif text-[28px] font-semibold text-navy">
            What&rsquo;s Included
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.points.map((pt) => (
              <div
                key={pt}
                className="flex items-center gap-3 rounded-xl bg-white px-5.5 py-5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                <span className="text-[15px] font-semibold text-navy">{pt}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Helmont */}
      <section>
        <Container className="py-18">
          <h2 className="mb-8 font-serif text-[28px] font-semibold text-navy">
            Why Helmont Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <div key={adv.num}>
                <div className="mb-1 text-[15px] font-bold text-navy">
                  {adv.title}
                </div>
                <div className="text-[13.5px] leading-relaxed text-muted">
                  {adv.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-dots-navy">
          <Container className="py-16">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-white">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-white/20 bg-white/[0.08] px-5.5 py-3 text-[14.5px] font-semibold text-white hover:bg-white/15"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand title="Ready to request this service?" tone="plain" />
    </>
  );
}
