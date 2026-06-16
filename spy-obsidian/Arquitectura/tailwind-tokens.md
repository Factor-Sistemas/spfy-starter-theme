---
tipo: arquitectura
subtipo: tokens-sistema
estado: completado
tags:
  - shopify/arquitectura
  - css/tailwind
---

# Arquitectura: Tokens y Variables del Sistema de Diseño

Este documento sirve como guía de consulta detallada para todas las variables y tokens de diseño definidos en nuestro tema base. Explica el propósito, el valor y el caso de uso de cada variable dentro del proyecto para mantener la consistencia estética.

---

## 🎨 1. Sistema de Colores Semánticos

Definido en `src/css/_tokens.css` y mapeado en Tailwind v4 como `bg-primary`, `bg-brand-*`, `text-body`, etc.

### A. Colores de Texto y Base
| Token CSS | Color Hex | Uso e Intención de Diseño |
| :--- | :--- | :--- |
| `--color-primary` | `#121212` | **Color principal:** El color base para el texto del sitio, logos y elementos de máximo contraste. |
| `--color-primary-active` | `#000000` | **Estado activo:** Variación más oscura del primario al interactuar (ej. botón primario presionado). |
| `--color-primary-disabled` | `#e5e5e5` | **Estado desactivado:** Gris apagado para deshabilitar elementos interactivos o botones. |
| `--color-ink` | `#121212` | **Tinta tipográfica:** Negro puro optimizado para legibilidad en encabezados grandes. |
| `--color-body` | `#3a3a3a` | **Texto de lectura:** Color principal para el cuerpo de texto de párrafos y descripciones largas. |
| `--color-body-strong` | `#1a1a1a` | **Texto enfatizado:** Color para textos en negrita o párrafos introductorios. |
| `--color-muted` | `#757575` | **Texto atenuado:** Para subtextos, breadcrumbs y elementos de menor jerarquía. |
| `--color-muted-soft` | `#9a9a9a` | **Texto extra atenuado:** Para notas al pie, avisos legales y explicaciones muy secundarias. |
| `--color-on-primary` | `#ffffff` | **Texto sobre color primario:** Color del texto utilizado dentro de los botones oscuros. |

### B. Colores de UI, Bordes y Superficies
| Token CSS | Color Hex | Uso e Intención de Diseño |
| :--- | :--- | :--- |
| `--color-canvas` | `#fbfbfb` | **Fondo general (Canvas):** Blanco-cálido que sirve de suelo visual para todo el sitio. |
| `--color-surface-soft` | `#fafafa` | **Superficie suave:** Fondos alternativos de secciones o bloques promocionales. |
| `--color-surface-card` | `#ffffff` | **Superficie de tarjeta:** Fondo de tarjetas, menús y modales elevados sobre el canvas. |
| `--color-surface-strong` | `#f0f0f0` | **Superficie enfatizada:** Contenedores de inputs o bloques de formulario con fondo definido. |
| `--color-surface-dark` | `#121212` | **Superficie oscura:** Para bloques o secciones destacadas que requieran un fondo oscuro. |
| `--color-surface-dark-elevated` | `#1a1a1a` | **Superficie oscura elevada:** Elementos destacados sobre fondos oscuros. |
| `--color-hairline` | `#e5e5e5` | **Bordes estándar:** Línea fina de 1px para delimitar tarjetas, inputs y divisores. |
| `--color-hairline-soft` | `#f0f0f0` | **Bordes suaves:** Líneas de separación extremadamente tenues. |
| `--color-on-dark` | `#ffffff` | **Texto sobre fondo oscuro:** Contraste blanco sobre secciones o tarjetas de fondo negro. |
| `--color-on-dark-soft` | `#a0a0a0` | **Texto atenuado sobre oscuro:** Subtextos aplicados en fondos oscuros. |

### C. Colores de Marca y Destacados (Accent & Brand Colors)
| Token CSS | Color Hex | Uso e Intención de Diseño |
| :--- | :--- | :--- |
| `--color-brand-accent` | `#000000` | **Color de Acento:** Usado para llamar la atención del usuario en botones primarios y CTAs. |
| `--color-brand-lavender` | `#b8a4ed` | Tarjetas promocionales o fondos relacionados con AI/Agentes. |
| `--color-brand-peach` | `#ffb084` | Tarjetas informativas o banners con tono cálido. |
| `--color-brand-ochre` | `#e8b94a` | Alertas de marketing destacadas o detalles decorativos. |
| `--color-brand-mint` | `#a4d4c5` | Insignias (badges) secundarias o detalles sutiles. |
| `--color-brand-coral` | `#ff6b5a` | Destacados visuales o llamadas de atención rápidas. |

### D. Colores Semánticos (Estados del Sistema)
| Token CSS | Color Hex | Uso e Intención de Diseño |
| :--- | :--- | :--- |
| `--color-success` | `#22c55e` | Éxito en envíos de formularios, mensajes de confirmación de compra, stock disponible. |
| `--color-warning` | `#f59e0b` | Alertas de stock bajo, advertencias del sistema. |
| `--color-error` | `#ef4444` | Errores de validación de campos, transacciones fallidas, fuera de stock total. |

---

## ✍️ 2. Tipografías y Escala de Textos

Definido en `src/css/_tokens.css` y aplicado automáticamente en selectores base en `src/css/_base.css`.

### Familias Tipográficas
*   `--font-heading`: `'Outfit', 'Inter', sans-serif` (Uso en todos los encabezados y elementos Display).
*   `--font-body`: `'Plus Jakarta Sans', sans-serif` (Uso en cuerpos de texto, descripciones, formularios y botones).
*   `--font-code`: `'JetBrains Mono', monospace` (Uso en datos técnicos, precios y números).

### Tamaños y Pesos
Todas las clases de visualización están preparadas en Tailwind v4 como `text-display-*` o `text-title-*`:

| Variable / Clase CSS | Tamaño (Value) | Estilo (Weight / Line-Height / Spacing) | Propósito / Caso de Uso |
| :--- | :--- | :--- | :--- |
| `text-display-xl` | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | Bold (500) / LH: 1 / LS: -0.03em | **Hero Principal:** Títulos de primer nivel en la página de inicio. |
| `text-display-lg` | `clamp(2rem, 4vw + 1rem, 3.5rem)` | Bold (500) / LH: 1.05 / LS: -0.02em | **Títulos de Sección:** Encabezados de bloques principales (h2). |
| `text-display-md` | `clamp(1.5rem, 3vw + 0.8rem, 2.5rem)` | Bold (500) / LH: 1.1 / LS: -0.01em | **Subtítulos Importantes:** Títulos de subsección y nombres de productos principales. |
| `text-display-sm` | `2rem` | Bold (500) / LH: 1.15 / LS: -0.01em | Títulos de llamadas a la acción (CTAs) de ancho completo. |
| `text-title-lg` | `1.5rem` | Semi-Bold (600) / LH: 1.3 / LS: -0.01em | Títulos de planes de precios o tarjetas destacadas. |
| `text-title-md` | `1.125rem` | Semi-Bold (600) / LH: 1.4 | Títulos estándar de tarjetas y bloques. |
| `text-title-sm` | `1.0rem` | Semi-Bold (600) / LH: 1.4 | Títulos de listas o etiquetas de campos de formulario. |
| `text-body-md` | `1.0rem` | Normal (400) / LH: 1.55 | **Texto de lectura:** Párrafos de descripción y artículos de blog. |
| `text-body-sm` | `0.875rem` | Normal (400) / LH: 1.55 | Texto del pie de página (footer) y letra pequeña. |
| `text-caption` | `0.8125rem` | Medium (500) / LH: 1.4 | Etiquetas secundarias e información de ayuda. |
| `text-caption-uppercase` | `0.75rem` | Semi-Bold (600) / LH: 1.4 / LS: 0.15em | Etiquetas superiores ("Eyebrows") y marcas de categoría. |
| `text-button` | `0.875rem` | Semi-Bold (600) / LH: 1 / LS: 0.02em | Texto dentro de botones de llamada a la acción. |
| `text-nav-link` | `0.875rem` | Medium (500) / LH: 1.4 | Enlaces del menú superior y barras de navegación secundarias. |

---

## 📐 3. Bordes Redondeados (Border Radius)

Mapeado en Tailwind v4 como `rounded-*`.

| Token CSS | Valor | Uso de Diseño |
| :--- | :--- | :--- |
| `--radius-xs` | `6px` | Pequeños elementos de UI (badges interiores, items de dropdown). |
| `--radius-sm` | `8px` | Botones secundarios y elementos pequeños con bordes. |
| `--radius-md` | `12px` | **Estándar interactivo:** Botones principales y cajas de texto de formulario (`input`). |
| `--radius-lg` | `16px` | Tarjetas de producto estándar y de testimonios. |
| `--radius-xl` | `24px` | **Grandes bloques:** Banners promocionales, banners de hero y tarjetas de bento principales. |
| `--radius-pill` | `9999px` | Botones tipo píldora, badges de rebajas y pestañas de categorías. |

---

## 🔲 4. Sistema de Espaciados (Spacing)

Mapeado en Tailwind v4 como `p-*`, `m-*`, `gap-*`, etc.

*   `--spacing-xxs` (`4px`): Ajustes mínimos de alineación, etiquetas muy pegadas.
*   `--spacing-xs` (`8px`): Margen interno de campos y separaciones pequeñas de textos.
*   `--spacing-sm` (`12px`): Relleno interno de botones pequeños y bordes.
*   `--spacing-md` (`16px`): Espacio entre inputs de formularios o rejillas pequeñas.
*   `--spacing-lg` (`24px`): Relleno interno estándar de tarjetas y rejillas.
*   `--spacing-xl` (`32px`): Relleno de tarjetas de precios y banners.
*   `--spacing-xxl` (`48px`): Separación entre bloques de contenido secundarios.
*   `--spacing-section` (`clamp(3rem, 8vw, 6rem)`): **Ritmo vertical global:** El margen de separación predeterminado entre secciones de la página.

---

## 🔌 5. Puente de Conexión de Shopify

Definido en `src/css/_shopify-bridge.css` para interceptar las configuraciones dinámicas del panel de Shopify y vincularlas a clases Tailwind:

```css
@theme {
  --color-scheme-bg: rgb(var(--color-background));
  --color-scheme-text: rgb(var(--color-foreground));
  --color-scheme-button: rgb(var(--color-button));
  --color-scheme-button-text: rgb(var(--color-button-text));
  --color-scheme-link: rgb(var(--color-link));
  --color-scheme-shadow: rgb(var(--color-shadow));
}
```

*   **Uso:** Nos permite usar clases utilitarias dinámicas como `bg-scheme-bg` y `text-scheme-text` en las secciones del tema de Shopify, las cuales cambiarán automáticamente su color en base al esquema seleccionado por el comerciante en el editor de temas sin romper la compilación de Tailwind v4.
