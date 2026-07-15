import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("direct-flow-ro").en,
  "/direct-flow-ro.html",
  "/zh/direct-flow-ro.html"
);

export default function Page() {
  return <ListingView lang="en" id="direct-flow-ro" />;
}
