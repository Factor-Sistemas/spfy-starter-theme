---
tipo: asset
subtipo: script-style
estado: desarrollo
tags:
  - shopify/asset
---

# Recurso: ProductCardBuy

## 🎯 Propósito
Controlador de JS/TS (definido como Web Component `<product-card-buy>`) que gestiona las acciones de compra rápida ("Comprar ya" y "Añadir") directamente desde las tarjetas de producto en el listado, enviando las UTMs y cookies almacenadas en segundo plano por AJAX.

## 🔗 Archivos Relacionados (Código)
*   **Ruta local:** [ProductCardBuy.ts](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/ProductCardBuy.ts)
*   **Asociado a Componentes/Secciones:**
    *   [[card-product]]

## 🛠️ Detalles Técnicos
*   **Clase principal:** `ProductCardBuy` (Custom Element registrado como `product-card-buy`).
*   **Comportamiento de botones según `data-action`:**
    *   `data-action="buy"` (Comprar ya): Envía el artículo al carrito por AJAX (`/cart/add.js`) inyectando propiedades UTM y redirige directamente a `/checkout`.
    *   `data-action="add"` (Añadir): Añade el artículo por AJAX (`/cart/add.js`) e inicia el evento global `cart:updated` para abrir y recargar el panel de carrito lateral.
*   **Integración de Atribución UTM:**
    *   Utiliza la función interna `getTrackingProperties()` para extraer las UTMs persistidas en `localStorage` y las inyecta en el objeto `properties` de la petición AJAX.
*   **Micro-animaciones:**
    *   Utiliza **GSAP** para animar la transición del estado del botón (desvanecer el texto y mostrar un spinner de carga giratorio) al hacer clic.
