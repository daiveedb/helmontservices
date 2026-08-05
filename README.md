# Helmont Services

Landing/marketing website for **Helmont Services** — a general services & contracting
business. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build (all pages statically generated)
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx              Root layout: fonts (Manrope + Newsreader), Header, Footer, metadata
  page.tsx                Home
  about/page.tsx          About
  services/page.tsx       Services overview
  services/[slug]/page.tsx  Service detail (statically generated per service)
  contact/page.tsx        Contact (info card + form)
  not-found.tsx           404, so every route opens on a photographic hero
  globals.css             Tailwind v4 theme tokens (brand palette, fonts, dot patterns)
components/
  Header.tsx              Fixed nav: transparent over the hero, cream pill once scrolled (client)
  Footer.tsx              Footer with nav, services, contact, and Partners
  HeroSlideshow.tsx       Home hero — full-bleed photo crossfade with slow push-in (client)
  PageHero.tsx            Full-bleed photographic banner for inner pages
  SplitFeature.tsx        Edge-to-edge half-photo section, optional inset photo
  StatsBand.tsx           Photo band with figures counted from the catalogue
  ProjectGallery.tsx      Mosaic of Helmont's own site photography
  ServiceCard.tsx         Photo-led service card; division shows in the chip colour
  Partners.tsx            Partners section (built on SplitFeature)
  ContactForm.tsx         Contact form with success state (client)
  CtaBand.tsx             Closing call-to-action band; pass `image` for the photo treatment
  ui/                     Container, Button, Eyebrow primitives
lib/
  services.ts             Service catalogue + values/advantages/segments/HSE; per-service photo + gallery
  media.ts                Page-level photography: hero slides, page banners, project gallery
  site.ts                 Contact details, email addresses, partners
public/images/            Project photos (HVAC + power-plant work) and licensed stock
public/images/CREDITS.md  Which photos are Helmont's own vs. stock, and photographer credits
```

## Photography

The site is image-led throughout: a full-bleed hero on every route, photo service
cards, split feature sections, and photographic stats/CTA bands.

- **Helmont's own project photos** are the only ones captioned as completed work —
  they're listed in `PROJECT_GALLERY` (`lib/media.ts`) and drive the "Recent Work"
  mosaic.
- **Stock photography** is illustrative; its alt text describes the scene and never
  claims the job as Helmont's. Credits are in `public/images/CREDITS.md`.
- Source files are capped at a 2600px long edge (JPEG q82). Keep new additions in
  that range — the untouched originals live on the `snapshot/landing-v1` branch.
- Scrims over photos compound, so keep each gradient light; heroes use
  `quality={85}` (allow-listed in `next.config.ts`) and `loading="eager"` +
  `fetchPriority="high"` rather than the deprecated `priority` prop.

## Content notes (client feedback implemented)

- Phone number `09051000307` replaced by `0704 822 0528`; the listed lines are
  `0701 063 3390` and `0704 822 0528` — edit in `lib/site.ts`.
- Four email addresses across the site (footer + contact page): `Info@`, `Admin@`,
  `Catherine@`, and `Helen@helmontservices.com` — edit in `lib/site.ts`.
- **HVAC Installation & Servicing** (`/services/hvac`) has a Project Gallery of HVAC photos
  displayed side by side.
- **Minor & Major Project Execution** (`/services/project-execution`) has a Project Gallery
  of power-plant project photos (including the Power Plant in Kaduna).
- **Partners**: Vicohez, linking to https://www.Vicohez.com (footer + home Partners section).
  Add more partners in `lib/site.ts`.

Every service now carries an `image` (used for its card and page banner) plus an
optional `gallery`. To swap or add photos, drop the file in `public/images/`, then
edit that service in `lib/services.ts` — and record the source in
`public/images/CREDITS.md` if it isn't Helmont's own.
