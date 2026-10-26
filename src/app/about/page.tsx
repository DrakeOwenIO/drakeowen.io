import {
  AboutPreview,
  Experience,
  ContactSection,
} from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "Meet Drake Owen: IT Operations Manager, hands-on engineer, and curious technologist in Western North Carolina.",
  "/about",
);
export default function About() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">DRAKE OWEN / WESTERN NORTH CAROLINA</div>
        <h1>
          Engineer at heart.
          <br />
          <span className="muted">Curious by nature.</span>
        </h1>
        <p>
          I’m Drake, an IT Operations Manager at Automated Results in Western
          North Carolina. I work with networks, servers, and infrastructure
          projects, and I still enjoy digging into a tricky technical problem.
        </p>
      </section>
      <AboutPreview />
      <Experience />
      <ContactSection />
    </>
  );
}
