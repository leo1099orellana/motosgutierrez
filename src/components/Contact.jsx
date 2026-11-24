import { site } from '../data/site.js';
import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { WhatsAppIcon, ClockIcon, PinIcon, InstagramIcon } from './icons.jsx';

const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region}`;

const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

// [MAPA] Cuando el taller esté cargado en Google Maps, se puede reemplazar por el
// embed oficial (Google Maps → Compartir → Insertar un mapa).
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${fullAddress}, ${site.address.country}`
)}&output=embed`;

function Box({ icon: Icon, title, children, delay }) {
  return (
    <Reveal delay={delay} className="flex gap-4 bg-white border border-carbon/10 rounded-[4px] p-5 md:p-6">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-[4px] bg-carbon text-amarillo shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-2xl leading-none text-carbon">{title}</h3>
        <div className="text-acero leading-relaxed">{children}</div>
      </div>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-hueso px-4 md:px-10 py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <SectionHeading id="contacto-titulo" eyebrow="Contacto" title="Traela" accent="al taller" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 lg:gap-6">
          <div className="flex flex-col gap-4">
            <Box icon={ClockIcon} title="Horarios">
              {site.schedule.map((row) => (
                <p key={row.days}>
                  <span className="text-carbon font-medium">{row.days}:</span> {row.hours}
                </p>
              ))}
              <p className="text-xs mt-1">[Confirmar horarios]</p>
            </Box>

            <Box icon={WhatsAppIcon} title="WhatsApp" delay={90}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_whatsapp', { origin: 'contacto_telefono' })}
                className="inline-flex min-h-11 items-center text-lg font-semibold text-carbon underline decoration-amarillo decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                {site.phoneDisplay}
              </a>
              <p className="text-sm">Turnos, consultas y presupuestos.</p>
            </Box>

            <Box icon={PinIcon} title="Dirección" delay={180}>
              <p className="text-carbon font-medium">{site.address.street}</p>
              <p>{site.address.locality}</p>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-semibold text-carbon underline decoration-amarillo decoration-2 underline-offset-4 hover:decoration-carbon"
              >
                Cómo llegar
              </a>
            </Box>

            <Box icon={InstagramIcon} title="Instagram" delay={270}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_instagram')}
                className="inline-flex min-h-11 items-center font-semibold text-carbon break-all hover:underline"
              >
                {site.instagram}
              </a>
            </Box>
          </div>

          <Reveal dir="right" className="min-h-80 lg:min-h-0 rounded-[4px] overflow-hidden border border-carbon/10 bg-hueso-2">
            <iframe
              title={`Ubicación de ${site.brand} en el mapa`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-80 border-0 grayscale-[35%]"
            />
          </Reveal>
        </div>

        {/* Bloque amarillo */}
        <Reveal className="relative overflow-hidden bg-amarillo rounded-[4px] px-6 py-10 md:px-14 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[11rem] md:text-[16rem] font-extrabold leading-none text-carbon/[0.06] select-none"
          >
            MG
          </span>
          <div className="relative flex flex-col gap-2">
            <p className="font-display text-4xl md:text-6xl font-extrabold uppercase leading-[0.95] text-carbon">
              ¿Le pasa algo a tu moto?
            </p>
            <p className="text-carbon/80 text-base md:text-lg">Mandanos un mensaje y te respondemos.</p>
          </div>
          <WhatsAppButton
            origin="bloque_contacto"
            label="Escribinos por WhatsApp"
            variant="carbon"
            size="lg"
            className="relative w-full lg:w-auto shrink-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
