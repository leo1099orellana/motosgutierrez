import { whatsappLink } from '../lib/whatsapp.js';
import { track } from '../lib/track.js';
import { WhatsAppIcon, ArrowRightIcon } from './icons.jsx';

const VARIANTS = {
  amarillo: 'bg-amarillo text-carbon hover:bg-white',
  carbon: 'bg-carbon text-white hover:bg-negro',
  outline: 'bg-transparent text-white border border-white/25 hover:border-amarillo hover:text-amarillo',
};

const SIZES = {
  sm: 'min-h-11 px-4 text-[15px]',
  md: 'min-h-13 px-6 text-lg',
  lg: 'min-h-14 md:min-h-16 px-7 md:px-9 text-xl md:text-2xl',
};

/**
 * Botón que abre WhatsApp con un mensaje precargado. `origin` identifica desde dónde
 * se tocó para el evento de tracking click_whatsapp (hero, servicio, contacto...).
 */
export default function WhatsAppButton({
  message,
  origin,
  label = 'Pedí tu turno',
  variant = 'amarillo',
  size = 'md',
  icon = 'whatsapp',
  className = '',
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('click_whatsapp', { origin })}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-[4px] font-display font-bold uppercase tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {icon === 'whatsapp' && <WhatsAppIcon className="w-5 h-5 shrink-0" />}
      <span>{label}</span>
      {icon === 'arrow' && (
        <ArrowRightIcon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
}
