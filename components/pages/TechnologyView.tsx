import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { technology, faqs } from "@/data/pages";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Img from "@/components/Img";

export default function TechnologyView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const c = technology;
  return (
    <Shell lang={lang} active="technology" altHref={pageUrl(alt, "technology")}>
      <JsonLd data={getContentMeta("technology")[lang].jsonld} />
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
          <div className="prose" style={{ marginTop: "10px" }}>
            <p className="lead">{c.leadP[lang]}</p>
            <p>{c.p2[lang]}</p>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <h2>{c.stepsH2[lang]}</h2>
          <div className="grid grid-3 steps" style={{ marginTop: "30px" }}>
            {c.steps.map((s, i) => (
              <div key={i} className="step reveal">
                <h3>{s.h3[lang]}</h3>
                <p>{s.p[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-media reveal">
              <Img
                src="/assets/img/c25r-detail.webp"
                alt={c.splitImgAlt[lang]}
                width={900}
                height={675}
                loading="lazy"
              />
            </div>
            <div>
              <h2>{c.splitH2[lang]}</h2>
              <ul className="checklist">
                {c.splitChecklist[lang].map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <h2>{c.faqH2[lang]}</h2>
          <div style={{ maxWidth: "820px", marginTop: "26px" }}>
            {faqs.slice(0, 4).map((f, i) => (
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
