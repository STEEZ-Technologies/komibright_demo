import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import HomeView from "@/components/pages/HomeView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("index").zh,
  "/index.html",
  "/zh/index.html"
);

export default function Page() {
  return <HomeView lang="zh" />;
}
