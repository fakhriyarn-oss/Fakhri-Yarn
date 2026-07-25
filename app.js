/* ═══════════ FAKHRI YARN — App ═══════════ */

const WA_NUMBER = "918128262887";
const EMAIL = "fakhriyarn@gmail.com";

/* ── Product data ──────────────────────────────────────────────
   mat → material family, drives the card tint AND a printed label
         (colour is never the only signal).
   tex → how the goods are actually built: "laid" for twisted rope,
         "woven" for flat niwar tape, "none" for loose/raw goods. */
/* group → one of the four catalogue tabs: "ropes", "niwars" (true niwar
   flat tape only), "others" (everything else previously lumped into
   Niwar & Others), "vaan" (cot/khatlo-weaving cord and its raw balls).
   A few images below reuse a close relative's photo as a placeholder
   until the real product photo is supplied — see PLACEHOLDER_IMG. */
const PRODUCTS = [
  // ── Ropes ──
  { key: "pp",           group: "ropes",  mat: "synthetic", tex: "laid",  img: "assets/pp.webp",                 brands: ["RAJHANS", "AQUA", "SUPER YELLOW", "APPU", "TRUCK"] },
  { key: "resham",       group: "ropes",  mat: "specialty", tex: "laid",  img: "assets/resham-rope.webp",        brands: ["ROYAL", "UMYAJI"], inHouse: true },
  { key: "cottonRope",   group: "ropes",  mat: "natural",   tex: "laid",  img: "assets/cotton-rope.webp",        brands: [] },
  { key: "coir",         group: "ropes",  mat: "natural",   tex: "laid",  img: "assets/coir.webp",              brands: [] },
  { key: "jute",         group: "ropes",  mat: "natural",   tex: "laid",  img: "assets/jute-rope.webp",          brands: [] },
  { key: "plasticRope",  group: "ropes",  mat: "synthetic", tex: "laid",  img: "assets/plastic-rope.webp",       brands: ["TEEN"] },
  { key: "jari",         group: "ropes",  mat: "specialty", tex: "laid",  img: "assets/jari.webp",              brands: [] },
  { key: "nylonMohra",   group: "ropes",  mat: "synthetic", tex: "laid",  img: "assets/nylon-mohra.webp",        brands: [] },
  { key: "reshamMohra",  group: "ropes",  mat: "specialty", tex: "laid",  img: "assets/resham-mohra.webp",       brands: [] },
  { key: "gopDori",      group: "ropes",  mat: "specialty", tex: "laid",  img: "assets/gop-dori.webp",           brands: ["MULTI - ROUND", "COLOR - ROUND", "WHITE - ROUND", "MULTI - CHAPTI (FLAT)", "COLOR - CHAPTI (FLAT)", "WHITE - CHAPTI (FLAT)"] },

  // ── Niwar (flat tape only) ──
  { key: "cottonNiwar",  group: "niwars", mat: "natural",   tex: "woven", img: "assets/cotton-niwar.webp",       brands: ["ROYAL"], inHouse: true },
  { key: "plasticNiwar", group: "niwars", mat: "synthetic", tex: "woven", img: "assets/plastic-niwar.webp",      brands: ["RANGEELA", "MARSHAL", "KOHINOOR", "RAINBOW", "SUDARSHAN", "MOTI", "SUPER FINE", "COLORS", "TANISHK", "BAHUBALI", "50-50"], inHouse: true },

  // ── Others ──
  { key: "juteTwine",    group: "others", mat: "natural",   tex: "laid",  img: "assets/sutli-new.webp",          brands: [] },
  { key: "plasticSutli", group: "others", mat: "synthetic", tex: "laid",  img: "assets/plastic-sutli.webp",      brands: ["APPLE", "VIRAT", "KANHA", "FAN", "NEXA"] },
  { key: "petWire",      group: "others", mat: "synthetic", tex: "none",  img: "assets/pet-wire.webp",           brands: ["9 PLY", "3 PLY WIRE", "PVC SINGLE WIRE"] },
  { key: "bagClosingThread", group: "others", mat: "synthetic", tex: "laid", img: "assets/bag-closing-thread.webp", brands: [], inHouse: true },
  { key: "nadaDori",     group: "others", mat: "natural",   tex: "laid",  img: "assets/nada-dori.webp",          brands: [], inHouse: true },
  { key: "lineDori",     group: "others", mat: "specialty", tex: "laid",  img: "assets/line-dori.webp",          brands: ["COTTON", "NYLON", "RESHAM"] },
  { key: "twine",        group: "others", mat: "natural",   tex: "laid",  img: "assets/twine.webp",              brands: [] },
  { key: "boundaryNet",  group: "others", mat: "synthetic", tex: "none",  img: "assets/boundary-net.webp",       brands: ["RP", "SEMI", "VIRGIN"] },

  // ── Vaan (cot/khatlo-weaving cord & the resham balls it's wound from) ──
  { key: "reshamWhiteTipkiBall", group: "vaan", mat: "specialty", tex: "laid", img: "assets/resham-balls-new.webp",  brands: [], inHouse: true },
  { key: "reshamColorBall",      group: "vaan", mat: "specialty", tex: "laid", img: "assets/resham-color-ball.webp", brands: [], inHouse: true },
  { key: "reshamFancyBall",      group: "vaan", mat: "specialty", tex: "laid", img: "assets/resham-fancy-balls.webp", brands: [], inHouse: true },
  { key: "cottonReshamSanedoVaan", group: "vaan", mat: "specialty", tex: "laid", img: "assets/sanedo-vaan.webp",     brands: [] },
  { key: "blueCottonVaan",       group: "vaan", mat: "natural",   tex: "laid", img: "assets/blue-cotton-vaan.webp",  brands: [] },

  // ── Threads ──
  { key: "polyesterThread", group: "threads", mat: "synthetic", tex: "laid", img: "assets/polyester-thread.webp", brands: ["GEMINI"] },
  { key: "cottonThread",    group: "threads", mat: "natural",   tex: "laid", img: "assets/cotton-thread.webp",    brands: ["DIAMOND", "DOUBLE GHODA"] },
];

const GROUPS = [
  { key: "ropes",   gridId: "gridRopes",   tabKey: "products.tabRopes" },
  { key: "niwars",  gridId: "gridNiwars",  tabKey: "products.tabNiwars" },
  { key: "vaan",    gridId: "gridVaan",    tabKey: "products.tabVaan" },
  { key: "threads", gridId: "gridThreads", tabKey: "products.tabThreads" },
  { key: "others",  gridId: "gridOthers",  tabKey: "products.tabOthers" },
];

let lang = localStorage.getItem("fy-lang") || "en";
if (!I18N[lang]) lang = "en";

const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;
const tp = (key) => I18N[lang].products[key] ?? I18N.en.products[key];

/* ── i18n: apply translations to static DOM ── */
function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t(el.dataset.i18n);
    if (typeof val === "string") { el.textContent = val; el.classList.remove("lang-fade"); void el.offsetWidth; el.classList.add("lang-fade"); }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll(".lang-pill").forEach((p) => p.classList.toggle("active", p.dataset.lang === lang));
  document.querySelectorAll(".stat-num").forEach(paintStat);
  renderTicker();
  renderProducts();
  renderTestimonials();
}

/* ── Ticker marquee ── */
function renderTicker() {
  const track = document.getElementById("tickerTrack");
  const items = I18N[lang].ticker || I18N.en.ticker;
  const seq = items.map((x) => `<span class="ticker-item">${x}</span>`).join("");
  track.innerHTML = seq + seq + seq + seq; // duplicated for seamless loop
}

/* ── Products: flip cards ── */
function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
/* Two-tier layout mirroring malik-enterprise.vercel.app: a "Featured
   Products" row of four tall cards, then a "More Products" catalog of
   compact cards behind category tabs. Featured items also appear in
   the catalog — same as the reference site. */
/* The four flagship in-house manufactured lines. */
const FEATURED = ["resham", "cottonNiwar", "plasticNiwar", "reshamWhiteTipkiBall"];

const WA_SVG = `<svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .4-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.5.1.3.6 1 1.3 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1.2-.2.6-.7.8-1 .2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.1.1.6-.1 1.2Z"/></svg>`;

function backFaceHTML(p, name, enName) {
  return `
      <div class="flip-face flip-back" inert>
        <img src="${p.img}" alt="${enName}" loading="lazy">
        <div class="flip-back-shade"></div>
        ${p.placeholder ? `<span class="photo-soon">${t("products.photoSoon")}</span>` : ""}
        <div class="flip-back-content">
          <h3>${name}</h3>
          <a class="enquire-wa" href="${waLink(`Hello Fakhri Yarn! I want to enquire about ${enName}.`)}" target="_blank" rel="noopener">
            ${WA_SVG}
            ${t("products.enquireWa")}
          </a>
          <span class="back-hint">${t("products.goBack")}</span>
        </div>
      </div>`;
}

function featuredCardHTML(p) {
  // Featured tuples carry an optional third element: a fuller
  // description used only on these tall cards (falls back to the sub).
  const [name, sub, desc] = tp(p.key);
  const enName = I18N.en.products[p.key][0];
  // The 404px card fits ~5 brand chips comfortably; Plastic Niwar alone
  // carries 11. Cap what's shown here and point to the rest with a
  // "+N" chip rather than letting the card silently clip (the full
  // list still shows on the compact catalog card, which has more room).
  const maxTags = 4;
  const shownBrands = p.brands.slice(0, maxTags);
  const extraCount = p.brands.length - shownBrands.length;
  const tags = shownBrands.map((b) => `<span class="product-tag">${b}</span>`).join("")
    + (extraCount > 0 ? `<span class="product-tag product-tag-more">+${extraCount}</span>` : "");
  return `
  <article class="flip-card pcard" data-key="${p.key}" tabindex="0" role="button" aria-expanded="false"
           aria-label="${name}. ${t("products.clickView")}">
    <div class="flip-inner">
      <div class="flip-face flip-front pf-${p.key}">
        ${p.inHouse ? `<span class="product-badge">${t("products.inHouse")}</span>` : ""}
        <h3 class="product-name">${name}</h3>
        <p class="product-desc">${desc ?? sub}</p>
        ${tags ? `<div class="product-tags">${tags}</div>` : ""}
        <span class="flip-hint">${t("products.clickView")}</span>
      </div>
      ${backFaceHTML(p, name, enName)}
    </div>
  </article>`;
}

function catalogCardHTML(p) {
  const [name, sub] = tp(p.key);
  const enName = I18N.en.products[p.key][0];
  const chips = p.brands.map((b) => `<span class="catalog-brand">${b}</span>`).join("");
  return `
  <article class="flip-card ccard" data-key="${p.key}" tabindex="0" role="button" aria-expanded="false"
           aria-label="${name}. ${t("products.clickView")}">
    <div class="flip-inner">
      <div class="flip-face flip-front ccat-${p.key}">
        ${p.inHouse ? `<span class="inhouse-badge">${t("products.inHouse")}</span>` : ""}
        <div class="catalog-name">${name}</div>
        <div class="catalog-sub">${sub}</div>
        ${chips ? `<div class="catalog-brands">${chips}</div>` : ""}
        <span class="flip-hint">${t("products.clickView")}</span>
      </div>
      ${backFaceHTML(p, name, enName)}
    </div>
  </article>`;
}

function renderProducts() {
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    featuredGrid.innerHTML = FEATURED
      .map((k) => PRODUCTS.find((p) => p.key === k))
      .filter(Boolean)
      .map(featuredCardHTML)
      .join("");
  }
  GROUPS.forEach((grp) => {
    const el = document.getElementById(grp.gridId);
    if (!el) return;
    el.innerHTML = PRODUCTS.filter((p) => p.group === grp.key).map(catalogCardHTML).join("");
  });
  document.querySelectorAll(".flip-card").forEach((card) => {
    const front = card.querySelector(".flip-front");
    const back = card.querySelector(".flip-back");
    const toggle = (e) => {
      if (e.target.closest(".enquire-wa")) return; // let WhatsApp link work without flipping back
      const flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-expanded", flipped);
      // The face turned away is invisible — keep it out of the tab order too.
      back.toggleAttribute("inert", !flipped);
      front.toggleAttribute("inert", flipped);
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(e); } });
  });
  setupCarousel();
}

/* ── Featured carousel: the dots under the grid page the cards side to
   side. Dot count adapts to how many cards fit per view at the current
   width (3 desktop → 2 dots, 2 tablet → 3, 1 phone → 4). Rebuilt on
   every renderProducts (language switch) and on resize. ── */
function setupCarousel() {
  const track = document.getElementById("featuredGrid");
  const dotsWrap = document.getElementById("carouselDots");
  if (!track || !dotsWrap) return;
  const cards = track.querySelectorAll(".pcard");
  if (!cards.length) { dotsWrap.innerHTML = ""; return; }
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  const step = cards[0].getBoundingClientRect().width + gap;
  const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
  const positions = Math.max(1, cards.length - visible + 1);
  // All cards visible → nothing to page, hide the dots entirely.
  dotsWrap.innerHTML = positions < 2 ? "" : Array.from({ length: positions }, (_, i) =>
    `<button class="carousel-dot" aria-label="${t("products.dotAria")} ${i + 1}"></button>`
  ).join("");
  const dots = [...dotsWrap.children];
  if (!dots.length) return;
  const setActive = (i) => dots.forEach((d, j) => d.classList.toggle("active", j === i));
  const activeFromScroll = () =>
    setActive(Math.min(positions - 1, Math.max(0, Math.round(track.scrollLeft / step))));
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      // Smooth scrolling is rAF-driven and stalls in hidden documents
      // (the preview pane used for verification); real visible tabs
      // always take the smooth path.
      track.scrollTo({ left: i * step, behavior: document.hidden ? "auto" : "smooth" });
      // Mark immediately — instant feedback on click; the onscroll
      // handler keeps it in sync for swipes/drags.
      setActive(i);
    })
  );
  // Property assignment (not addEventListener) so repeated setup runs
  // replace the old handler instead of stacking duplicates.
  track.onscroll = activeFromScroll;
  activeFromScroll();
}
window.addEventListener("resize", setupCarousel);

/* ── Catalog tabs ── */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    const activeKey = tab.dataset.tab;
    GROUPS.forEach((grp) => {
      const el = document.getElementById(grp.gridId);
      if (el) el.classList.toggle("hidden", grp.key !== activeKey);
    });
  });
});

/* ── Catalog modal (mirrors the reference site's full-screen catalog):
   opened by the View More Products button, closed by ✕ or Escape.
   Body scroll locks while open; focus moves in on open and returns to
   the trigger on close so keyboard users don't get stranded. ── */
const catalogModal = document.getElementById("catalog-modal");
const catalogClose = document.getElementById("catalog-close");
const catalogTrigger = document.getElementById("btn-view-all");
function openCatalog() {
  catalogModal.classList.add("open");
  document.body.style.overflow = "hidden";
  catalogClose.focus();
}
function closeCatalog() {
  catalogModal.classList.remove("open");
  document.body.style.overflow = "";
  catalogTrigger?.focus();
}
catalogTrigger?.addEventListener("click", openCatalog);
catalogClose?.addEventListener("click", closeCatalog);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && catalogModal.classList.contains("open")) closeCatalog();
});

/* ── Team modal (mirrors malik-enterprise's "Meet the Faces" click-to-
   reveal): opened from the About section's "Meet Our Team" button,
   closed by ✕ or Escape. Same open/close/focus mechanics as the
   catalog modal above, kept as separate functions since the two
   modals are unrelated and can't both be open at once anyway. ── */
const teamModal = document.getElementById("team-modal");
const teamClose = document.getElementById("team-close");
const teamTrigger = document.getElementById("btn-meet-team");
function openTeam() {
  teamModal.classList.add("open");
  document.body.style.overflow = "hidden";
  teamClose.focus();
}
function closeTeam() {
  teamModal.classList.remove("open");
  document.body.style.overflow = "";
  teamTrigger?.focus();
}
teamTrigger?.addEventListener("click", openTeam);
teamClose?.addEventListener("click", closeTeam);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && teamModal.classList.contains("open")) closeTeam();
});

/* ── Testimonials: infinite marquee (two identical sets → seamless -50% loop) ── */
function renderTestimonials() {
  const list = I18N[lang].testimonials || I18N.en.testimonials;
  const cards = list
    .map(
      ([quote, name, stars = 5]) => `
      <div class="testi-card">
        <div class="stars">${"★".repeat(stars)}<span class="stars-empty">${"★".repeat(5 - stars)}</span></div>
        <p class="testi-quote">${quote}</p>
        <p class="testi-name">${name}</p>
      </div>`
    )
    .join("");
  document.getElementById("testiTrack").innerHTML =
    `<div class="testi-set">${cards}</div><div class="testi-set" aria-hidden="true">${cards}</div>`;
}

/* ── Language pills ── */
document.querySelectorAll(".lang-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    lang = pill.dataset.lang;
    localStorage.setItem("fy-lang", lang);
    applyI18n();
  });
});

/* ── About video: attach the 4.5MB file only when the section nears
   the viewport, so it costs nothing on first paint. rootMargin starts
   the fetch one screen early — by the time the user scrolls there,
   it's already playing. ── */
const aboutVideo = document.getElementById("aboutVideo");
if (aboutVideo) {
  const videoObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        videoObs.unobserve(en.target);
        en.target.src = en.target.dataset.src;
        en.target.autoplay = true;
        en.target.play?.().catch(() => {});
      });
    },
    { rootMargin: "100% 0px" }
  );
  videoObs.observe(aboutVideo);
}

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        revealObs.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObs.observe(el);
});

/* ── Stats count-up ── */
/* Number and suffix are separate spans so "100+" reads as a figure
   with a qualifier, not one run-on word. */
function paintStat(el) {
  const val = String(el.dataset.current ?? 0);
  const suffix = el.dataset.suffix || "";
  el.innerHTML =
    `<span class="stat-val">${val}</span>` +
    (suffix ? `<span class="stat-suffix">${suffix}</span>` : "");
}
const statObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      statObs.unobserve(el);
      const target = parseInt(el.dataset.count, 10);
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.dataset.current = Math.round(target * eased);
        paintStat(el);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  },
  { threshold: 0.5 }
);
/* A stat marked data-static (e.g. the founding year 2004) shows its
   value outright — no count-up, since spinning a year from 0 reads
   oddly. It carries data-current so paintStat renders it directly. */
document.querySelectorAll(".stat-num:not([data-static])").forEach((el) => statObs.observe(el));

/* ── Nav: shadow on scroll + scrollspy + burger ── */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
  const pos = window.scrollY + 140;
  document.querySelectorAll("main section[id], header[id]").forEach((sec) => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    link.classList.toggle("active", pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight);
  });
}, { passive: true });

const burger = document.getElementById("navBurger");
const navMobile = document.getElementById("navMobile");
function setMobileNav(open) {
  burger.classList.toggle("open", open);
  navMobile.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  // Full-screen overlay: lock the page scroll behind it while open.
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => setMobileNav(!burger.classList.contains("open")));
navMobile.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => setMobileNav(false))
);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMobile.classList.contains("open")) setMobileNav(false);
});

/* ── Enquiry form: send via WhatsApp or Email ── */
const form = document.getElementById("enquiryForm");
let sendMode = "wa";
form.querySelectorAll("button[data-send]").forEach((btn) =>
  btn.addEventListener("click", () => (sendMode = btn.dataset.send))
);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fName").value.trim();
  const phone = document.getElementById("fPhone").value.trim();
  const msg = document.getElementById("fMsg").value.trim();
  const lines = `Hello Fakhri Yarn!\nName: ${name}${phone ? `\nPhone: ${phone}` : ""}\nEnquiry: ${msg}`;
  if (sendMode === "wa") {
    window.open(waLink(lines), "_blank", "noopener");
  } else {
    const subject = `Enquiry from ${name}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  }
});

/* ── Init ── */
applyI18n();
