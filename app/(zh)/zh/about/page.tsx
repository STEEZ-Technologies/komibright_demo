import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import AboutView from "@/components/pages/AboutView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("about").zh,
  "/about.html",
  "/zh/about.html"
);

export default function Page() {
  return <AboutView lang="zh" />;
}
