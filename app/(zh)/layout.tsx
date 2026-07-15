import "../globals.css";
import type { ReactNode } from "react";
import { htmlLang } from "@/lib/i18n";
import SiteScripts from "@/components/SiteScripts";

// Chinese root layout (route group "(zh)") — sets <html lang="zh-CN">.
export { viewport } from "@/lib/seo";

export default function ZhRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang.zh}>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
