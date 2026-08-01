import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/** Reusable closing call-to-action band. */
export default function CtaBand({
  title,
  subtitle,
  buttonLabel = "Contact Us",
  href = "/contact",
  tone = "navy",
}: {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  tone?: "navy" | "terracotta" | "plain";
}) {
  const bg =
    tone === "navy"
      ? "bg-dots-navy"
      : tone === "terracotta"
        ? "bg-terracotta"
        : "";
  const light = tone !== "plain";

  return (
    <section className={`${bg} px-6 py-18 text-center sm:px-8`}>
      <Container className="!px-0">
        <Stagger stagger={0.1} amount={0.4}>
          <StaggerItem>
            <h2
              className={`font-serif text-3xl font-semibold sm:text-[34px] ${
                light ? "text-white" : "text-navy"
              }`}
            >
              {title}
            </h2>
          </StaggerItem>
          {subtitle && (
            <StaggerItem>
              <p
                className={`mx-auto mt-4 max-w-[540px] text-base ${
                  light ? "text-white/70" : "text-muted"
                }`}
              >
                {subtitle}
              </p>
            </StaggerItem>
          )}
          <StaggerItem className="mt-8">
            <Button
              href={href}
              variant={tone === "terracotta" ? "white" : "primary"}
            >
              {buttonLabel}
            </Button>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
