import { Fragment } from "react";
import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { categories } from "@/data/categories";
import { getProducts } from "@/data/products";
import { getContentMeta } from "@/data/content";
import { home, homeFeaturedSlugs, faqs } from "@/data/pages";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import FeatureIcon from "@/components/FeatureIcon";
import JsonLd from "@/components/JsonLd";
import Img from "@/components/Img";
import { ArrowIcon } from "@/components/icons";

const WAVE_PATH =
  "M0,46 C120,66 240,20 360,38 C480,56 600,18 720,36 C840,54 960,22 1080,40 C1200,58 1320,24 1440,42 C1560,60 1680,20 1800,38 C1920,56 2040,18 2160,36 C2280,54 2400,22 2520,40 C2640,58 2760,24 2880,42 L2880,80 L0,80 Z";

export default function HomeView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const featured = getProducts(homeFeaturedSlugs);
  const marqueeItems = [...home.marquee[lang], ...home.marquee[lang]];

  return (
    <Shell lang={lang} active="home" altHref={homeUrl(alt)}>
      <JsonLd data={getContentMeta("index")[lang].jsonld} />

      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">{home.heroEyebrow[lang]}</span>
            <h1>
              {home.heroH1Lines[lang].map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="lead">{home.heroLead[lang]}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={pageUrl(lang, "products")}>
                {home.heroBtnPrimary[lang]} <ArrowIcon />
              </a>
              <a className="btn btn-ghost" href={pageUrl(lang, "technology")}>
                {home.heroBtnGhost[lang]}
              </a>
            </div>
            <div className="trust">
              {home.trust.map((it, i) => (
                <div key={i}>
                  {it.count ? <b data-count={it.count}>{it.b}</b> : <b>{it.b}</b>}
                  {it.label[lang]}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <Img
              src="/assets/img/hero-water.webp"
              alt={home.heroImgAlt[lang]}
              width={1200}
              height={960}
              priority
            />
            {home.chips.map((c, i) => (
              <div key={i} className={`chip chip-${i + 1}`}>
                <strong>{c.strong}</strong>
                {c.label[lang]}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 2880 80" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill="#062a54" />
        </svg>
        <svg className="w2" viewBox="0 0 2880 80" preserveAspectRatio="none">
          <path d={WAVE_PATH} fill="#062a54" />
        </svg>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((text, i) => (
            <span key={i}>
              <i>◆</i>
              {text}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">{home.rangesEyebrow[lang]}</span>
          <h2>{home.rangesH2[lang]}</h2>
          <p className="lead" style={{ maxWidth: "44em" }}>
            {home.rangesLead[lang]}
          </p>
          <div className="grid grid-3" style={{ marginTop: "34px" }}>
            {categories.map((c) => (
              <CategoryCard key={c.id} category={c} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <span className="eyebrow">{home.whyEyebrow[lang]}</span>
          <h2>{home.whyH2[lang]}</h2>
          <div className="grid grid-4" style={{ marginTop: "34px" }}>
            {home.features.map((f, i) => (
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
          <div className="lifestyle reveal">
            <Img
              src={home.lifestyleImg}
              alt={home.lifestyleAlt[lang]}
              width={1376}
              height={768}
              loading="lazy"
            />
            <div className="lifestyle-cap">{home.lifestyleCap[lang]}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">{home.featuredEyebrow[lang]}</span>
          <h2>{home.featuredH2[lang]}</h2>
          <div className="grid grid-3" style={{ marginTop: "34px" }}>
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">{home.techEyebrow[lang]}</span>
              <h2>{home.techH2[lang]}</h2>
              <p>{home.techP[lang]}</p>
              <ul className="checklist">
                {home.techChecklist[lang].map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href={pageUrl(lang, "technology")}>
                {home.techBtn[lang]} <ArrowIcon />
              </a>
            </div>
            <div className="split-media reveal">
              <Img
                src="/assets/img/c25r-detail.webp"
                alt={home.techImgAlt[lang]}
                width={900}
                height={675}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-media reveal">
              <Img
                src="/assets/img/factory-workshop.webp"
                alt={home.aboutImgAlt[lang]}
                width={900}
                height={675}
                loading="lazy"
              />
            </div>
            <div>
              <span className="eyebrow">{home.aboutEyebrow[lang]}</span>
              <h2>{home.aboutH2[lang]}</h2>
              <p>{home.aboutP[lang]}</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={pageUrl(lang, "about")}>
                  {home.aboutBtnPrimary[lang]}
                </a>
                <a className="btn btn-ghost" href={pageUrl(lang, "oem-odm")}>
                  {home.aboutBtnGhost[lang]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <span className="eyebrow">{home.faqEyebrow[lang]}</span>
          <h2>{home.faqH2[lang]}</h2>
          <div style={{ maxWidth: "820px", marginTop: "28px" }}>
            {faqs.slice(0, 3).map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q[lang]}</summary>
                <div className="faq-a">{f.a[lang]}</div>
              </details>
            ))}
          </div>
          <p style={{ marginTop: "18px" }}>
            <a href={pageUrl(lang, "faq")}>
              <b>{home.faqAllLink[lang]}</b>
            </a>
          </p>
        </div>
      </section>

      <CtaBand lang={lang} />
    </Shell>
  );
}
