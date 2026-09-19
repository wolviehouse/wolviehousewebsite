export type AreaId =
  | "trade"
  | "brands"
  | "community"
  | "consulting"
  | "ventures";

export type AreaSection = {
  title: string;
  note: string;
  items?: { name: string; tag?: string }[];
};

export type Area = {
  id: AreaId;
  name: string;
  teaser: string;
  intro: string;
  sections: AreaSection[];
};

export type Update = {
  id: string;
  area: AreaId;
  date: string; // ISO date, e.g. "2026-01-14"
  title: string;
  summary: string;
  image?: string;
  href?: string;
};

export const areas: Area[] = [
  {
    id: "trade",
    name: "Trade",
    teaser:
      "Finding products, markets and commercial opportunities across borders.",
    intro:
      "We explore cross-border opportunities, connect products with markets and build commercial bridges wherever we see potential.",
    sections: [
      {
        title: "Markets we are exploring",
        note: "Regions and sectors we are actively looking into.",
      },
      {
        title: "Products and opportunities",
        note: "Specific products and commercial openings under review.",
      },
      {
        title: "Partnerships",
        note: "Relationships that help move products, ideas and people between markets.",
      },
    ],
  },
  {
    id: "brands",
    name: "Brands",
    teaser: "Creating products and brands from idea to market.",
    intro:
      "We create products and brands from the ground up — from concept and positioning to identity, market entry and growth.",
    sections: [
      {
        title: "Currently building",
        note: "Brands and products in active development.",
      },
      {
        title: "Brands",
        note: "The brands that make up the Wolvie portfolio.",
        items: [{ name: "Turkish Anatolian", tag: "In development" }],
      },
      {
        title: "Product concepts",
        note: "Early ideas being shaped into products.",
      },
    ],
  },
  {
    id: "community",
    name: "Community",
    teaser: "Bringing ambitious people together.",
    intro:
      "We bring ambitious people together through conversations, gatherings, collaborations and communities.",
    sections: [
      {
        title: "Upcoming gatherings",
        note: "Events and meetups on the horizon.",
      },
      {
        title: "Past gatherings",
        note: "A record of what we have hosted and taken part in.",
      },
      {
        title: "Community notes",
        note: "Thoughts and takeaways from the people we meet.",
      },
    ],
  },
  {
    id: "consulting",
    name: "Consulting",
    teaser: "Practical support built on experience and execution.",
    intro:
      "We turn experience and know-how into practical support for people and businesses.",
    sections: [
      {
        title: "Capabilities",
        note: "The areas where we can genuinely help.",
      },
      {
        title: "Ways we can help",
        note: "How engagements typically take shape.",
      },
      {
        title: "Selected experience",
        note: "Relevant background, shared as it becomes ready.",
      },
    ],
  },
  {
    id: "ventures",
    name: "Ventures",
    teaser: "Testing ideas and building what shows potential.",
    intro:
      "We explore ideas, test opportunities and build the ones that have the potential to become real businesses.",
    sections: [
      { title: "Exploring", note: "Ideas we are curious about." },
      { title: "Testing", note: "Concepts being validated in the real world." },
      { title: "Building", note: "The ventures we are actively developing." },
      { title: "Archived", note: "Ideas we tried and set aside." },
    ],
  },
];

// Intentionally empty until real content exists. The UI is built to grow:
// add Update objects here and they appear on area pages, the homepage
// "Latest from Wolvie" section, and the global /updates feed automatically.
export const updates: Update[] = [];

const byDateDesc = (a: Update, b: Update) => b.date.localeCompare(a.date);

export function getArea(id: AreaId): Area | undefined {
  return areas.find((a) => a.id === id);
}

export function getAreaName(id: AreaId): string {
  return getArea(id)?.name ?? id;
}

export function getUpdatesByArea(id: AreaId): Update[] {
  return updates.filter((u) => u.area === id).sort(byDateDesc);
}

export function getLatestUpdates(count: number): Update[] {
  return [...updates].sort(byDateDesc).slice(0, count);
}

export function formatDate(iso: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
