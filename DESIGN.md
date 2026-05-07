---
name: Finca La Hermosa
description: Venue privado para experiencias y celebraciones en entorno natural, EDOMEX.
colors:
  forest-green: "#2d4949"
  forest-green-dark: "#1e3232"
  forest-green-mid: "#4a6e6e"
  warm-terracotta: "#c07a5a"
  terracotta-light: "#e8c4ad"
  ivory-cream: "#fffdf8"
  warm-cream: "#f5f0e8"
  cream-border: "#ede6d6"
  body-text: "#5a5040"
  muted-text: "#8c7d68"
  carbon: "#1a1a1a"
  frosted-nav: "rgba(39,63,61,0.78)"
typography:
  display:
    fontFamily: "'Against', serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "3rem"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "'Jost', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Jost', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  none: "0"
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.ivory-cream}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.forest-green-mid}"
    textColor: "{colors.ivory-cream}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest-green}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.ivory-cream}"
  button-accent:
    backgroundColor: "{colors.warm-terracotta}"
    textColor: "{colors.ivory-cream}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-terracotta}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.warm-terracotta}"
    textColor: "{colors.ivory-cream}"
  card-light:
    backgroundColor: "{colors.ivory-cream}"
    rounded: "{rounded.lg}"
    padding: "0"
  card-dark:
    backgroundColor: "{colors.forest-green}"
    rounded: "{rounded.lg}"
    padding: "0"
---

# Design System: Finca La Hermosa

## 1. Overview

**Creative North Star: "The Private Garden Party"**

Finca La Hermosa es un lugar donde la naturaleza es anfitriona y el cuidado humano es el detalle que lo eleva. El sistema de diseño refleja exactamente esa dualidad: orgánico pero editado, accesible pero especial. Cada superficie comunica que este espacio fue pensado para ti, no para el mercado masivo.

La densidad es baja. El espacio en blanco es intencional. La tipografía hace el trabajo pesado: Against para los momentos cinematográficos, Cormorant Garamond para la calidez editorial, Jost para la claridad funcional. La fotografía full-bleed es la textura del lugar; el sistema no compite con ella, la enmarca.

Lo que este sistema rechaza explícitamente: el repertorio visual de las bodas (encajes, rosados, cursiva ornamental), los salones de eventos genéricos (gradientes vibrantes, plantillas saturadas), el lujo frío y distante (negro + dorado, tipografía sans pesada, geometría dura), y los sitios turísticos de destino (banners de oferta, contadores de descuento, paletas tropicales).

**Características clave:**
- Fondo crema suave como superficie por defecto; verde oscuro para secciones de impacto
- Terracota como acento: guía la mirada, nunca domina
- Glassmorphism reservado para nav y elementos flotantes sobre foto
- Movimiento escalonado y cinematográfico: las cosas aparecen, no saltan
- Fotografía como narrativa, no como decoración

## 2. Colors: La Paleta del Jardín

Una paleta de tierra y bosque con un toque de arcilla cálida. Cada color tiene precedente en el entorno natural de la finca.

### Primary
- **Deep Forest Green** (`#2d4949`): El verde principal de la marca. Fondos de secciones de alto impacto, botones primarios, nav al hacer scroll. Comunica estabilidad y naturaleza sin ser frío.
- **Forest Dark** (`#1e3232`): Verde más profundo para footer, secciones oscuras, capas de profundidad. No es negro: siempre hay temperatura de bosque.
- **Forest Mid** (`#4a6e6e`): Hover states y texto secundario sobre fondo verde. Mantiene legibilidad sin usar blanco puro.

### Secondary
- **Warm Terracotta** (`#c07a5a`): El acento de la marca. Overlines, CTAs de alta prioridad, detalles, bullets decorativos. Evoca arcilla, tierra cálida, atardecer. Se usa con economía.
- **Terracotta Light** (`#e8c4ad`): Versión desaturada para tags, hover backgrounds, overlines sobre fondos oscuros.

### Neutral
- **Ivory Cream** (`#fffdf8`): Fondo por defecto. No es blanco; tiene temperatura de papel envejecido.
- **Warm Cream** (`#f5f0e8`): Secciones alternas, fondos de tarjetas ligeras.
- **Cream Border** (`#ede6d6`): Divisores, bordes, separadores.
- **Body Text** (`#5a5040`): Párrafos. Marrón-gris cálido; nunca negro puro sobre crema.
- **Muted Text** (`#8c7d68`): Captions, labels, metadatos.
- **Carbon** (`#1a1a1a`): Títulos sobre fondo claro únicamente.

### Named Rules
**La Regla del Acento Escaso.** La terracota aparece en ≤15% de cualquier pantalla. Su rareza es su poder. Nunca se usa como color de fondo en secciones completas: eso le quitaría su rol de guía visual.

**La Regla sin Blanco Puro.** Ninguna superficie usa `#ffffff`. El ivory cream (`#fffdf8`) es el blanco del sistema. Esta diferencia es sutil pero elimina la frialdad clínica del blanco digital.

## 3. Typography: Editorial de Jardín

**Display Font:** Against (local OTF, sin fallback razonable)
**Editorial Font:** Cormorant Garamond (Google Fonts, fallback: Georgia, serif)
**Body Font:** Jost (Google Fonts, fallback: sans-serif)

**Carácter:** La tríada crea contraste máximo sin perder cohesión. Against es bruta y monumental; Cormorant Garamond es delicada y literaria; Jost es funcional y neutra. Juntas evocan un lugar donde la naturaleza y el cuidado coexisten.

### Hierarchy
- **Display** (Against, 400, `clamp(3.5rem, 8vw, 7rem)`, leading 1.1): Títulos hero. Siempre en mayúsculas o mixto orgánico. Solo en secciones de apertura o momentos cinematográficos de impacto.
- **Headline** (Cormorant Garamond, 300, `3rem`, leading 1.3): H2 de secciones. Con frecuencia en itálica para el verso emocional (`"diseñada para ti."`). Máximo 2 líneas.
- **Title** (Cormorant Garamond, 400, `1.75rem`, leading 1.3): H3, headings de cards, subtítulos. El peso regular le da más presencia que el headline a menor tamaño.
- **Body** (Jost, 300–400, `1rem`, leading 1.6): Párrafos descriptivos. Máximo 65ch de ancho. Peso 300 para descripciones largas, 400 para copy de interfaz.
- **Label** (Jost, 500, `0.75rem`, leading 1, letter-spacing 0.1em, UPPERCASE): Overlines, categorías, tags de nav, etiquetas de estado. Siempre en terracota (`#c07a5a`) o muted-text según fondo.

### Named Rules
**La Firma Hero.** Todo hero lleva la misma estructura de dos líneas: Against blanco grande arriba, Cormorant itálica terracota abajo. No se rompe esta convención.

**Against solo en display.** Against no se usa como body ni como label. Su poder viene de la escasez y el contraste de tamaño.

## 4. Elevation: Sombras Ambientales + Vidrio

El sistema usa un modelo híbrido: sombras sutiles para superficies independientes en fondos claros, y glassmorphism para elementos flotantes sobre fotografía o fondos oscuros. No hay sombras dramáticas ni bordes elevados; la profundidad es ambiental.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 3px rgba(26,26,26,0.08)`): Elementos pequeños en reposo: chips, tags, inputs en foco.
- **`--shadow-md`** (`0 4px 16px rgba(26,26,26,0.10)`): Cards en hover, dropdowns, tooltips.
- **`--shadow-lg`** (`0 12px 40px rgba(26,26,26,0.13)`): Modales, paneles laterales, elementos elevados al interactuar.
- **`--shadow-card`** (`0 2px 8px rgba(45,73,73,0.08), 0 8px 24px rgba(45,73,73,0.06)`): Cards en reposo. Tintado verde para evitar la frialdad del negro puro; crea profundidad cálida.

### Glassmorphism Vocabulary
- **Nav frosted** (`background: rgba(39,63,61,0.78); backdrop-filter: blur(18px) saturate(1.4)`): Nav al hacer scroll. El color base es forest-green semitransparente, no negro genérico.
- **Glass card** (`background: rgba(39,63,61,0.52); backdrop-filter: blur(16px) saturate(1.3); border: 1px solid rgba(255,255,255,0.14)`): Cards flotando sobre imagen de fondo.
- **Glass button** (`background: rgba(30,30,24,0.38); backdrop-filter: blur(18px) saturate(1.4); border: 1px solid rgba(255,255,255,0.18)`): CTAs directamente sobre fotografía full-bleed.

### Named Rules
**La Regla del Vidrio Restringido.** Glassmorphism solo sobre imágenes o fondos oscuros. Nunca sobre fondos claros (crema, blanco), donde se ve genérico y vacío. Si no hay imagen de fondo, usa la card sólida correspondiente.

**La Regla de la Sombra Verde.** Las sombras de cards usan `rgba(45,73,73,...)` (verde-finca) como color base, nunca `rgba(0,0,0,...)`. Esto alinea la sombra con la temperatura cromática del sistema.

## 5. Components

### Buttons

Forma de píldora (`border-radius: 999px`) en todas las variantes. Tipografía Jost 500, 12px, `letter-spacing: 0.1em`, UPPERCASE. Hover con `transform: scale(1.05)` y transición `260ms ease`.

- **Primary** (verde-finca bg, ivory-cream text, `padding: 14px 28px`): CTA principal. Secciones oscuras y hero.
- **Secondary** (transparent bg, verde-finca border 1.5px + text, `padding: 13px 28px`): Acción alterna sobre fondo claro. Hover invierte colores.
- **Accent** (terracota bg, ivory-cream text): CTA de alta prioridad. Usar con economía; máximo uno por pantalla visible.
- **Ghost** (transparent bg, terracota border 1.5px + text): Sobre fondos oscuros o verdes. Hover rellena terracota.
- **Link** (terracota text, underline en terracota-light): Acciones inline como "Ver más" o "Leer detalle".
- **Glass** (dark semi-transparent bg, `backdrop-filter: blur(18px)`, ivory-cream text, border rgba blanco): Directamente sobre imágenes full-bleed. El único botón sin color sólido de fondo.

### Cards

Tres variantes; todas con `border-radius: 12px`, imagen superior, overline en label style, título en Cormorant Garamond 300 24px, body en Jost 300 12px. La estructura overline + título + texto + bullet list es la convención interna.

- **Light** (ivory-cream bg, `shadow-card`): Sobre fondos crema o warm-cream.
- **Dark** (forest-green bg, sombra oscura): Sobre fondos oscuros o como contraste en sección clara.
- **Glass** (frosted sobre imagen de fondo, `backdrop-filter: blur(16px)`): Para destacados hero o secciones con foto de fondo. Margen interno de 10px separa el vidrio de los bordes de la foto.

Bullet lists dentro de cards: `·` en terracota como marcador, Jost 300 11px.

### Navigation

Pill glassmorphism. En reposo (top de página): transparente con texto claro. Al hacer scroll (`.scrolled`): `background: rgba(39,63,61,0.78)`, `backdrop-filter: blur(18px)`. Items en Jost 500, `letter-spacing: 0.12em`, UPPERCASE 12px. Logo a la izquierda, CTA a la derecha.

### Forms (cotizador)

Inputs con `border: 1px solid var(--cream-border)`, `border-radius: 8px`, foco con `border-color: forest-green` y `shadow-sm`. Labels en Jost 500 12px uppercase. Multi-step con progress indicator lineal en terracota. Resumen lateral sticky en desktop.

## 6. Do's and Don'ts

**Do:** Usar fotografía full-bleed como textura principal de cada sección. El lugar es el producto; las imágenes son el argumento.

**Do:** Combinar Against grande con Cormorant itálica en los momentos de apertura. Esta firma es la identidad visual más reconocible del sistema.

**Do:** Dejar que el espacio en blanco respire. Las secciones necesitan margen vertical generoso (`96px–128px`) para sentirse editadas, no apiladas.

**Do:** Usar glassmorphism en nav y cards sobre foto. Es parte del lenguaje, no una moda.

**Don't:** Usar terracota como color de fondo de sección. Es un acento, no una superficie.

**Don't:** Poner Against en tamaños pequeños o como label. Pierde legibilidad y carácter.

**Don't:** Usar sombras con base negra (`rgba(0,0,0,...)`). Todas las sombras del sistema tienen temperatura verde o neutra cálida.

**Don't:** Agregar variantes de cards en grid idéntico. Siempre hay diferencia de escala, orientación o variante (light/dark/glass) que rompe la monotonía.

**Don't:** Usar Cormorant Garamond para body copy largo. Es una fuente de display editorial; en párrafos extensos pierde legibilidad en pantalla.
