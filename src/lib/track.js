import { site } from '../data/site.js';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
let initialized = false;

function readUtms() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  UTM_KEYS.forEach((key) => {
    try {
      const value = params.get(key);
      if (value) {
        utms[key] = value;
        sessionStorage.setItem(key, value);
      } else {
        const stored = sessionStorage.getItem(key);
        if (stored) utms[key] = stored;
      }
    } catch {
      // sessionStorage bloqueado (modo privado): seguimos sin UTMs guardadas
    }
  });
  return utms;
}

/**
 * Carga GA4 solo si hay un ID configurado en site.js, después del evento load
 * para no frenar la primera carga.
 */
export function initTracking() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  const start = () => {
    const { ga4Id } = site.tracking;
    if (!ga4Id) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id, { send_page_view: true });
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    script.defer = true;
    document.head.appendChild(script);
  };

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

/**
 * Dispara un evento a GA4 y Meta Pixel (si están cargados), con las UTM de la sesión.
 * Los clics a WhatsApp también van a Meta como el evento estándar Contact.
 */
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  const payload = { ...params, ...readUtms() };

  if (typeof window.gtag === 'function') window.gtag('event', event, payload);
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, payload);
    if (event === 'click_whatsapp') window.fbq('track', 'Contact', payload);
  }
}
