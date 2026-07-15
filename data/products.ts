// -----------------------------------------------------------------------------
// PLACEHOLDER DATA SOURCE — swap point for Supabase.
//
// Today the products come from the static site-data.json below. To move to a
// Supabase-backed CMS later, replace the body of `getAllProducts()` /
// `getProduct()` with a Supabase query that returns the same `Product` shape.
// Because pages call these functions (not the JSON directly) and rendering is
// static, the only change needed is here — no component JSX changes.
// -----------------------------------------------------------------------------

import siteData from "./site-data.json";
import type { Product, SiteData } from "./types";

const data = siteData as unknown as SiteData;

export function getAllProducts(): Product[] {
  return data.products;
}

export function getProduct(slug: string): Product | undefined {
  return data.products.find((p) => p.slug === slug);
}

export function getProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));
}

export const productSlugs = data.products.map((p) => p.slug);
