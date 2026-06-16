---
tipo: snippet
estado: desarrollo
tags:
  - shopify/snippet
---

# Snippet: card-product

## 🎯 Propósito
Renderiza la tarjeta de producto utilizada en las cuadrículas de colección, resultados de búsqueda y secciones de productos recomendados.

## 🔗 Archivos Relacionados (Código)
*   **Archivo Principal:** [card-product.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/card-product.liquid)
*   **Relacionado con:**
    *   [[snippet-product-thumbnail]] (Comparte la transición de vista de la imagen del producto)

## ⚙️ Parámetros y Variables
*   `card_product` (Product): El objeto de producto de Shopify que se va a representar.
*   `show_secondary_image` (Boolean): Muestra la segunda imagen del producto al hacer hover.
*   `lazy_load` (Boolean): Si la imagen principal debe cargarse de forma diferida.

## ⚡ Interactividad y Estilos
*   **Transiciones de Vista (View Transitions API):**
    *   La imagen destacada tiene asignado el estilo inline `view-transition-name: product-image-{{ card_product.id }};`. Esto enlaza la imagen de esta tarjeta con la imagen principal de la ficha de detalle, logrando un efecto de redimensionado fluido ("morphing") durante la navegación.
