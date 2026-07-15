import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, productUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { oem } from "@/data/pages";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FeatureIcon from "@/components/FeatureIcon";
import Img from "@/components/Img";
import { ArrowIcon } from "@/components/icons";

export default function OemView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const c = oem;
  return (
    <Shell lang={lang} active="oem" altHref={pageUrl(alt, "oem-odm")}>
      <JsonLd data={getContentMeta("oem-odm")[lang].jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: c.crumb[lang] },
        ]}
      />
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          <span className="eyebrow">{c.eyebrow[lang]}</span>
          <h1>{c.h1[lang]}</h1>
          <p className="lead" style={{ maxWidth: "44em" }}>
            {c.lead[lang]}
          </p>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="grid grid-4">
            {c.features.map((f, i) => (
              <div key={i} className="feature reveal">
                <div className="icon">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3>{f.h3[lang]}</h3>
                <p>{f.p[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <h2>{c.splitH2[lang]}</h2>
              <p>{c.splitP[lang]}</p>
              <ul className="checklist">
                {c.splitChecklist[lang].map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href={productUrl(lang, c.splitBtnSlug)}>
                {c.splitBtn[lang]} <ArrowIcon />
              </a>
            </div>
            <div className="split-media reveal">
              <Img
                src="/assets/img/custom.webp"
                alt={c.splitImgAlt[lang]}
                width={900}
                height={675}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <CtaBand lang={lang} />
    </Shell>
  );
}
