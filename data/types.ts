// Shared data types for the KomiBright site.
// These describe the shape of the placeholder JSON in site-data.json. When the
// data source is later swapped to Supabase, only the loaders in products.ts /
// categories.ts change — these types (and every component consuming them) stay.

export type Lang = "en" | "zh";

export interface Meta {
  title: string | null;
  description: string | null;
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogUrl: string | null;
  ogImage: string | null;
}

export interface SpecRow {
  k: string;
  v: string;
}

export interface ProductCardData {
  title: string;
  desc: string;
  tag: string;
  image: string;
  alt: string;
}

export interface ProductLang extends Meta {
  h1: string;
  lead: string;
  sku: string;
  galleryMain: string;
  galleryAlt: string;
  thumbs: string[];
  checklist: string[];
  spec: SpecRow[];
  prose: string[];
  includedLabel: string;
  includedText: string;
  waHref: string;
  mailHref: string;
  card: ProductCardData;
}

// JSON-LD blocks are stored verbatim as parsed objects and re-serialized.
export type JsonLdObject = Record<string, unknown>;

export interface Product {
  slug: string;
  image: string;
  thumbs: string[];
  related: string[];
  breadcrumbEn: JsonLdObject | null;
  breadcrumbZh: JsonLdObject | null;
  productLdEn: JsonLdObject | null;
  productLdZh: JsonLdObject | null;
  en: ProductLang;
  zh: ProductLang;
}

export interface ListingLang extends Meta {
  eyebrow: string | null;
  h1: string | null;
  lead: string | null;
  jsonld: JsonLdObject[];
  slugs: string[];
  groups?: { id: string; h2: string; intro: string; slugs: string[] }[];
}

export interface Listing {
  en: ListingLang;
  zh: ListingLang;
}

export interface ContentMeta {
  en: Meta & { jsonld: JsonLdObject[] };
  zh: Meta & { jsonld: JsonLdObject[] };
}

export interface SiteData {
  products: Product[];
  listing: Record<string, Listing>;
  contentMeta: Record<string, ContentMeta>;
}
