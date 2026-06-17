import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiendaAprendizaje from './classes/TiendaAprendizaje';
import ProductRequestForm from './classes/ProductRequestForm';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// Hacer que Alpine y GSAP estén disponibles de forma global en el objeto window
(window as any).Alpine = Alpine;
(window as any).gsap = gsap;

// Registro de nuestro componente de Alpine para el Menú
Alpine.data('menuSystem', () => ({
  isOpen: false,
  menuWidth: 350, // Ancho del menú lateral

  init() {
    // Posicionamos el menú fuera de la pantalla (desplazado a la derecha)
    gsap.set("#menu-drawer", { x: this.menuWidth });
  },

  toggle() {
    this.isOpen = !this.isOpen;
    
    // Determinamos si es pantalla de ordenador (desktop >= 1024px)
    const isDesktop = window.innerWidth >= 1024;

    if (this.isOpen) {
      this.animateOpen(isDesktop);
    } else {
      this.animateClose(isDesktop);
    }
  },

  animateOpen(isDesktop: boolean) {
    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });

    // 1. Siempre desliza el menú hacia adentro (tanto móvil como desktop)
    tl.to("#menu-drawer", { x: 0 }, 0);

    // 2. Solo encoge la web en pantallas grandes (Desktop >= 1024px)
    if (isDesktop) {
      tl.to("#page-wrapper", {
        scaleX: 0.92, // Solo escala en el eje X (horizontal)
        x: -this.menuWidth,
        borderRadius: "24px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
      }, 0);
    } else {
      // En móvil, animamos la opacidad del overlay translúcido (que estará fuera de page-wrapper)
      tl.to("#menu-overlay", { opacity: 1, pointerEvents: "auto" }, 0);
    }
  },

  animateClose(isDesktop: boolean) {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power3.inOut" },
      onComplete: () => {
        document.body.style.overflow = '';
      }
    });

    // 1. Saca el menú de la pantalla
    tl.to("#menu-drawer", { x: this.menuWidth }, 0);

    // 2. Devuelve la web o el overlay a su estado original
    if (isDesktop) {
      tl.to("#page-wrapper", {
        scaleX: 1, // Restaura la escala horizontal al 100%
        x: 0,
        borderRadius: "0px",
        boxShadow: "none"
      }, 0);
    } else {
      tl.to("#menu-overlay", { opacity: 0, pointerEvents: "none" }, 0);
    }
  }
}));

// Arrancar Alpine.js
Alpine.start();

// Inicializar nuestras clases principales
document.addEventListener("DOMContentLoaded", () => {
  new TiendaAprendizaje();
  new ProductRequestForm();
});
