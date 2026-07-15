import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getProduct, productSlugs } from "@/data/products";
import ProductView from "@/components/pages/ProductView";

// Next 15+/16: route params are async and must be awaited.
type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug)!;
  return pageMetadata(p.zh, `/products/${slug}.html`, `/zh/products/${slug}.html`);
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  return <ProductView lang="zh" slug={slug} />;
}
