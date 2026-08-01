import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PARTNERS } from "@/lib/site";

export default function Partners() {
  return (
    <section className="py-22 px-6 sm:px-8">
      <Container className="!px-0">
        <Reveal className="mb-12 text-center">
          <Eyebrow className="mb-4">Partners</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-navy">
            Trusted collaborators.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
            We deliver alongside a network of specialist partners to bring the
            right expertise to every engagement.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.name} className="h-full">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 transition-all duration-200 hover:-translate-y-1.5 hover:border-terracotta hover:shadow-[0_16px_32px_rgba(11,46,79,0.14)]"
              >
                <div className="font-serif text-2xl font-semibold text-navy">
                  {partner.name}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {partner.blurb}
                </p>
                <div className="mt-5 text-sm font-bold text-terracotta">
                  Visit website ↗
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
