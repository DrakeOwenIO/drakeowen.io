# DrakeOwen.com

My corner of the internet for the things I work on and the things I’m curious about.

I’m Drake Owen, an IT Operations Manager at Automated Results in Western North Carolina. My background is hands-on engineering: working with networks and servers, troubleshooting problems, and helping infrastructure projects move forward. Outside of work, I’m usually experimenting with code, tinkering in my homelab, designing something to 3D print, or finding an excuse to go flying.

This site brings those interests together. It’s also where someone lands after tapping my NFC business card—so getting in touch should be as easy as exploring a project.

## What’s here

- **Home:** an introduction to me, my work, and what I’m building outside the office.
- **Work:** professional infrastructure work and personal projects, with room for fuller case studies as I write them.
- **Journal:** a place for technical notes, lessons learned, and experiments worth documenting. Articles are still to come.
- **About:** a little more about the person behind the projects.
- **Connect:** my portrait, email, work and cell numbers, social profiles, and a downloadable contact card.

The dark-purple palette, numbered section labels, and technical illustrations are intentional parts of the site. Project illustrations are placeholders, not photographs of client infrastructure. Project descriptions should stick to what I’ve actually worked on; case studies and results can be added when they’re ready to share.

## Contact card and NFC

Physical NFC cards point to **https://drakeowen.com/connect**. That URL should stay stable.

Contact details live in `src/config/site.ts` and feed the contact page, shared social links, and vCard. The configuration includes my Automated Results email, separate work and cell numbers, LinkedIn, GitHub, and the company website. Keep edits there so the displayed details and downloaded contact stay in sync.

The portrait is served from `/images/204F18B3-C0FF-4758-9D4F-847DE38DD79C.PNG` in `public/images`. To replace it, update `contact.photo` with a public URL path—not a filesystem directory. Leave that field undefined to use the initials avatar.

**Save to Contacts** downloads `Drake-Owen.vcf` from `/api/contact/vcard`. It includes name, company, role, email, work and cell numbers, and website/social URLs. It uses vCard 3.0 with escaped values, CRLF endings, and UTF-8 line folding. Contact apps may show social profiles as ordinary website links. The endpoint caches responses for one hour.

A phone may open the contact directly or ask you to open the downloaded file. Saving still needs the user’s confirmation. Before using the NFC cards at an event, check an actual iPhone and Android phone: tap the card, download the contact, and confirm both phone numbers import under the right labels. Browser tests cannot verify the native address-book flow.

## Run locally

The site uses Next.js App Router, React, strict TypeScript, Tailwind CSS, Geist fonts, Lucide icons, and a small amount of Motion. Most content is server-rendered.

Use Node.js 22 LTS and pnpm 10.26.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

`pnpm start` stages the static assets and runs the standalone production build. `HOSTNAME` and `PORT` can override the local binding. The first build needs network access to download Geist, which Next.js then self-hosts.

For browser checks:

```sh
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

Playwright uses port 3100, separate from the development server. Tests cover responsive layouts, mobile navigation, keyboard interaction, reduced motion, contact links, portrait loading, and vCard downloads. Unit tests cover vCard escaping, folding, optional fields, and separate work/cell entries. Run `pnpm format` to format the source.

## Where to make changes

| Change                                     | Location                                  |
| ------------------------------------------ | ----------------------------------------- |
| Contact details, employer link, navigation | `src/config/site.ts`                      |
| Project previews and journal metadata      | `src/config/content.ts`                   |
| Homepage copy and sections                 | `src/components/home/sections.tsx`        |
| Digital contact card                       | `src/components/connect/contact-card.tsx` |
| Header and footer                          | `src/components/layout`                   |
| Colors, typography, spacing                | `src/app/globals.css`                     |
| vCard generation                           | `src/lib/vcard.ts`                        |
| Photos and illustrations                   | `public/images`                           |

`content/projects` and `content/journal` are reserved for future MDX case studies and articles. There’s no CMS, database, or authentication system to maintain.

## Still to come

The next useful additions are real project write-ups, approved photographs, and the first journal entries. Those should grow out of the work and experiments themselves.

The app is configured for a standalone Next.js build for eventual Ubuntu/Nginx hosting. Server provisioning, TLS, systemd, and deployment automation are separate work; this repository does not configure them.
