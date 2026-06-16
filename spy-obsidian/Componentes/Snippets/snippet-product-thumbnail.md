---
tipo: snippet
estado: desarrollo
tags:
  - shopify/snippet
---

# Snippet: product-thumbnail

## 🎯 Propósito
Renderiza las imágenes principales y las miniaturas de la galería en la página de detalle del producto (PDP).

## 🔗 Archivos Relacionados (Código)
*   **Archivo Principal:** [product-thumbnail.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/product-thumbnail.liquid)
*   **Relacionado con:**
    *   [[snippet-card-product]] (Comparte la transición de vista de la imagen del producto)

## ⚙️ Parámetros y Variables
*   `media` (Media): El objeto multimedia a renderizar (imagen, video, modelo 3D).
*   `position` (Number): La posición del elemento en la galería (usado para identificar el primer elemento).

## ⚡ Interactividad y Estilos
*   **Transiciones de Vista (View Transitions API):**
    *   Cuando el elemento multimedia es la primera imagen (`position == 1`), se le aplica dinámicamente el estilo inline `view-transition-name: product-image-{{ product.id }};`. Esto se sincroniza con la tarjeta del producto, creando el efecto de expansión visual de la imagen al navegar de la colección al detalle.
