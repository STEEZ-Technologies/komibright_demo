import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("stainless-steel-uf").en,
  "/stainless-steel-uf.html",
  "/zh/stainless-steel-uf.html"
);

export default function Page() {
  return <ListingView lang="en" id="stainless-steel-uf" />;
}
