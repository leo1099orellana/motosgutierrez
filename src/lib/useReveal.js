import { useEffect } from 'react';

/**
 * Activa las animaciones de scroll: cada elemento con la clase .reveal recibe
 * .is-visible la primera vez que entra en pantalla (ver index.css).
 */
export function useReveal() {
  useEffect(() => {
    window.__revealReady = true;
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
