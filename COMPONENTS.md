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

---

## 📓 Integración con Obsidian

Para ver el gráfico visual de dependencias y notas detalladas:
1. Abre la carpeta `spy-obsidian/` de este proyecto como una bóveda en Obsidian.
2. Utiliza las plantillas en `spy-obsidian/Plantillas/` para registrar nuevos componentes.
3. Utiliza los **wikilinks** `[[nombre-del-archivo]]` para enlazar los componentes y construir el mapa visual en la vista de gráfico (Graph View).
