/* KomiBright — zero-dependency site JS */
(function () {
  "use strict";

  /* mobile nav */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".dropdown > a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 860px)").matches) {
          e.preventDefault();
          a.parentElement.classList.toggle("open");
        }
      });
    });
  }

  /* product gallery with crossfade */
  var main = document.querySelector(".gallery-main img");
  document.querySelectorAll(".thumbs button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".thumbs button").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      if (main) {
        main.classList.add("fading");
        setTimeout(function () {
          main.src = b.getAttribute("data-src");
          main.onload = function () { main.classList.remove("fading"); };
          setTimeout(function () { main.classList.remove("fading"); }, 350);
        }, 180);
      }
    });
  });

  /* header shadow on scroll */
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* scroll reveal with stagger */
  if ("IntersectionObserver" in window) {
    var batch = 0, lastTime = 0;
    var io = new IntersectionObserver(function (entries) {
      var now = performance.now();
      if (now - lastTime > 250) { batch = 0; }
      lastTime = now;
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.setProperty("--d", (Math.min(batch, 6) * 0.08) + "s");
          batch++;
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    /* count-up for stats marked with data-count */
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        var el = en.target, target = parseInt(el.getAttribute("data-count"), 10);
        cio.unobserve(el);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = target; return; }
        var t0 = performance.now(), dur = 1100;
        var tick = function (t) {
          var p = Math.min(1, (t - t0) / dur);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) { requestAnimationFrame(tick); } else { el.classList.add("counted"); }
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* inquiry form -> mailto compose (static site, no backend) */
  var form = document.querySelector("#inquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ""; };
      var subject = (form.getAttribute("data-subject") || "Inquiry") + " — " + g("name");
      var body = g("message") + "\n\n— " + g("name") + (g("company") ? " / " + g("company") : "") + "\nEmail: " + g("email");
      window.location.href = "mailto:" + (form.getAttribute("data-email") || "") +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var ok = form.querySelector(".form-ok");
      if (ok) { ok.hidden = false; }
    });
  }
})();
