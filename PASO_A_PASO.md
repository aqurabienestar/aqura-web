# AQURA web — paso a paso en Claude Code

## 0. Preparar (una sola vez)
1. Descomprime `aqura-web-kit.zip` dentro de `Escritorio\Sergio Escritorio\AQURA`. Queda la carpeta `aqura-web-kit`; ábrela y verifica que adentro estén directamente `CLAUDE.md`, `PASO_A_PASO.md`, `docs`, `public` y `.claude` (si `.claude` no aparece, activa "Elementos ocultos" en la pestaña Vista del Explorador).
2. Abre Claude Code en esa carpeta: en la app de escritorio de Claude, sección Code, eligiendo la carpeta; o en una terminal: `cd` a la carpeta y luego `claude`.
3. Cuando Claude Code pida permiso para crear o editar archivos o correr comandos, revisa qué es y aprueba.

## Sesión 1 · Sistema base
Pega esto:

```
Lee CLAUDE.md, docs/handoff.md y la skill .claude/skills/aqura-brand. Luego:
1. Verifica si tengo Node.js (LTS) y Git instalados. Si falta algo, dime cómo instalarlo en Windows y espera.
2. Crea un proyecto Astro en esta misma carpeta sin borrar, mover ni renombrar CLAUDE.md, PASO_A_PASO.md, docs/, .claude/ ni public/.
3. Inicia git y haz un primer commit.
4. Construye el sistema base: tokens de color y tipografía, @font-face de Qartella y Mairo desde public/fonts, Montserrat con @fontsource, layout general, header con el logotipo y el menú (submenú Apnea), footer, botón flotante de WhatsApp, selector ES/EN y favicon.
5. Crea una página /estilos que muestre colores, tipografías, botones y logos para revisar el sistema.
Antes de escribir código, muéstrame el plan en máximo 10 líneas.
```

Cuando termine:
```
Corre el servidor local y dame el enlace para verlo.
```
Abre el enlace (normalmente http://localhost:4321/estilos) y revisa:
- [ ] Qartella en el cuerpo, Montserrat en títulos, Mairo en acentos
- [ ] Colores correctos; #014154 solo en texto
- [ ] Logo nítido en el header
- [ ] En celular (o achicando la ventana) el menú funciona
- [ ] El botón de WhatsApp abre tu chat

Para corregir, describe lo que ves: "El header se ve muy alto en celular, bájalo a 64 px". Al cerrar:
```
Actualiza la sección Estado de CLAUDE.md y haz commit con un mensaje claro.
```

## Sesión 2 · Cursos AIDA
Escribe `/clear` para empezar limpio y pega:

```
Construye /apnea/cursos-aida con el contenido exacto de la sección 5 de docs/handoff.md, respetando el orden de bloques.
- La tabla "Cuál curso es para ti" debe leerse bien en celular (tarjetas apiladas o scroll horizontal; propón la mejor).
- "Para certificarte" va en un desplegable en cada ficha.
- Cada botón abre WhatsApp con un mensaje precargado según el curso o la acción.
- Lo que diga "por definir" queda como [POR DEFINIR] visible.
- Usa espacios reservados para fotos con su nombre según la convención AQURA_[SECCION]_[descripcion]_[numero].
- No toques otras páginas.
Muéstrame el plan antes de escribir código.
```
Revisa en celular y escritorio. Cierra con el mismo mensaje de "Actualiza Estado y commit".

## Sesión 3 · Sesiones personalizadas
`/clear` y:
```
Construye /apnea/sesiones con el contenido de la sección 6 de docs/handoff.md. Mismo estilo de fichas y botones que /apnea/cursos-aida. No toques otras páginas.
```

## Sesión 4 · Home y borradores
`/clear` y:
```
Construye el Home y versiones borrador de Janzu, Travesías, Equipos, Bitácora y Contacto con lo que hay en la sección 7 de docs/handoff.md. Lo que falte va como [POR DEFINIR]. Para Janzu te paso el texto aparte. Muéstrame el plan antes.
```
Para Janzu, copia el texto de tus documentos de Janzu dentro de `docs/janzu.md` antes de esta sesión.

## Sesión 5 · Fotos
Pon las fotos en `public/img/` con los nombres de la convención y pega:
```
Ubica las fotos de public/img en los espacios reservados según su nombre. Optimízalas para web (formato moderno, tamaños responsivos) y escribe textos alternativos descriptivos.
```

## Sesión 6 · Inglés
Cuando el español esté aprobado:
```
Crea la versión en inglés bajo /en/ de las páginas terminadas. Traducción natural, no literal, con el mismo tono sobrio. Precios en USD como [POR DEFINIR]. Hazme una lista de frases donde dudaste de la traducción.
```
Revisa tú (o alguien nativo) las frases dudosas.

## Sesión 7 · Publicar
```
Guíame paso a paso para subir el proyecto a GitHub y publicarlo en Cloudflare Pages. Explícame cada paso antes de hacerlo.
```

## Reglas que te ahorran problemas
- Una sesión, un objetivo. Si se desordena, `/clear` y vuelves a pedir.
- Siempre pide "muéstrame el plan antes" en cambios grandes.
- Cierra cada sesión con commit: si algo se daña después, se vuelve atrás.
- Si Claude Code inventa texto, recuérdale: "El contenido sale solo de docs/handoff.md".
- Cuando cambies un precio o un texto, cámbialo primero en `docs/handoff.md` y luego pide que lo actualice en la web.
