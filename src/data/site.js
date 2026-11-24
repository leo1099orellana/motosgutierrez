// Datos centrales del sitio: marca, contacto, horarios, SEO y tracking.
// Editá este archivo para actualizar textos y datos sin tocar los componentes.
// Todo lo que está entre [corchetes] hay que reemplazarlo antes de publicar.

export const site = {
  brand: 'Motos Gutiérrez',
  tagline: 'Taller de motos',
  domain: 'https://motosgutierrez.vercel.app', // [DOMINIO] Cambiar por el dominio propio cuando se compre

  // Zona y dirección: las mismas que Lo de Dani
  zone: 'J. M. Gutiérrez', // aparece en el título principal
  locality: 'Gutiérrez, Berazategui',
  address: {
    street: 'Camino Real Norte 1824',
    locality: 'Gutiérrez, Berazategui',
    region: 'Buenos Aires',
    country: 'AR',
  },

  phoneDisplay: '[11 XXXX-XXXX]', // [NÚMERO] como se lee en la página
  whatsappNumber: '549XXXXXXXXXX', // [NÚMERO] formato wa.me: 549 + característica sin 0 + número sin 15
  whatsappBaseMessage: 'Hola, quiero pedir turno para mi moto',

  instagram: '[@usuario]', // [@USUARIO]
  instagramUrl: 'https://www.instagram.com/', // [@USUARIO] completar con el link al perfil

  // [HORARIOS] confirmar
  schedule: [
    { days: 'Lunes a viernes', hours: '9 a 18 h' },
    { days: 'Sábados', hours: '9 a 14 h' },
  ],

  brands: ['Honda', 'Yamaha', 'Zanella', 'Motomel', 'Corven', 'Gilera', 'Bajaj', 'Kawasaki'],

  seo: {
    title: 'Motos Gutiérrez | Service y reparación de motos en J. M. Gutiérrez',
    description:
      'Service, reparación mecánica y eléctrica y limpieza de motos en J. M. Gutiérrez, Berazategui. Presupuesto sin cargo. Pedí tu turno por WhatsApp.',
    ogImage: '/og-image.jpg',
  },

  // ID de GA4: dejar en null para no cargarlo.
  tracking: {
    ga4Id: null, // ej: 'G-XXXXXXXXXX'
  },
};
