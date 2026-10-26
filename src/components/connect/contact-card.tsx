import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Globe,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { contact } from "@/config/site";
export function ContactCard() {
  return (
    <article className="contact-card">
      <div className="card-topline">
        <span className="mono">A GOOD CONNECTION STARTS HERE</span>
        <span className="status-dot" />
      </div>
      <div className="avatar">
        {contact.photo ? (
          <Image src={contact.photo} alt="Drake Owen" width={88} height={88} />
        ) : (
          <span aria-hidden>
            do<span className="accent">.</span>
          </span>
        )}
      </div>
      <h1>{contact.fullName}</h1>
      <p className="card-title">{contact.title}</p>
      <p className="muted">{contact.organization}</p>
      <p className="card-location mono">WESTERN NORTH CAROLINA</p>
      <a className="button primary save-contact" href="/api/contact/vcard">
        <Download size={19} aria-hidden />
        Save to Contacts
      </a>
      <p className="save-note">
        Your device will ask you to confirm or open the contact file.
      </p>
      <div className="card-links">
        {contact.linkedin && (
          <a href={contact.linkedin}>
            <BriefcaseBusiness size={19} aria-hidden />
            <span>LinkedIn</span>
            <ArrowUpRight size={17} aria-hidden />
          </a>
        )}
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            <Mail size={19} aria-hidden />
            <span>Email</span>
            <ArrowUpRight size={17} aria-hidden />
          </a>
        )}
        <a href={contact.website}>
          <Globe size={19} aria-hidden />
          <span>drakeowen.com</span>
          <ArrowUpRight size={17} aria-hidden />
        </a>
      </div>
      <Link className="text-link card-work" href="/work">
        Explore My Work <ArrowUpRight size={17} aria-hidden />
      </Link>
    </article>
  );
}
