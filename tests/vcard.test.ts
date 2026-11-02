import { describe, expect, it } from "vitest";
import { escapeVCard, foldLine, generateVCard } from "../src/lib/vcard";
import { contact } from "../src/config/site";
import { GET } from "../src/app/api/contact/vcard/route";
describe("vCard 3.0", () => {
  it("escapes delimiters, backslashes and all newline styles", () => {
    expect(escapeVCard("a\\b;c,d\r\ne\rf\ng")).toBe(
      "a\\\\b\\;c\\,d\\ne\\nf\\ng",
    );
  });
  it("uses structured names, CRLF and omits unknown fields", () => {
    const card = generateVCard({
      ...contact,
      email: undefined,
      phone: undefined,
      cell: undefined,
      linkedin: undefined,
      github: undefined,
    });
    expect(card).toContain("N:Owen;Drake;;;\r\n");
    expect(card).toContain("VERSION:3.0\r\n");
    expect(card).not.toMatch(/EMAIL|TEL|undefined/);
    expect(card.replaceAll("\r\n", "")).not.toMatch(/[\r\n]/);
    expect(card.endsWith("END:VCARD\r\n")).toBe(true);
  });
  it("includes configured contact fields without allowing field injection", () => {
    const card = generateVCard({
      ...contact,
      email: "test@example.com",
      phone: "+1 555 0100",
      linkedin: "https://example.com/profile",
      organization: "Example\nTEL:injected",
    });
    expect(card).toContain("EMAIL;TYPE=INTERNET,WORK:test@example.com");
    expect(card).toContain("TEL;TYPE=WORK,VOICE:+1 555 0100");
    expect(card).toContain("URL;TYPE=WORK:https://example.com/profile");
    expect(card).toContain("ORG:Example\\nTEL:injected");
    expect(card).not.toContain("\r\nTEL:injected");
  });
  it("exports the verified work and cell numbers separately", () => {
    const card = generateVCard(contact).replaceAll("\r\n ", "");
    expect(card).toContain(
      "EMAIL;TYPE=INTERNET,WORK:drakeowen@automatedresults.com\r\n",
    );
    expect(card).toContain("TEL;TYPE=WORK,VOICE:+1 (828) 680-8125\r\n");
    expect(card).toContain("TEL;TYPE=CELL,VOICE:+1 (864) 506-2854\r\n");
    expect(card).toContain(
      "URL;TYPE=WORK:https://www.linkedin.com/in/drake-owen-688429163/\r\n",
    );
    expect(card).toContain("URL:https://github.com/DrakeOwenIO\r\n");
  });
  it("folds UTF-8 lines at 75 octets without breaking characters", () => {
    const value = "FN:" + "é🪂".repeat(50);
    const folded = foldLine(value);
    for (const line of folded.split("\r\n"))
      expect(Buffer.byteLength(line)).toBeLessThanOrEqual(75);
    expect(folded.replaceAll("\r\n ", "")).toBe(value);
  });
  it("returns a downloadable contact response", async () => {
    const response = GET();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/vcard; charset=utf-8",
    );
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="Drake-Owen.vcf"',
    );
    expect(await response.text()).toBe(generateVCard(contact));
  });
});
