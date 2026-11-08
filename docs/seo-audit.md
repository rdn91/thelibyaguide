# SEO audit (Phase 5)

Audited 2026-11-09 against the dev server (`localhost:3100`) and `npm run build` output. Scope: every App Router route, the 30 `/destinations/[slug]` pages, redirects, 404 and structured data.

## Findings, ranked by impact

| # | Impact | Finding | Status |
|---|---|---|---|
| 1 | High | No `sitemap.xml` or `robots.txt` (both returned 404). | Fixed |
| 2 | High | Only `/is-libya-safe` had a canonical. Footer links use `/destinations?category=…` and old URLs redirect into query-string variants, so duplicate URLs were likely to be indexed. | Fixed: canonical on every route |
| 3 | High | JSON-LD on destination pages was not escaped: a `</script>` in the data would close the tag (an XSS vector and broken markup). | Fixed: shared `JsonLd` component escapes `<` as `<` |
| 4 | High | `/is-libya-safe` meta description promised "Australian" warnings, but the page shows only US, UK and Canada (see `logistics.json`). It's inaccurate and a trust problem on the site's most sensitive query. | Fixed |
| 5 | Medium | `/destinations` and `/credits` had no `<h1>`, because `SectionHeading` always rendered an `<h2>`. | Fixed: `as="h1"` prop, same styling |
| 6 | Medium | Destination pages set `openGraph`, which replaces the layout's object, so they lost `og:site_name` and `og:type`. | Fixed |
| 7 | Medium | Weak titles for the target queries: "Visa, LOI & logistics", "30 flagship sights", and the bare sight name ("Leptis Magna (Lubda)"). | Fixed (see query map) |
| 8 | Medium | E-E-A-T: `/is-libya-safe` had dated advisory cards but no page-level "last reviewed" date and no machine-readable `dateModified`. The only publisher info was the footer's "we don't sell tours". | Partly fixed: a visible reviewed date and Article `dateModified`. A named editor and an About page are still open |
| 9 | Medium | No site-level structured data (Organization/WebSite). | Fixed |
| 10 | Low | Redirects use `permanent: true`, which sends a **308**, not a 301. Google treats 308 like 301, so no change is needed. | OK |
| 11 | Low | The 404 page is Next's default: it has `noindex` and the correct status, but no links back into the site. | Open (optional `app/not-found.tsx`) |
| 12 | Low | Some destination `summaryEn` values run to 240–300 chars and get truncated in SERPs. They're data, so I left them alone. | Open (editorial) |
| 13 | Low | Titles over ~60 chars (the longest is `/is-libya-safe` at 78) get cut in SERPs. The query words come first, so only the brand suffix is lost. | Accepted |

Checks that already passed: one `<h1>` on all other routes, sensible heading order, `header`/`nav`/`main`/`footer` landmarks, a skip link, alt text on every image (one empty `alt` on `/` is a decorative image), a strong internal link mesh (the footer, "Also in…" links on sights, and the "Can I visit?" CTA), and Twitter cards that Next fills in automatically.

## What was changed

| File | Change |
|---|---|
| `src/app/sitemap.ts` (new) | 7 static routes and the 30 destination pages. `lastModified` = `logistics.lastEditorialReview` |
| `src/app/robots.ts` (new) | Allow all, plus the sitemap URL |
| `src/components/seo/JsonLd.tsx` (new) | Renders `<script type="application/ld+json">` with `<` escaped, following the pattern in `node_modules/next/dist/docs/01-app/02-guides/json-ld.md` |
| `src/app/layout.tsx` | Organization and WebSite JSON-LD (`@graph`, with `@id`s that the other pages reference) |
| `src/app/page.tsx` | Canonical `/` |
| `src/app/is-libya-safe/page.tsx` | Title now says "2026", the description is corrected, an Article JSON-LD block (headline = h1, `dateModified`, `citation` = the advisory URLs shown on the page, publisher = org), and a visible "Last reviewed … We don't sell tours." line |
| `src/app/destinations/[slug]/page.tsx` | Title "X: what to see and how to visit", canonical, full `openGraph`, escaped TouristAttraction (now with `url`, `@id`, `containedInPlace: Libya`) and a BreadcrumbList (Home › Destinations › X) |
| `src/app/destinations/page.tsx`, `src/app/credits/page.tsx` | Canonical, the h1 fix, and a stronger destinations title |
| `src/app/logistics/page.tsx` | Title "Libya tourist e-Visa, LOI & entry logistics" and a canonical |
| `src/app/taste-culture/page.tsx`, `src/app/local/page.tsx` | Canonical |
| `src/components/ui/Card.tsx` | `SectionHeading` takes `as?: 'h1' \| 'h2'` (default `h2`), so the visuals don't change |

No data, design or mode/lang changes. No new dependencies.

### Structured data decisions
- **I didn't use FAQPage on `/is-libya-safe`.** The page isn't written as questions and answers: the Reality Index has topic, advisory, ground and verify columns. Since 2023 Google has also shown FAQ rich results only for authoritative government and health sites. Marking up invented questions would break the "only visible content" rule. Article with `dateModified` is the honest fit.
- **No UNESCO markup on TouristAttraction.** The data holds only a boolean, and schema.org has no clean property for it. The visible badge is enough. If you want it later, the `sameAs` property could take the UNESCO listing URL, once each sight's `whc.unesco.org` URL is added to `sights.json`.
- **BreadcrumbList on sights** follows the real link hierarchy (the visible "All destinations" back link, plus the nav).
- `author` on the Article is the Organization, because there's no named editor yet (see below).

## What's left (recommendations)

### 1. E-E-A-T for "Is Libya safe to visit?" (highest value, needs the user)
- **An About / editorial-policy page** (`/about`): who runs the site, why, how facts are checked (the H/M/L confidence scheme from the research file is a real differentiator), the no-commission/no-tours policy, and the corrections process. Link it from the footer and from the reviewed-date line.
- **A named editor or reviewer** with a short bio. Then switch the Article's `author` to a `Person` and add a visible byline. Google's quality raters weigh this heavily on YMYL-adjacent safety content.
- **A real contact channel.** `/credits#contact` says one "is being set up". A working email builds trust with users and is a signal for raters.
- Keep `lastEditorialReview` current. Advisories change (the US one was reissued 31 Aug 2026), and a stale date on a safety page hurts more than having no date.

### 2. Arabic and hreflang (decision for the user)
Today, Arabic is a client-side toggle, so crawlers only ever see English, and the Arabic copy in `i18n.ts` can't rank. Options:
- **A. Leave it as is.** That's fine if the audience is foreign tourists. The `/local` residents' content then only ranks for English queries, which is a weak fit, since residents search in Arabic.
- **B. Add `/ar/...` routes (recommended if the residents' audience matters).** Use a `[lang]` segment (see `node_modules/next/dist/docs/01-app/02-guides/internationalization.md`), with `generateStaticParams` for `en` and `ar`, `<html lang="ar" dir="rtl">` per locale, `alternates.languages` (`en`, `ar`, `x-default`) on every page, and both locales listed in the sitemap (`alternates.languages` is supported in `sitemap.ts`). The toggle then becomes a link between URL pairs rather than state. This is a real refactor of every route, plus `Providers` and `i18n.ts`, and every Arabic page needs a full translation, not just the UI strings: thin, half-translated pages do more harm than none.
- Either way, keep Tourist/Local mode out of the URL, as `docs/architecture.md` already says.

### 3. Technical, small
- An optional `app/not-found.tsx` with links to `/destinations`, `/logistics` and `/is-libya-safe`.
- An optional `opengraph-image` per sight. Today every sight already uses its own photo, so this is low priority.
- Add `og:url`, if wanted: only pages that set `openGraph` can carry it, and the canonical already does the job for search.
- Silence the build warning about the stray `/home/jckfr/package-lock.json` (`turbopack.root`). It's harmless for SEO.

### 4. Off-site (the user's tasks)
- **Google Search Console and Bing Webmaster Tools:** verify the domain, submit `https://thelibyaguide.com/sitemap.xml`, and check the Coverage and Enhancements reports (Breadcrumbs, Article) after launch. Run the Rich Results Test on `/is-libya-safe` and `/destinations/leptis-magna`.
- **Backlinks:** the honest-safety angle is linkable. Pitch travel journalists and forums (Lonely Planet Thorn Tree's successors, r/travel, r/libya, Against the Compass-style bloggers), heritage bodies (Society for Libyan Studies), and Wikimedia photographers credited on `/credits`. Avoid paid links and operator link swaps, because they undermine the "we don't sell tours" independence.
- Monitor the target queries below in Search Console, and refresh the content when the advisories change.

## Target query → page map

| Query | Page | Title now |
|---|---|---|
| is libya safe to visit / is libya safe | `/is-libya-safe` | Is Libya safe to visit? 2026 travel advisories, read closely |
| libya travel advisory 2026 | `/is-libya-safe` | (same; advisory cards carry their own dates) |
| libya tourist visa / libya e-visa / libya letter of invitation | `/logistics` | Libya tourist e-Visa, LOI & entry logistics |
| can I visit libya / libya tour operator | `/logistics#checker` | (same page) |
| leptis magna visit / visiting leptis magna | `/destinations/leptis-magna` | Leptis Magna (Lubda): what to see and how to visit |
| sabratha / cyrene / ghadames / acacus + visit | `/destinations/[slug]` | {Sight}: what to see and how to visit |
| things to see in libya / libya tourist attractions | `/destinations` | 30 sights in Libya, from Leptis Magna to the Sahara |
| libyan food / bazeen / libyan tea | `/taste-culture` | Taste & culture — bazeen, mbakbka, tea and etiquette |
| weekend trips from tripoli / benghazi (residents) | `/local` | Local weekends — day trips, Friday lunch & markets (English only until option B above) |
| libya travel guide | `/` | The Libya Guide — Leptis Magna, Cyrene, the Sahara & how to visit |
