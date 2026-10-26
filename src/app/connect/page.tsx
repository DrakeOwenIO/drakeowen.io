import { ContactCard } from "@/components/connect/contact-card";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Connect",
  "Connect with Drake Owen, IT Operations Manager at Automated Results. Save his contact card and explore his work.",
  "/connect",
);
export default function Connect() {
  return (
    <section className="connect-page shell">
      <ContactCard />
      <p className="connect-tagline">
        IT professional by career. Technologist by nature.
      </p>
    </section>
  );
}
