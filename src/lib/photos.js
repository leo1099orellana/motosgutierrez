// Rutas de las versiones .webp que genera `npm run images` para cada foto de originals/.
// Mantener WIDTHS igual que en scripts/optimize-images.mjs.
const WIDTHS = [480, 800, 1200, 1920];

export const photoSrc = (name) => `/assets/img/${name}-1200.webp`;

export const photoSrcSet = (name) =>
  WIDTHS.map((width) => `/assets/img/${name}-${width}.webp ${width}w`).join(', ');
