import {
  Hero,
  Experience,
  WorkPreview,
  PersonalProjects,
  AboutPreview,
  JournalPreview,
  ContactSection,
} from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "IT professional by career. Technologist by nature.",
  "Meet Drake Owen, IT Operations Manager at Automated Results in Western North Carolina. Explore infrastructure work and personal technology projects.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <WorkPreview />
      <PersonalProjects />
      <AboutPreview />
      <JournalPreview />
      <ContactSection />
    </>
  );
}
