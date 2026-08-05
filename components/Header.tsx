"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { generalServices, contractingServices } from "@/lib/services";
import { SITE } from "@/lib/site";
import { EASE_IN_OUT, EASE_OUT } from "@/components/motion/tokens";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Every page opens on a full-bleed photograph, so the bar rides transparent
  // over the image and only becomes a solid cream pill once it leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the dropdown open until a page is selected or the user clicks/taps
  // outside of it (also close on Escape for keyboard users).
  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-5 pt-4 pb-2">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
        className={`mx-auto flex max-w-[1180px] items-center justify-between gap-6 rounded-full border py-2.5 pr-3 pl-6 backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
          scrolled
            ? "border-navy/10 bg-cream/80 shadow-[0_10px_34px_rgba(11,46,79,0.10)]"
            : "border-white/20 bg-navy/35"
        }`}
      >
        <Link
          href="/"
          className={`font-serif text-2xl font-semibold tracking-[0.2px] transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  onFocus={() => setServicesOpen(true)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                    servicesOpen || isActive("/services")
                      ? scrolled
                        ? "bg-terracotta/10 text-terracotta"
                        : "bg-white/15 text-peach"
                      : scrolled
                        ? "text-navy hover:text-terracotta"
                        : "text-white hover:text-peach"
                  }`}
                >
                  Services
                  <span
                    className={`mt-0.5 text-[10px] transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      style={{ originY: 0 }}
                      className="absolute top-full left-1/2 mt-2 flex w-[560px] -translate-x-1/2 gap-9 rounded-xl border border-navy/10 bg-white p-6 shadow-[0_20px_40px_rgba(11,46,79,0.14)]"
                    >
                      <DropdownColumn
                        title="General Services"
                        items={generalServices}
                        onNavigate={() => setServicesOpen(false)}
                      />
                      <DropdownColumn
                        title="Contracting Services"
                        items={contractingServices}
                        onNavigate={() => setServicesOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                  isActive(item.href)
                    ? scrolled
                      ? "text-terracotta"
                      : "text-peach"
                    : scrolled
                      ? "text-navy hover:text-terracotta"
                      : "text-white hover:text-peach"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3.5">
          <Link
            href="/contact"
            className="hidden rounded-full bg-terracotta px-[22px] py-3 text-sm font-bold whitespace-nowrap text-white shadow-[0_8px_20px_rgba(193,80,46,0.28)] transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark lg:inline-block"
          >
            Request a Quote
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={`flex h-[42px] w-[42px] flex-col items-center justify-center gap-1 rounded-[10px] border transition-colors lg:hidden ${
              scrolled ? "border-navy/20" : "border-white/40"
            }`}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-0.5 w-[18px] transition-colors ${
                  scrolled ? "bg-navy" : "bg-white"
                }`}
              />
            ))}
          </button>
        </div>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.2, ease: EASE_IN_OUT } }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-navy"
          >
            <div className="flex items-center justify-between px-7 py-5">
              <span className="font-serif text-[22px] font-semibold text-white">
                {SITE.name}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-white/30 text-xl text-white"
              >
                ✕
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-1 px-7 pt-3 pb-16"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.08 },
                },
              }}
            >
              <MobileItem>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 py-4 text-xl font-semibold text-white"
                >
                  Home
                </Link>
              </MobileItem>
              <MobileItem>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 py-4 text-xl font-semibold text-white"
                >
                  About
                </Link>
              </MobileItem>
              <MobileItem>
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 text-xl font-semibold text-white"
                >
                  Services{" "}
                  <motion.span
                    className="text-sm"
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      key="mobile-services"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE_IN_OUT }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3.5 px-3 pt-2 pb-5">
                        <span className="text-[11px] font-extrabold tracking-[0.08em] text-terracotta uppercase">
                          General Services
                        </span>
                        {generalServices.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-base font-medium text-white/85"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <span className="mt-2 text-[11px] font-extrabold tracking-[0.08em] text-terracotta uppercase">
                          Contracting Services
                        </span>
                        {contractingServices.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-base font-medium text-white/85"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MobileItem>
              <MobileItem>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-xl font-semibold text-white"
                >
                  Contact
                </Link>
              </MobileItem>
              <MobileItem className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-terracotta px-6 py-4 text-center text-base font-bold text-white"
                >
                  Request a Quote
                </Link>
              </MobileItem>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** One row of the mobile menu — slides in as part of the overlay's cascade. */
function MobileItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: -18 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.35, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function DropdownColumn({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { slug: string; title: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="flex-1">
      <div className="mb-3 text-[11px] font-extrabold tracking-[0.08em] text-terracotta uppercase">
        {title}
      </div>
      {items.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          onClick={onNavigate}
          className="block border-b border-navy/[0.06] py-2 text-[14.5px] font-semibold text-navy hover:text-terracotta"
        >
          {s.title}
        </Link>
      ))}
    </div>
  );
}
