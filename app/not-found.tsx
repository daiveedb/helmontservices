import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { PAGE_BANNERS } from "@/lib/media";

export default function NotFound() {
  return (
    <PageHero
      image={PAGE_BANNERS.notFound}
      eyebrow="404"
      title="We couldn't find that page."
      subtitle="The link may be out of date. Head back to the homepage, or browse the full range of general services and contracting work."
      size="tall"
    >
      <div className="flex flex-wrap gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/services" variant="outlineLight">
          Browse Services
        </Button>
      </div>
    </PageHero>
  );
}
