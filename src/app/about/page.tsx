import {
  AboutPreview,
  Experience,
  ContactSection,
} from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "About Drake Owen, IT Operations Manager at Automated Results in Western North Carolina, with interests in aviation, 3D printing, and homelab projects.",
  "/about",
);
export default function About() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">DRAKE OWEN / WESTERN NORTH CAROLINA</div>
        <h1>
          Hi, I’m Drake.
          <br />
          <span className="muted">Here’s a bit about me.</span>
        </h1>
        <p>
          I’m Drake, an IT Operations Manager at Automated Results in Western
          North Carolina. I work with networks, servers, and infrastructure
          projects. I enjoy the troubleshooting as much as the planning.
        </p>
      </section>
      <AboutPreview />
      <Experience />
      <ContactSection />
    </>
  );
}
