import type { ContactInformation } from "./types";
export function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}
// Fold at 75 UTF-8 octets, including the continuation space, without splitting characters.
export function foldLine(line: string): string {
  const parts: string[] = [];
  let current = "";
  let bytes = 0;
  for (const char of line) {
    const size = new TextEncoder().encode(char).length;
    if (bytes + size > 75) {
      parts.push(current);
      current = " ";
      bytes = 1;
    }
    current += char;
    bytes += size;
  }
  parts.push(current);
  return parts.join("\r\n");
}
export function generateVCard(contact: ContactInformation): string {
  const e = escapeVCard;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${e(contact.familyName)};${e(contact.givenName)};;;`,
    `FN:${e(contact.fullName)}`,
    `ORG:${e(contact.organization)}`,
    `TITLE:${e(contact.title)}`,
    `URL:${e(contact.website)}`,
  ];
  if (contact.email) lines.push(`EMAIL;TYPE=INTERNET,WORK:${e(contact.email)}`);
  if (contact.phone) lines.push(`TEL;TYPE=WORK,VOICE:${e(contact.phone)}`);
  if (contact.cell) lines.push(`TEL;TYPE=CELL,VOICE:${e(contact.cell)}`);
  if (contact.linkedin) lines.push(`URL;TYPE=WORK:${e(contact.linkedin)}`);
  if (contact.github) lines.push(`URL:${e(contact.github)}`);
  lines.push("END:VCARD");
  return lines.map(foldLine).join("\r\n") + "\r\n";
}
