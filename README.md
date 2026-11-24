# Motos Gutiérrez — landing

Landing de una sola página para un taller de motos (service, reparación y limpieza/detailing). Misma base que Lo de Dani: Vite + React + Tailwind CSS v4, pre-renderizada de forma estática con `vite-react-ssg` (el HTML sale del build con el `h1`, los textos y el JSON-LD ya escritos).

## Correr el proyecto

```bash
npm install
npm run dev       # desarrollo, http://localhost:5173
npm run build     # build de producción pre-renderizado -> dist/
npm run preview   # sirve dist/ para probarlo localmente
npm run images    # genera WebP/AVIF a partir de public/assets/img/originals/
```

## Secciones (de arriba abajo)

1. Header fijo (`Nav.jsx`): logo, menú, botón WhatsApp. Menú hamburguesa en celular.
2. Hero (`Hero.jsx`): foto a pantalla completa, título, "Pedí tu turno" y franja con 3 datos.
3. Servicios (`Services.jsx` + `data/services.js`): 3 tarjetas con botón "Consultar".
4. Antes y después (`BeforeAfter.jsx` + `data/works.js`): comparador arrastrable y grilla de 4 trabajos.
5. Marcas (`Brands.jsx`): lista en `site.js` → `brands`.
6. Reseñas (`Reviews.jsx` + `data/reviews.js`).
7. Cómo trabajamos (`HowWeWork.jsx`): 3 pasos.
8. Contacto (`Contact.jsx`): horarios, WhatsApp, dirección, Instagram, mapa y bloque amarillo.
9. Footer (`Footer.jsx`).

Más el botón flotante de WhatsApp (`FloatingWhatsApp.jsx`), visible en celular y escritorio. Se esconde solo mientras queda encima de otro botón de WhatsApp o de la franja del hero, para no tapar nada.

## Dónde editar contenido

Todo lo editable está en `src/data/`, sin tocar JSX:

- `site.js`: nombre, zona, dirección, WhatsApp, mensaje precargado, Instagram, horarios, marcas, SEO, GA4.
- `services.js`: las 3 tarjetas de servicios y el mensaje de WhatsApp de cada "Consultar".
- `works.js`: fotos del antes/después y de la grilla de trabajos.
- `reviews.js`: reseñas.

## Pendientes antes de publicar: buscá `[corchetes]`

- **WhatsApp** `[NÚMERO]`: `src/data/site.js` (`phoneDisplay` y `whatsappNumber`, formato `549` + característica sin 0 + número sin 15, ej. `5491123456789`) y `telephone` en el JSON-LD de `index.html`, además del `<noscript>`.
- **Instagram** `[@USUARIO]`: `site.js` (`instagram`, `instagramUrl`) y `sameAs` en `index.html`.
- **Horarios**: `site.js` (`schedule`) y `openingHoursSpecification` en `index.html`. Después de confirmarlos, borrá el texto `[Confirmar horarios]` en `Contact.jsx`.
- **Fotos** `[Foto: ...]`: ver abajo.
- **Reseñas**: las 3 son de ejemplo y lo dicen en pantalla. Reemplazalas por reseñas reales de Google y sacá `example: true`.
- **Logo**: el logo "MG" está hecho con tipografía (`Logo.jsx`, `public/favicon.svg`). Si hay un logo real, reemplazalo ahí y corré `node scripts/generate-brand-assets.mjs`.
- **Logos de marcas** (opcional): hoy son los nombres en gris. Las instrucciones para usar SVG están en `Brands.jsx`.
- **Dominio**: hoy dice `https://motosgutierrez.vercel.app` en `index.html`, `public/robots.txt`, `public/sitemap.xml` y `site.js`.
- **Mapa**: se arma solo con la dirección. Cuando el taller esté en Google Maps, se puede pegar el embed oficial en `Contact.jsx`.

La zona y la dirección ya están cargadas con los mismos datos de Lo de Dani (Camino Real Norte 1824, Gutiérrez, Berazategui).

## Cómo poner las fotos reales

1. Guardá las fotos originales en `public/assets/img/originals/` (JPG o PNG, buena resolución). Nombres sugeridos: `hero.jpg`, `antes.jpg`, `despues.jpg`, `trabajo-1.jpg` a `trabajo-4.jpg`.
2. Corré `npm run images`. Genera `.webp` y `.avif` en 480/800/1200/1920 px.
3. Poné el nombre sin extensión donde dice `photo: null`:
   - Hero: en `src/components/Hero.jsx`, `photo={null}` → `photo="hero"`.
   - Antes/después y grilla: en `src/data/works.js`.
4. Si existe `originals/hero.jpg`, `node scripts/generate-brand-assets.mjs` la usa de fondo para el `og-image.jpg` (la vista previa cuando se comparte el link por WhatsApp).

Para el estilo: fotos reales del taller y de motos, horizontales para el hero, con luz baja y contraste alto. Los degradados negros ya están puestos para que el texto se lea encima. Para el antes/después, sacá las dos fotos desde el mismo ángulo y con el mismo encuadre.

## Diseño

- Colores en `src/index.css` (`@theme`): carbón `#141414`, blanco hueso `#f2efe8`, un único acento amarillo `#FFD400`.
- Tipografías self-hosted en `public/assets/fonts/`: Barlow Condensed (títulos) e Inter (texto).
- Animaciones de scroll: componente `Reveal.jsx` + `lib/useReveal.js`. Respetan "reducir movimiento" del sistema, y si el JavaScript no carga, el contenido se muestra igual.

## Deploy

Pensado para Vercel: conectar el repo, build command `npm run build`, output `dist`. `vercel.json` ya define los headers de caché.
