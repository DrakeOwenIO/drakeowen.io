import type { ContactInformation, NavigationItem } from "@/lib/types";
export const site = {
  name: "Drake Owen",
  url: "https://drakeowen.com",
  description:
    "Drake Owen, IT Operations Manager at Automated Results in Western North Carolina. IT projects, 3D printing, aviation, and notes from my work.",
  companyUrl: "https://automatedresults.com",
};
// Add verified details here. Undefined fields are deliberately omitted from the UI and vCard.
export const contact: ContactInformation = {
  givenName: "Drake",
  familyName: "Owen",
  fullName: "Drake Owen",
  organization: "Automated Results",
  title: "IT Operations Manager",
  website: site.url,
  email: "drakeowen@automatedresults.com",
  phone: "+1 (828) 680-8125",
  cell: "+1 (864) 506-2854",
  linkedin: "https://www.linkedin.com/in/drake-owen-688429163/",
  github: "https://github.com/DrakeOwenIO",
  photo: "/images/204F18B3-C0FF-4758-9D4F-847DE38DD79C.PNG",
};
export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];
