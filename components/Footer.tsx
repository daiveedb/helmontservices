import Link from "next/link";
import Container from "@/components/ui/Container";
import { generalServices } from "@/lib/services";
import { SITE, PARTNERS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark px-6 pt-16 pb-8 sm:px-8">
      <Container className="!px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div>
            <div className="mb-3.5 font-serif text-[22px] font-semibold text-white">
              {SITE.name}
            </div>
            <p className="max-w-[280px] text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          <div>
            <FooterHeading>General Services</FooterHeading>
            <div className="flex flex-col gap-2.5">
              {generalServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-white/60">
              <span>{SITE.address}</span>
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                  {p}
                </a>
              ))}
              {SITE.emails.map((e) => (
                <a
                  key={e.address}
                  href={`mailto:${e.address}`}
                  className="hover:text-white"
                >
                  {e.address}
                </a>
              ))}
            </div>
            <FooterHeading className="mt-6">Partners</FooterHeading>
            <div className="flex flex-col gap-2.5">
              {PARTNERS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white"
                >
                  {p.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[13px] text-white/40">
          © {year} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

function FooterHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-4 text-xs font-extrabold tracking-[0.08em] text-peach uppercase ${className}`}
    >
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-[14.5px] text-white/75 hover:text-white">
      {children}
    </Link>
  );
}
