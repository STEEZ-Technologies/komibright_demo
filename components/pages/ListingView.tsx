import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { categories, getCategory, getListing } from "@/data/categories";
import { getProducts } from "@/data/products";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const OTHER_RANGES: Record<Lang, string> = { en: "Other ranges", zh: "其他系列" };

// One category listing page (RO Systems, Direct Flow RO, Outdoor, SS UF,
// Accessories). Same template for all five; content comes from data.
export default function ListingView({ lang, id }: { lang: Lang; id: string }) {
  const alt = altLang(lang);
  const listing = getListing(id)[lang];
  const category = getCategory(id)!;
  const products = getProducts(listing.slugs);
  const otherCats = categories.filter((c) => c.id !== id);

  return (
    <Shell lang={lang} active="products" altHref={pageUrl(alt, id)}>
      <JsonLd data={listing.jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: t.nav.products[lang], href: pageUrl(lang, "products") },
          { label: category.label[lang] },
        ]}
      />
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          {listing.eyebrow && <span className="eyebrow">{listing.eyebrow}</span>}
          <h1>{listing.h1}</h1>
          {listing.lead && (
            <p className="lead" style={{ maxWidth: "44em" }}>
              {listing.lead}
            </p>
          )}
          <div className="grid grid-3" style={{ marginTop: "36px" }}>
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <h2>{OTHER_RANGES[lang]}</h2>
          <div className="grid grid-4" style={{ marginTop: "30px" }}>
            {otherCats.map((c) => (
              <CategoryCard key={c.id} category={c} lang={lang} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand lang={lang} />
    </Shell>
  );
}
