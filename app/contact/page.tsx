import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Helmont Services for a quote, a site visit, or to discuss your project scope.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dots-cream">
        <Container className="pt-20 pb-5 text-center">
          <Eyebrow className="mb-4">Contact</Eyebrow>
          <h1 className="mb-4 font-serif text-[40px] font-semibold text-navy sm:text-[44px]">
            Let&rsquo;s talk about your project.
          </h1>
          <p className="mx-auto max-w-[560px] text-[17px] text-muted">
            Reach out for a quote, a site visit, or to discuss requirements — our
            team responds quickly.
          </p>
        </Container>
      </section>

      {/* Details + form */}
      <section>
        <Container className="grid items-start gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Info card */}
          <div className="flex flex-col gap-7 rounded-[20px] bg-dots-navy p-11">
            <div>
              <Eyebrow tone="peach" className="mb-2 text-xs">
                Address
              </Eyebrow>
              <p className="text-base leading-relaxed text-white">
                {SITE.address}
              </p>
            </div>
            <div>
              <Eyebrow tone="peach" className="mb-2 text-xs">
                Phone
              </Eyebrow>
              {SITE.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="block text-base leading-relaxed text-white hover:text-peach"
                >
                  {p}
                </a>
              ))}
            </div>
            <div>
              <Eyebrow tone="peach" className="mb-2 text-xs">
                Email
              </Eyebrow>
              <div className="flex flex-col gap-1.5">
                {SITE.emails.map((e) => (
                  <a
                    key={e.address}
                    href={`mailto:${e.address}`}
                    className="text-base leading-relaxed text-white hover:text-peach"
                  >
                    {e.address}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-white/15 pt-6">
              <p className="text-sm leading-relaxed text-white/70">
                General Services &amp; Contracting — serving residential,
                corporate, and industrial clients across sectors.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
