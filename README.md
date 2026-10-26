# DrakeOwen.com

First milestone: a dark, mobile-first personal portfolio and NFC digital contact card. Built with Next.js App Router, React, strict TypeScript, Tailwind CSS, Geist, Lucide, and Motion. Content is server-rendered; only navigation and a small progressive animation use client components.

## Local development

Use Node.js 22 LTS and pnpm 10.26.0 (the existing Node 20.19.3 environment also passes this milestone's checks).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Other commands:

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm start
pnpm exec playwright install chromium
pnpm test:e2e
pnpm format
```

Browser tests run against a production build and start their own server if port 3100 is free. Run `pnpm build` first. The lockfile pins resolved packages. TypeScript 6.0 and ESLint 9 are selected for compatibility with Next.js's current ESLint plugins; revisit together when those plugins support newer majors.

## Structure

- `src/app`: homepage, Connect, Work, Journal, About, metadata, and contact endpoint.
- `src/components/layout`: keyboard-accessible responsive navigation and footer.
- `src/components/home`: reusable portfolio sections and journal empty state.
- `src/components/connect`: digital contact card.
- `src/config/site.ts`: canonical domain, navigation, employer URL, and contact information.
- `src/config/content.ts`: factual project previews; no published journal entries.
- `src/lib/types.ts`: project, journal, contact, and navigation contracts.
- `src/lib/vcard.ts`: vCard serialization, escaping, and UTF-8 line folding.
- `content/projects` and `content/journal`: reserved for future MDX integration.
- `public/images`: local, original illustrative infrastructure placeholder.
- `tests`: vCard unit/endpoint tests and Playwright navigation/responsive checks.

Design tokens are in `src/app/globals.css`. The theme is dark-only, with separate variables ready for a future light theme. Project imagery is explicitly illustrative, not a representation of a real client's equipment. The personal project visuals are lightweight CSS drawings. No imagery requires third-party runtime requests. Next.js downloads and self-hosts Geist during builds; the first build needs network access for those fonts.

## Details Drake needs to provide

Edit `src/config/site.ts` to add only verified values:

- Professional email.
- Optional professional telephone number (international format recommended).
- LinkedIn profile URL.
- GitHub profile URL.
- Automated Results website URL (`site.companyUrl`).
- Optional portrait (`contact.photo`, a local `/images/...` path recommended).

Undefined links are omitted, including the employer link. The contact file currently contains the supplied name, organization, job title, and website only. Add real project photographs, approved case-study details, and any publication permissions before replacing the clearly labeled placeholders. Never add client names or results without approval.

## NFC and contact behavior

Program physical cards with the permanent URL **https://drakeowen.com/connect**. The page links directly to `/api/contact/vcard`; it does not require login, cookies, or navigation through the portfolio. The endpoint generates vCard 3.0 from the shared configuration, omits unknown fields, escapes special characters, folds at 75 UTF-8 octets, uses CRLF endings, and returns `text/vcard; charset=utf-8` with attachment filename `Drake-Owen.vcf`.

Browsers and operating systems control contact import. Saving is never silent; some devices download a file that must then be opened. LinkedIn is represented as an additional work URL for broad vCard compatibility; contact apps may display it simply as a website.

### Real-device acceptance checks (still required)

1. On iPhone Safari and Android Chrome, tap a physical NFC card and confirm it opens the permanent HTTPS `/connect` URL.
2. Tap Save to Contacts. Follow the OS confirmation or open the downloaded `.vcf`, select the desired account if prompted, and verify name, organization, title, website, and any newly configured optional fields.
3. Check canceling, repeat imports/duplicate handling, and any in-app browser used at events. These flows vary by OS and contact app.
4. Test VoiceOver/TalkBack, large text, portrait/landscape, safe areas, and slow cellular networking. Confirm buttons remain usable and the file imports Unicode correctly.
5. Once hosted, verify the final domain, NFC redirect behavior, and a fresh downloaded card after any configuration change (the endpoint caches for one hour).

Automated Chromium tests cover 320, 375, 390, 768, 1024, and 1440px layouts, all initial routes, canonical URLs, keyboard/mobile navigation, reduced motion, and the actual vCard download. Automated testing does not verify native iOS/Android address-book integration.

## Build and future self-hosting

`next.config.ts` enables `output: 'standalone'`. The build produces `.next/standalone`; future deployment packaging must also copy `public` and `.next/static` into their corresponding standalone locations. `pnpm start` stages these assets automatically and starts the actual standalone server for local production preview. Set `HOSTNAME` and `PORT` to override its local binding. Production Nginx, TLS, systemd, CI, and server provisioning are deliberately outside this milestone; nothing has been deployed.

## Recommended next steps

1. Fill the verified contact configuration and perform the real-device NFC checks above.
2. Replace the infrastructure illustration with approved photography; add a portrait if desired.
3. Develop approved project case studies and add MDX loaders/detail routes. Preserve draft/published metadata and journal Field Note/Deep Dive types.
4. Publish the first journal entries; add related-content rendering when real content exists.
5. Plan Ubuntu/Nginx deployment, security updates, and accessibility/performance audits against the final hosted domain.

## Milestone verification

Completed on October 22, 2026: strict type checking, ESLint (no warnings), all 5 Vitest tests, production standalone build, and all 10 Playwright tests passed. Responsive checks cover all five pages at the six requested widths. Desktop homepage, 320px homepage, and 320px contact screenshots were visually reviewed. Real-device contact imports remain pending.

## Refinement verification

The refinement pass preserves the dark-purple theme, numbered labels, illustrations, and contact-card layout. Mobile navigation uses a native disclosure so opening and closing still work before JavaScript loads. Enhanced behavior adds outside-click, Escape, link-selection, and breakpoint dismissal. The previous JavaScript-only menu worked in the normal local browser but was inert without JavaScript; no other opening failure was reproduced.

Lint, strict type checking, production build, 5 unit tests, and 13 browser tests pass. Browser tests now use port 3100 to avoid the development server on port 3000, and cover touch/keyboard navigation at 320, 375, and 390px, every mobile menu destination, no-JavaScript opening, and vCard downloads. Screenshots at these phone widths and desktop were visually reviewed. Native iOS/Android contact imports still require real-device testing.
