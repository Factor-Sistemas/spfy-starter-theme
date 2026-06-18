---
tipo: snippet
estado: desarrollo
tags:
  - shopify/snippet
---

# Snippet: fs-main-cart-item-quantity

## 🎯 Propósito
Este fragmento renderiza los selectores de cantidad (más/menos) y la acción de eliminar para una línea de artículo individual dentro del carrito de compras. Se ha rediseñado para interactuar de forma reactiva con el cajón del carrito por medio de peticiones AJAX en lugar de enlaces con recargas de página tradicionales.

## 🔗 Archivos Relacionados (Código)
*   **Archivo Principal:** [fs-main-cart-item-quantity.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-main-cart-item-quantity.liquid)
*   **Incrustado en:**
    *   `snippets/fs-main-cart-item.liquid`
*   **Componente JS de Control:**
    *   `src/js/classes/CartDrawer.ts` (Mediante eventos AJAX de actualización de cantidad y eliminación).

## ⚙️ Parámetros y Variables (Variables recibidas mediante `render`)
*   `item` (Object): El objeto de línea de artículo (`line item`) de Shopify.
*   `index` (Number): El índice en base 1 dentro del bucle del carrito (`forloop.index`), utilizado como identificador de línea para la actualización de cantidad.

## ⚡ Interactividad y Estilos
*   **Alpine.js / JS:** Los botones de cantidad (`plus` y `minus`) e input numérico llevan el atributo `data-line="{{ index }}"`. El botón de eliminar se ha modificado de una etiqueta `a` normal a un `<button>` con `class="cart-remove-button"` y `data-line="{{ index }}"` para permitir que el controlador JavaScript interceptar y envíe la petición AJAX de borrado sin redirecciones indeseadas.
*   **Tailwind 4 clases clave:**
    *   Diseño limpio y minimalista con fondo neutro suave (`bg-neutral-50`) y bordes imperceptibles.
    *   Micro-interacciones en botones de cantidad al posar el cursor (`hover:bg-neutral-200 hover:text-neutral-900`).
    *   Botón de basura con icono vectorial SVG ligero y trazo de estilo Phosphor.
