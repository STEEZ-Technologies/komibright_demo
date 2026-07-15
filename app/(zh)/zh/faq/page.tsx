import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import FaqView from "@/components/pages/FaqView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("faq").zh,
  "/faq.html",
  "/zh/faq.html"
);

export default function Page() {
  return <FaqView lang="zh" />;
}
