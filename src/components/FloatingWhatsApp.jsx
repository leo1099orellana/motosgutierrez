import { useEffect, useRef, useState } from 'react';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { WhatsAppIcon } from './icons.jsx';

// Margen alrededor del botón para considerar que toca a otro botón de WhatsApp
const GAP = 8;

/**
 * Botón flotante fijo abajo a la derecha, en celular y en escritorio.
 * Se esconde solo mientras queda encima de otro botón de WhatsApp (que hace lo mismo)
 * o de un elemento marcado con data-float-avoid, así nunca tapa nada de la página.
 */
export default function FloatingWhatsApp() {
  const [coversCta, setCoversCta] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const touching = new Set();
    let observer;

    const watch = () => {
      observer?.disconnect();
      touching.clear();
      setCoversCta(false);

      const rect = button.getBoundingClientRect();
      const top = rect.top - GAP;
      const left = rect.left - GAP;
      const bottom = window.innerHeight - rect.bottom - GAP;
      const right = window.innerWidth - rect.right - GAP;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) touching.add(target);
            else touching.delete(target);
          });
          setCoversCta(touching.size > 0);
        },
        { rootMargin: `${-top}px ${-right}px ${-bottom}px ${-left}px` }
      );
      document
        .querySelectorAll('main a[href*="wa.me"], [data-float-avoid]')
        .forEach((el) => observer.observe(el));
    };

    watch();
    window.addEventListener('resize', watch);
    return () => {
      window.removeEventListener('resize', watch);
      observer?.disconnect();
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('click_whatsapp', { origin: 'flotante' })}
      aria-label="Pedí tu turno por WhatsApp"
      className={`group fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-8 md:bottom-8 inline-flex items-center gap-3 h-15 rounded-full bg-amarillo text-carbon pl-4 pr-4 md:pr-6 shadow-[0_10px_30px_-6px_rgb(0_0_0/55%)] ring-2 ring-carbon transition-all duration-300 hover:bg-white ${
        coversCta ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <WhatsAppIcon className="w-7 h-7 shrink-0" />
      <span className="hidden md:inline font-display text-lg font-bold uppercase tracking-wide">Pedí tu turno</span>
    </a>
  );
}
