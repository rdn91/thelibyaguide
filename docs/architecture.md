# Architecture: routing and audience mode

## Stack
Next.js App Router (static pages, no backend at runtime), Tailwind, framer-motion. Content lives in `src/data/*.json`; facts behind it are sourced in `docs/research/libya-verified-facts.md`.

## Routes
| Route | Audience | Purpose |
|---|---|---|
| `/` | both | Hero swaps by mode; entry to everything else |
| `/is-libya-safe` | tourist | Advisories quoted with dates, set beside how escorted tourism works (the "Reality Index") |
| `/logistics` | tourist | Visa, operator checklist, status board, corridor map |
| `/destinations`, `/destinations/[slug]` | both | 30 sights, statically generated |
| `/taste-culture` | both | Food and culture |
| `/local` | local | Domestic getaways for residents |
| `/credits` | — | Image licences |

Old URLs are 301-redirected in `next.config.ts` (including `/travel-advisory-debunked` → `/is-libya-safe`).

## Audience mode (Tourist / Local)
- State: `mode: 'visitor' | 'resident'` in `Providers` context, read with `useSite()`. Defaults to `visitor`, persisted to `localStorage['tlg.mode']`, restored after hydration so server and client markup match.
- Mode is a **presentation preference, not a route**. It changes emphasis (hero copy, nav order), never which facts a page shows. Every URL renders the same content for crawlers and for both modes.
- Local content that should be found in search lives at its own route (`/local`), not behind `?mode=`. This avoids duplicate-content pages and keeps shared links stable.
- Language (`en`/`ar`) follows the same client-side pattern today. Arabic is therefore not crawlable; Phase 5 decides whether it needs `/ar` routes with `hreflang`.

## Content rules
- Safety copy separates outdated myths, real current risks and unknowns (research file, section 6). Never state that advisories are wrong.
- Every advisory carries `asOf` and a link; `lastEditorialReview` in `logistics.json` records the last fact check.
