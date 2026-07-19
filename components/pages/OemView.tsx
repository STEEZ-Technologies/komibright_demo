import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, productUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { oem, about, contactPage } from "@/data/pages";
import { t } from "@/data/site";
import Shell from "@/components/Shell";
import CtaBand from "@/components/CtaBand";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FeatureIcon from "@/components/FeatureIcon";
import Img from "@/components/Img";
import { ArrowIcon, MailIcon } from "@/components/icons";

const PHOTO_STYLE = { borderRadius: "16px", aspectRatio: "4/3", objectFit: "cover" } as const;

export default function OemView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const c = oem;
  const cp = contactPage;
  return (
    <Shell lang={lang} active="oem" altHref={pageUrl(alt, "oem-odm")}>
      <JsonLd data={getContentMeta("oem-odm")[lang].jsonld} />
      <Breadcrumbs
        items={[
          { label: t.nav.home[lang], href: homeUrl(lang) },
          { label: c.crumb[lang] },
        ]}
      />

      {/* Hero */}
      <section className="section" style={{ paddingTop: "28px" }}>
        <div className="wrap">
          <span className="eyebrow">{c.eyebrow[lang]}</span>
          <h1>{c.h1[lang]}</h1>
          <p className="lead" style={{ maxWidth: "44em" }}>
            {c.lead[lang]}
          </p>
        </div>
      </section>

      {/* Capabilities */}
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

      {/* Process timeline */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">{c.processEyebrow[lang]}</span>
          <h2>{c.processH2[lang]}</h2>
          <div className="grid grid-3 steps" style={{ marginTop: "30px" }}>
            {c.process.map((s, i) => (
              <div key={i} className="step reveal">
                <h3>{s.h3[lang]}</h3>
                <p>{s.p[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization split (product anchor) */}
      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">{c.customizeEyebrow[lang]}</span>
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

      {/* What you can customize */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">{c.customizeEyebrow[lang]}</span>
          <h2>{c.customizeH2[lang]}</h2>
          <div className="grid grid-4" style={{ marginTop: "30px" }}>
            {c.customize.map((f, i) => (
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

      {/* Quality & certifications */}
      <section className="section tint">
        <div className="wrap">
          <span className="eyebrow">{c.qualityEyebrow[lang]}</span>
          <h2>{c.qualityH2[lang]}</h2>
          <p className="lead" style={{ maxWidth: "48em" }}>
            {c.qualityP[lang]}
          </p>
          <div className="grid grid-3" style={{ marginTop: "30px" }}>
            {c.qc.map((s, i) => (
              <div key={i} className="feature reveal">
                <h3>{s.h3[lang]}</h3>
                <p>{s.p[lang]}</p>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: "40px" }}>{c.certH2[lang]}</h3>
          <div className="cert-grid">
            {about.certs.map((cert, i) => (
              <div key={i} className="cert-badge">
                <span className="cert-acr">{cert.acr}</span>
                <span className="cert-label">{cert.label[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className="section">
        <div className="wrap">
          <h2>{c.factoryH2[lang]}</h2>
          <p style={{ maxWidth: "44em" }}>{c.factoryP[lang]}</p>
          <div className="grid grid-3" style={{ marginTop: "28px" }}>
            {c.factoryImgs.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img.src}
                width={800}
                height={600}
                alt={img.alt[lang]}
                loading="lazy"
                style={PHOTO_STYLE}
                className="reveal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Export reach */}
      <section className="section tint">
        <div className="wrap">
          <span className="eyebrow">{c.exportEyebrow[lang]}</span>
          <h2>{c.exportH2[lang]}</h2>
          <p style={{ maxWidth: "44em" }}>{c.exportP[lang]}</p>
          <div className="trust" style={{ marginTop: "26px" }}>
            {c.exportStats.map((it, i) => (
              <div key={i}>
                <b>{it.b}</b>
                {it.label[lang]}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "22px" }}>
            {c.exportRegions[lang].map((r, i) => (
              <span key={i} className="card-tag">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Order terms (placeholder figures) */}
      <section className="section">
        <div className="wrap">
          <h2>{c.termsH2[lang]}</h2>
          <p style={{ maxWidth: "44em" }}>{c.termsNote[lang]}</p>
          <div className="grid grid-3" style={{ marginTop: "26px" }}>
            {c.terms.map((term, i) => (
              <div key={i} className="contact-card">
                <h3>{term.label[lang]}</h3>
                <div className="big">{term.value[lang]}</div>
                <p style={{ fontSize: ".88rem", margin: "8px 0 0" }}>{term.note[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM quote form */}
      <section className="section tint">
        <div className="wrap">
          <span className="eyebrow">{c.quoteEyebrow[lang]}</span>
          <h2>{c.quoteH2[lang]}</h2>
          <p className="lead" style={{ maxWidth: "42em" }}>
            {c.quoteP[lang]}
          </p>
          <form
            id="inquiry-form"
            className="form"
            data-email="info@komibright.com"
            data-subject={c.quoteSubject[lang]}
            style={{ maxWidth: "660px", marginTop: "26px" }}
          >
            <div className="row">
              <div>
                <label htmlFor="q-name">{cp.labelName[lang]}</label>
                <input id="q-name" name="name" required autoComplete="name" />
              </div>
              <div>
                <label htmlFor="q-company">{cp.labelCompany[lang]}</label>
                <input id="q-company" name="company" autoComplete="organization" />
              </div>
            </div>
            <div>
              <label htmlFor="q-email">{cp.labelEmail[lang]}</label>
              <input id="q-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="row">
              <div>
                <label htmlFor="q-market">{c.quoteMarket[lang]}</label>
                <input id="q-market" name="market" />
              </div>
              <div>
                <label htmlFor="q-volume">{c.quoteVolume[lang]}</label>
                <input id="q-volume" name="volume" />
              </div>
            </div>
            <div>
              <label htmlFor="q-msg">{cp.labelMessage[lang]}</label>
              <textarea id="q-msg" name="message" rows={4} placeholder={c.quotePlaceholder[lang]}></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              {cp.submit[lang]} <MailIcon />
            </button>
            <p className="form-ok" hidden style={{ color: "var(--blue)", fontWeight: 650 }}>
              {cp.formOk[lang]}
            </p>
          </form>
        </div>
      </section>

      <CtaBand lang={lang} />
    </Shell>
  );
}
