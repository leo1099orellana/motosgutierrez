import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';

/**
 * Fila de marcas en gris. Hoy son los nombres escritos con la tipografía del sitio.
 * [LOGOS] Si se consiguen los logos en SVG, ponerlos en public/assets/brands/ y
 * cambiar el <span> por <img src={`/assets/brands/${slug}.svg`} className="h-6 md:h-8 grayscale opacity-60" />.
 */
export default function Brands() {
  return (
    <section aria-labelledby="marcas-titulo" className="bg-blanco px-4 md:px-10 py-16 md:py-20 border-b border-carbon/10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        <Reveal
          as="h2"
          id="marcas-titulo"
          className="inline-flex items-center gap-3 font-sans font-semibold text-xs uppercase tracking-[0.3em] text-acero text-center"
        >
          <span className="h-[3px] w-7 bg-amarillo" aria-hidden="true" />
          Marcas que atendemos
          <span className="h-[3px] w-7 bg-amarillo" aria-hidden="true" />
        </Reveal>

        <Reveal as="ul" dir="fade" className="w-full grid grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-7 items-center">
          {site.brands.map((brand) => (
            <li
              key={brand}
              className="text-center font-display text-lg min-[400px]:text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide text-[#8f8d87] hover:text-carbon transition-colors"
            >
              {brand}
            </li>
          ))}
        </Reveal>

        <Reveal as="p" className="text-sm text-acero text-center">
          ¿Tenés otra marca? Consultanos igual.
        </Reveal>
      </div>
    </section>
  );
}
