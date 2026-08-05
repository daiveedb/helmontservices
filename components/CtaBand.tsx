import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Media } from "@/lib/services";

/**
 * Reusable closing call-to-action band. Pass an `image` for the full-bleed
 * photographic treatment; the flat `tone` variants remain for lighter pages.
 */
export default function CtaBand({
  title,
  subtitle,
  buttonLabel = "Contact Us",
  href = "/contact",
  tone = "navy",
  image,
}: {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  tone?: "navy" | "terracotta" | "plain";
  image?: Media;
}) {
  const bg = image
    ? "bg-navy"
    : tone === "navy"
      ? "bg-dots-navy"
      : tone === "terracotta"
        ? "bg-terracotta"
        : "";
  const light = Boolean(image) || tone !== "plain";

  return (
    <section
      className={`relative isolate overflow-hidden px-6 text-center sm:px-8 ${bg} ${
        image ? "py-24 lg:py-28" : "py-18"
      }`}
    >
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
      )}

      <Container className="!px-0">
        <Stagger stagger={0.1} amount={0.4}>
          <StaggerItem>
            <h2
              className={`mx-auto max-w-[760px] font-serif font-semibold ${
                image
                  ? "text-[34px] leading-[1.12] sm:text-[46px]"
                  : "text-3xl sm:text-[34px]"
              } ${light ? "text-white" : "text-navy"}`}
            >
              {title}
            </h2>
          </StaggerItem>
          {subtitle && (
            <StaggerItem>
              <p
                className={`mx-auto mt-4 max-w-[540px] text-base ${
                  light ? "text-white/75" : "text-muted"
                }`}
              >
                {subtitle}
              </p>
            </StaggerItem>
          )}
          <StaggerItem className="mt-8">
            <Button
              href={href}
              variant={tone === "terracotta" && !image ? "white" : "primary"}
            >
              {buttonLabel}
            </Button>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
