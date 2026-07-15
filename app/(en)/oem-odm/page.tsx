import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getContentMeta } from "@/data/content";
import OemView from "@/components/pages/OemView";

export const metadata: Metadata = pageMetadata(
  getContentMeta("oem-odm").en,
  "/oem-odm.html",
  "/zh/oem-odm.html"
);

export default function Page() {
  return <OemView lang="en" />;
}
