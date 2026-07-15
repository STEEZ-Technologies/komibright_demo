import type { Lang } from "@/data/types";

export const LANGS: Lang[] = ["en", "zh"];
export const htmlLang: Record<Lang, string> = { en: "en", zh: "zh-CN" };

// Absolute site origin — used only for canonical/OG strings, which are kept
// verbatim from the original markup.
export const ORIGIN = "https://komibright.com";

function base(lang: Lang): string {
  return lang === "zh" ? "/zh" : "";
}

// Internal links keep the original `.html` extension so URLs match the current
// site 1:1 (and static export writes matching `.html` files).
export function homeUrl(lang: Lang): string {
  return `${base(lang)}/index.html`;
}

export function pageUrl(lang: Lang, name: string): string {
  return `${base(lang)}/${name}.html`;
}

export function productUrl(lang: Lang, slug: string): string {
  return `${base(lang)}/products/${slug}.html`;
}

// The equivalent page in the other language (for the language switch + hreflang).
export function altLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}
