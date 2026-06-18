---
tipo: asset
subtipo: script-style
estado: desarrollo
tags:
  - shopify/asset
---

# Recurso: FsToast

## 🎯 Propósito
Controlador TypeScript definido como el Custom Element `<fs-toaster>` para gestionar un sistema global de notificaciones emergentes (toasts) que informa al usuario de acciones críticas en la web (como adición exitosa al carrito, alertas de stock o información útil) mediante micro-interacciones fluidas y un diseño refinado de doble bisel.

## 🔗 Archivos Relacionados (Código)
*   **Ruta local:** [FsToast.ts](vscode://file/Volumes/SSD1TB/webServer/Documents/Galeria/shopify/dawn/src/js/classes/FsToast.ts)
*   **Asociado a Componentes/Secciones:**
    *   `layout/theme.liquid` (Integración de la etiqueta `<fs-toaster>` a nivel de maquetación global).
    *   [[ProductCardBuy]] / [[CartDrawer]] (Eventos de carrito actualizados).

## 🛠️ Detalles Técnicos
*   **Clase principal:** `FsToaster` (Custom Element registrado como `fs-toaster`).
*   **Exportaciones / Funciones principales:**
    *   `connectedCallback()`: Configura el contenedor flotante y se suscribe a los eventos globales `toast:show` y `cart:updated`.
    *   `createToast(type, message, title)`: Genera dinámicamente un nodo DOM con la estructura física del Toast.
    *   `dismissToast(toast)`: Anima la desaparición y remueve el elemento de forma segura tras 5 segundos o al pulsar el botón de cerrar.
*   **Diseño visual y variantes:**
    *   `success` (Acento verde esmeralda con icono de marca de verificación).
    *   `alert` (Acento rojo coral con icono de peligro).
    *   `info` (Acento azul hielo con icono de información).
*   **Física de Movimiento y Animación:**
    *   Utiliza **GSAP** para animar de forma GPU-safe la opacidad (`opacity`), la escala (`scale`) y la translación vertical (`y`) de la tarjeta.
    *   Transición de entrada acelerada (`ease: "power4.out"`) y desvanecimiento suave de salida (`ease: "power3.inOut"`).
*   **Estructura Double-Bezel (Diseño Premium):**
    *   **Contenedor Externo (Outer Shell):** Estilo translúcido con efecto glassmorphism (`backdrop-blur-xl`), borde semi-transparente fino (`border-white/10`) y esquinas con gran radio de curvatura (`rounded-2xl`).
    *   **Núcleo Interno (Inner Core):** Fondo ultra-oscuro (`bg-neutral-950/85`), borde interior de contraste fino y radio concéntrico proporcional reducido (`rounded-[calc(1rem-0.25rem)]`).
