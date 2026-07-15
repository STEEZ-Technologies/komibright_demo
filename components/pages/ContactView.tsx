import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { getContentMeta } from "@/data/content";
import { contactPage } from "@/data/pages";
import { t, contact, WHATSAPP_GENERAL } from "@/data/site";
import Shell from "@/components/Shell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { MailIcon } from "@/components/icons";

export default function ContactView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  const c = contactPage;
  return (
    <Shell lang={lang} active="contact" altHref={pageUrl(alt, "contact")}>
      <JsonLd data={getContentMeta("contact")[lang].jsonld} />
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
          <p className="lead" style={{ maxWidth: "42em" }}>
            {c.lead[lang]}
          </p>
          <div className="split" style={{ marginTop: "40px", alignItems: "start" }}>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>{c.cardWhatsapp[lang]}</h3>
                <div className="big">
                  <a href={WHATSAPP_GENERAL[lang]} target="_blank" rel="noopener">
                    {contact.whatsappDisplay}
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <h3>{c.cardEmail[lang]}</h3>
                <div className="big">
                  <a href={contact.emailHref}>{contact.email}</a>
                </div>
              </div>
              <div className="contact-card">
                <h3>{c.cardPhone[lang]}</h3>
                <div className="big">
                  <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                </div>
              </div>
              <div className="contact-card">
                <h3>{c.cardAddress[lang]}</h3>
                <div className="big" style={{ fontSize: ".98rem" }}>
                  {contact.address[lang]}
                </div>
              </div>
            </div>
            <div>
              <form
                id="inquiry-form"
                className="form"
                data-email="info@komibright.com"
                data-subject={c.formSubject[lang]}
              >
                <div className="row">
                  <div>
                    <label htmlFor="f-name">{c.labelName[lang]}</label>
                    <input id="f-name" name="name" required autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="f-company">{c.labelCompany[lang]}</label>
                    <input id="f-company" name="company" autoComplete="organization" />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-email">{c.labelEmail[lang]}</label>
                  <input id="f-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="f-msg">{c.labelMessage[lang]}</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    rows={5}
                    required
                    placeholder={c.placeholder[lang]}
                  ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">
                  {c.submit[lang]} <MailIcon />
                </button>
                <p className="form-ok" hidden style={{ color: "var(--blue)", fontWeight: 650 }}>
                  {c.formOk[lang]}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
