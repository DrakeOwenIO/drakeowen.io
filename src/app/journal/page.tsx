import { JournalPreview } from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Journal",
  "Future field notes and deep dives on infrastructure, technology, and experiments from Drake Owen.",
  "/journal",
);
export default function Journal() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">LEARNING OUT LOUD</div>
        <h1>
          A place for
          <br />
          <span className="muted">working knowledge.</span>
        </h1>
        <p>
          Field notes from hands-on work. Deeper dives into the details. A
          journal for the things worth remembering and sharing.
        </p>
      </section>
      <JournalPreview />
    </>
  );
}
