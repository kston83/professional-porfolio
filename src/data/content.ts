/**
 * Site content data. Edit this file to update portfolio content.
 * This is the single source of truth for all displayed information.
 */

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Project {
  year: string;
  status: "wip" | "shipped" | "archived";
  statusLabel: string;
  title: string;
  description: string;
  stack: string[];
  linkText: string;
  linkUrl: string;
}

export const experience: Experience[] = [
  {
    period: "20XX — Present",
    role: "[Role Title]",
    company: "[Company Name]",
    description:
      "[1-2 sentences on what you do here. Impact-oriented — what did you build, secure, prevent, or enable?]",
    tags: ["AppSec", "AI/ML"],
  },
  {
    period: "20XX — 20XX",
    role: "[Previous Role]",
    company: "[Previous Company]",
    description:
      '[Short description. Quantify where you can — "reduced X by Y%", "led team of Z", etc.]',
    tags: ["PenTest", "Compliance"],
  },
  {
    period: "20XX — 20XX",
    role: "[Earlier Role]",
    company: "[Earlier Company]",
    description: "[Short description of scope and impact.]",
    tags: ["Infra", "Detection"],
  },
];

export const projects: Project[] = [
  {
    year: "2026",
    status: "wip",
    statusLabel: "In progress",
    title: "[Project One]",
    description:
      "[Short description — what problem does it solve, what's novel about it?]",
    stack: ["Python", "LangChain", "OWASP ZAP"],
    linkText: "View on GitHub →",
    linkUrl: "#",
  },
  {
    year: "2025",
    status: "shipped",
    statusLabel: "Shipped",
    title: "[Project Two]",
    description: "[Short description. Link to the post or repo.]",
    stack: ["Go", "eBPF", "Detection"],
    linkText: "Read write-up →",
    linkUrl: "#",
  },
  {
    year: "2025",
    status: "shipped",
    statusLabel: "Shipped",
    title: "[Project Three]",
    description: "[Description — what you built, the scale, anything surprising.]",
    stack: ["TypeScript", "MCP", "LLM"],
    linkText: "View on GitHub →",
    linkUrl: "#",
  },
  {
    year: "2024",
    status: "archived",
    statusLabel: "Archived",
    title: "[Project Four]",
    description:
      "[Older work that demonstrates range. Even archived projects tell part of the story.]",
    stack: ["Rust", "Crypto"],
    linkText: "View source →",
    linkUrl: "#",
  },
];
