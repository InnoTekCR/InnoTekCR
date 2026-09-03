# Sitio web de INNOTEK

Landing page oficial de **INNOTEK**, construida con React + TypeScript +
Tailwind CSS sobre Vite. Sitio 100% estático, listo para publicarse en
cualquier hosting de archivos estáticos.

## Stack técnico

- **Vite** — build tool y servidor de desarrollo.
- **React 18 + TypeScript** — componentes tipados y reutilizables.
- **Tailwind CSS** — sistema de diseño utilitario, con la paleta de marca
  de INNOTEK configurada en `tailwind.config.ts`.
- Sin dependencias de UI/animación de terceros: los iconos y las
  animaciones de scroll están hechos a mano (SVG propios +
  `IntersectionObserver`) para mantener el sitio liviano.

¿Por qué Vite en lugar de Next.js? Este sitio es una landing page estática
de una sola página, sin necesidad de renderizado en servidor ni rutas
dinámicas. Vite genera un build 100% estático (HTML + CSS + JS) que se
puede subir a cualquier hosting compartido, VPS o servicio de hosting
estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, etc.),
sin necesitar un servidor Node.js corriendo en producción. Esto simplifica
tanto el mantenimiento como el costo de hosting.

## Estructura del proyecto

```
innotek-website/
├── public/                  # Archivos estáticos servidos tal cual
│   ├── favicon.svg / favicon-32.png / apple-touch-icon.png / favicon-512.png
│   ├── og-image.png         # Imagen para compartir en redes sociales
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── icons/           # Set de iconos SVG propios de INNOTEK
│   │   ├── layout/           # Navbar y Footer
│   │   ├── sections/         # Cada sección de la landing (Hero, Servicios, etc.)
│   │   └── ui/                # Componentes reutilizables (Button, Card, Badge, etc.)
│   ├── data/                 # Contenido de servicios, proceso, portafolio, propuesta de valor
│   ├── hooks/                 # Hooks propios (scroll reveal, navbar sticky, sección activa)
│   ├── lib/
│   │   └── siteConfig.ts      # ⚠️ Datos de contacto (ver sección "Antes de publicar")
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                 # Metadatos SEO / Open Graph
├── tailwind.config.ts          # Paleta de marca, animaciones, sombras
└── vite.config.ts
```

## Cómo ejecutar el proyecto localmente

Requisitos: [Node.js](https://nodejs.org) 18 o superior (recomendado 20+) y npm.

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Esto abrirá el sitio en `http://localhost:5173` con recarga automática al
guardar cambios.

Otros comandos disponibles:

```bash
npm run build     # Genera el build de producción en /dist
npm run preview   # Sirve localmente el build de /dist, para probarlo antes de publicar
npm run lint       # Revisa el código con ESLint
```

> **Nota sobre este entorno de generación:** el sitio fue construido en un
> entorno sin acceso al registro de npm, por lo que no fue posible
> ejecutar aquí `npm install`, `npm run build` ni `npm run lint` de forma
> real. El código fue escrito y revisado cuidadosamente a mano (incluida
> una verificación de sintaxis de todos los archivos), pero **el primer
> paso recomendado al recibir el proyecto es correr `npm install` seguido
> de `npm run build` y `npm run lint` en tu máquina**, y avisarme si algo
> falla para corregirlo de inmediato.

## Antes de publicar: datos pendientes

Por instrucción explícita, no se inventó ningún dato de contacto. Antes de
publicar el sitio, completá estos placeholders:

1. **`src/lib/siteConfig.ts`**
   - `contact.whatsappNumber`: número de WhatsApp real, formato
     `código de país + número` sin espacios (ej: `50688888888`).
   - `contact.whatsappDisplay`: el mismo número, en formato legible
     (ej: `+506 8888-8888`).
   - `contact.email`: correo de contacto real.
   - `contact.instagramUrl` / `contact.instagramUser`: usuario real de Instagram.
   - Mientras el correo y el número sigan con el valor `REEMPLAZAR_...`,
     el sitio lo detecta automáticamente y muestra "pendiente de
     configurar" en vez de un enlace roto.

2. **Dominio final** — reemplazar `https://www.innotek.cr` por el dominio
   definitivo en:
   - `index.html` (etiquetas `canonical`, Open Graph y Twitter Card)
   - `public/robots.txt`
   - `public/sitemap.xml`

3. **Logo oficial** — el isotipo actual (`src/components/ui/Logo.tsx` y
   los favicons en `/public`) es una interpretación tipográfica de la
   marca basada en la descripción de INNOTEK (nodos conectados, azul
   tecnológico). Si existe un archivo de logo oficial, se recomienda
   sustituir este componente y regenerar los favicons/og-image a partir
   de él.

4. **Formulario de contacto** — actualmente, al enviar el formulario se
   abre el programa de correo del visitante con la consulta prellenada
   (no requiere backend). Si más adelante querés que las consultas
   lleguen directo a una base de datos o a un servicio como Formspree,
   Netlify Forms o un correo transaccional, el punto de entrada es la
   función `handleSubmit` en `src/components/sections/Contact.tsx`.

## Cómo publicarlo en un hosting

El resultado de `npm run build` es una carpeta `/dist` con archivos
estáticos (HTML, CSS, JS, imágenes). Esa carpeta es lo único que necesita
el hosting.

**Opción A — Hosting estático moderno (recomendado): Netlify, Vercel o
Cloudflare Pages**
1. Subí el proyecto a un repositorio de GitHub/GitLab.
2. Conectá el repositorio en el panel del proveedor.
3. Configuración de build: `npm run build`, carpeta de salida `dist`.
4. El proveedor te da un dominio gratuito y podés conectar tu dominio propio.

**Opción B — Hosting tradicional (cPanel, hosting compartido, VPS)**
1. Ejecutá `npm run build` en tu máquina.
2. Subí **todo el contenido** de la carpeta `dist/` (no la carpeta en sí)
   a la carpeta pública del hosting (usualmente `public_html/`), por FTP
   o el administrador de archivos del panel.
3. Asegurate de que `index.html` quede en la raíz de `public_html/`.

**Opción C — GitHub Pages**
1. Ejecutá `npm run build`.
2. Publicá el contenido de `dist/` en la rama `gh-pages` (podés usar la
   herramienta `gh-pages` de npm) o configurá GitHub Actions para hacerlo
   automáticamente en cada push.

En cualquiera de las opciones, una vez publicado:

- Verificá que `https://tudominio.com/robots.txt` y
  `https://tudominio.com/sitemap.xml` respondan correctamente.
- Enviá el sitemap a Google Search Console.
- Probá el sitio en Chrome, Firefox, Safari y Edge, en escritorio y móvil.

## Mantenimiento del contenido

Todo el texto de las secciones "Servicios", "Propuesta de valor",
"Proceso" y "Portafolio" vive en archivos separados dentro de `src/data/`,
para poder actualizarlos sin tocar el diseño:

- `src/data/services.ts`
- `src/data/valueProps.ts`
- `src/data/process.ts`
- `src/data/portfolio.ts` — reemplazá los proyectos conceptuales por
  proyectos reales a medida que estén disponibles.
