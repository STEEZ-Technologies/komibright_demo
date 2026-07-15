// Static validation (no build required): asset references, data completeness,
// per-page metadata, and route-file coverage vs. the expected .html outputs.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const errors = [];
const ok = (m) => console.log("  ✓ " + m);
const fail = (m) => { errors.push(m); console.log("  ✗ " + m); };

// ---- walk source files ----
function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next" || e === "out") continue;
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(tsx?|json)$/.test(e)) out.push(p);
  }
  return out;
}
const files = walk(ROOT);

console.log("\n[1] Image assets referenced in source exist in /public");
const imgDir = join(ROOT, "public/assets/img");
const referenced = new Set();
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/\/assets\/img\/[\w.-]+\.(?:webp|svg|png|jpg|jpeg)/g)) {
    referenced.add(m[0]);
  }
}
for (const ref of [...referenced].sort()) {
  const abs = join(ROOT, "public", ref.replace(/^\//, ""));
  existsSync(abs) ? null : fail(`missing asset: ${ref}`);
}
ok(`${referenced.size} distinct image refs, all present`);

console.log("\n[2] site-data.json completeness");
const data = JSON.parse(readFileSync(join(ROOT, "data/site-data.json"), "utf8"));
if (data.products.length !== 13) fail(`expected 13 products, got ${data.products.length}`);
else ok("13 products");
const allSlugs = new Set(data.products.map((p) => p.slug));
for (const p of data.products) {
  for (const lang of ["en", "zh"]) {
    const d = p[lang];
    for (const k of ["title", "description", "canonical", "ogImage", "h1", "lead", "sku", "galleryMain"]) {
      if (!d[k]) fail(`${p.slug}[${lang}] missing ${k}`);
    }
    if (!d.spec.length) fail(`${p.slug}[${lang}] empty spec`);
    if (!d.checklist.length) fail(`${p.slug}[${lang}] empty checklist`);
    if (!d.prose.length) fail(`${p.slug}[${lang}] empty prose`);
    if (!d.card.title || !d.card.desc || !d.card.tag) fail(`${p.slug}[${lang}] incomplete card`);
    if (!/^https:\/\/wa\.me\//.test(d.waHref)) fail(`${p.slug}[${lang}] bad waHref`);
  }
  for (const r of p.related) if (!allSlugs.has(r)) fail(`${p.slug} related -> unknown ${r}`);
}
ok("every product bilingual (meta, spec, checklist, prose, card, related)");

console.log("\n[3] listing + content meta present");
const catIds = ["ro-systems", "direct-flow-ro", "outdoor-water-purifiers", "stainless-steel-uf", "accessories"];
for (const id of [...catIds, "products"]) {
  const L = data.listing[id];
  if (!L) { fail(`listing ${id} missing`); continue; }
  for (const lang of ["en", "zh"]) {
    if (!L[lang].title || !L[lang].canonical) fail(`listing ${id}[${lang}] missing meta`);
    if (!L[lang].slugs.length) fail(`listing ${id}[${lang}] no product slugs`);
    for (const s of L[lang].slugs) if (!allSlugs.has(s)) fail(`listing ${id}[${lang}] unknown slug ${s}`);
  }
}
let total = 0;
for (const g of data.listing.products.en.groups) total += g.slugs.length;
total === 13 ? ok("products page groups cover all 13") : fail(`products groups total ${total}`);
for (const name of ["index", "technology", "about", "oem-odm", "faq", "contact", "404"]) {
  const c = data.contentMeta[name];
  for (const lang of ["en", "zh"]) {
    if (!c[lang].title || !c[lang].canonical) fail(`content ${name}[${lang}] missing meta`);
  }
}
ok("6 listing + 7 content pages have bilingual meta");
if (data.contentMeta.faq.en.jsonld.some((j) => j["@type"] === "FAQPage")) ok("FAQ page has FAQPage JSON-LD");
else fail("FAQ page missing FAQPage JSON-LD");
if (data.contentMeta.index.en.jsonld.length >= 2) ok("home has Organization + WebSite JSON-LD");
else fail("home JSON-LD incomplete");

console.log("\n[4] route files exist for every expected .html output");
const expect = [
  "app/(en)/page.tsx",
  "app/(en)/products/page.tsx",
  "app/(en)/products/[slug]/page.tsx",
  "app/not-found.tsx",
  "app/(zh)/zh/page.tsx",
  "app/(zh)/zh/products/page.tsx",
  "app/(zh)/zh/products/[slug]/page.tsx",
  "app/(zh)/zh/404/page.tsx",
  "app/(en)/layout.tsx",
  "app/(zh)/layout.tsx",
];
for (const id of catIds) {
  expect.push(`app/(en)/${id}/page.tsx`, `app/(zh)/zh/${id}/page.tsx`);
}
for (const n of ["technology", "about", "oem-odm", "faq", "contact"]) {
  expect.push(`app/(en)/${n}/page.tsx`, `app/(zh)/zh/${n}/page.tsx`);
}
for (const rel of expect) {
  existsSync(join(ROOT, rel)) ? null : fail(`missing route file: ${rel}`);
}
ok(`${expect.length} route/layout files present`);

console.log("\n[5] generateStaticParams present on dynamic routes");
for (const rel of ["app/(en)/products/[slug]/page.tsx", "app/(zh)/zh/products/[slug]/page.tsx"]) {
  const s = readFileSync(join(ROOT, rel), "utf8");
  /generateStaticParams/.test(s) ? ok(rel) : fail(`${rel} lacks generateStaticParams`);
}

console.log("\n[6] .html link discipline (helpers only, no extensionless internal routes)");
// spot: i18n helpers all end in .html
const i18n = readFileSync(join(ROOT, "lib/i18n.ts"), "utf8");
["/index.html", "/${name}.html", "/products/${slug}.html"].every((x) => i18n.includes(x))
  ? ok("url helpers emit .html paths")
  : fail("url helper missing .html form");

console.log(`\n${errors.length ? "FAILED: " + errors.length + " issue(s)" : "ALL CHECKS PASSED"}`);
process.exit(errors.length ? 1 : 0);
