import {
  WorkPreview,
  PersonalProjects,
  ContactSection,
} from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Work",
  "IT infrastructure projects, a paramotor flight simulator, and Pi Fly, a Raspberry Pi-powered paramotor aviation weather dashboard by Drake Owen.",
  "/work",
);
export default function Work() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">WORK & SIDE PROJECTS</div>
        <h1>
          What I’m working on,
          <br />
          <span className="muted">at work and at home.</span>
        </h1>
        <p>
          Here’s a look at my infrastructure work and a couple of personal
          projects. I’ll add more detail as I write them up.
        </p>
      </section>
      <WorkPreview />
      <PersonalProjects />
      <ContactSection />
    </>
  );
}
