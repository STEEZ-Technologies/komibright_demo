import type { Lang } from "@/data/types";
import { pageUrl } from "@/lib/i18n";
import { t, WHATSAPP_GENERAL } from "@/data/site";
import { WhatsAppIcon } from "./icons";

// The "Ready to talk water?" band that appears at the foot of most pages.
export default function CtaBand({ lang }: { lang: Lang }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band reveal">
          <span className="bubble b1"></span>
          <span className="bubble b2"></span>
          <span className="bubble b3"></span>
          <span className="bubble b4"></span>
          <div>
            <h2>{t.cta.h2[lang]}</h2>
            <p>{t.cta.p[lang]}</p>
          </div>
          <div className="actions">
            <a className="btn btn-wa" href={WHATSAPP_GENERAL[lang]} target="_blank" rel="noopener">
              <WhatsAppIcon /> {t.cta.whatsapp[lang]}
            </a>
            <a className="btn btn-ghost" href={pageUrl(lang, "contact")}>
              {t.cta.contact[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
