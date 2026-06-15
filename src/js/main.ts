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

// Arrancar Alpine.js
Alpine.start();

// Inicializar nuestras clases principales
document.addEventListener("DOMContentLoaded", () => {
  new TiendaAprendizaje();
  new ProductRequestForm();
});
