// Genera favicons, apple-touch-icon e íconos del manifest a partir de public/favicon.svg,
// y el og-image.jpg (1200x630) que se ve al compartir el link por WhatsApp o redes.
// Si existe public/assets/img/originals/hero.jpg, se usa de fondo; si no, fondo carbón.
// Uso: node scripts/generate-brand-assets.mjs
import sharp from 'sharp';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const svg = readFileSync(path.join(publicDir, 'favicon.svg'));

const icons = [
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
];

for (const { file, size } of icons) {
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(path.join(publicDir, file));
  console.log(`✓ ${file}`);
}

const ogSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#141414" stop-opacity="0.96" />
      <stop offset="0.75" stop-color="#141414" stop-opacity="0.55" />
      <stop offset="1" stop-color="#141414" stop-opacity="0.2" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)" />
  <rect x="80" y="150" width="56" height="6" fill="#FFD400" />
  <text x="80" y="290" font-family="'Arial Narrow', Impact, sans-serif" font-weight="800" font-size="104" fill="#FFFFFF">MOTOS GUTIÉRREZ</text>
  <text x="80" y="380" font-family="'Arial Narrow', Impact, sans-serif" font-weight="700" font-size="58" fill="#FFD400">SERVICE · REPARACIÓN · LIMPIEZA</text>
  <text x="80" y="470" font-family="Arial, sans-serif" font-size="32" fill="#D0D0D0">Taller de motos en J. M. Gutiérrez, Berazategui</text>
</svg>
`);

const heroPath = path.join(publicDir, 'assets', 'img', 'originals', 'hero.jpg');
const base = existsSync(heroPath)
  ? sharp(heroPath).resize(1200, 630, { fit: 'cover' })
  : sharp({ create: { width: 1200, height: 630, channels: 3, background: '#141414' } });

await base
  .composite([{ input: ogSvg }])
  .jpeg({ quality: 82 })
  .toFile(path.join(publicDir, 'og-image.jpg'));
console.log('✓ og-image.jpg');
