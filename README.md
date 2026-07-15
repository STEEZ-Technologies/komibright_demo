# KomiBright — Next.js rebuild

A 1:1 rebuild of the static KomiBright site as a **Next.js 14 App Router** app,
structured so the product/catalogue data can later be swapped from the local
static files to a **Supabase CMS** without touching any rendering code.

Nothing was redesigned — the goal is a pixel- and structure-identical render of
the original, with the markup componentised and the content moved into data.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out  (npm start is not used — see below)
```

`npm run build` produces a fully static `out/` folder (`output: 'export'`) — the
same deploy target as the current GitHub Pages site. Serve `out/` with any static
host, or preview it locally with e.g. `npx serve out`.

> Deploying to a demo subdomain? Same as the original: the canonical / hreflang /
> OG URLs and `public/sitemap.xml` point at `https://komibright.com`. Do one
> find-and-replace of that origin across `data/site-data.json`, `data/site.ts`,
> `lib/i18n.ts` and `public/sitemap.xml` if you deploy elsewhere.

## How it's organised

```
app/
  (en)/…            English routes at the site root  (/, /products.html, …)
  (zh)/zh/…         Chinese routes under /zh          (/zh/…)
  not-found.tsx     → out/404.html
  globals.css       the original assets/css/style.css, verbatim
components/         shared UI (server) + one client script
  pages/            one view component per page type (drives EN + ZH)
data/               ← the Supabase swap point (see below)
lib/                i18n url/hreflang helpers + Metadata builder
public/assets/img/  original .webp/.svg/.png, copied unchanged
scripts/            postexport (zh home) + static validation
```

Two **root layouts** (via the `(en)` / `(zh)` route groups) exist only so each
locale renders the correct `<html lang>` — `en` at the root, `zh-CN` under `/zh`.

## The data layer (Supabase swap point)

All content lives in `data/`, separate from the components:

- `data/site-data.json` — the extracted per-product / per-page content (spec
  tables, copy, meta, JSON-LD), bilingual. This is the placeholder "database".
- `data/products.ts` — `getAllProducts()` / `getProduct()` / `getProducts()`.
  **This is the only file to change for Supabase**: replace the JSON reads with a
  Supabase query returning the same `Product` shape. Pages call these functions,
  not the JSON, and everything is statically generated, so the CMS switch is a
  build-time fetch + rebuild — no JSX changes.
- `data/categories.ts` — category config + listing accessors (same pattern).
- `data/pages.ts` — bespoke marketing-page copy (home, technology, about, OEM,
  contact, 404), bilingual.
- `data/site.ts` — global chrome (nav, footer, CTA, contact details).

## Components extracted

`ProductCard`, `CategoryCard`, `SpecTable`, `Breadcrumbs`, `Header`, `Footer`,
`CtaBand`, `FeatureIcon`, `Img` (next/image wrapper), `JsonLd`, plus per-page
views in `components/pages/`. `SiteScripts` is the single `'use client'`
component — a faithful port of the original `assets/js/main.js` (mobile nav,
gallery crossfade, header shadow, scroll-reveal, count-up, mailto form). Every
piece of visible content is a server component.

## SEO

Each route sets title, description, canonical, `hreflang` (en / zh / x-default),
Open Graph and Twitter tags via the App Router **Metadata API**, using the
original strings verbatim (`lib/seo.ts`). JSON-LD (Organization, WebSite,
Product, BreadcrumbList, FAQPage) is injected verbatim via `<JsonLd>` because the
Metadata API doesn't emit it.

## Verify without a full build

`node scripts/validate.mjs` checks asset references, data completeness, per-page
metadata and route coverage.
