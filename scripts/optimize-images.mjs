// Genera versiones WebP y AVIF en varios anchos para cada foto en
// public/assets/img/originals/, listas para usar con srcset y sizes.
// Uso: npm run images
//   (poné las fotos originales en public/assets/img/originals/ antes de correrlo)
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const originalsDir = path.join(__dirname, '..', 'public', 'assets', 'img', 'originals');
const outDir = path.join(__dirname, '..', 'public', 'assets', 'img');

// Mantener igual que WIDTHS en src/lib/photos.js
const WIDTHS = [480, 800, 1200, 1920];
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

if (!existsSync(originalsDir)) {
  console.log(`No existe ${originalsDir}. Creala y poné ahí las fotos originales.`);
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });

const files = readdirSync(originalsDir).filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()));

if (files.length === 0) {
  console.log('No hay imágenes en public/assets/img/originals/.');
  process.exit(0);
}

for (const file of files) {
  const name = path.parse(file).name;
  const input = path.join(originalsDir, file);
  const metadata = await sharp(input).rotate().metadata();

  for (const width of WIDTHS) {
    // Si la foto es más chica que el ancho pedido, igual se genera ese archivo
    // (sin agrandarla) para que el srcset nunca apunte a una imagen que no existe.
    const target = metadata.width && width > metadata.width ? metadata.width : width;

    await sharp(input)
      .rotate()
      .resize({ width: target })
      .webp({ quality: 72 })
      .toFile(path.join(outDir, `${name}-${width}.webp`));

    await sharp(input)
      .rotate()
      .resize({ width: target })
      .avif({ quality: 55 })
      .toFile(path.join(outDir, `${name}-${width}.avif`));

    console.log(`✓ ${name}-${width}.webp / .avif`);
  }
}

console.log('\nListo. Ahora poné el nombre de la foto (sin extensión) en `photo` donde corresponda.');
