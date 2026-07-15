import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import NotFoundView from "@/components/pages/NotFoundView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("404").zh,
  "/404.html",
  "/zh/404.html"
);

export default function Page() {
  return <NotFoundView lang="zh" />;
}
