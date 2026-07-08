# Cobertura de perfiles psicológicos — VitalTrek landing page

Este documento mapea cada sección de la landing (`index.html`) contra los tres
perfiles psicológicos de visitante requeridos — **Recurrente**, **Emocional**,
**Relacional** — y detalla qué se modificó o agregó para cubrirlos.

Los tres perfiles comparten un único destino de conversión: el CTA
**"Solicitar demo"**, presente en navbar, hero, plan Enterprise y como ancla
directa a la sección de contacto humano.

> **Nota de actualización:** el botón "Iniciar sesión" (navbar + hero) y el
> modal de login/registro que abría se retiraron a pedido del usuario. El
> CTA "Solicitar demo" quedó como única acción visible en navbar y hero. El
> banner de recurrencia (`#return-banner`) y la sección Novedades se
> mantienen sin cambios — el perfil Recurrente ya no se apoya en un swap de
> énfasis entre dos botones, sino únicamente en el banner "Novedades desde
> tu última visita".

## Tabla de mapeo

| Sección (`id`) | Perfil(es) que cubre | Estado | Qué se modificó / agregó |
|---|---|---|---|
| Navbar | Recurrente | Modificado | Se reemplazó el botón único "Join" por el CTA **Solicitar demo**, siempre visible. Se añadió el ancla "News" hacia `#novedades`. Ya era sticky con anclas — eso ya estaba cubierto. El botón "Iniciar sesión" y el modal que abría se retiraron (ver nota de actualización arriba). |
| Banner de recurrencia (`#return-banner`) | Recurrente | Nuevo | Franja bajo el navbar, oculta por defecto. `assets/scripts/visitor.js` la muestra solo si `localStorage` detecta una visita previa, con enlace a `#novedades` y botón de cierre. |
| Hero (`#home`) | Emocional (headline/copy) + Recurrente (CTA) | Modificado | Headline técnico → *"Let the adventure be the only risk they take."* / *"Que la aventura sea el único riesgo que corran."* (opción B, aprobada por el usuario). Badge y descripción reescritos en clave humana. CTA único "Solicitar demo" (el botón "Iniciar sesión" se retiró). |
| App preview (`#app-preview`) | Recurrente | Ya cubierto | Grid de screenshots ya era escaneable. Se corrigió un bug preexistente: el iframe de YouTube no tenía wrapper responsive y desbordaba en móvil (ver nota al final). |
| Problem — stats (`#problem`) | Recurrente | Ya cubierto | Se mantiene igual: datos duros para quien decide por lógica/números. No se tocó. |
| **Narrativa (`#narrative`)** | Emocional | Nuevo | 3 pasos visuales (expedición en curso → alerta detectada → respuesta a tiempo) con reveal-on-scroll vía `IntersectionObserver` (CSS + JS, sin librerías). Respeta `prefers-reduced-motion`. |
| Tourists (`#tourists`) | Recurrente (formato) + Emocional (copy) | Modificado | Estructura de checklist/cards intacta (ya era escaneable). Se reescribió el microcopy más técnico ("Real-time position shared...", "Continuous monitoring of heart rate...") para hablar de personas en vez de mecanismos. |
| Agencies (`#agencies`) | Recurrente | Modificado (leve) | Se ajustó `feat-alerts-desc` a un tono más humano ("tu guía recibe la alerta..."). El resto se deja técnico deliberadamente: es contenido B2B operativo, apropiado para el perfil racional/recurrente. |
| Ecosystem (`#ecosystem`) | Recurrente | Ya cubierto + bug corregido | Contenido técnico correcto para este perfil. Se encontró y corrigió un bug preexistente: las claves `data-i18n="ecosystem.*"` no existían en `en.json`/`es.json` (la sección nunca se traducía al español). |
| **Novedades (`#novedades`)** | Recurrente | Nuevo | Cambiog estático (3 items: fecha + título + descripción) en `novedades.*` dentro de los JSON de i18n — editable sin tocar el HTML. Es el destino del banner de recurrencia. |
| Plans (`#plans`) | — | Ya cubierto | Sin cambios de contenido. El CTA del plan Enterprise ahora ancla a `#contact-humano` en vez de ser un botón sin acción. |
| Testimonials (`#testimonials`) | Relacional | Modificado | Se añadió avatar de iniciales (placeholder honesto, sin fotos de stock inventadas) a cada testimonio para atribución completa. El testimonio de Sofia Reyes se expandió a formato "historia" con una línea de contexto antes de la cita. |
| **Prueba social (`#social-proof`)** | Relacional | Nuevo | Badges de texto con nombres de agencia ya mencionadas en los testimonios (AventurAndes Tours, Condor Expeditions Cusco) — sin inventar logos. Contadores animados (expediciones protegidas, turistas monitoreados, agencias aliadas) con conteo al entrar en viewport. |
| About / Team (`#about`) | Relacional | Ya cubierto (mayormente) | La estructura (foto, nombre, rol, 1 línea) ya cumplía el requisito. Se reescribió la línea de cada integrante para sonar humana en vez de un resumen de CV técnico. |
| **FAQ (`#faq`)** | Relacional | Nuevo | Acordeón con `<details>/<summary>` nativo (accesible por teclado sin JS adicional), incluye las preguntas de confianza pedidas: datos de los turistas y ayuda con la implementación, más 3 preguntas operativas adicionales. |
| **Contacto humano (`#contact-humano`)** | Relacional | Nuevo | WhatsApp (`wa.me`), "Agendar llamada" y email, distinto del directorio frío del footer. Es el destino compartido del CTA "Solicitar demo" de los tres perfiles. |
| Footer | — | Modificado (leve) | Se añadieron enlaces a FAQ y Contacto en la columna de navegación. El directorio de contacto original se mantiene sin cambios. |

## Infraestructura nueva

- **`assets/scripts/visitor.js`**: módulo nuevo (mismo patrón que `i18n.js`/`main.js`) con 4 responsabilidades independientes: detección de recurrencia vía `localStorage` (banner de Novedades), cierre del banner, reveal-on-scroll de la narrativa, y animación de contadores. Ambas animaciones respetan `prefers-reduced-motion`.
- **Copy centralizado**: todo el texto nuevo vive en `assets/i18n/en.json` y `assets/i18n/es.json`, siguiendo el mismo sistema `data-i18n` ya existente — no se hardcodeó ningún string nuevo en el HTML.

## Bugs preexistentes corregidos de paso

No estaban en el alcance original, pero bloqueaban directamente el requisito transversal de "mobile-first desde ~375px", así que se corrigieron:

1. **Iframes de YouTube sin wrapper responsive** (`#app-preview` y `#about`): tenían `width="560" height="315"` fijos y desbordaban horizontalmente en cualquier viewport angosto. Ya existían las clases CSS `.app-preview-video-wrap`/`.app-preview-video` (16:9 responsive) pero nunca se aplicaron al iframe real. Se aplicaron.
2. **Sección `ecosystem` sin traducción**: usaba claves `data-i18n="ecosystem.*"` que no existían en ninguno de los dos JSON de i18n, por lo que el texto en español nunca se mostraba. Se agregaron las claves faltantes en ambos idiomas.
3. **Logo del navbar a 100×100px**: sumado a los dos nuevos CTAs, desbordaba el navbar en 375px. Se agregó un override solo dentro del breakpoint móvil existente (≤600px) que lo reduce a 34×34px.

## Verificación realizada

Se levantó un servidor estático local y se recorrió la página con Playwright (Chromium headless) en desktop (1440px) y mobile (375px): sin errores de consola, sin overflow horizontal en ningún ancho, acordeón FAQ funcional, reveal-on-scroll de la narrativa y conteo animado de la prueba social confirmados, y el flujo de visitante recurrente (banner de Novedades + cierre) verificado de extremo a extremo en ambos idiomas. Tras retirar el botón "Iniciar sesión" y el modal, se re-verificó que no quedara código muerto (CSS, JS, claves i18n) ni referencias rotas.
