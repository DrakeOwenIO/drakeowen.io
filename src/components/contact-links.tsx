import { contact } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
export function ContactLinks() {
  const links = [
    { label: "LinkedIn", href: contact.linkedin },
    { label: "GitHub", href: contact.github },
    {
      label: "Email",
      href: contact.email ? `mailto:${contact.email}` : undefined,
    },
  ];
  return (
    <>
      {links
        .filter((item) => item.href)
        .map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ))}
    </>
  );
}
