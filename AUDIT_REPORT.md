# 🔍 Informe de Auditoría — dnbravo04 (Hoja de Vida Personal)

**Fecha:** 28 de febrero de 2026  
**Proyecto:** Portafolio personal de Diego Bravo Arias  
**Stack:** React 18 + Vite + TailwindCSS + Firebase Hosting  
**URL de deploy:** Firebase Hosting (proyecto: `dnbravo`)

---

## 📊 Resumen Ejecutivo

| Categoría | Puntuación | Estado |
|---|---|---|
| SEO & Meta Tags | 2/10 | 🔴 Crítico |
| Redes Sociales (Open Graph) | 0/10 | 🔴 Crítico |
| Rendimiento | 4/10 | 🟡 Necesita mejora |
| Accesibilidad | 4/10 | 🟡 Necesita mejora |
| Código & Buenas Prácticas | 5/10 | 🟡 Necesita mejora |
| UX/UI & Responsividad | 4/10 | 🟡 Necesita mejora |
| Contenido & Estrategia | 3/10 | 🔴 Crítico |

**Puntuación Global: 3.1 / 10**

---

## 1. 🔴 SEO & Meta Tags — CRÍTICO

### Hallazgos

- **Sin meta description:** El `index.html` no tiene `<meta name="description">`. Los motores de búsqueda no pueden indexar correctamente el sitio.
- **Sin meta keywords:** No hay etiquetas de palabras clave.
- **Title genérico:** Solo dice "Diego Bravo Arias", sin contexto profesional (ej. "Desarrollador de Software").
- **Sin canonical URL:** No hay `<link rel="canonical">`.
- **Sin sitemap.xml:** No existe un archivo sitemap para crawlers.
- **Sin robots.txt:** No hay directivas para motores de búsqueda.
- **Favicon inconsistente:** Hay dos declaraciones de favicon (una SVG de Vite y un emoji 🍃). Se debería unificar con un favicon profesional.
- **Sin datos estructurados (JSON-LD):** No hay schema markup de tipo `Person` o `ProfilePage` que ayude a Google a entender el contenido.

### Acciones Concretas

1. Agregar `<meta name="description" content="Diego Bravo Arias — Desarrollador de Software. Portafolio, proyectos y experiencia profesional.">` al `index.html`.
2. Agregar `<meta name="keywords" content="Diego Bravo, desarrollador software, portafolio, React, QA, Colombia">`.
3. Cambiar el `<title>` a: `Diego Bravo Arias | Desarrollador de Software — Portafolio`.
4. Agregar `<link rel="canonical" href="https://dnbravo.web.app/">`.
5. Crear `public/sitemap.xml` con la URL principal.
6. Crear `public/robots.txt` con directivas básicas.
7. Unificar el favicon con un diseño profesional (PNG/SVG propio).
8. Agregar JSON-LD con schema `Person` en el `<head>`.

---

## 2. 🔴 Redes Sociales (Open Graph & Twitter Cards) — CRÍTICO

### Hallazgos

- **Cero etiquetas Open Graph:** Al compartir la URL en Facebook, LinkedIn, WhatsApp, etc., no se mostrará imagen, título ni descripción personalizados.
- **Cero etiquetas Twitter Card:** Al compartir en X/Twitter, no se renderiza ninguna tarjeta enriquecida.
- **Sin imagen de previsualización (og:image):** No existe una imagen optimizada para compartir en redes (se recomienda 1200×630px).

### Acciones Concretas

1. Agregar las siguientes etiquetas al `<head>` de `index.html`:
   ```html
   <!-- Open Graph -->
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://dnbravo.web.app/">
   <meta property="og:title" content="Diego Bravo Arias | Desarrollador de Software">
   <meta property="og:description" content="Portafolio profesional de Diego Bravo Arias. Desarrollador de software, proyectos y experiencia.">
   <meta property="og:image" content="https://dnbravo.web.app/og-image.png">
   <meta property="og:locale" content="es_CO">

   <!-- Twitter Card -->
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:site" content="@diegobr04">
   <meta name="twitter:title" content="Diego Bravo Arias | Desarrollador de Software">
   <meta name="twitter:description" content="Portafolio profesional de Diego Bravo Arias.">
   <meta name="twitter:image" content="https://dnbravo.web.app/og-image.png">
   ```
2. **Crear una imagen `og-image.png`** de 1200×630px con tu nombre, foto y título profesional. Colocarla en `public/`.
3. Validar con:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 3. 🟡 Rendimiento — NECESITA MEJORA

### Hallazgos

- **Imágenes JPG sin optimizar y muy pesadas:**
  - `imagen1.jpg` → **1.4 MB** (¡excesivo!)
  - `imagen4.jpg` → **1.5 MB** (¡excesivo!)
  - `imagen2.jpg` → 584 KB
  - `imagen3.jpg` → 562 KB
  - **Total solo en imágenes de la sección "Sobre mí": ~4.1 MB**
- **Formato no óptimo:** Las imágenes están en JPG. Deberían estar en **WebP** (como ya hiciste con `man.webp`).
- **Sin lazy loading:** Las imágenes debajo del fold se cargan inmediatamente.
- **Fuentes externas bloqueantes:** Las Google Fonts se importan via `@import` en CSS (render-blocking). Deberían cargarse con `<link rel="preconnect">` y `<link rel="preload">`.
- **Firebase SDK incluido como dependencia** pero `firebase.js` está vacío (0 bytes). Es peso muerto en el bundle.
- **Sin compresión de assets en Firebase Hosting:** No hay headers de caché configurados en `firebase.json`.

### Acciones Concretas

1. **Comprimir y convertir imágenes a WebP:** Reducir cada imagen a < 100 KB. Usar herramientas como `sharp`, `squoosh` o `tinypng.com`.
2. **Agregar `loading="lazy"`** a todas las `<img>` que no estén en el viewport inicial.
3. **Mover Google Fonts al `<head>` del HTML** con `preconnect`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Caveat:wght@400..700&display=swap" rel="stylesheet">
   ```
4. **Eliminar la dependencia `firebase`** del `package.json` si no se usa, o implementar lo que necesites.
5. **Agregar headers de caché en `firebase.json`:**
   ```json
   "headers": [
     { "source": "**/*.@(jpg|jpeg|gif|png|webp|svg)", "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }] },
     { "source": "**/*.@(js|css)", "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }] }
   ]
   ```

---

## 4. 🟡 Accesibilidad (a11y) — NECESITA MEJORA

### Hallazgos

- **Imágenes de portafolio sin `alt`:** En `Portfolio.jsx`, los tres `<img>` tienen `alt=""` vacío. Esto afecta lectores de pantalla y SEO de imágenes.
- **Textos genéricos en Polaroid:** Los `altText` son "Descripción 1", "Descripción 2", etc. No son descriptivos.
- **Captions genéricos:** "Foto 1", "Foto 2"... no aportan contexto.
- **Sin skip navigation:** No hay enlace para saltar al contenido principal.
- **Sin `lang` en elementos dinámicos:** El contenido mezcla español/inglés sin indicar cambios de idioma.
- **El `<main>` está en `Title.jsx`** en vez de envolver todo el contenido de la app.
- **Semántica HTML débil:** `AboutMe` usa `<div>` en lugar de `<section>` con `aria-label`. `Portfolio` no usa `<section>`.
- **Contraste potencial:** El color `caqui` (#d3bb9f) con texto negro puede tener un ratio de contraste limitado en textos pequeños.

### Acciones Concretas

1. Agregar textos `alt` descriptivos a todas las imágenes (ej. `alt="Captura del proyecto Ana y Gabriel"`).
2. Cambiar captions y altTexts del Polaroid a descripciones reales.
3. Usar `<section>` con `aria-labelledby` en las secciones principales.
4. Mover `<main>` a `App.jsx` para envolver todo el contenido.
5. Agregar un enlace "Saltar al contenido" al inicio.
6. Verificar contraste con [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## 5. 🟡 UX/UI & Responsividad — NECESITA MEJORA

### Hallazgos

- **No responsive en móvil:** El layout de `Title.jsx` usa `grid-cols-2` fijo, lo cual en pantallas pequeñas se rompe. Lo mismo aplica para `AboutMe.jsx` con su grid de 2 columnas.
- **Uso de unidades `cm` en CSS:** `w-[calc(100vw-1cm)]` es inusual y poco predecible en pantallas variadas.
- **Polaroids con tamaño fijo (180px):** No se adaptan a pantallas pequeñas.
- **Sin navegación:** No hay menú/navbar para navegar entre secciones.
- **Sin animaciones de scroll suave:** No hay transiciones entre secciones.
- **El componente `Experience` no está implementado:** Está importado pero no se usa en `App.jsx`, y su contenido es solo un placeholder `<div>Experience</div>`.
- **Footer genérico:** Dice "MiPortafolio" en vez de tu nombre. El año está hardcodeado como 2025.
- **Sin botón de contacto / CTA (Call to Action):** No hay un camino claro para que un reclutador te contacte.

### Acciones Concretas

1. **Hacer responsive:** Cambiar grids a `grid-cols-1 md:grid-cols-2` en todas las secciones.
2. Reemplazar `calc(100vw-1cm)` por clases Tailwind como `max-w-7xl mx-auto px-4`.
3. Hacer Polaroids responsivos con tamaños relativos.
4. Agregar una **barra de navegación** con enlaces a cada sección (anclas).
5. Implementar o remover `Experience`.
6. Corregir el Footer: cambiar "MiPortafolio" por "Diego Bravo Arias" y usar `new Date().getFullYear()`.
7. Agregar un **CTA prominente** tipo "Contáctame" o "Descargar CV".

---

## 6. 🟡 Código & Buenas Prácticas — NECESITA MEJORA

### Hallazgos

- **Estado no utilizado:** En `App.jsx`, `useState` se importa y se declara `const [count, setCount] = useState(0)` pero nunca se usa. Es código residual del template de Vite.
- **Import no utilizado:** `Experience` se importa en `App.jsx` pero no se renderiza.
- **Exports inconsistentes:** `Title`, `AboutMe`, `Portfolio`, `Experience` usan `export const` (named export), mientras `Footer`, `Polaroid`, `SocialLinks` usan `export default`. Debe haber consistencia.
- **Imports con ruta absoluta desde `/`:** En `AboutMe.jsx` y `Portfolio.jsx`, los imports de imágenes usan `/imagen1.jpg` (ruta pública). Esto funciona pero no es la práctica recomendada para assets que deberían ser procesados por Vite.
- **`firebase.js` vacío:** Archivo de 0 bytes sin contenido.
- **Nombres de archivos con espacios y caracteres especiales:** `Ana y Gabriel.png`, `Mujeres de la Escrituras.png`. Esto puede causar problemas en URLs. Usar kebab-case.
- **Rotación aleatoria en Polaroid:** `Math.random()` en el render causa que la rotación cambie en cada re-render, lo cual es un side effect.
- **`images.jpeg` no utilizado** en `public/` — archivo huérfano.
- **Sin pruebas (tests):** No hay ningún test unitario o de integración.

### Acciones Concretas

1. Eliminar `useState` y el `count` no utilizado de `App.jsx`.
2. Decidir si implementar `Experience` o remover el import.
3. Estandarizar exports (preferir named exports).
4. Renombrar archivos de imagen a kebab-case: `ana-y-gabriel.png`, `mujeres-escrituras.png`, `workshop-software.png`.
5. Eliminar `firebase.js` vacío o implementar la funcionalidad.
6. Mover la rotación del Polaroid a `useMemo` o a un valor generado una sola vez.
7. Eliminar `images.jpeg` si no se usa.
8. Considerar agregar tests básicos con Vitest.

---

## 7. 🔴 Contenido & Estrategia de Visibilidad — CRÍTICO

### Hallazgos

- **Texto "Sobre mí" en tercera persona implícita:** "Nuestra colaboración en Sydicol" suena confuso. Debería ser en primera persona y más directo.
- **Información desactualizada:** El README menciona que estás en práctica profesional, pero el sitio debería reflejar tu estado actual (febrero 2026).
- **Sin sección de habilidades técnicas:** No hay un listado de tecnologías/lenguajes.
- **Sin sección de experiencia laboral:** El componente `Experience` está vacío.
- **Sin enlace a CV descargable (PDF).**
- **Sin formulario de contacto ni correo visible.**
- **Sin blog o sección de artículos** para mejorar SEO orgánico.
- **Sin testimonios o recomendaciones.**

### Acciones Concretas

1. Reescribir el "Sobre mí" en primera persona, actualizado y orientado al reclutador.
2. Implementar la sección de **Experiencia** con timeline visual.
3. Agregar sección de **Habilidades/Tecnologías** con iconos.
4. Agregar enlace para **descargar CV en PDF**.
5. Agregar **formulario de contacto** o al menos un correo electrónico visible.
6. Considerar agregar un **blog** a futuro para SEO.

---

## 8. Resumen de Prioridades

### 🚨 Hacer AHORA (impacto inmediato en visibilidad)

| # | Acción | Impacto |
|---|---|---|
| 1 | Agregar meta tags SEO (description, keywords, canonical) | SEO |
| 2 | Agregar Open Graph + Twitter Cards | Redes sociales |
| 3 | Crear imagen og-image.png (1200×630px) | Redes sociales |
| 4 | Comprimir imágenes (4MB → <400KB total) | Rendimiento |
| 5 | Hacer el sitio responsive | UX/Accesibilidad |
| 6 | Agregar `alt` descriptivos a todas las imágenes | SEO + Accesibilidad |

### ⚡ Hacer PRONTO (mejora significativa)

| # | Acción | Impacto |
|---|---|---|
| 7 | Implementar sección de Experiencia | Contenido |
| 8 | Agregar sección de Habilidades/Tecnologías | Contenido |
| 9 | Agregar navegación (navbar) | UX |
| 10 | Agregar CTA de contacto / descargar CV | Conversión |
| 11 | Optimizar carga de fuentes (preconnect) | Rendimiento |
| 12 | Crear sitemap.xml y robots.txt | SEO |

### 📋 Hacer DESPUÉS (refinamiento)

| # | Acción | Impacto |
|---|---|---|
| 13 | Limpiar código muerto (useState, imports, firebase.js) | Calidad |
| 14 | Renombrar archivos a kebab-case | Mantenibilidad |
| 15 | Agregar JSON-LD schema markup | SEO avanzado |
| 16 | Agregar tests con Vitest | Calidad |
| 17 | Configurar caché en Firebase | Rendimiento |
| 18 | Considerar blog para SEO orgánico | SEO a largo plazo |

---

## 🛠️ Herramientas de Validación Recomendadas

- **SEO:** [Google PageSpeed Insights](https://pagespeed.web.dev/), [Lighthouse](chrome://inspect)
- **Open Graph:** [Facebook Debugger](https://developers.facebook.com/tools/debug/), [metatags.io](https://metatags.io/)
- **Accesibilidad:** [WAVE](https://wave.webaim.org/), [axe DevTools](https://www.deque.com/axe/)
- **Rendimiento:** [GTmetrix](https://gtmetrix.com/), [WebPageTest](https://www.webpagetest.org/)
- **Imágenes:** [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/)

---

*Informe generado el 28 de febrero de 2026. Proyecto: dnbravo04.*
