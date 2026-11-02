import type { ProjectMetadata, JournalMetadata } from "@/lib/types";
export const projects: ProjectMetadata[] = [
  {
    slug: "enterprise-infrastructure",
    title: "IT Infrastructure Upgrades",
    description:
      "I plan and coordinate infrastructure upgrades, then help put them in place.",
    category: "professional",
    tags: ["Networking", "Infrastructure", "IT Operations"],
    status: "draft",
    image: "/images/infrastructure.svg",
  },
  {
    slug: "paramotor-simulator",
    title: "Paramotor Flight Simulator",
    description:
      "I’m working on a paramotor flight simulator. There’s a lot for me to learn about flight physics and game development.",
    category: "personal",
    tags: ["Aviation", "Development"],
    status: "draft",
  },
  {
    slug: "pi-fly",
    title: "Pi Fly",
    description:
      "An experimental aviation weather dashboard designed for paramotor pilots. Pi Fly combines aviation weather reports, localized forecasts, and flight-condition analysis into a simple, accessible interface.",
    category: "personal",
    tags: ["Raspberry Pi", "Python", "Linux", "Weather APIs", "E-Ink"],
    developmentStatus: "Early Development",
    status: "draft",
  },
];
export const journal: JournalMetadata[] = [];
