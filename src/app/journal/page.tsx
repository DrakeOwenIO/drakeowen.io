import { JournalPreview } from "@/components/home/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Journal",
  "Drake Owen’s journal for notes on IT infrastructure and personal projects. No posts published yet.",
  "/journal",
);
export default function Journal() {
  return (
    <>
      <section className="page-intro shell">
        <div className="eyebrow">JOURNAL</div>
        <h1>
          Notes from work
          <br />
          <span className="muted">and side projects.</span>
        </h1>
        <p>
          I’m planning to write about problems I’ve worked through, things I’ve
          tried, and details I’ll want to look up again.
        </p>
      </section>
      <JournalPreview />
    </>
  );
}
