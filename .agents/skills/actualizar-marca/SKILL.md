---
name: actualizar-marca
description: "Trigger: actualizar-marca, cambiar colores, configurar tipografías. Recibe una marca definida por 5 colores base y sus tipografías, y actualiza el DESIGN.md, la configuración CSS y la documentación de Obsidian."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Contrato de Activación

Usa esta habilidad cuando:
- El usuario especifique la identidad visual de la marca mediante **5 colores base** y sus **tipografías** (ej. "Usa estos 5 colores y estas fuentes para la marca").
- Se requiera cambiar o sincronizar la marca en todo el proyecto.

## Reglas Estrictas

- **Contrato de Entrada:** El usuario aportará exactamente 5 colores de marca (primary, secondary, surface, accent, muted) y hasta 3 tipografías (heading, body, code).
- **Prohibido editar CSS manualmente:** Todos los archivos de estilos se generarán automáticamente a partir de esta configuración para eliminar el error humano.
- **Sincronización Total Obligatoria:** Debes actualizar de forma secuencial estos 4 destinos:
  1. `DESIGN.md` (Actualizar la especificación en la raíz).
  2. `src/css/_tokens.css` (Mapear los 5 colores en el `@theme` de Tailwind v4).
  3. `src/css/_fonts.css` y `src/css/_base.css` (Declarar y aplicar las nuevas familias de fuentes).
  4. `spy-obsidian/Arquitectura/tailwind-tokens.md` (Actualizar las tablas explicativas de Obsidian).

## Puertas de Decisión

| Entrada del Usuario | Acción Requerida |
| :--- | :--- |
| 5 Colores + Tipografías | Modificar `DESIGN.md` -> Sincronizar `_tokens.css` -> Actualizar `_fonts.css` / `_base.css` -> Sobrescribir `tailwind-tokens.md` en Obsidian |

## Pasos de Ejecución

1. Recibe los 5 colores y las familias tipográficas provistas por el usuario.
2. Abre y edita `DESIGN.md` en la raíz del proyecto, actualizando los valores correspondientes en su frontmatter de YAML.
3. Actualiza `src/css/_tokens.css` asignando los nuevos colores bajo la sección `/* 4. PALETA DE COLORES BRAND */` y las tipografías bajo `/* 1. TIPOGRAFÍA (Familias) */`.
4. Si cambian las tipografías, actualiza las declaraciones `@font-face` y sus rutas locales en `src/css/_fonts.css`.
5. Ajusta los estilos base de `src/css/_base.css` para aplicar las variables de tipografía al cuerpo (`body`) y titulares (`h1` a `h6`).
6. Sobrescribe la sección de colores y tipografías en `spy-obsidian/Arquitectura/tailwind-tokens.md` con las nuevas tablas.

## Contrato de Salida

Devolver:
- Resumen de los 5 colores aplicados y tipografías configuradas.
- Confirmación de la actualización en los 4 archivos clave.
