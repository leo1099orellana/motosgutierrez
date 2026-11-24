import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { MenuIcon, CloseIcon } from './icons.jsx';

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparente arriba de todo (sobre la foto del hero), sólido al bajar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar con Escape o al pasar a escritorio
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          solid ? 'bg-carbon/95 backdrop-blur border-b border-white/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto max-w-[1360px] h-16 md:h-20 px-4 md:px-10 flex items-center justify-between gap-4"
        >
          <a href="#main" aria-label="Motos Gutiérrez, ir al inicio" className="shrink-0 inline-flex items-center min-h-11">
            <Logo />
          </a>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 font-display text-lg font-semibold uppercase tracking-wider text-white/85 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-amarillo after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <WhatsAppButton origin="nav" label="WhatsApp" size="sm" />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden inline-flex items-center justify-center w-12 h-12 -mr-1 rounded-[4px] text-white hover:text-amarillo"
            >
              {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="md:hidden border-t border-white/10 bg-carbon px-4 pt-2 pb-6 max-h-[calc(100svh-4rem)] overflow-y-auto"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-3xl font-bold uppercase tracking-wide text-white active:text-amarillo"
                >
                  {link.label}
                  <span className="font-sans text-xs font-medium text-humo">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton origin="nav_mobile" label="Pedí tu turno" size="md" className="w-full mt-6" />
        </div>
      </header>
    </>
  );
}
