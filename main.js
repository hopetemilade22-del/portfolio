/* ============================================================
   NAV: mobile toggle + scrolled header state + active link
   ============================================================ */
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

navToggle.addEventListener("click", () => {
  const open = navToggle.classList.toggle("open");
  mobileNav.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll(".mobile-nav a").forEach((a) => {
  a.addEventListener("click", () => {
    navToggle.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
} else {
  // Fallback for older browsers without IntersectionObserver support
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

// Safety net: guarantee content is visible even if the observer
// above fails to fire in some browser/environment.
setTimeout(() => {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
}, 800);

/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================================
   WORK GRID — rendered from projects (see js/projects-data.js)
   ============================================================ */
const workGrid = document.getElementById("workGrid");
const filterRow = document.getElementById("filterRow");

const chevron = `<svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function mediaMarkup(project) {
  if (project.cover) {
    return `<div class="work-media"><img src="${project.cover}" alt="${project.title}" loading="lazy"></div>`;
  }
  return `<div class="work-media no-image">${project.tag || project.category}</div>`;
}

function cardMarkup(project, index) {
  const featuredClass = project.featured ? " featured" : "";
  return `
    <article class="work-card${featuredClass}" data-category="${project.category}" data-index="${index}">
      ${mediaMarkup(project)}
      <div class="work-copy">
        <span class="work-tag">${project.tag || project.category}</span>
        <h3 class="work-title">${project.title}</h3>
        <p class="work-summary">${project.summary || ""}</p>
        <span class="work-link">Read case study ${chevron}</span>
      </div>
    </article>
  `;
}

function detailMarkup(project) {
  const left = [];
  if (project.brief) left.push(`<div><h4>The brief</h4><p>${project.brief}</p></div>`);
  if (project.approach) left.push(`<div><h4>The approach</h4><p>${project.approach}</p></div>`);
  if (project.results) left.push(`<div><h4>The result</h4><p>${project.results}</p></div>`);

  const right = [];
  if (project.tools && project.tools.length) {
    right.push(`<div><h4>Tools</h4><div class="detail-tools">${project.tools.map(t => `<span class="chip">${t}</span>`).join("")}</div></div>`);
  }
  if (project.gallery && project.gallery.length) {
    right.push(`<div><h4>Gallery</h4><div class="detail-gallery">${project.gallery.map(g => `<img src="${g}" alt="${project.title}" loading="lazy">`).join("")}</div></div>`);
  }

  return `
    <div class="work-detail-inner">
      <div class="detail-block">${left.join("")}</div>
      <div class="detail-block">${right.join("")}<span class="detail-close">Close ↑</span></div>
    </div>
  `;
}

function renderWork(filter = "All") {
  workGrid.innerHTML = "";
  projects.forEach((project, index) => {
    const show = filter === "All" || project.category === filter;
    const wrap = document.createElement("div");
    wrap.className = "work-card-wrap" + (show ? "" : " hidden");
    wrap.style.display = "contents";
    wrap.innerHTML = cardMarkup(project, index);

    const cardEl = wrap.querySelector(".work-card");
    if (!show) cardEl.classList.add("hidden");
    workGrid.appendChild(cardEl);

    const detail = document.createElement("div");
    detail.className = "work-detail" + (show ? "" : " hidden");
    detail.innerHTML = detailMarkup(project);
    workGrid.appendChild(detail);

    cardEl.addEventListener("click", () => {
      const isOpen = detail.classList.contains("open");
      document.querySelectorAll(".work-detail.open").forEach((d) => d.classList.remove("open"));
      if (!isOpen) {
        detail.classList.add("open");
        detail.querySelector(".detail-close").addEventListener("click", (e) => {
          e.stopPropagation();
          detail.classList.remove("open");
        });
        setTimeout(() => detail.scrollIntoView({ behavior: "smooth", block: "nearest" }), 350);
      }
    });
  });
}

renderWork();

filterRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterRow.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".work-detail.open").forEach((d) => d.classList.remove("open"));
  renderWork(btn.dataset.filter);
});
