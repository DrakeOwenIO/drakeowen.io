export interface ContactInformation {
  givenName: string;
  familyName: string;
  fullName: string;
  organization: string;
  title: string;
  website: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  photo?: string;
}
export interface NavigationItem {
  label: string;
  href: string;
}
export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  category: "professional" | "personal";
  tags: string[];
  status: "draft" | "published";
  image?: string;
}
export interface JournalMetadata {
  slug: string;
  title: string;
  description: string;
  kind: "field-note" | "deep-dive";
  status: "draft" | "published";
  publishedAt?: string;
  relatedProjects?: string[];
}
