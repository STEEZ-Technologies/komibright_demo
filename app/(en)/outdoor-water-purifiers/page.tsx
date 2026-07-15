import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("outdoor-water-purifiers").en,
  "/outdoor-water-purifiers.html",
  "/zh/outdoor-water-purifiers.html"
);

export default function Page() {
  return <ListingView lang="en" id="outdoor-water-purifiers" />;
}
