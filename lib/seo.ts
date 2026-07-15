import type { Metadata, Viewport } from "next";
import type { Meta } from "@/data/types";
import { ORIGIN } from "./i18n";

// Shared viewport (theme-color) — matches <meta name="theme-color" content="#062a54">.
export const viewport: Viewport = {
  themeColor: "#062a54",
};

// Build a Next Metadata object from the original page's meta, preserving
// title/description, canonical, hreflang (en/zh/x-default), Open Graph and
// Twitter card exactly. `enPath` / `zhPath` are site-relative (e.g.
// "/ro-systems.html"); the canonical is the page's own (self) URL.
export function pageMetadata(m: Meta, enPath: string, zhPath: string): Metadata {
  const enHref = ORIGIN + enPath;
  const zhHref = ORIGIN + zhPath;
  return {
    metadataBase: new URL(ORIGIN),
    title: m.title ?? undefined,
    description: m.description ?? undefined,
    alternates: {
      canonical: m.canonical ?? undefined,
      languages: {
        en: enHref,
        zh: zhHref,
        "x-default": enHref,
      },
    },
    openGraph: {
      type: "website",
      siteName: "KomiBright",
      title: m.ogTitle ?? undefined,
      description: m.ogDescription ?? undefined,
      url: m.ogUrl ?? undefined,
      images: m.ogImage ? [{ url: m.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: { url: "/assets/img/favicon.png", type: "image/png" },
    },
  };
}
