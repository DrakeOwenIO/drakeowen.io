import { contact } from "@/config/site";
import { generateVCard } from "@/lib/vcard";
export function GET() {
  return new Response(generateVCard(contact), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Drake-Owen.vcf"',
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
