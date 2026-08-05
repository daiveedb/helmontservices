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
  globals.css             Tailwind v4 theme tokens (brand palette, fonts, dot patterns)
components/
  Header.tsx              Sticky nav with services dropdown + mobile menu (client)
  Footer.tsx              Footer with nav, services, contact, and Partners
  ServiceCard.tsx         Service card (light for General, dark navy for Contracting)
  Partners.tsx            Partners section
  ContactForm.tsx         Contact form with success state (client)
  CtaBand.tsx             Reusable closing call-to-action band
  ui/                     Container, Button, Eyebrow primitives
lib/
  services.ts             Service catalogue + values/advantages/segments/HSE; per-service photo galleries
  site.ts                 Contact details, email addresses, partners
public/images/            Project photos (HVAC + power-plant project work)
```

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

To add photos to another service, drop the image in `public/images/` and add a `gallery`
array to that service in `lib/services.ts`.
