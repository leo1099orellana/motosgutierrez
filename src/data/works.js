// Sección "Antes y después".
// `photo`: nombre de la foto (sin extensión) que pusiste en public/assets/img/originals/
// y procesaste con `npm run images`. Mientras esté en null se ve un recuadro [Foto: ...].

export const beforeAfter = {
  title: '[Limpieza completa de una Honda Titan 150]',
  before: { photo: null, alt: 'Moto antes de la limpieza, con barro y grasa en el motor' },
  after: { photo: null, alt: 'La misma moto después de la limpieza y el detailing' },
};

export const works = [
  // [FOTOS] caption: el texto que se ve sobre la foto; ajustalo al trabajo real.
  { id: 1, photo: null, alt: 'Cambio de kit de transmisión en una moto 150', caption: 'Kit de transmisión' },
  { id: 2, photo: null, alt: 'Motor abierto en el banco del taller', caption: 'Reparación de motor' },
  { id: 3, photo: null, alt: 'Revisión del sistema eléctrico de una moto', caption: 'Sistema eléctrico' },
  { id: 4, photo: null, alt: 'Moto recién lavada con el tanque brillando', caption: 'Detailing' },
];
