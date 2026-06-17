import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiendaAprendizaje from './classes/TiendaAprendizaje';
import ProductRequestForm from './classes/ProductRequestForm';
import './classes/CartDrawer';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// Hacer que Alpine y GSAP estén disponibles de forma global en el objeto window
(window as any).Alpine = Alpine;
(window as any).gsap = gsap;

// Registro de nuestro componente de Alpine para el Menú y Carrito
Alpine.data('menuSystem', () => ({
  isMenuOpen: false,
  isCartOpen: false,
  menuWidth: 450, // Ancho de los paneles laterales

  init() {
    // Posicionamos ambos paneles fuera de la pantalla (desplazados a la derecha)
    gsap.set("#menu-drawer", { x: this.menuWidth });
    gsap.set("#cart-drawer", { x: this.menuWidth });
  },

  toggleMenu() {
    // Si el carrito está abierto, lo cerramos primero
    if (this.isCartOpen) {
      this.isCartOpen = false;
      this.animateCloseCart(window.innerWidth >= 1024, false); // Cerramos rápido sin restaurar el wrapper aún
    }

    this.isMenuOpen = !this.isMenuOpen;
    const isDesktop = window.innerWidth >= 1024;

    if (this.isMenuOpen) {
      this.animateOpenMenu(isDesktop);
    } else {
      this.animateCloseMenu(isDesktop);
    }
  },

  toggleCart() {
    // Si el menú está abierto, lo cerramos primero
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.animateCloseMenu(window.innerWidth >= 1024, false); // Cerramos rápido sin restaurar el wrapper aún
    }

    this.isCartOpen = !this.isCartOpen;
    const isDesktop = window.innerWidth >= 1024;

    if (this.isCartOpen) {
      this.animateOpenCart(isDesktop);
    } else {
      this.animateCloseCart(isDesktop);
    }
  },

  animateOpenMenu(isDesktop: boolean) {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
    tl.to("#menu-drawer", { x: 0 }, 0);

    if (isDesktop) {
      tl.to("#page-wrapper", {
        width: "calc(100% - 450px)",
        borderRadius: "24px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
      }, 0);
    } else {
      tl.to("#overlay", { opacity: 1, pointerEvents: "auto" }, 0);
    }
  },

  animateCloseMenu(isDesktop: boolean, restoreWrapper: boolean = true) {
    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power3.inOut" } });
    tl.to("#menu-drawer", { x: this.menuWidth }, 0);

    if (isDesktop && restoreWrapper) {
      tl.to("#page-wrapper", {
        width: "100%",
        borderRadius: "0px",
        boxShadow: "none",
        clearProps: "width,transform,borderRadius,boxShadow"
      }, 0);
    } else if (!isDesktop) {
      tl.to("#overlay", { opacity: 0, pointerEvents: "none" }, 0);
    }
  },

  animateOpenCart(isDesktop: boolean) {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
    tl.to("#cart-drawer", { x: 0 }, 0);

    if (isDesktop) {
      tl.to("#page-wrapper", {
        width: "calc(100% - 450px)",
        borderRadius: "24px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
      }, 0);
    } else {
      tl.to("#overlay", { opacity: 1, pointerEvents: "auto" }, 0);
    }
  },

  animateCloseCart(isDesktop: boolean, restoreWrapper: boolean = true) {
    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power3.inOut" } });
    tl.to("#cart-drawer", { x: this.menuWidth }, 0);

    if (isDesktop && restoreWrapper) {
      tl.to("#page-wrapper", {
        width: "100%",
        borderRadius: "0px",
        boxShadow: "none",
        clearProps: "width,transform,borderRadius,boxShadow"
      }, 0);
    } else if (!isDesktop) {
      tl.to("#overlay", { opacity: 0, pointerEvents: "none" }, 0);
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
