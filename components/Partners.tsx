import SplitFeature from "@/components/SplitFeature";
import { PARTNERS } from "@/lib/site";
import { FEATURE } from "@/lib/media";

export default function Partners() {
  return (
    <SplitFeature
      image={FEATURE.partners}
      eyebrow="Partners"
      title="Trusted collaborators."
      reverse
      tone="cream"
    >
      <p>
        We deliver alongside a network of specialist partners to bring the right
        expertise to every engagement.
      </p>
      <div className="flex flex-col gap-4">
        {PARTNERS.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-terracotta hover:shadow-[0_16px_32px_rgba(11,46,79,0.14)]"
          >
            <div className="font-serif text-2xl font-semibold text-navy">
              {partner.name}
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {partner.blurb}
            </p>
            <div className="mt-4 text-sm font-bold text-terracotta">
              Visit website{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </SplitFeature>
  );
}
