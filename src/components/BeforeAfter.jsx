import { useCallback, useRef, useState } from 'react';
import { site } from '../data/site.js';
import { beforeAfter, works } from '../data/works.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ArrowsHorizontalIcon, InstagramIcon } from './icons.jsx';

function CompareSlider() {
  const [pos, setPos] = useState(50);
  const boxRef = useRef(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX) => {
    const rect = boxRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => dragging.current && moveTo(e.clientX);
  const stop = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setPos((p) => Math.max(0, p - step));
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setPos((p) => Math.min(100, p + step));
    else if (e.key === 'Home') setPos(0);
    else if (e.key === 'End') setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={boxRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerCancel={stop}
      className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8] w-full overflow-hidden rounded-[4px] select-none cursor-ew-resize touch-pan-y bg-carbon-2"
    >
      {/* DESPUÉS: abajo, ocupa todo */}
      <PlaceholderImage
        photo={beforeAfter.after.photo}
        alt={beforeAfter.after.alt}
        label="[Foto DESPUÉS]"
        sizes="(min-width: 1280px) 1200px, 100vw"
        width={1600}
        height={900}
        tone="dark"
        className="absolute inset-0 w-full h-full"
        labelClassName="!inset-x-auto !right-[12%] md:!right-[18%]"
      />
      {/* ANTES: arriba, recortado hasta la manija */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <PlaceholderImage
          photo={beforeAfter.before.photo}
          alt={beforeAfter.before.alt}
          label="[Foto ANTES]"
          sizes="(min-width: 1280px) 1200px, 100vw"
          width={1600}
          height={900}
          tone="darker"
          className="absolute inset-0 w-full h-full"
          labelClassName="!inset-x-auto !left-[12%] md:!left-[18%]"
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-[3px] bg-carbon/85 px-3 py-1.5 font-display text-sm font-bold uppercase tracking-widest text-white">
        Antes
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-[3px] bg-amarillo px-3 py-1.5 font-display text-sm font-bold uppercase tracking-widest text-carbon">
        Después
      </span>

      {/* Manija */}
      <div className="absolute inset-y-0 -translate-x-1/2" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-amarillo" aria-hidden="true" />
        <button
          type="button"
          role="slider"
          aria-label="Comparar antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% de la foto de antes`}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-14 h-14 rounded-full bg-amarillo text-carbon shadow-[0_6px_24px_rgb(0_0_0/45%)] cursor-ew-resize"
        >
          <ArrowsHorizontalIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="trabajos" aria-labelledby="trabajos-titulo" className="bg-carbon text-white px-4 md:px-10 py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="trabajos-titulo"
          tone="dark"
          eyebrow="Trabajos"
          title="Antes y"
          accent="después"
          lead="Mové la barra para ver cómo entró y cómo salió."
        />

        <Reveal className="flex flex-col gap-4">
          <CompareSlider />
          <p className="text-sm text-humo">{beforeAfter.title}</p>
        </Reveal>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {works.map((work, i) => (
            <Reveal as="li" key={work.id} delay={i * 90} className="group relative aspect-square overflow-hidden rounded-[4px]">
              <PlaceholderImage
                photo={work.photo}
                alt={work.alt}
                label={`[Foto: ${work.caption.toLowerCase()}]`}
                sizes="(min-width: 768px) 25vw, 50vw"
                width={800}
                height={800}
                tone={i % 2 ? 'darker' : 'dark'}
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                labelClassName="!top-[38%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/10 to-transparent"
              />
              <p className="absolute left-3 bottom-3 right-3 font-display text-base leading-tight sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white">
                {work.caption}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="flex">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 min-h-12 font-display text-lg font-bold uppercase tracking-wide text-white hover:text-amarillo transition-colors"
          >
            <InstagramIcon className="w-6 h-6" />
            Mirá más trabajos en Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
