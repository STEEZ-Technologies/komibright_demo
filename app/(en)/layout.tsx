import "../globals.css";
import type { ReactNode } from "react";
import { htmlLang } from "@/lib/i18n";
import SiteScripts from "@/components/SiteScripts";

// English root layout (route group "(en)"). One of two root layouts — the ZH
// group defines its own — so each locale gets the correct <html lang>.
export { viewport } from "@/lib/seo";

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang.en}>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
