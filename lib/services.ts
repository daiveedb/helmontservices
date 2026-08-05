// Service catalogue plus supporting content (values, advantages, segments, HSE).
// Every service carries an `image` used for its card and page banner.
// `gallery` holds additional photos; HVAC and Project Execution use the
// client-supplied site photography, the rest use licensed stock (see
// public/images/CREDITS.md) — so their alt text describes the scene rather than
// claiming the work as Helmont's.

export type ServiceCategory = "General Services" | "Contracting Services";

export type Media = { src: string; alt: string };

export type Service = {
  slug: string;
  category: ServiceCategory;
  num: string;
  title: string;
  blurb: string;
  points: string[];
  image: Media;
  gallery?: Media[];
};

export const SERVICES: Service[] = [
  {
    slug: "facility-maintenance",
    category: "General Services",
    num: "01",
    title: "Facility Maintenance & Support",
    blurb:
      "Comprehensive upkeep for buildings, equipment, and grounds — keeping operations running without interruption.",
    points: [
      "Preventive and corrective maintenance",
      "Building systems and equipment checks",
      "Grounds and common-area upkeep",
      "Scheduled maintenance reporting",
    ],
    image: {
      src: "/images/hvac-rooftop-team.jpg",
      alt: "Helmont technicians servicing rooftop air handling units on an industrial site",
    },
    gallery: [
      {
        src: "/images/hand-tools-workbench.jpg",
        alt: "Hand tools laid out on a workbench during a maintenance callout",
      },
      {
        src: "/images/precision-machining.jpg",
        alt: "Precision machinery running under routine servicing checks",
      },
    ],
  },
  {
    slug: "janitorial-cleaning",
    category: "General Services",
    num: "02",
    title: "Janitorial & Cleaning Services",
    blurb:
      "Reliable cleaning programs for offices, facilities, and industrial sites, tailored to your schedule.",
    points: [
      "Daily and periodic cleaning",
      "Deep cleaning and sanitation",
      "Consumable and supply management",
      "Trained, uniformed cleaning staff",
    ],
    image: {
      src: "/images/floor-cleaning-mop.jpg",
      alt: "Floor being cleaned and sanitised as part of a scheduled cleaning programme",
    },
    gallery: [
      {
        src: "/images/cleaning-surface-sanitising.jpg",
        alt: "Gloved hands wiping down and sanitising a work surface",
      },
    ],
  },
  {
    slug: "manpower-outsourcing",
    category: "General Services",
    num: "03",
    title: "Manpower Outsourcing & Recruitment Support",
    blurb:
      "Sourcing, vetting, and deploying skilled personnel so your operations stay fully staffed.",
    points: [
      "Skilled and unskilled labour sourcing",
      "Recruitment and screening support",
      "Training and re-training programs",
      "Ongoing personnel management",
    ],
    image: {
      src: "/images/technicians-onsite.jpg",
      alt: "Helmont technicians reviewing work at an electrical cabinet on site",
    },
    gallery: [
      {
        src: "/images/construction-rebar-workers.jpg",
        alt: "Site crew working across reinforcement steel on a construction project",
      },
    ],
  },
  {
    slug: "procurement-supply",
    category: "General Services",
    num: "04",
    title: "Procurement & Supply of Industrial Goods",
    blurb:
      "Dependable sourcing and supply of industrial materials, tools, and consumables.",
    points: [
      "Vendor sourcing and negotiation",
      "Industrial goods and materials supply",
      "Equipment and tooling procurement",
      "Transparent, competitive pricing",
    ],
    image: {
      src: "/images/warehouse-stocked-shelves.jpg",
      alt: "Industrial warehouse racking stocked with palletised materials",
    },
    gallery: [
      {
        src: "/images/warehouse-racking-aisle.jpg",
        alt: "Aisle of high-bay warehouse racking holding industrial stock",
      },
      {
        src: "/images/container-ship-aerial.jpg",
        alt: "Container vessel underway, representing the wider supply chain",
      },
    ],
  },
  {
    slug: "office-support",
    category: "General Services",
    num: "05",
    title: "Office Support Services",
    blurb:
      "Administrative and logistic support that keeps day-to-day office operations efficient.",
    points: [
      "Administrative assistance",
      "Logistics and documentation support",
      "Front-desk and facility coordination",
      "Procurement liaison services",
    ],
    image: {
      src: "/images/hand-tools-workbench.jpg",
      alt: "Equipment and tooling being handed over across a supply counter",
    },
  },
  {
    slug: "waste-management",
    category: "General Services",
    num: "06",
    title: "Waste Management & Environmental Services",
    blurb:
      "Responsible waste handling and environmental practices aligned with safety standards.",
    points: [
      "Waste collection and disposal",
      "Environmentally responsible handling",
      "Site cleanliness programs",
      "Compliance-focused reporting",
    ],
    image: {
      src: "/images/waste-trucks-street.jpg",
      alt: "Waste collection vehicles loading refuse on a city street",
    },
    gallery: [
      {
        src: "/images/waste-collection-truck.jpg",
        alt: "Refuse collection truck servicing bins on a scheduled route",
      },
    ],
  },
  {
    slug: "civil-works",
    category: "Contracting Services",
    num: "01",
    title: "Civil Works & Building Construction",
    blurb:
      "End-to-end construction support for residential, commercial, and industrial projects.",
    points: [
      "New building construction",
      "Site preparation and groundworks",
      "Structural and finishing works",
      "Project supervision and QA",
    ],
    image: {
      src: "/images/construction-site-aerial.jpg",
      alt: "Aerial view of a building site with reinforced concrete columns under construction",
    },
    gallery: [
      {
        src: "/images/construction-rebar-workers.jpg",
        alt: "Workers fixing reinforcement steel on a multi-storey structure",
      },
      {
        src: "/images/rebar-mesh-worker.jpg",
        alt: "Worker positioning reinforcement mesh ahead of a concrete pour",
      },
      {
        src: "/images/city-construction-cranes.jpg",
        alt: "Tower cranes over a city construction project at dusk",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    category: "Contracting Services",
    num: "02",
    title: "Renovation, Remodeling & Structural Upgrades",
    blurb:
      "Upgrading existing structures with quality workmanship and minimal disruption.",
    points: [
      "Interior and exterior renovation",
      "Structural reinforcement",
      "Space remodeling and upgrades",
      "Finishing and fit-out works",
    ],
    image: {
      src: "/images/renovation-strip-out.jpg",
      alt: "Interior stripped back to structure during a renovation project",
    },
    gallery: [
      {
        src: "/images/renovation-room-props.jpg",
        alt: "Room supported by acrow props during structural remodelling works",
      },
      {
        src: "/images/building-facade-ac-units.jpg",
        alt: "Upgraded building facade with externally mounted plant",
      },
    ],
  },
  {
    slug: "electrical-installation",
    category: "Contracting Services",
    num: "03",
    title: "Electrical Installation & Maintenance",
    blurb:
      "Safe, code-compliant electrical work from installation through ongoing maintenance.",
    points: [
      "Electrical wiring and installation",
      "Panel and system upgrades",
      "Routine maintenance and fault repair",
      "Safety inspections",
    ],
    image: {
      src: "/images/electrician-junction-box.jpg",
      alt: "Electrician testing a wall-mounted junction box in protective gear",
    },
    gallery: [
      {
        src: "/images/electrical-panel-breakers.jpg",
        alt: "Distribution board with circuit breakers and labelled wiring",
      },
      {
        src: "/images/electrical-terminal-wiring.jpg",
        alt: "Terminal block being wired and torque-checked inside a control panel",
      },
      {
        src: "/images/technicians-onsite.jpg",
        alt: "Helmont technicians working at an electrical cabinet on site",
      },
    ],
  },
  {
    slug: "mechanical-installation",
    category: "Contracting Services",
    num: "04",
    title: "Mechanical Installation & Repair",
    blurb:
      "Installation and repair of mechanical systems and equipment for continuous operation.",
    points: [
      "Mechanical systems installation",
      "Equipment repair and servicing",
      "Preventive maintenance schedules",
      "Spare parts coordination",
    ],
    image: {
      src: "/images/welder-blue-arc.jpg",
      alt: "Welder joining steel sections, arc lighting the workpiece",
    },
    gallery: [
      {
        src: "/images/welding-sparks-closeup.jpg",
        alt: "Close-up of a welded joint being completed on a steel assembly",
      },
      {
        src: "/images/precision-machining.jpg",
        alt: "Precision machinery set up for a mechanical repair operation",
      },
    ],
  },
  {
    slug: "hvac",
    category: "Contracting Services",
    num: "05",
    title: "HVAC Installation & Servicing",
    blurb:
      "Heating, ventilation, and air conditioning systems installed and serviced for year-round comfort.",
    points: [
      "HVAC system installation",
      "Routine servicing and repair",
      "Performance and efficiency checks",
      "Emergency callout support",
    ],
    image: {
      src: "/images/hvac-ductwork-ceiling.jpg",
      alt: "Spiral ductwork and ventilation runs installed across a building ceiling",
    },
    gallery: [
      {
        src: "/images/hvac-cassette-indoor.jpg",
        alt: "Ceiling cassette air conditioning unit installed indoors by Helmont",
      },
      {
        src: "/images/hvac-cassette-ceiling.jpg",
        alt: "Ceiling-mounted cassette HVAC unit with connected ductwork",
      },
      {
        src: "/images/hvac-cassette-duct.jpg",
        alt: "Cassette air conditioning unit and ductwork fitted to a roof structure",
      },
      {
        src: "/images/hvac-rooftop-team.jpg",
        alt: "Helmont technicians servicing rooftop air handling units on an industrial site",
      },
      {
        src: "/images/building-facade-ac-units.jpg",
        alt: "External condenser units mounted to a building facade",
      },
    ],
  },
  {
    slug: "plumbing-piping",
    category: "Contracting Services",
    num: "06",
    title: "Plumbing & Piping Solutions",
    blurb:
      "Piping and plumbing systems designed and maintained for reliable performance.",
    points: [
      "Plumbing installation and repair",
      "Piping systems and fittings",
      "Leak detection and resolution",
      "Water and drainage system upkeep",
    ],
    image: {
      src: "/images/pipework-manifold.jpg",
      alt: "Flanged pipework manifold routed through a plant room",
    },
    gallery: [
      {
        src: "/images/industrial-valves-pipework.jpg",
        alt: "Industrial valves and process pipework in service",
      },
    ],
  },
  {
    slug: "project-execution",
    category: "Contracting Services",
    num: "07",
    title: "Minor & Major Project Execution",
    blurb:
      "Full project execution for residential, commercial, and industrial clients — small jobs to major builds.",
    points: [
      "Project scoping and planning",
      "Execution and site management",
      "Quality assurance and HSE compliance",
      "Handover and post-project support",
    ],
    image: {
      src: "/images/power-plant-kaduna.jpg",
      alt: "Power Plant in Kaduna — major project execution by Helmont",
    },
    gallery: [
      {
        src: "/images/power-plant-turbines.jpg",
        alt: "Gas turbine generating units at a power plant project site",
      },
      {
        src: "/images/power-plant-kaduna.jpg",
        alt: "Power Plant in Kaduna — major project execution by Helmont",
      },
      {
        src: "/images/tower-crane-dusk.jpg",
        alt: "Tower crane standing over a major build at dusk",
      },
      {
        src: "/images/offshore-rig-dusk.jpg",
        alt: "Offshore platform and port infrastructure at dusk",
      },
    ],
  },
];

export const generalServices = SERVICES.filter(
  (s) => s.category === "General Services",
);
export const contractingServices = SERVICES.filter(
  (s) => s.category === "Contracting Services",
);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const VALUES = [
  { title: "Integrity", body: "We uphold honesty and transparency in all engagements." },
  { title: "Quality", body: "We deliver services that meet global best standards." },
  { title: "Safety", body: "We prioritize safe work practices in every project." },
  {
    title: "Professionalism",
    body: "We maintain disciplined, reliable, and competent service delivery.",
  },
  { title: "Customer Focus", body: "We tailor solutions to meet unique client needs." },
  { title: "Innovation", body: "We embrace smarter, more efficient ways of working." },
];

export const ADVANTAGES = [
  {
    num: "01",
    title: "Certified Personnel",
    body: "Experienced and certified staff across general services and contracting disciplines.",
  },
  {
    num: "02",
    title: "HSE Compliance",
    body: "High compliance with international health, safety, and environmental standards.",
  },
  {
    num: "03",
    title: "Efficient Project Management",
    body: "Structured methodologies that keep every project on track.",
  },
  {
    num: "04",
    title: "Fast Response Time",
    body: "Dependable service delivery with quick turnaround.",
  },
  {
    num: "05",
    title: "Strong Vendor Network",
    body: "A wide supply chain for materials, tooling, and equipment.",
  },
  {
    num: "06",
    title: "Transparent Pricing",
    body: "Clear costs and excellent customer support throughout.",
  },
];

export const CLIENT_SEGMENTS = [
  "Residential Clients",
  "Corporate / Office Clients",
  "Oil & Gas Service Providers",
  "Construction & Engineering Firms",
  "Government & Public Institutions",
  "Manufacturing & Industrial Facilities",
];

export const ORG_ROLES = [
  "Skilled technicians",
  "Project supervisors",
  "HSE officers",
  "Administrative and logistic personnel",
  "Procurement and supply specialists",
];

export const HSE_ITEMS = [
  "Safe work procedures",
  "Employee training and certification",
  "Risk assessments and hazard control",
  "Environmentally responsible operations",
];
