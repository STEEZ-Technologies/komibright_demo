# KomiBright website — deployment notes

Static multi-page site. No build step, no dependencies, no external fonts or CDNs — works in China as-is.

## What's inside

- 52 HTML pages: 26 English (root) + 26 Chinese (`/zh/`), mirrored 1:1
- 7 core pages, 5 category pages, 13 product pages, FAQ, OEM/ODM, 404 — per language
- `assets/` — CSS, JS, images (all self-hosted)
- `sitemap.xml` + `robots.txt`

## Deploy

Any static host works. For GitHub Pages: push the folder contents to a repo, enable Pages, point DNS (A records 185.199.108–111.153 like your other demos).

**Important:** all canonical/hreflang/OG URLs and the sitemap point to `https://komibright.com`. If deploying to a different domain (e.g. a steez.digital demo subdomain), do one find-and-replace of `https://komibright.com` across all files — or edit `BASE_URL` in the generator and rebuild.

## SEO already handled

- Unique title + meta description per page, both languages
- `hreflang` en/zh/x-default pairs on every page
- JSON-LD: Organization, WebSite, Product (each product page), BreadcrumbList, FAQPage
- Semantic HTML, one `h1` per page, descriptive alt text, lazy-loaded images
- Keyword-rich URLs (e.g. `/products/kb-c25r-electricity-free-reverse-osmosis-system.html`)

## Notes

- Fonts: system stacks only (SF/Segoe/Roboto + PingFang/Microsoft YaHei) — nothing to load, fully China-safe
- Inquiry form composes a mailto: email (static site, no backend). Swap in Formspree or similar if they want real form submissions later.
- WhatsApp CTAs use their existing number (+886932137562) with prefilled per-product messages
- The old site's "Ultrafiltration System" category was an empty page with a dead product link — dropped deliberately; the UF membrane accessory covers those keywords
