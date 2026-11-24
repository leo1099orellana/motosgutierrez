import { site } from '../data/site.js';

/**
 * Arma un link de WhatsApp. Sin argumento usa el mensaje base
 * ("Hola, quiero pedir turno para mi moto"); con argumento manda ese mensaje.
 */
export function whatsappLink(message = site.whatsappBaseMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
