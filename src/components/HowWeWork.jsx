import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

const STEPS = [
  {
    title: 'Contanos qué le pasa a tu moto',
    text: 'Escribinos por WhatsApp: modelo, año y qué notás. Si tenés un video del ruido, mandalo.',
  },
  {
    title: 'Te pasamos el presupuesto',
    text: 'La revisamos y te decimos qué hay que hacer y cuánto sale. No tocamos nada sin tu OK.',
  },
  {
    title: 'Te avisamos cuando está lista',
    text: 'Te escribimos apenas está terminada para que pases a buscarla.',
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" aria-labelledby="como-titulo" className="bg-carbon text-white px-4 md:px-10 py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        <SectionHeading id="como-titulo" tone="dark" eyebrow="Cómo trabajamos" title="Simple," accent="en 3 pasos" />

        <ol className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[4px] overflow-hidden">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} dir="up" delay={i * 130} className="bg-carbon p-6 md:p-10 flex flex-col gap-4">
              <span
                aria-hidden="true"
                className="font-display text-[5.5rem] md:text-[7.5rem] font-extrabold leading-[0.8] text-amarillo"
              >
                {i + 1}
              </span>
              <h3 className="text-3xl md:text-4xl leading-none">{step.title}</h3>
              <p className="text-humo leading-relaxed">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <WhatsAppButton origin="pasos" label="Pedí tu turno" size="lg" className="w-full sm:w-auto" />
          <p className="text-humo text-sm">Respondemos en horario de taller.</p>
        </Reveal>
      </div>
    </section>
  );
}
