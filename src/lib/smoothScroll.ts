import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenisInstance = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisInstance = null;
  };
}

/** Smoothly scrolls to a section by id, using Lenis when active, falling back to native smooth scroll. */
export function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -20 });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
