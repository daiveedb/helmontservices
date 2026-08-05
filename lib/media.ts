// Page-level photography. Service photos live with the catalogue in
// `lib/services.ts`; everything here is layout art — hero slides, page banners
// and the project gallery.
//
// Stock imagery is described literally in its alt text. Only the photos under
// `PROJECT_GALLERY` are Helmont's own work, so those are the only ones captioned
// as such. See public/images/CREDITS.md.

import type { Media } from "@/lib/services";

/** Home hero — crossfades on a slow timer. */
export const HERO_SLIDES: Media[] = [
  {
    src: "/images/welding-sparks-closeup.jpg",
    alt: "Welder working on a steel joint, sparks lighting the workshop",
  },
  {
    src: "/images/construction-site-aerial.jpg",
    alt: "Construction site seen from above, crews working between concrete columns",
  },
  {
    src: "/images/offshore-rig-dusk.jpg",
    alt: "Offshore platform and port cranes silhouetted at dusk",
  },
];

/** Full-bleed banners at the top of each inner page. */
export const PAGE_BANNERS = {
  about: {
    src: "/images/construction-rebar-workers.jpg",
    alt: "Site crew working across reinforcement steel on a large structure",
  },
  services: {
    src: "/images/industrial-valves-pipework.jpg",
    alt: "Industrial valves and process pipework in a plant room",
  },
  contact: {
    src: "/images/tower-crane-dusk.jpg",
    alt: "Tower crane rising above a project site at dusk",
  },
  notFound: {
    src: "/images/city-construction-cranes.jpg",
    alt: "Cranes over a city construction project at dusk",
  },
} as const satisfies Record<string, Media>;

/** Wide feature images used inside split sections and bands. */
export const FEATURE = {
  team: {
    src: "/images/electrician-junction-box.jpg",
    alt: "Electrician in protective gear working on a wall-mounted junction box",
  },
  stats: {
    src: "/images/construction-silhouette-sunset.jpg",
    alt: "Crew and crane silhouetted against a sunset over a construction deck",
  },
  cta: {
    src: "/images/city-construction-cranes.jpg",
    alt: "Construction cranes over a city skyline at dusk",
  },
  partners: {
    src: "/images/precision-machining.jpg",
    alt: "Precision engineering equipment mid-operation",
  },
  hse: {
    src: "/images/rebar-mesh-worker.jpg",
    alt: "Worker in full PPE positioning reinforcement mesh on a deck",
  },
} as const satisfies Record<string, Media>;

/** Helmont's own project photography — safe to present as completed work. */
export const PROJECT_GALLERY: Media[] = [
  {
    src: "/images/power-plant-kaduna.jpg",
    alt: "Power plant in Kaduna delivered by Helmont Services",
  },
  {
    src: "/images/power-plant-turbines.jpg",
    alt: "Gas turbine generating units at a Helmont power plant project",
  },
  {
    src: "/images/hvac-rooftop-team.jpg",
    alt: "Helmont technicians servicing rooftop air handling units",
  },
  {
    src: "/images/technicians-onsite.jpg",
    alt: "Helmont technicians reviewing work at an electrical cabinet",
  },
  {
    src: "/images/hvac-cassette-ceiling.jpg",
    alt: "Ceiling cassette air conditioning unit installed by Helmont",
  },
  {
    src: "/images/hvac-cassette-duct.jpg",
    alt: "Cassette unit and ductwork fitted to a roof structure by Helmont",
  },
];
