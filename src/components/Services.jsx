import { services } from '../data/services.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { SERVICE_ICONS } from './icons.jsx';

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-hueso px-4 md:px-10 py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Lo que hacemos"
          accent="en el taller"
          lead="Service, reparación y limpieza en un mismo lugar. Antes de arrancar te pasamos el presupuesto y vos decidís."
        />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal
                as="article"
                key={service.id}
                delay={i * 110}
                className="group relative flex flex-col bg-white border border-carbon/10 rounded-[4px] p-6 md:p-8 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgb(20_20_20/45%)]"
              >
                {/* Línea amarilla que crece al pasar el mouse */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-1 w-12 bg-amarillo transition-all duration-300 group-hover:w-full"
                />

                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-[4px] bg-carbon text-amarillo">
                    <Icon className="w-7 h-7" />
                  </span>
                  <span className="font-display text-5xl font-extrabold leading-none text-carbon/10">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-4xl md:text-[2.6rem] leading-none text-carbon">{service.title}</h3>
                <p className="mt-3 text-acero leading-relaxed">{service.intro}</p>

                <ul className="mt-6 mb-8 flex flex-col border-t border-carbon/10">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3 border-b border-carbon/10 text-[15px] font-medium text-carbon"
                    >
                      <span className="w-2 h-2 bg-amarillo ring-1 ring-carbon/20 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  origin={`servicio_${service.id}`}
                  message={service.message}
                  label="Consultar"
                  icon="arrow"
                  className="mt-auto w-full"
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
