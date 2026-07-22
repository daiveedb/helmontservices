import Link from "next/link";
import type { Service } from "@/lib/services";

/**
 * Service card. General Services render light (white); Contracting Services
 * render dark (navy), matching the brand's two-division treatment.
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
      className={`group flex flex-col gap-2.5 rounded-2xl p-[26px] transition-all duration-200 hover:-translate-y-1.5 ${
        isGeneral
          ? "border border-navy/10 bg-white hover:border-terracotta hover:shadow-[0_16px_32px_rgba(11,46,79,0.14)]"
          : "bg-navy hover:shadow-[0_16px_32px_rgba(11,46,79,0.28)]"
      }`}
    >
      <div
        className={`text-[11px] font-extrabold tracking-[0.06em] uppercase ${
          isGeneral ? "text-terracotta" : "text-peach"
        }`}
      >
        {isGeneral ? "General" : "Contracting"}
      </div>
      <div
        className={`text-[17px] font-bold ${isGeneral ? "text-navy" : "text-white"}`}
      >
        {service.title}
      </div>
      <div
        className={`flex-1 text-sm leading-relaxed ${
          isGeneral ? "text-muted" : "text-white/70"
        }`}
      >
        {service.blurb}
      </div>
      {showLearnMore && (
        <div
          className={`text-sm font-bold ${
            isGeneral ? "text-terracotta" : "text-peach"
          }`}
        >
          Learn more →
        </div>
      )}
    </Link>
  );
}
