import { ContactCard } from "@/components/connect/contact-card";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Connect",
  "Save the contact card for Drake Owen, IT Operations Manager at Automated Results in Western North Carolina.",
  "/connect",
);
export default function Connect() {
  return (
    <section className="connect-page shell">
      <ContactCard />
      <p className="connect-tagline">
        Networks, servers, and a few side projects.
      </p>
    </section>
  );
}
