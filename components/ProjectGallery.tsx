import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PROJECT_GALLERY } from "@/lib/media";

/**
 * Mosaic of Helmont's own site photography. Stock imagery is deliberately kept
 * out of this section — everything shown here is work the company delivered.
 */
export default function ProjectGallery() {
  const [lead, ...rest] = PROJECT_GALLERY;

  return (
    <section className="bg-cream-alt">
      <Container className="py-20 lg:py-24">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="mb-4">Recent Work</Eyebrow>
            <h2 className="max-w-[560px] font-serif text-4xl leading-[1.1] font-semibold text-navy sm:text-[46px]">
              Projects delivered on site.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-relaxed text-muted">
            Power generation, HVAC installation, and technical support — captured
            on active Helmont projects.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3">
          <StaggerItem className="col-span-2 sm:row-span-2">
            <GalleryTile media={lead} sizes="(max-width: 640px) 100vw, 66vw" />
          </StaggerItem>
          {rest.map((media) => (
            <StaggerItem key={media.src} className="h-[160px] sm:h-full">
              <GalleryTile media={media} sizes="(max-width: 640px) 50vw, 33vw" />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function GalleryTile({
  media,
  sizes,
}: {
  media: { src: string; alt: string };
  sizes: string;
}) {
  return (
    <figure className="group relative h-full min-h-[200px] overflow-hidden rounded-2xl bg-navy">
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {media.alt}
      </figcaption>
    </figure>
  );
}
