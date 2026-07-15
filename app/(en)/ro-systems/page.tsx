import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("ro-systems").en,
  "/ro-systems.html",
  "/zh/ro-systems.html"
);

export default function Page() {
  return <ListingView lang="en" id="ro-systems" />;
}
