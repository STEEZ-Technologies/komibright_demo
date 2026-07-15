import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import ContactView from "@/components/pages/ContactView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("contact").zh,
  "/contact.html",
  "/zh/contact.html"
);

export default function Page() {
  return <ContactView lang="zh" />;
}
