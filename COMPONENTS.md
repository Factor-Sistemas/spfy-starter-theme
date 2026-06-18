# Componentes del Tema (Dawn Custom)

Este archivo sirve como índice rápido y mapa de referencia directa para los componentes del tema. La documentación detallada de la arquitectura, configuración de secciones, y el gráfico de dependencias interactivo se gestionan en la bóveda dedicada de Obsidian.

---

## 📂 Estructura del Tema y Recursos Relacionados

Cuando crees o modifiques una sección, asegúrate de documentar y enlazar sus dependencias aquí y en tu bóveda de Obsidian.

### Secciones Activas (`sections/`)
| Sección | Archivo Liquid | JS / TS Relacionado | CSS / Tailwind | Descripción / Alpine.js |
| :--- | :--- | :--- | :--- | :--- |
| **Ejemplo Cabecera** | [sections/header.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/sections/header.liquid) | `assets/header.ts` | `assets/global.css` | Cabecera principal reactiva con Alpine.js |

### Bloques del Tema (`blocks/`)
| Bloque | Archivo Liquid | Secciones que lo usan | Descripción |
| :--- | :--- | :--- | :--- |
| *Ninguno aún* | - | - | - |

### Snippets Reutilizables (`snippets/`)
| Snippet | Archivo Liquid | Usado en | Descripción |
| :--- | :--- | :--- | :--- |
| **card-product** | [snippets/card-product.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/card-product.liquid) | Rejillas de colección / Home | Tarjeta de producto con soporte de View Transitions |
| **product-thumbnail** | [snippets/product-thumbnail.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/product-thumbnail.liquid) | PDP (Ficha de producto) | Galería de imágenes con View Transition en la primera imagen |
| **fs-hidden-fields** | [snippets/fs-hidden-fields.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-hidden-fields.liquid) | `snippets/buy-buttons.liquid` | Inyección de UTMs/Cookies como inputs en formularios de producto |
| **fs-product-card-buy-buttons** | [snippets/fs-product-card-buy-buttons.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-product-card-buy-buttons.liquid) | `snippets/card-product.liquid` | Botones de compra directa en hover de la tarjeta de producto |
| **fs-main-cart-item-quantity** | [snippets/fs-main-cart-item-quantity.liquid](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/snippets/fs-main-cart-item-quantity.liquid) | `snippets/fs-main-cart-item.liquid` | Controles AJAX de cantidad y botón de eliminación rápida |

### 🛠️ Controladores y Clases TypeScript (`src/js/`)
| Clase / Custom Element | Ruta del Archivo | Asociado a | Descripción |
| :--- | :--- | :--- | :--- |
| **FsTrackingFields** | [src/js/classes/FsTrackingFields.ts](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/FsTrackingFields.ts) | `<fs-tracking-fields>` | Sistema global de captación de atribución de marketing (UTM, FBP, FBC) |
| **ProductCardBuy** | [src/js/classes/ProductCardBuy.ts](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/ProductCardBuy.ts) | `<product-card-buy>` | Control de adición por AJAX y compra rápida desde el listado |
| **CartDrawer** | [src/js/classes/CartDrawer.ts](file:///Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/CartDrawer.ts) | `<cart-drawer>` | Gestor AJAX reactivo para refrescar el cajón lateral del carrito |

---

## 📓 Integración con Obsidian

Para ver el gráfico visual de dependencias y notas detalladas:
1. Abre la carpeta `spy-obsidian/` de este proyecto como una bóveda en Obsidian.
2. Utiliza las plantillas en `spy-obsidian/Plantillas/` para registrar nuevos componentes.
3. Utiliza los **wikilinks** `[[nombre-del-archivo]]` para enlazar los componentes y construir el mapa visual en la vista de gráfico (Graph View).
