// -----------------------------------------------------------------------------
// Category config + listing-page copy.
//
// The bilingual display config (label, image, order) lives here; the per-page
// SEO/meta + intro copy comes from the extracted site-data.json listing block.
// Another obvious Supabase swap point: getCategory()/getListing() are the only
// readers of the underlying data.
// -----------------------------------------------------------------------------

import siteData from "./site-data.json";
import type { Lang, Listing, SiteData } from "./types";

const data = siteData as unknown as SiteData;

export interface CategoryConfig {
  id: string; // route slug, e.g. "ro-systems"
  image: string; // card image
  label: { en: string; zh: string }; // nav / card label
}

// Canonical order — matches the nav dropdown, home cards and footer.
export const categories: CategoryConfig[] = [
  { id: "ro-systems", image: "/assets/img/c25r.webp", label: { en: "RO Systems", zh: "RO反渗透净水器" } },
  { id: "direct-flow-ro", image: "/assets/img/c100r.webp", label: { en: "Direct Flow RO", zh: "无桶大流量RO" } },
  { id: "outdoor-water-purifiers", image: "/assets/img/a95r.webp", label: { en: "Outdoor Purifiers", zh: "户外净水器" } },
  { id: "stainless-steel-uf", image: "/assets/img/ssuf.webp", label: { en: "Stainless Steel UF", zh: "不锈钢超滤系统" } },
  { id: "accessories", image: "/assets/img/combo-filter.webp", label: { en: "Filters & Accessories", zh: "滤芯与配件" } },
];

export function getCategory(id: string): CategoryConfig | undefined {
  return categories.find((c) => c.id === id);
}

// Which range a product belongs to (derived from the listing membership).
export function getProductCategory(slug: string): CategoryConfig | undefined {
  return categories.find((c) => data.listing[c.id]?.en.slugs.includes(slug));
}

export function getListing(id: string): Listing {
  return data.listing[id];
}

// Number of products in a range (derived from the listing's product slugs).
export function categoryCount(id: string): number {
  return data.listing[id]?.en.slugs.length ?? 0;
}

// "4 products" / "1 product" / "4款产品"
export function countLabel(id: string, lang: Lang): string {
  const n = categoryCount(id);
  return lang === "zh" ? `${n}款产品` : `${n} product${n === 1 ? "" : "s"}`;
}
