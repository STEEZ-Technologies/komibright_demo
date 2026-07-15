import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getListing } from "@/data/categories";
import AllProductsView from "@/components/pages/AllProductsView";

export const metadata: Metadata = pageMetadata(
  getListing("products").en,
  "/products.html",
  "/zh/products.html"
);

export default function Page() {
  return <AllProductsView lang="en" />;
}
