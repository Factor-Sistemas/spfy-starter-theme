---
tipo: asset
subtipo: script-style
estado: desarrollo
tags:
  - shopify/asset
---

# Recurso: CartDrawer

## 🎯 Propósito
Controlador TypeScript definido como el Custom Element `<cart-drawer>` para gestionar el cajón de carrito de compras lateral (drawer) de forma interactiva y asíncrona mediante AJAX. Permite actualizar cantidades, eliminar artículos y refrescar el contenido visual de forma reactiva sin requerir recargas de página completas.

## 🔗 Archivos Relacionados (Código)
*   **Ruta local:** [CartDrawer.ts](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/CartDrawer.ts)
*   **Asociado a Componentes/Secciones:**
    *   `snippets/fs-header-drawer.liquid`
    *   [[fs-main-cart-item-quantity]]
    *   `snippets/fs-main-cart-item.liquid`

## 🛠️ Detalles Técnicos
*   **Clase principal:** `CartDrawer` (Custom Element registrado como `cart-drawer`).
*   **Exportaciones / Funciones principales:**
    *   `connectedCallback()`: Enlaza eventos de cambio en cantidades, clics de eliminación/modificación y el evento global `cart:updated`.
    *   `onQuantityChange(event)` / `onButtonClick(event)`: Intercepta interacciones de entrada numérica y botones de aumentar, disminuir y eliminar artículo.
    *   `updateQuantity(line, quantity)`: Realiza llamadas asíncronas POST a `/cart/change.js` usando Fetch API para cambiar la cantidad en el servidor de Shopify.
    *   `refreshDrawer()`: Recarga de forma dinámica y parcial el HTML del drawer usando la **Section Rendering API** de Shopify (`/cart?sections=fs-header-drawer`), parseando el nuevo DOM y reemplazando los elementos correspondientes sin alterar el estado global.
    *   `mostrarCapa()` / `ocultarCapa()`: Muestra y oculta un overlay de carga (`#capa_carga`) con una transición de opacidad suave.
*   **Dependencias externas / npm:**
    *   `gsap`: Utilizado para la animación fluida de desvanecimiento (`fromTo` y `to` de opacidad) de la capa de carga.
*   **Manejo de estado:**
    *   Agrega la clase de CSS de opacidad y deshabilita interacciones del puntero durante la petición asíncrona (`opacity-50`, `pointer-events-none`).
