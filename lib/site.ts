// Central site-wide constants: contact details, partners, navigation.

export const SITE = {
  name: "Helmont Services",
  tagline: "General Services & Contracting",
  description:
    "General services and contracting support — built on reliability, safety, and operational excellence.",
  address: "14 Igbile Street, Port Harcourt, Rivers State",
  // Phone 09051000307 replaced with 0704 822 0528 per client request.
  phones: ["0701 063 3390", "0704 822 0528"],
  // Single public inbox — the Admin/Catherine/Helen addresses were removed at
  // the client's request, so everything routes through general enquiries.
  emails: [
    { label: "General enquiries", address: "info@helmontservices.com" },
  ],
} as const;

export const PARTNERS = [
  {
    name: "Vicohez",
    href: "https://www.Vicohez.com",
    blurb:
      "A trusted engineering and technical partner supporting Helmont on major project delivery.",
  },
] as const;

export type Partner = (typeof PARTNERS)[number];
