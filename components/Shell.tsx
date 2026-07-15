import type { ReactNode } from "react";
import type { Lang } from "@/data/types";
import Header from "./Header";
import type { NavKey } from "./Header";
import Footer from "./Footer";

// Page frame: header + <main id="content"> + footer. SiteScripts lives in the
// root layout so it wires behaviour once per document.
export default function Shell({
  lang,
  active,
  altHref,
  children,
}: {
  lang: Lang;
  active?: NavKey;
  altHref: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header lang={lang} active={active} altHref={altHref} />
      <main id="content">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
