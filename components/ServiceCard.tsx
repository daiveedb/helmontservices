import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

/**
 * Photo-led service card: the image carries the section, the title sits on it,
 * and the blurb reads underneath. The division (General / Contracting) shows in
 * the chip colour rather than a whole light-vs-dark card treatment.
 */
export default function ServiceCard({
  service,
  showLearnMore = false,
}: {
  service: Service;
  showLearnMore?: boolean;
}) {
  const isGeneral = service.category === "General Services";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta/40 hover:shadow-[0_22px_44px_rgba(11,46,79,0.18)]"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-[10px] font-extrabold tracking-[0.1em] uppercase ${
            isGeneral
              ? "bg-terracotta text-white"
              : "bg-white/95 text-navy"
          }`}
        >
          {isGeneral ? "General" : "Contracting"}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 p-5">
          <span className="font-serif text-[15px] leading-none font-semibold text-peach">
            {service.num}
          </span>
          <h3 className="font-serif text-[21px] leading-[1.2] font-semibold text-white">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {service.blurb}
        </p>
        {showLearnMore && (
          <span className="text-sm font-bold text-terracotta">
            Learn more{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </Link>
  );
}
