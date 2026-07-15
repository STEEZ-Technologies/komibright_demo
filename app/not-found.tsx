import "./globals.css";
import type { Metadata } from "next";
import { htmlLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import NotFoundView from "@/components/pages/NotFoundView";
import SiteScripts from "@/components/SiteScripts";

// Global not-found (EN). With multiple root layouts this renders its own
// <html>/<body>. Static export writes it to out/404.html — the host's 404 page.
export { viewport } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  getContentMeta("404").en,
  "/404.html",
  "/zh/404.html"
);

export default function NotFound() {
  return (
    <html lang={htmlLang.en}>
      <body>
        <NotFoundView lang="en" />
        <SiteScripts />
      </body>
    </html>
  );
}
