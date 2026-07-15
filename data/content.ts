// Accessor for the extracted per-page SEO/meta + JSON-LD of the bespoke content
// pages (home, technology, about, oem-odm, faq, contact, 404).

import siteData from "./site-data.json";
import type { ContentMeta, SiteData } from "./types";

const data = siteData as unknown as SiteData;

export function getContentMeta(name: string): ContentMeta {
  return data.contentMeta[name];
}
