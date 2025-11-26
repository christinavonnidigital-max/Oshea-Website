export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  readingMinutes: number;
  author: string;
  tags: string[];
  route: string; // route path to the TSX post page
};

export const posts: PostMeta[] = [
  {
    slug: "iso-27001-guide",
    title: "ISO 27001: What African Tech Companies Must Know",
    excerpt:
      "From risk assessment to access control — a practical view of ISO 27001 for fast-growing tech teams across Sub-Saharan Africa.",
    date: "2025-11-15",
    readingMinutes: 6,
    author: "O’Shea SA Experts",
    tags: ["ISO 27001", "Information Security", "IT"],
    route: "/insights/iso-27001-guide",
  },
  {
    slug: "iso-22000-haccp-basics",
    title: "ISO 22000 & HACCP: Food Safety Basics for Operators",
    excerpt:
      "Core concepts, documentation, and training tips for food and beverage manufacturers preparing for certification.",
    date: "2025-11-10",
    readingMinutes: 5,
    author: "O’Shea SA Experts",
    tags: ["ISO 22000", "HACCP", "Food Safety"],
    route: "/insights/iso-22000-haccp-basics",
  },
];