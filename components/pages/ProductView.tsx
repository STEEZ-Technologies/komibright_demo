import type { Lang, JsonLdObject } from "@/data/types";
import { homeUrl, pageUrl, productUrl, altLang } from "@/lib/i18n";
import { getProduct, getProducts } from "@/data/products";
import { getProductCategory } from "@/data/categories";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecTable from "@/components/SpecTable";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon, MailIcon } from "@/components/icons";

const L = {
  askWa: { en: "Ask on WhatsApp", zh: "WhatsApp咨询" },
  emailInquiry: { en: "Email inquiry", zh: "邮件询价" },
  specs: { en: "Specifications", zh: "产品规格" },
  related: { en: "Related products", zh: "相关产品" },
} as const;

export default function ProductView({ lang, slug }: { lang: Lang; slug: string }) {
  const product = getProduct(slug)!;
  const d = product[lang];
  const alt = altLang(lang);
  const category = getProductCategory(slug);
  const related = getProducts(product.related);

  const bc = (lang === "en" ? product.breadcrumbEn : product.breadcrumbZh) as
    | { itemListElement: { name: string }[] }
    | null;
  const skuCrumb =
    bc && bc.itemListElement.length
      ? bc.itemListElement[bc.itemListElement.length - 1].name
      : d.sku;

  const productLd = (lang === "en" ? product.productLdEn : product.productLdZh) as JsonLdObject | null;
  const breadcrumbLd = (lang === "en" ? product.breadcrumbEn : product.breadcrumbZh) as JsonLdObject | null;
  const ld = [productLd, breadcrumbLd].filter((x): x is JsonLdObject => Boolean(x));

  return (
    <Shell lang={lang} active="products" altHref={productUrl(alt, slug)}>
      <JsonLd data={ld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: t.nav.products[lang], href: pageUrl(lang, "products") },
          ...(category ? [{ label: category.label[lang], href: pageUrl(lang, category.id) }] : []),
          { label: skuCrumb },
        ]}
      />

      <section className="wrap product-top">
        <div className="gallery">
          <div className="gallery-main">
            {/* Plain <img>: the crossfade gallery swaps this element's src in JS. */}
            <img
              src={d.galleryMain}
              alt={d.galleryAlt}
              width={760}
              height={760}
              fetchPriority="high"
            />
          </div>
          <div className="thumbs">
            {d.thumbs.map((src, i) => (
              <button
                key={i}
                type="button"
                data-src={src}
                className={i === 0 ? "on" : undefined}
                aria-label={`Image ${i + 1}`}
              >
                <img src={src} alt="" loading="lazy" width={76} height={76} />
              </button>
            ))}
          </div>
        </div>
        <div className="product-info">
          <span className="sku-badge">{d.sku}</span>
          <h1>{d.h1}</h1>
          <p className="lead">{d.lead}</p>
          <ul className="checklist">
            {d.checklist.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="product-cta">
            <a className="btn btn-wa" href={d.waHref} target="_blank" rel="noopener">
              <WhatsAppIcon /> {L.askWa[lang]}
            </a>
            <a className="btn btn-ghost" href={d.mailHref}>
              <MailIcon /> {L.emailInquiry[lang]}
            </a>
          </div>
          <div className="included">
            <b>{d.includedLabel}</b> {d.includedText}
          </div>
        </div>
      </section>

      <section className="section tint" style={{ padding: "56px 0" }}>
        <div className="wrap">
          <h2>{L.specs[lang]}</h2>
          <div className="split" style={{ alignItems: "start", marginTop: "26px" }}>
            <SpecTable rows={d.spec} />
            <div className="prose">
              {d.prose.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>{L.related[lang]}</h2>
            <div className="grid grid-3" style={{ marginTop: "26px" }}>
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand lang={lang} />
    </Shell>
  );
}
