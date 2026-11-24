import { photoSrc, photoSrcSet } from '../lib/photos.js';

const TONES = {
  dark: 'stripes-dark text-white/45',
  darker: 'stripes-darker text-white/45',
  light: 'stripes-light text-acero',
};

/**
 * Si `photo` (nombre de la foto en originals/) o `src` están definidos, renderiza
 * una <img> real optimizada. Si no, renderiza un recuadro con la etiqueta
 * [Foto: ...] para que se vea qué foto falta reemplazar, sin pedir imágenes rotas.
 */
export default function PlaceholderImage({
  photo,
  src = photo && photoSrc(photo),
  srcSet = photo && photoSrcSet(photo),
  sizes,
  alt,
  label,
  width,
  height,
  className = '',
  labelClassName = '',
  tone = 'dark',
  priority = false,
}) {
  if (src) {
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? undefined : 'lazy'}
        decoding={priority ? undefined : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        draggable="false"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : 'true'}
      className={`relative ${TONES[tone]} ${className}`}
    >
      <span
        className={`absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-xs md:text-sm font-medium tracking-wide ${labelClassName}`}
      >
        {label || `[Foto: ${alt}]`}
      </span>
    </div>
  );
}
