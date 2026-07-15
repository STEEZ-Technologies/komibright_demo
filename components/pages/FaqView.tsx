import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { faqs } from "@/data/pages";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const COPY = {
  crumb: { en: "FAQ", zh: "FAQ" },
  eyebrow: { en: "FAQ", zh: "FAQ" },
  h1: { en: "Frequently asked questions", zh: "常见问题" },
} as const;

export default function FaqView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  return (
    <Shell lang={lang} altHref={pageUrl(alt, "faq")}>
      <JsonLd data={getContentMeta("faq")[lang].jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: COPY.crumb[lang] },
        ]}
      />
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          <span className="eyebrow">{COPY.eyebrow[lang]}</span>
          <h1>{COPY.h1[lang]}</h1>
          <div style={{ maxWidth: "840px", marginTop: "30px" }}>
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q[lang]}</summary>
                <div className="faq-a">{f.a[lang]}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand lang={lang} />
    </Shell>
  );
}
