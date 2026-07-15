import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { getListing } from "@/data/categories";
import { getProducts } from "@/data/products";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

// The full catalogue page (/products.html) — one section grouped by range.
export default function AllProductsView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const p = getListing("products")[lang];

  return (
    <Shell lang={lang} active="products" altHref={pageUrl(alt, "products")}>
      <JsonLd data={p.jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: t.nav.products[lang] },
        ]}
      />
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          {p.eyebrow && <span className="eyebrow">{p.eyebrow}</span>}
          <h1>{p.h1}</h1>
          {p.lead && (
            <p className="lead" style={{ maxWidth: "44em" }}>
              {p.lead}
            </p>
          )}
          {(p.groups ?? []).map((g) => (
            <div key={g.id} style={{ marginTop: "52px" }}>
              <h2 id={g.id}>{g.h2}</h2>
              <p style={{ maxWidth: "44em" }}>{g.intro}</p>
              <div className="grid grid-3" style={{ marginTop: "26px" }}>
                {getProducts(g.slugs).map((prod) => (
                  <ProductCard key={prod.slug} product={prod} lang={lang} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand lang={lang} />
    </Shell>
  );
}
