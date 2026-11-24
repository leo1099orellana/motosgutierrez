import { site } from '../data/site.js';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { mapsSearchUrl } from '../lib/maps.js';
import Logo from './Logo.jsx';
import { NAV_LINKS } from './Nav.jsx';
import { InstagramIcon, PinIcon, WhatsAppIcon } from './icons.jsx';

export default function Footer() {
  // pb-28 en mobile: al final de la página el botón flotante no queda sobre el texto
  return (
    <footer className="bg-negro text-white px-4 md:px-10 pt-16 md:pt-20 pb-28 md:pb-10">
      <div className="max-w-[1280px] mx-auto grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-humo text-sm leading-relaxed max-w-xs">
            Service, reparación y limpieza de motos en {site.zone}, {site.address.locality.split(', ').pop()}.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-humo">Secciones</p>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center font-display text-lg font-semibold uppercase tracking-wide text-white/85 hover:text-amarillo transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-humo">Contacto</p>
          <ul className="flex flex-col gap-3 text-sm text-white/85">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_instagram')}
                className="inline-flex items-center gap-2.5 min-h-11 hover:text-amarillo transition-colors"
              >
                <InstagramIcon className="w-5 h-5 shrink-0" />
                {site.instagram}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_whatsapp', { origin: 'footer' })}
                className="inline-flex items-center gap-2.5 min-h-11 hover:text-amarillo transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_mapa', { origin: 'footer' })}
                className="inline-flex items-start gap-2.5 min-h-11 py-1 hover:text-amarillo transition-colors"
              >
                <PinIcon className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.locality}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-humo">
        <p>
          © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
        </p>
        <p>Taller de motos · {site.locality}</p>
      </div>
    </footer>
  );
}
