---
tipo: snippet
estado: desarrollo
tags:
  - shopify/snippet
---

# Snippet: fs-hidden-fields

## 🎯 Propósito
Fragmento de código reutilizable que inyecta campos de entrada ocultos (`input type="hidden"`) dentro de los formularios de producto para registrar parámetros de campañas de marketing (UTMs, promotor) e identificadores de Facebook Ads (`_fbc`, `_fbp`) como Line Item Properties del producto.

## 🔗 Archivos Relacionados (Código)
*   **Archivo Principal:** [fs-hidden-fields.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-hidden-fields.liquid)
*   **Incrustado en:**
    *   [[buy-buttons]]
*   **Componente JS de Control:**
    *   [[FsTrackingFields]]

## ⚙️ Parámetros y Variables (Variables recibidas mediante `render`)
Este snippet no requiere parámetros externos. Sus campos se auto-rellenan de forma reactiva en el cliente mediante el Custom Element `<fs-tracking-fields>`.

## ⚡ Interactividad y Estilos
*   **Alpine.js / JS:** Inicializado en el DOM mediante el Web Component [[FsTrackingFields]], el cual recupera las UTMs y cookies del almacenamiento local (`localStorage` y `document.cookie`) y rellena los valores de los inputs.
