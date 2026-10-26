import type { ContactInformation, NavigationItem } from "@/lib/types";
export const site = {
  name: "Drake Owen",
  url: "https://drakeowen.com",
  description:
    "IT professional by career, technologist by nature. Drake Owen is an IT Operations Manager in Western North Carolina.",
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
