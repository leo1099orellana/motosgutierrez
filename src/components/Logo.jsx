import { site } from '../data/site.js';

/**
 * Logo provisorio hecho con tipografía: isotipo "MG" en amarillo + nombre.
 * [LOGO] Si hay un logo real, reemplazar este componente por un <img src="/logo.svg" />.
 */
export default function Logo({ className = '', compact = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-[3px] bg-amarillo text-carbon font-display font-extrabold text-lg md:text-xl leading-none tracking-tight -skew-x-6"
      >
        <span className="skew-x-6">MG</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-extrabold uppercase text-[1.3rem] md:text-2xl tracking-wide text-white">
          {site.brand}
        </span>
        {!compact && (
          <span className="mt-0.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] text-humo">
            {site.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
