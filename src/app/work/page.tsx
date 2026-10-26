import {
  WorkPreview,
  PersonalProjects,
  ContactSection,
} from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Work",
  "Infrastructure, operations, and personal experiments. Selected work from Drake Owen.",
  "/work",
);
export default function Work() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">ENGINEERING IN PRACTICE</div>
        <h1>
          Work with purpose.
          <br />
          <span className="muted">Projects with curiosity.</span>
        </h1>
        <p>
          Professional infrastructure work and personal experiments. Detailed
          case studies are on the way.
        </p>
      </section>
      <WorkPreview />
      <PersonalProjects />
      <ContactSection />
    </>
  );
}
