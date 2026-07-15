import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("accessories").en,
  "/accessories.html",
  "/zh/accessories.html"
);

export default function Page() {
  return <ListingView lang="en" id="accessories" />;
}
