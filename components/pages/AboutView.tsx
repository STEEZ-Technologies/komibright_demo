import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { about } from "@/data/pages";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FeatureIcon from "@/components/FeatureIcon";
import Img from "@/components/Img";

const IMG_STYLE = { borderRadius: "16px", aspectRatio: "4/3", objectFit: "cover" } as const;

export default function AboutView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const c = about;
  return (
    <Shell lang={lang} active="about" altHref={pageUrl(alt, "about")}>
      <JsonLd data={getContentMeta("about")[lang].jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: c.crumb[lang] },
        ]}
      />
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">{c.eyebrow[lang]}</span>
              <h1>{c.h1[lang]}</h1>
              <p>{c.p1[lang]}</p>
              <p>{c.p2[lang]}</p>
              <div className="trust" style={{ marginTop: "26px" }}>
                {c.trust.map((it, i) => (
                  <div key={i}>
                    <b>{it.b}</b>
                    {it.label[lang]}
                  </div>
                ))}
              </div>
            </div>
            <div className="split-media reveal">
              <Img
                src="/assets/img/factory-office.webp"
                alt={c.builtImgAlt[lang]}
                width={900}
                height={675}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <h2>{c.builtH2[lang]}</h2>
          <div className="grid grid-4" style={{ marginTop: "30px" }}>
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
          <h2>{c.cornerH2[lang]}</h2>
          <div className="grid grid-3" style={{ marginTop: "28px" }}>
            {c.cornerImgs.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img.src}
                alt={img.alt[lang]}
                loading="lazy"
                style={IMG_STYLE}
                className="reveal"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <h2>{c.expoH2[lang]}</h2>
          <p style={{ maxWidth: "44em" }}>{c.expoP[lang]}</p>
          <div className="grid grid-3" style={{ marginTop: "28px" }}>
            {c.expoImgs.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img.src}
                alt={img.alt[lang]}
                loading="lazy"
                style={IMG_STYLE}
                className="reveal"
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBand lang={lang} />
    </Shell>
  );
}
