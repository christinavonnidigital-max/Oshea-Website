export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  body: string[];
};

// Ordered newest -> oldest
export const insights: Insight[] = [
  {
    slug: "carbon-footprint-verification-business-case",
    title: "Why Carbon Footprint Verification Matters for Your Business Today",
    excerpt:
      "Understanding your environmental impact isn't just about compliance anymore—it's about business survival in a carbon-conscious economy.",
    date: "Dec 27, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Think of carbon footprint verification like financial auditing: you are tracking greenhouse gas emissions with third-party assurance so investors, customers, and lenders trust the numbers.",
      "Capital markets and enterprise buyers now require verified emissions data; climate risk influences tenders, lending, and ratings. Verification proves your Scope 1, 2, and material Scope 3 data is accurate.",
      "Carbon accounting is complex—emission factors, indirect emissions, and boundary choices create uncertainty. Independent verification reduces that risk and makes your reporting credible."
    ],
  },
  {
    slug: "iso-9001-digital-qms",
    title: "How Digital Tools Are Transforming ISO 9001 Quality Management Systems",
    excerpt:
      "Smart factories need smart quality systems. Here's what manufacturers are doing differently with ISO 9001 certification.",
    date: "Dec 20, 2025",
    category: "Quality Management",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Digital QMS links nonconformance handling to real-time production data: alerts, root-cause tasks with owners and due dates, and automated status tracking instead of spreadsheets.",
      "Lean integration: 5S and visual management align with ISO 9001 controls, making continuous improvement visible on the shop floor rather than a pre-audit scramble.",
      "Data-driven quality: monitor leading indicators (tool wear, torque drift, environment) to prevent defects. Use SPC and trend data to prove effectiveness and scalability to auditors."
    ],
  },
  {
    slug: "iso-42001-africa-ai-governance",
    title: "ISO 42001 - AI Governance Before the Regulators Come Knocking",
    excerpt:
      "AI is everywhere, but regulators are coming. This standard helps you avoid the mistakes everyone else is about to make.",
    date: "Dec 13, 2025",
    category: "AI Management",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1100&q=80",
    body: [
      "ISO 42001 sets lifecycle controls for AI: data sourcing, bias testing, monitoring drift, and incident handling when AI decisions fail.",
      "Test for local languages and contexts; include non-engineers in governance to question fairness and relevance for African users.",
      "Early certification differentiates you with investors and clients before regulation makes responsible AI mandatory."
    ],
  },
  {
    slug: "iso-20000-africa-itsm",
    title: "ISO 20000 - Stop Losing Clients Because Your Support Is a Mess",
    excerpt:
      "If you're running managed services or SaaS, ISO 20000 proves you can actually handle the load.",
    date: "Dec 6, 2025",
    category: "IT Service Management",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Clear SLAs, incident handling, change control, and escalation paths prevent tickets from getting lost and clients from churning.",
      "Match SLAs to local constraints (power, connectivity), document ticket flow, and track MTTR, change success, and CSAT to show improvement.",
      "The payoff: fewer lost clients and credibility with enterprise buyers who need operational assurance."
    ],
  },
  {
    slug: "iso-22301-africa-bcm",
    title: "ISO 22301 - Business Continuity for When Everything Goes Wrong",
    excerpt:
      "Power cuts, fiber outages, protests blocking roads. Here's how to keep running anyway.",
    date: "Nov 29, 2025",
    category: "Business Continuity",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Grid failures, fiber cuts, and unrest are normal in many markets; ISO 22301 asks what your plan is when (not if) these happen.",
      "Map critical functions, backup suppliers, comms channels, and workarounds for connectivity failures—then test them regularly.",
      "You don’t need 50 pages—just the five critical scenarios with tested workarounds to reassure investors and clients."
    ],
  },
  {
    slug: "iso-27001-africa-tech",
    title: "ISO 27001 - What African Tech Companies Must Know",
    excerpt:
      "From audits to access control, here's how IT firms across Africa can prepare for the region's growing data privacy demands.",
    date: "Nov 15, 2025",
    category: "Information Security",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Start with asset inventory and data classification to frame your risk. Document threats that matter to your model.",
      "Build controls around access management, vendor risk, and incident response; prove you test plans with exercises and log reviews.",
      "Map ISO 27001 clauses to local data protection acts and keep evidence of monitoring, patching, and offboarding."
    ],
  },
  {
    slug: "iso-9001-manufacturing-2025",
    title: "The Future of ISO 9001 in Manufacturing: Digital Quality Management Systems for 2025",
    excerpt:
      "How the latest quality management trends are shaping production efficiency in Sub-Saharan markets.",
    date: "Oct 28, 2025",
    category: "Quality Management",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Meta Description: Discover how ISO 9001 certification is evolving with digital tools, lean manufacturing, and data analytics. Learn practical strategies for modern quality management systems in manufacturing operations.",
      "Keywords: ISO 9001 manufacturing, quality management system, ISO 9001 certification, continuous improvement, lean manufacturing, digital quality management, manufacturing efficiency, root cause analysis.",
      "Manufacturers embed continuous improvement loops tied to real-time production data. Link nonconformance handling to root causes with owners and due dates; pair ISO 9001 controls with lean practices like 5S and visual management."
    ],
  },
  {
    slug: "carbon-footprint-verification-guide",
    title: "Understanding Carbon Footprint Verification: A Complete Guide",
    excerpt:
      "Sustainability is no longer optional. Learn the basics of verifying your environmental impact under international standards.",
    date: "Sep 10, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=80",
    body: [
      "Meta Description: Learn how to verify your company's carbon footprint using GHG Protocol and ISO 14064 standards. Guide to Scope 1, 2, and 3 measurement, data collection, and third-party verification.",
      "Keywords: carbon footprint verification, GHG Protocol, ISO 14064, Scope 1 emissions, Scope 2 emissions, Scope 3 emissions, greenhouse gas accounting, carbon emissions measurement, sustainability reporting, environmental impact assessment.",
      "Start with clear boundaries for Scope 1, 2, and material Scope 3. Document data sources and methods, use recognized protocols (GHG Protocol, ISO 14064), and keep an audit trail. Publish reduction plans tied to measurable projects like efficiency, renewables, and supplier engagement."
    ],
  },
];

export const findInsightBySlug = (slug: string) =>
  insights.find((article) => article.slug === slug);

