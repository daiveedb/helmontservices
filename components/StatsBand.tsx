import Image from "next/image";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Media } from "@/lib/services";

/**
 * Photographic band with the numbers laid over it. Figures are counted from the
 * service catalogue rather than hard-coded, so they can't drift out of date.
 */
export default function StatsBand({
  image,
  stats,
}: {
  image: Media;
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/[0.72]" />
      </div>

      <Container>
        <Stagger className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="mb-3 h-px w-12 bg-terracotta" />
              <div className="font-serif text-[46px] leading-none font-semibold text-white sm:text-[56px]">
                {stat.value}
              </div>
              <div className="mt-3 text-[13px] leading-relaxed font-semibold tracking-[0.06em] text-white/65 uppercase">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
