import { reviews } from '../data/reviews.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { GoogleIcon, StarIcon } from './icons.jsx';

const MAX_STARS = 5;

export default function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section id="resenas" aria-labelledby="resenas-titulo" className="bg-hueso px-4 md:px-10 py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <SectionHeading id="resenas-titulo" eyebrow="Reseñas" title="Lo que dicen" accent="los clientes" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-5 lg:gap-6">
          {reviews.map((review, i) => (
            <Reveal
              as="figure"
              key={review.id}
              delay={i * 110}
              className="relative flex flex-col gap-5 bg-white border border-carbon/10 rounded-[4px] p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-0.5" role="img" aria-label={`${review.rating} de ${MAX_STARS} estrellas`}>
                  {Array.from({ length: MAX_STARS }, (_, s) => (
                    <StarIcon
                      key={s}
                      className={`w-5 h-5 ${s < review.rating ? 'text-amarillo drop-shadow-[0_0_0.5px_rgb(20_20_20/60%)]' : 'text-carbon/15'}`}
                    />
                  ))}
                </div>
                {review.source === 'google' && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-carbon/10 px-2.5 py-1 text-xs font-medium text-acero">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    Reseña de Google
                  </span>
                )}
              </div>

              <blockquote className="text-carbon text-base md:text-lg leading-relaxed">“{review.quote}”</blockquote>

              <figcaption className="mt-auto pt-5 border-t border-carbon/10 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-carbon text-amarillo font-display text-lg font-bold"
                >
                  {review.name.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ]/g, '').charAt(0).toUpperCase() || '?'}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-carbon">{review.name}</span>
                  <span className="text-sm text-acero">{review.detail}</span>
                </span>
              </figcaption>

              {review.example && (
                <span className="absolute -top-3 left-6 rounded-[3px] border border-dashed border-carbon/40 bg-hueso px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-acero">
                  [Reseña de ejemplo]
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
