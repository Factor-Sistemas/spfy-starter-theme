# SPY Starter Theme 🚀

Este es nuestro boilerplate y plantilla de inicio personalizada para el desarrollo de temas de Shopify. Está construido sobre la base sólida de **Shopify Dawn**, pero vitaminado con un flujo de trabajo moderno y herramientas de desarrollo avanzadas para la creación de experiencias de comercio electrónico rápidas, interactivas y altamente personalizadas.

---

## 👁️ Visión y Finalidad del Proyecto

La finalidad de este repositorio es servir como **punto de partida único y optimizado** para cada nuevo tema de Shopify que desarrollemos. 

Nuestra visión se apoya en los siguientes pilares:
* **Desarrollo Moderno y Rápido:** Integrar un bundler moderno para no depender de flujos de trabajo lentos u obsoletos.
* **Código Limpio y Reutilizable:** Ir limpiando Dawn de secciones o estilos innecesarios, manteniendo las funcionalidades nativas clave y estructurando componentes reutilizables.
* **Interactividad Premium sin Penalización:** Utilizar herramientas ligeras para la reactividad en el cliente y librerías de alto rendimiento para animaciones complejas, asegurando que la experiencia de usuario (UX) sea excepcional sin degradar el rendimiento web (Core Web Vitals).

---

## 🛠️ El Stack Tecnológico

El tema integra las siguientes tecnologías de última generación:

1. **Vite 8:** Compilación ultra-rápida, empaquetado eficiente y soporte nativo para módulos ES.
2. **Tailwind CSS v4:** El framework CSS utility-first en su última versión, configurado de manera nativa con Vite mediante `@tailwindcss/vite` y gestionado mediante directivas de escaneo directo `@source` sobre archivos Liquid en CSS.
3. **TypeScript:** Tipado estático para escribir código JavaScript seguro, robusto y fácil de mantener.
4. **Alpine.js:** Framework declarativo ultraligero para manejar la reactividad en el cliente (como carritos dinámicos, modales o menús) sin sobrecargar el navegador.
5. **GSAP (GreenSock Animation Platform):** Con el plugin `ScrollTrigger` integrado de fábrica para crear animaciones fluidas y reactivas al scroll de máximo rendimiento.

---

## 📂 Estructura del Código Fuente

La lógica de desarrollo se encuentra separada de los archivos compilados de Shopify:

```text
├── assets/                  # Directorio final de Shopify (donde compila Vite)
│   ├── main.js              # Bundle de JS generado por Vite
│   ├── style.css            # CSS de producción generado por Vite
│   └── dev.css              # Breakpoint helper para desarrollo
├── src/                     # Código fuente de desarrollo
│   ├── css/
│   │   ├── style.css        # Archivo CSS principal con directivas @import y @source
│   │   ├── _tokens.css      # Variables y tokens de diseño personalizados (@theme)
│   │   ├── _base.css        # Estilos aplicados a etiquetas HTML nativas
│   │   └── _utilities.css   # Clases utilitarias personalizadas hechas a mano
│   └── js/
│       ├── main.ts          # Punto de entrada de JavaScript
│       └── classes/         # Clases y controladores en TypeScript
├── vite.config.mjs          # Configuración de compilación de Vite
└── tsconfig.json            # Configuración del compilador de TypeScript
```

---

## 🚀 Cómo Inicializar el Proyecto

Sigue estos pasos para comenzar a trabajar en local con esta plantilla:

### 1. Instalar Dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado y ejecuta:
```bash
npm install
```

### 2. Flujo de Trabajo en Desarrollo
Para compilar tus assets continuamente a medida que realizas cambios en la carpeta `src/`, inicia el observador de Vite:
```bash
npm run watch
```
*(Alternativamente, puedes usar `npm run dev` para iniciar el servidor de desarrollo de Vite si utilizas assets dinámicos).*

### 3. Conexión con Shopify CLI
En otra pestaña de tu terminal, levanta el entorno de Shopify CLI para previsualizar los cambios directamente en tu tienda de desarrollo:
```bash
shopify theme dev --store=nombre-de-tu-tienda
```
El CLI detectará los cambios compilados en la carpeta `assets/` y actualizará la previsualización del tema al instante.

### 4. Compilar para Producción
Antes de subir el tema a producción o empaquetarlo, genera los bundles minificados y optimizados:
```bash
npm run build
```

---

## 🔄 Sincronización con Dawn Oficial

Para mantener la base del tema actualizada con las mejoras de rendimiento y parches oficiales que Shopify introduce en Dawn, hemos configurado un remoto `upstream` que apunta al repositorio original:

* Ver los remotos configurados:
  ```bash
  git remote -v
  ```
* Traer e integrar cambios oficiales de Dawn a tu rama local:
  ```bash
  git fetch upstream
  git merge upstream/main
  ```
