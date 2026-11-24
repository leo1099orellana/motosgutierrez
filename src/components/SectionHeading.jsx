import Reveal from './Reveal.jsx';

const TONES = {
  light: { eyebrow: 'text-acero', title: 'text-carbon', lead: 'text-acero', accent: 'marker' },
  dark: { eyebrow: 'text-humo', title: 'text-white', lead: 'text-humo', accent: 'text-amarillo' },
};

/**
 * Encabezado de sección: rótulo chico + título grande en mayúsculas.
 * `accent` es la parte del título que se destaca (amarilla en oscuro, marcador en claro).
 */
export default function SectionHeading({ eyebrow, title, accent, lead, tone = 'light', align = 'left', id }) {
  const t = TONES[tone];
  const center = align === 'center';

  return (
    <Reveal className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'}`}>
      <span className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${t.eyebrow}`}>
        <span className="h-[3px] w-7 bg-amarillo" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 id={id} className={`text-[2.6rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl ${t.title}`}>
        {title}
        {accent ? (
          <>
            {' '}
            <span className={t.accent}>{accent}</span>
          </>
        ) : null}
      </h2>
      {lead && <p className={`max-w-xl text-base md:text-lg leading-relaxed ${t.lead}`}>{lead}</p>}
    </Reveal>
  );
}
