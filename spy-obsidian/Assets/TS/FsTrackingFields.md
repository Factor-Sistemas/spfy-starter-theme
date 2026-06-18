---
tipo: asset
subtipo: script-style
estado: desarrollo
tags:
  - shopify/asset
---

# Recurso: FsTrackingFields

## 🎯 Propósito
Controlador de JS/TS (definido como Web Component `<fs-tracking-fields>`) encargado del sistema global de atribución y captación de campañas de marketing. Almacena parámetros UTM en el navegador y los actualiza tanto a nivel de producto individual (Line Item Properties) como global del pedido (Cart Attributes).

## 🔗 Archivos Relacionados (Código)
*   **Ruta local:** [FsTrackingFields.ts](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/FsTrackingFields.ts)
*   **Asociado a Componentes/Secciones:**
    *   [[fs-hidden-fields]]
    *   [[buy-buttons]]
    *   `layout/theme.liquid`

## 🛠️ Detalles Técnicos
*   **Clase principal:** `FsTrackingFields` (Custom Element registrado como `fs-tracking-fields`).
*   **Captación de datos:**
    *   Intercepta parámetros URL: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` y `promotor`.
    *   Persistencia: Escribe y lee de `localStorage` con el prefijo `c_` para persistir la atribución durante la navegación del usuario.
    *   Captura cookies: Extrae `_fbc` y `_fbp` de las cookies del navegador.
*   **Destinos de Atribución:**
    *   **Propiedades de línea:** Rellena campos ocultos en el formulario de producto (nombres con prefijo `properties[_...]`).
    *   **Atributos de carrito:** Llama a `/cart/update.js` para persistir el mapa de UTMs a nivel global del carrito una sola vez por sesión.
    *   **Botón de Pago Dinámico:** Agrega listeners al botón nativo "Comprar ahora" de Shopify para forzar el rellenado antes de saltar al checkout.
