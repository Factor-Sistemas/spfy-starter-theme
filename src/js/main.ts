import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiendaAprendizaje from './classes/TiendaAprendizaje';
import ProductRequestForm from './classes/ProductRequestForm';
import './classes/CartDrawer';
import './classes/ProductCardBuy';
import './classes/FsTrackingFields';
import './classes/FsToast';
import './classes/FeaturedCollectionSlider';
import './classes/ImageBannerSlider';
import './classes/FsProductGallery';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// Hacer que Alpine y GSAP estén disponibles de forma global en el objeto window
(window as any).Alpine = Alpine;
(window as any).gsap = gsap;

// Registro de nuestro componente de Alpine para el Menú y Carrito
Alpine.data('menuSystem', () => ({
  isMenuOpen: false,
  isCartOpen: false,
  menuWidth: 450, // Ancho de los paneles laterales en px
  isDesktopLayout: window.innerWidth >= 1024,

  init() {
    // Posicionamos ambos paneles fuera de la pantalla (desplazados a la derecha)
    gsap.set("#menu-drawer", { x: this.menuWidth });
    gsap.set("#cart-drawer", { x: this.menuWidth });

    // El cajón ya no se abre automáticamente para no interrumpir la navegación del usuario (especialmente en móvil).
    // El contenido se actualiza en segundo plano mediante CartDrawer.ts.

    // Escuchar el evento de redimensionado de ventana
    window.addEventListener('resize', () => {
      const currentIsDesktop = window.innerWidth >= 1024;
      if (currentIsDesktop !== this.isDesktopLayout) {
        this.isDesktopLayout = currentIsDesktop;
        this.handleResizeTransition();
      }
    });
  },

  handleResizeTransition() {
    // Si alguno de los paneles está abierto, coordinamos la transición responsiva
    if (this.isMenuOpen || this.isCartOpen) {
      const isDesktop = this.isDesktopLayout;
      const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power3.out" } });

      if (isDesktop) {
        // Al pasar a escritorio: ocultamos la capa translúcida y encogemos el wrapper principal
        tl.to("#overlay", { opacity: 0, pointerEvents: "none" }, 0);
        tl.to("#page-wrapper", {
          width: `calc(100% - ${this.menuWidth}px)`,
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
        }, 0);
      } else {
        // Al pasar a móvil/tablet: activamos la capa translúcida y restauramos el wrapper principal
        tl.to("#overlay", { opacity: 1, pointerEvents: "auto" }, 0);
        tl.to("#page-wrapper", {
          width: "100%",
          borderRadius: "0px",
          boxShadow: "none",
          clearProps: "width,transform,borderRadius,boxShadow"
        }, 0);
      }
    }
  },

  toggleMenu() {
    // Si el carrito está abierto, lo cerramos primero sin animar la restauración completa del wrapper
    if (this.isCartOpen) {
      this.isCartOpen = false;
      this.animateCloseCart(this.isDesktopLayout, false);
    }

    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.animateOpenMenu(this.isDesktopLayout);
    } else {
      this.animateCloseMenu(this.isDesktopLayout);
    }
  },

  toggleCart() {
    // Si el menú está abierto, lo cerramos primero sin animar la restauración completa del wrapper
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.animateCloseMenu(this.isDesktopLayout, false);
    }

    this.isCartOpen = !this.isCartOpen;

    if (this.isCartOpen) {
      this.animateOpenCart(this.isDesktopLayout);
    } else {
      this.animateCloseCart(this.isDesktopLayout);
    }
  },

  animateOpenMenu(isDesktop: boolean) {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
    tl.to("#menu-drawer", { x: 0 }, 0);

    if (isDesktop) {
      tl.to("#page-wrapper", {
        width: `calc(100% - ${this.menuWidth}px)`,
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
        width: `calc(100% - ${this.menuWidth}px)`,
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
