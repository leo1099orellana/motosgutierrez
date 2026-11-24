import { site } from '../data/site.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import { ReceiptIcon, ShieldCheckIcon, BellIcon } from './icons.jsx';

const FACTS = [
  { icon: ReceiptIcon, text: 'Presupuesto sin cargo' },
  { icon: ShieldCheckIcon, text: 'Repuestos de calidad' },
  { icon: BellIcon, text: 'Te avisamos cuando está lista' },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] flex flex-col bg-carbon text-white overflow-hidden">
      {/* [FOTO] Moto en el taller: poné la foto en public/assets/img/originals/hero.jpg,
          corré `npm run images` y cambiá photo={null} por photo="hero". */}
      <PlaceholderImage
        priority
        photo={null}
        alt="Moto sobre el elevador en el taller de Motos Gutiérrez"
        label="[Foto: moto en el taller, horizontal y oscura]"
        sizes="100vw"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 w-full h-full"
        labelClassName="!top-28 !translate-y-0 md:!top-32 md:!left-auto md:!right-10 md:!inset-x-auto md:text-right"
      />
      {/* Degradados negros para que el texto se lea sobre cualquier foto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/75 to-carbon/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden md:block bg-gradient-to-r from-carbon/90 via-carbon/40 to-transparent"
      />

      <div className="flex-1 flex items-end md:items-center">
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-10 pt-28 pb-10 md:pt-36 md:pb-16">
          <div className="max-w-3xl flex flex-col gap-6 md:gap-7">
            <p
              className="hero-in inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-humo"
              style={{ '--reveal-delay': '80ms' }}
            >
              <span className="h-[3px] w-7 bg-amarillo" aria-hidden="true" />
              Taller de motos · {site.locality}
            </p>

            <h1
              className="hero-in text-[3.1rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
              style={{ '--reveal-delay': '160ms' }}
            >
              Service y reparación de motos en <span className="text-amarillo">{site.zone}</span>
            </h1>

            <p
              className="hero-in text-lg md:text-2xl text-white/80 max-w-md"
              style={{ '--reveal-delay': '260ms' }}
            >
              Tu moto lista para salir a laburar.
            </p>

            <div className="hero-in pt-2" style={{ '--reveal-delay': '360ms' }}>
              <WhatsAppButton origin="hero" label="Pedí tu turno" size="lg" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Franja con 3 datos */}
      {/* data-float-avoid: el botón flotante se esconde mientras está encima de esta franja */}
      <div
        data-float-avoid
        className="hero-in border-t border-white/10 bg-carbon/80 backdrop-blur-sm"
        style={{ '--reveal-delay': '480ms' }}
      >
        <ul className="max-w-[1360px] mx-auto px-4 md:px-10 grid grid-cols-3 divide-x divide-white/10">
          {FACTS.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 px-2 md:px-6 first:pl-0 last:pr-0 py-4 md:py-6 text-center md:text-left"
            >
              <Icon className="w-6 h-6 text-amarillo shrink-0" />
              <span className="text-[13px] leading-snug md:text-base font-medium text-white/90">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
