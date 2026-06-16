Tras la purga de estilos heredados y la desactivación de las hojas de estilo individuales de Dawn, el tema necesita 
  recuperar una estructura visual base y coherente. Para ello, debemos migrar la maquetación antigua a clases           
  estructurales de Tailwind CSS v4, basándonos estrictamente en los tokens definidos en `DESIGN.md` (colores, fuentes,  
  espaciados y radios de borde).
  
    **CRÍTICO:** Antes de realizar cualquier cambio, debes leer y estudiar el archivo `DESIGN.md` en la raíz del        
  proyecto. Toda la maquetación debe ajustarse estrictamente a las familias tipográficas, escala de espaciados, bordes  
  redondeados y la paleta de 5 colores semánticos allí definidos.
  
    # 🚨 Protocolo de Ejecución Paso a Paso (ESTRICTO)
    No intentes limpiar o modificar varios archivos a la vez. Debes seguir este flujo de trabajo obligatoriamente:      
    1. **Elige una única sección** o snippet (ej. empezar con `image-banner.liquid`).
    2. Realiza la limpieza y migración de Tailwind solo para ese archivo.
    3. **Ejecuta la compilación** (`npm run build`) y verifica que no existan errores de sintaxis.
    4. Muestra al usuario el resultado de este archivo modificado y **detente a esperar confirmación (STOP & WAIT)**    
  antes de pasar a la siguiente sección.
  
    # Tarea Principal por Archivo
    Para la sección elegida en este paso:
    1. **Localizar el CSS original:** Busca su archivo de estilos equivalente en la carpeta `assets/` (ej. `component-  
  card.css`, `section-main-product.css`, etc.) para comprender su estructura, anchos y paddings.
    2. **Migrar a Tailwind:** Reemplaza las clases de maquetación de CSS puro de esos archivos por clases nativas       
  equivalentes de Tailwind v4 aplicadas directamente sobre el marcado HTML del archivo `.liquid`.
    3. **Eliminar dependencias locales:** Asegúrate de que no queden referencias a las hojas de estilo del bloque       
  `assets` en el archivo `.liquid` (elimina tags `{% style %}` y llamadas a CSS locales con `asset_url`).
    4. **Preservar la lógica funcional:** No toques la lógica de negocio de Liquid (bucles, condicionales, variables de 
  producto o llamadas a esquemas de contenido).
    5. **Consistencia estética:** Utiliza únicamente los colores y radios de `DESIGN.md` (ej. `bg-canvas`, `text-body`, 
  `border-hairline`, `rounded-xl`).
  
    # Criterio de Aceptación del Paso
    - El archivo `.liquid` modificado debe quedar limpio de cualquier tag `<style>`, `{% style %}`, hojas de estilo     
  externas y atributos `style` inline.
    - La compilación mediante `npm run build` debe completarse con éxito antes de pedir feedback al usuario.  