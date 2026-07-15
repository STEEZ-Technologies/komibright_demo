import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import ListingView from "@/components/pages/ListingView";

export const metadata: Metadata = pageMetadata(
  getListing("stainless-steel-uf").zh,
  "/stainless-steel-uf.html",
  "/zh/stainless-steel-uf.html"
);

export default function Page() {
  return <ListingView lang="zh" id="stainless-steel-uf" />;
}
