---
tipo: snippet
estado: desarrollo
tags:
  - shopify/snippet
---

# Snippet: fs-product-card-buy-buttons

## 🎯 Propósito
Este fragmento reutilizable define los botones de acción rápida de compra ("Comprar ya" y "Añadir") que se muestran al pasar el cursor (hover) por encima de las tarjetas de producto en los listados y colecciones.

## 🔗 Archivos Relacionados (Código)
*   **Archivo Principal:** [fs-product-card-buy-buttons.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-product-card-buy-buttons.liquid)
*   **Incrustado en:**
    *   [[snippet-card-product]]
*   **Componente JS de Control:**
    *   [[ProductCardBuy]]

## ⚙️ Parámetros y Variables (Variables recibidas mediante `render`)
*   `card_product` (Product): El objeto de producto de Shopify de la tarjeta actual para extraer su variante seleccionada o primera disponible.

## ⚡ Interactividad y Estilos
*   **Alpine.js / JS:** Envuelto por el Web Component Custom Element `<product-card-buy>`, gestionado en [[ProductCardBuy]] para controlar las peticiones AJAX de adición al carrito o redirección directa a la pasarela de pago (checkout).
*   **Tailwind 4 clases clave:** 
    *   Aparece y se desplaza suavemente al hacer hover sobre el contenedor principal (`group-hover:opacity-100 group-hover:translate-y-0`).
    *   Botones estilizados con bordes finos, esquinas redondeadas completas (`rounded-full`), espaciado uniforme, y transiciones dinámicas al pulsar.
