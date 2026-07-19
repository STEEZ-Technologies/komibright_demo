"use client";

import { useEffect } from "react";

// Faithful port of the original zero-dependency assets/js/main.js.
// All visible content is server-rendered; this component only wires the same
// behaviours (mobile nav, gallery crossfade, header shadow, scroll reveal,
// count-up, mailto form) after mount — one client component for the whole site.
export default function SiteScripts() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* mobile nav */
    const burger = document.querySelector<HTMLButtonElement>(".burger");
    const nav = document.querySelector<HTMLElement>(".nav");
    if (burger && nav) {
      const onBurger = () => {
        const open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      };
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));
      nav.querySelectorAll<HTMLAnchorElement>(".dropdown > a").forEach((a) => {
        const onClick = (e: Event) => {
          if (window.matchMedia("(max-width: 860px)").matches) {
            e.preventDefault();
            a.parentElement?.classList.toggle("open");
          }
        };
        a.addEventListener("click", onClick);
        cleanups.push(() => a.removeEventListener("click", onClick));
      });
    }

    /* product gallery with crossfade */
    const main = document.querySelector<HTMLImageElement>(".gallery-main img");
    document.querySelectorAll<HTMLButtonElement>(".thumbs button").forEach((b) => {
      const onClick = () => {
        document
          .querySelectorAll(".thumbs button")
          .forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        if (main) {
          main.classList.add("fading");
          setTimeout(() => {
            main.src = b.getAttribute("data-src") || main.src;
            main.onload = () => main.classList.remove("fading");
            setTimeout(() => main.classList.remove("fading"), 350);
          }, 180);
        }
      };
      b.addEventListener("click", onClick);
      cleanups.push(() => b.removeEventListener("click", onClick));
    });

    /* header shadow on scroll */
    const header = document.querySelector<HTMLElement>(".header");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    /* scroll progress bar (GPU-cheap; rAF-throttled; skips reduced-motion) */
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    if (bar && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let ticking = false;
      const paint = () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? doc.scrollTop / max : 0;
        bar.style.transform = "scaleX(" + p + ")";
        ticking = false;
      };
      const onProgress = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(paint);
        }
      };
      window.addEventListener("scroll", onProgress, { passive: true });
      window.addEventListener("resize", onProgress, { passive: true });
      paint();
      cleanups.push(() => window.removeEventListener("scroll", onProgress));
      cleanups.push(() => window.removeEventListener("resize", onProgress));
    }

    /* scroll reveal with stagger */
    if ("IntersectionObserver" in window) {
      let batch = 0;
      let lastTime = 0;
      const io = new IntersectionObserver(
        (entries) => {
          const now = performance.now();
          if (now - lastTime > 250) batch = 0;
          lastTime = now;
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target as HTMLElement;
              el.style.setProperty("--d", Math.min(batch, 6) * 0.08 + "s");
              batch++;
              el.classList.add("in");
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      /* count-up for stats marked with data-count */
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            const target = parseInt(el.getAttribute("data-count") || "0", 10);
            cio.unobserve(el);
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              el.textContent = String(target);
              return;
            }
            const t0 = performance.now();
            const dur = 1100;
            const tick = (tm: number) => {
              const p = Math.min(1, (tm - t0) / dur);
              el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
              else el.classList.add("counted");
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.6 }
      );
      document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }

    /* inquiry form -> mailto compose (static site, no backend) */
    const form = document.querySelector<HTMLFormElement>("#inquiry-form");
    if (form) {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        const g = (n: string) => {
          const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
            '[name="' + n + '"]'
          );
          return el ? el.value.trim() : "";
        };
        const subject = (form.getAttribute("data-subject") || "Inquiry") + " — " + g("name");
        const body =
          g("message") +
          "\n\n— " +
          g("name") +
          (g("company") ? " / " + g("company") : "") +
          "\nEmail: " +
          g("email");
        window.location.href =
          "mailto:" +
          (form.getAttribute("data-email") || "") +
          "?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(body);
        const ok = form.querySelector<HTMLElement>(".form-ok");
        if (ok) ok.hidden = false;
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
