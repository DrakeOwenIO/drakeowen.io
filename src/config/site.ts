import type { ContactInformation, NavigationItem } from "@/lib/types";
export const site = {
  name: "Drake Owen",
  url: "https://drakeowen.com",
  description:
    "Drake Owen, IT Operations Manager at Automated Results in Western North Carolina. IT projects, 3D printing, aviation, and notes from my work.",
  companyUrl: undefined as string | undefined,
};
// Add verified details here. Undefined fields are deliberately omitted from the UI and vCard.
export const contact: ContactInformation = {
  givenName: "Drake",
  familyName: "Owen",
  fullName: "Drake Owen",
  organization: "Automated Results",
  title: "IT Operations Manager",
  website: site.url,
  email: undefined,
  phone: undefined,
  linkedin: undefined,
  github: undefined,
  photo: undefined,
};
export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];
