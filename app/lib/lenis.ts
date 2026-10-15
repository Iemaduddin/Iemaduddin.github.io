import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToTop(immediate = false) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}

export function scrollToSection(href: string, offset = 80) {
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -offset });
  } else {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
