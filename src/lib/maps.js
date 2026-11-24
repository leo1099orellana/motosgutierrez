import { site } from '../data/site.js';

const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region}`;

/** Abre Google Maps (app en el celular) con la dirección del taller. */
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

// [MAPA] Cuando el taller esté cargado en Google Maps, se puede reemplazar por el
// embed oficial (Google Maps → Compartir → Insertar un mapa).
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${fullAddress}, ${site.address.country}`
)}&output=embed`;
