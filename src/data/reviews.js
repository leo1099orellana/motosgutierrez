// Reseñas de clientes. LAS TRES DE ABAJO SON DE EJEMPLO: reemplazalas por reseñas reales
// copiadas de Google y sacá `example: true` (mientras esté, la tarjeta muestra la etiqueta
// "[Reseña de ejemplo]"). Usá source: 'google' solo si la reseña está publicada ahí.
// Formato: { id, quote, name, detail, rating, source, example }

export const reviews = [
  {
    id: 1,
    quote: '[Ejemplo] Le hicieron el service a la Wave y me avisaron por WhatsApp cuando estaba lista. Rápido y sin vueltas.',
    name: '[Nombre del cliente]',
    detail: 'Honda Wave 110',
    rating: 5,
    source: 'google',
    example: true,
  },
  {
    id: 2,
    quote: '[Ejemplo] La moto no arrancaba y en otro lado no le encontraban la falla. Acá la diagnosticaron en el día.',
    name: '[Nombre del cliente]',
    detail: 'Yamaha YBR 125',
    rating: 5,
    source: 'google',
    example: true,
  },
  {
    id: 3,
    quote: '[Ejemplo] Le hicieron la limpieza completa y quedó impecable. Me pasaron el presupuesto antes de tocar nada.',
    name: '[Nombre del cliente]',
    detail: 'Motomel Skua 150',
    rating: 5,
    source: 'google',
    example: true,
  },
];
