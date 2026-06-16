---
name: documentar
description: "Trigger: documentar, documentar sección, documentar snippet. Analiza un archivo de Shopify (.liquid, .ts, .css) para documentar sus propiedades, dependencias y relaciones, guardándolo en la bóveda de Obsidian."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Contrato de Activación

Usa esta habilidad cuando:
- El usuario solicite documentar un archivo, sección o snippet específico (ej. "documentar sections/header.liquid").
- Se cree o modifique un nuevo componente en el proyecto y deba registrarse en la documentación.

## Reglas Estrictas

- **Sin textos de relleno o placeholders:** Completa cada sección con las propiedades, configuraciones y relaciones reales del componente.
- **Obtener dependencias analizando el código:**
  - Busca `{% render 'nombre-snippet' %}` o `{% include %}` para identificar dependencias de snippets.
  - Busca `{% javascript %}`, `{% stylesheet %}`, o etiquetas `<script src="...">` / `<link rel="stylesheet">` para identificar recursos JS/TS/CSS relacionados.
  - Analiza archivos JS/TS buscando importaciones/exportaciones de código.
  - Inspecciona directivas de Alpine.js (`x-data`, `x-init`, `x-on`, etc.) en el HTML/Liquid para documentar el comportamiento y estado interactivo.
- **Ruta de Obsidian:** Crea la nota Markdown directamente en la carpeta local de la bóveda `./spy-obsidian/` en su subcarpeta correspondiente:
  - Secciones: `Componentes/Secciones/`
  - Bloques: `Componentes/Bloques/`
  - Snippets: `Componentes/Snippets/`
  - Archivos TypeScript/JS: `Assets/TS/`
  - Archivos CSS: `Assets/CSS/`
- **Uso de Wikilinks:** Conecta la nota con sus dependencias o contenedores mediante corchetes dobles de Obsidian (ej. `[[global.css]]`, `[[snippet-product-card]]`).
- **Enlace a VS Code:** En el cuerpo de la nota en Obsidian, añade un enlace directo al archivo físico mediante el protocolo de VS Code: `[nombre-archivo.liquid](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/...)`.
- **Índice del Repositorio:** Actualiza el archivo `COMPONENTS.md` en la raíz del tema base para dejar constancia del componente registrado.

## Puertas de Decisión

| Tipo de Archivo / Ruta | Plantilla de Nota a Utilizar | Carpeta Destino en Obsidian |
| :--- | :--- | :--- |
| `sections/*.liquid` | `template-seccion.md` | `Componentes/Secciones/` |
| `snippets/*.liquid` | `template-snippet.md` | `Componentes/Snippets/` |
| `assets/*.ts` o `src/**/*.ts` | `template-script-style.md` | `Assets/TS/` |
| `assets/*.css` o `src/**/*.css` | `template-script-style.md` | `Assets/CSS/` |

## Pasos de Ejecución

1. Abre y lee el código del archivo indicado por el usuario utilizando la herramienta de lectura de archivos.
2. Analiza el bloque JSON de configuración del esquema (`{% schema %}`) para secciones/bloques, o las funciones exportadas si es un archivo JS/TS.
3. Busca referencias a otros fragmentos de código para construir la red de dependencias del componente.
4. Lee la plantilla adecuada desde la carpeta `spy-obsidian/Plantillas/`.
5. Redacta el contenido de la nota completando todos los apartados de la plantilla.
6. Escribe y guarda la nota en su ruta correspondiente dentro de `spy-obsidian/`.
7. Actualiza y añade el componente a la tabla correspondiente de `COMPONENTS.md` en la raíz del proyecto.

## Contrato de Salida

Devolver:
- Ruta del archivo creado en Obsidian.
- Lista de dependencias detectadas y conectadas.
- Resumen de los campos del esquema (`schema`) documentados.
- Confirmación de actualización del índice `COMPONENTS.md`.
