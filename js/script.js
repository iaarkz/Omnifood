const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainEl = document.querySelectorAll(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

mainEl.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  headerEl.classList.remove("nav-open");
}

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
