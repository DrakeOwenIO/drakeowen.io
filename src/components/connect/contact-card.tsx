import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Globe,
  BriefcaseBusiness,
  Mail,
  Phone,
  Smartphone,
  Code,
} from "lucide-react";
import { contact, site } from "@/config/site";
export function ContactCard() {
  return (
    <article className="contact-card">
      <div className="card-topline">
        <span className="mono">MY CONTACT CARD</span>
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
      <p className="muted">
        {site.companyUrl ? (
          <a href={site.companyUrl}>{contact.organization}</a>
        ) : (
          contact.organization
        )}
      </p>
      <p className="card-location mono">WESTERN NORTH CAROLINA</p>
      <a className="button primary save-contact" href="/api/contact/vcard">
        <Download size={19} aria-hidden />
        Save to Contacts
      </a>
      <p className="save-note">
        Download my contact card, then open it to save my details.
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
            <span className="contact-detail">
              <span>Email</span>
              <small>
                {contact.email.split("@")[0]}@<wbr />
                {contact.email.split("@")[1]}
              </small>
            </span>
            <ArrowUpRight size={17} aria-hidden />
          </a>
        )}
        {contact.phone && (
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>
            <Phone size={19} aria-hidden />
            <span className="contact-detail">
              <span>Work phone</span>
              <small>{contact.phone}</small>
            </span>
            <ArrowUpRight size={17} aria-hidden />
          </a>
        )}
        {contact.cell && (
          <a href={`tel:${contact.cell.replace(/[^+\d]/g, "")}`}>
            <Smartphone size={19} aria-hidden />
            <span className="contact-detail">
              <span>Cell</span>
              <small>{contact.cell}</small>
            </span>
            <ArrowUpRight size={17} aria-hidden />
          </a>
        )}
        {contact.github && (
          <a href={contact.github}>
            <Code size={19} aria-hidden />
            <span>GitHub</span>
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
        See my work <ArrowUpRight size={17} aria-hidden />
      </Link>
    </article>
  );
}
