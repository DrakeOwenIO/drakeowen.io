import type { ProjectMetadata, JournalMetadata } from "@/lib/types";
export const projects: ProjectMetadata[] = [
  {
    slug: "enterprise-infrastructure",
    title: "Enterprise Infrastructure Modernization",
    description:
      "Planning, deploying, and coordinating infrastructure improvements across a complex business environment.",
    category: "professional",
    tags: ["Networking", "Infrastructure", "IT Operations"],
    status: "draft",
    image: "/images/infrastructure.svg",
  },
  {
    slug: "paramotor-simulator",
    title: "Paramotor Flight Simulator",
    description:
      "I’m exploring how to bring paramotoring into a flight simulator, learning about flight physics and game development along the way.",
    category: "personal",
    tags: ["Aviation", "Development"],
    status: "draft",
  },
  {
    slug: "nfc-business-card",
    title: "Custom NFC Business Card",
    description:
      "I’m designing and 3D printing a business card with an NFC tag inside—a small project that brings together CAD, printing, and a bit of code.",
    category: "personal",
    tags: ["3D Printing", "NFC"],
    status: "draft",
  },
];
export const journal: JournalMetadata[] = [];
