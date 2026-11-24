# AQURA — sitio web

Sitio de AQURA, la marca de apnea, terapia acuática (Janzu) y bienestar de Sergio Mejía Martínez (Pereira, Colombia). AIDA Master Instructor, bicampeón nacional de apnea indoor (2021 y 2022), creador del enfoque Apnea Integrativa.

- Contenido y decisiones: `docs/handoff.md`. Es la fuente de verdad del texto. **No inventes contenido**: lo que no esté ahí va como `[POR DEFINIR]` visible.
- `docs/` es privado: está en `.gitignore` y existe solo en el PC de Sergio. No subirlo ni copiar al código lo marcado como interno (precios de Janzu, contactos, estrategia).
- Identidad visual: skill `.claude/skills/aqura-brand/SKILL.md`. Úsala en todo lo visual y en todo texto escrito en nombre de AQURA.
- Responde y escribe en español.

## Objetivo del sitio
Dar credibilidad a quien llega desde Instagram (`@sergio.mejia.m`) y llevarlo a WhatsApp. **Toda reserva pasa por WhatsApp**: no hay carrito, ni pasarela, ni formularios de pago.

## Stack
- Astro, sitio estático. Componentes por sección en `src/components/`, páginas en `src/pages/`.
- CSS propio con variables (sin frameworks pesados). Mobile first.
- Archivos estáticos ya listos en `public/` (no moverlos ni renombrarlos):
  - `public/fonts/` Qartella (Regular, Italic, Light, Bold) y Mairo, en woff2
  - `public/logos/` logos con fondo transparente
  - `public/favicon/` favicon e íconos
- Montserrat: instalar `@fontsource/montserrat` (autoalojada, sin Google Fonts).
- Hosting previsto: Cloudflare Pages.

## Tokens de diseño
```css
--color-azul-oscuro: #00687A;   /* principal, puede ser fondo */
--color-turquesa:    #00B7B6;   /* principal, puede ser fondo */
--color-aqua:        #44D8C5;   /* principal, puede ser fondo */
--color-texto:       #014154;   /* solo texto, NUNCA fondo */
--color-lima:        #CEE290;   /* acento, nunca dominante */
--color-crema:       #EFEDC3;   /* acento, nunca dominante */
--color-naranja:     #FF8000;   /* acento mínimo, nunca dominante */
--font-titulos: 'Montserrat', sans-serif;
--font-cuerpo:  'Qartella', sans-serif;
--font-acento:  'Mairo', serif;
```

## Logos (`public/logos/`)
| Archivo | Uso |
|---|---|
| `aqura-logotipo-azul.png` | Header y footer sobre fondo claro |
| `aqura-imagotipo-color.png` | Portada y piezas grandes sobre fondo claro |
| `aqura-imagotipo-blanco.png` | Sobre fondos de color o fotos oscuras |
| `aqura-imagotipo-isotipo-blanco.png` | Sobre turquesa o aqua |
| `aqura-isotipo-turquesa.png` | Ícono suelto, marca de agua, favicon |

Respetar el área de protección del manual. Nunca deformar, recolorear ni poner texto encima del logo.

## Reglas de marca y tono
- `AQURA` siempre en mayúsculas.
- Tono sobrio y contemplativo: sin exclamaciones, sin emojis, sin iconografía espiritual genérica (mandalas, chakras, budas).
- Lo Zen y lo hindú se sienten en el ritmo, el espacio en blanco y el lenguaje, no se nombran.
- Se escribe al lector de "tú".

## Estructura
Menú: `Apnea ▾ (Cursos AIDA · Sesiones) | Janzu | Travesías | Equipos | Sergio` + botón WhatsApp.
- `/` Home · `/apnea/cursos-aida` · `/apnea/sesiones` · `/janzu` · `/travesias` y `/travesias/<slug>` · `/equipos` · `/bitacora` y `/bitacora/<slug>` · `/contacto`
- "Sergio" enlaza a `https://sergiomejiamartinez.pages.dev` en pestaña nueva.
- Bitácora fuera del menú: accesible desde home y footer.

## Bilingüe
- Español en la raíz, inglés bajo `/en/` con la misma estructura. Selector ES / EN en el header.
- Textos en archivos de contenido separados por idioma, no escritos a mano dentro de los componentes.
- Precios: COP en español, USD en inglés (`[POR DEFINIR]` hasta que Sergio los dé).

## WhatsApp
- Número: +57 313 788 2713 → enlace `https://wa.me/573137882713?text=<mensaje codificado>`
- Botón flotante en todo el sitio, con mensaje precargado según la página (ej.: "Hola Sergio, quiero información sobre el curso AIDA 2").

## Forma de trabajar
- Una sesión, un objetivo. No toques páginas que no están en el pedido.
- Antes de dar algo por terminado: correr `npm run build` sin errores y revisar en 375 px de ancho (celular) y en escritorio.
- Accesibilidad básica: textos alternativos en imágenes, contraste suficiente, navegación con teclado.
- Al cerrar cada sesión, actualizar la sección "Estado" de este archivo.

## Estado
- [x] Sistema base (tokens, fuentes, header, footer, botón WhatsApp, selector de idioma) · 2026-11-19
  - Estilos en `src/styles/` (`tokens.css`, `fuentes.css`, `global.css`); layout en `src/layouts/BaseLayout.astro`.
  - Textos de interfaz en `src/i18n/es.ts` y `en.ts`; rutas, menú y `enlaceWhatsapp()` en `src/i18n/index.ts`.
  - Cada página pasa `whatsappMensaje` al layout para el mensaje precargado.
  - `/estilos` es la página de referencia interna (noindex, fuera del menú). `/` y `/en/` son marcadores `[POR DEFINIR]`.
- [x] Cursos AIDA (ES) · 2026-11-19
  - Contenido en `src/contenido/es/cursos-aida.ts` (tipos en `src/contenido/tipos.ts`); secciones en `src/components/cursos-aida/`.
  - Componentes reutilizables: `Texto` (resalta `[POR DEFINIR]`), `BotonWhatsapp`, `FotoPendiente`, `PreguntasFrecuentes`, `CierreWhatsapp`.
  - Pendiente de Sergio: fotos (encabezado y una por nivel), próximas fechas, qué incluye el precio, política de cancelación, equipo propio, requisito no logrado, precio de nivelación. El cierre reutiliza la frase del encabezado hasta tener texto propio.
- [x] Sesiones personalizadas (ES) · 2026-11-19
  - Contenido en `src/contenido/es/sesiones.ts`; secciones en `src/components/sesiones/`.
  - Pendiente de Sergio: precios en USD, si los grupos incluyen empresas, fotos si las quiere. El cierre reutiliza la frase del encabezado.
- [x] Home (ES, borrador) · 2026-11-19
  - Contenido en `src/contenido/es/home.ts`; secciones en `src/components/home/`.
  - El H1 usa "Apnea, terapia acuática y bienestar." (descripción del handoff) mientras llega la frase de marca.
  - Pendiente de Sergio: frase de marca, textos de Janzu y Travesías, próxima travesía (nombre, fecha, lugar, tipo), precio y foto de la boya, extracto de "Teoría del abismo".
- [x] Janzu, Travesías, Equipos, Bitácora, Contacto (borradores, ES) · 2026-11-19
  - Contenido en `src/contenido/es/{janzu,travesias,equipos,bitacora,contacto}.ts`. Travesías y Bitácora generan una página por elemento (`[slug].astro`).
  - Compartidos nuevos: `EncabezadoPagina`, `BloquesTexto`, `ProximaTravesia` (Home y Travesías).
  - Fotos: cada espacio reservado muestra su nombre de archivo con la convención `AQURA_[SECCION]_[descripcion]_[numero]` (irán en `public/img/`).
  - Contacto: el formulario no usa servidor; arma el mensaje y abre WhatsApp.
  - Pendiente: datos de cada travesía, precio y descripción de la boya, textos de la Bitácora (lanzar con 2 o 3).
- [x] Janzu completa (ES) · 2026-11-19
  - Fuente: `docs/janzu.md` (documento maestro). Usar solo secciones `[PUBLICABLE]` y respetar sus alertas (§0).
  - Contenido en `src/contenido/es/janzu.ts`; secciones en `src/components/janzu/`. Precios ocultos por decisión de Sergio (`inversion.mostrarPrecios: false`): la web remite a WhatsApp.
  - Pendiente de Sergio: protocolo en embarazo, política de cancelación y vigencia del paquete, reescribir el texto poético con voz propia.
- [x] Fotos: registro central en `src/contenido/fotos.ts` (32 fotos). `/fotos` (interna, noindex) las lista por página. `FotoPendiente` falla en el build si pide una foto que no está registrada.
- [ ] Versión en inglés
- [ ] Publicación en Cloudflare Pages
