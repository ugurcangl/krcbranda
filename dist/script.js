const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const revealItems = document.querySelectorAll("[data-reveal]");
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrevious = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
let currentGallery = galleryItems;
let currentIndex = 0;
let touchStartX = 0;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  if (!nav || !menuButton) return;
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function visibleGalleryItems() {
  return galleryItems.filter((item) => !item.classList.contains("is-hidden"));
}

function openLightbox(index) {
  currentGallery = visibleGalleryItems();
  currentIndex = index;
  const item = currentGallery[currentIndex];
  if (!item) return;

  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.querySelector("img")?.alt || "";
  lightboxCaption.textContent = item.dataset.title || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("nav-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("nav-open");
}

function showLightboxItem(direction) {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
  const item = currentGallery[currentIndex];
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.querySelector("img")?.alt || "";
  lightboxCaption.textContent = item.dataset.title || "";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    galleryItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !shouldShow);
      if (shouldShow) {
        item.animate(
          [
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 220, easing: "ease-out" },
        );
      }
    });
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    openLightbox(visibleGalleryItems().indexOf(item));
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrevious?.addEventListener("click", () => showLightboxItem(-1));
lightboxNext?.addEventListener("click", () => showLightboxItem(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox?.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

lightbox?.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 45) showLightboxItem(delta > 0 ? -1 : 1);
}, { passive: true });

window.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showLightboxItem(-1);
  if (event.key === "ArrowRight") showLightboxItem(1);
});
