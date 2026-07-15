import type { Lang } from "@/data/types";
import { pageUrl } from "@/lib/i18n";
import { categories } from "@/data/categories";
import { t, contact, WHATSAPP_BASE } from "@/data/site";

export default function Footer({ lang }: { lang: Lang }) {
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <span className="flogo">{t.brand}</span>
            <p>{f.blurb[lang]}</p>
          </div>
          <div>
            <h4>{f.productsHeading[lang]}</h4>
            <ul>
              {categories.map((c) => (
                <li key={c.id}>
                  <a href={pageUrl(lang, c.id)}>{c.label[lang]}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{f.companyHeading[lang]}</h4>
            <ul>
              <li>
                <a href={pageUrl(lang, "about")}>{f.company.about[lang]}</a>
              </li>
              <li>
                <a href={pageUrl(lang, "technology")}>{f.company.technology[lang]}</a>
              </li>
              <li>
                <a href={pageUrl(lang, "oem-odm")}>{f.company.oem[lang]}</a>
              </li>
              <li>
                <a href={pageUrl(lang, "faq")}>{f.company.faq[lang]}</a>
              </li>
              <li>
                <a href={pageUrl(lang, "contact")}>{f.company.contact[lang]}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{f.contactHeading[lang]}</h4>
            <ul>
              <li>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={contact.emailHref}>{contact.email}</a>
              </li>
              <li>
                <a href={WHATSAPP_BASE} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>{contact.address[lang]}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{f.rights[lang]}</span>
          <span>
            <a href={contact.youtube} target="_blank" rel="noopener">
              {f.youtube[lang]}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
