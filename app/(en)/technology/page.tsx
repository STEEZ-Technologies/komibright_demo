import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import TechnologyView from "@/components/pages/TechnologyView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("technology").en,
  "/technology.html",
  "/zh/technology.html"
);

export default function Page() {
  return <TechnologyView lang="en" />;
}
