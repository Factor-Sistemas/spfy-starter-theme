---
version: alpha
name: Shopify-starter-theme-design
description: Un sistema de diseño moderno, limpio y de alto rendimiento para nuestra plantilla base de Shopify. Construido sobre Tailwind CSS v4, Alpine.js y Vite. Se apoya sobre un canvas grisáceo-blanco muy limpio, con tipografía expresiva en encabezados y componentes con bordes redondeados y micro-interacciones. Está diseñado para mapear directamente los ajustes del personalizador de Shopify (Online Store 2.0) a clases utilitarias de Tailwind v4.

colors:
  primary: "#121212"
  primary-active: "#000000"
  primary-disabled: "#e5e5e5"
  ink: "#121212"
  body: "#3a3a3a"
  body-strong: "#1a1a1a"
  muted: "#757575"
  muted-soft: "#9a9a9a"
  hairline: "#e5e5e5"
  hairline-soft: "#f0f0f0"
  canvas: "#fbfbfb"
  surface-soft: "#fafafa"
  surface-card: "#ffffff"
  surface-strong: "#f0f0f0"
  surface-dark: "#121212"
  surface-dark-elevated: "#1a1a1a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a0a0a0"
  
  # Acento y variantes de color para tarjetas y elementos promocionales
  brand-accent: "#000000"
  brand-lavender: "#b8a4ed"
  brand-peach: "#ffb084"
  brand-ochre: "#e8b94a"
  brand-mint: "#a4d4c5"
  brand-coral: "#ff6b5a"
  
  # Semánticos
  success: "#22c55e"
  warning: "#f59e0b"
  error: "#ef4444"

typography:
  display-xl:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  display-lg:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-md:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "clamp(1.5rem, 3vw + 0.8rem, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  display-sm:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-lg:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-md:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  title-sm:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  body-md:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body-sm:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  caption:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
  caption-uppercase:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.15em"
  button:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  nav-link:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"

rounded:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "clamp(3rem, 8vw, 6rem)" # 96px aprox

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
    border: "1px solid {colors.hairline}"
  button-on-color:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    textDecoration: "underline"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: "64px"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  hero-illustration-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  feature-card-lavender:
    backgroundColor: "{colors.brand-lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: "32px"
  feature-card-peach:
    backgroundColor: "{colors.brand-peach}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: "32px"
  feature-card-ochre:
    backgroundColor: "{colors.brand-ochre}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: "32px"
  feature-card-cream:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: "32px"
    border: "1px solid {colors.hairline}"
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: "24px"
    border: "1px solid {colors.hairline}"
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "24px"
    border: "1px solid {colors.hairline}"
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: "32px"
    border: "1px solid {colors.hairline}"
  pricing-tier-card-featured:
    backgroundColor: "{colors.brand-accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: "32px"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
    border: "1px solid {colors.hairline}"
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.ink}"
  category-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  category-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    border: "1px solid {colors.hairline}"
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    border: "1px solid {colors.hairline}"
  expert-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: "24px"
    border: "1px solid {colors.hairline}"
  cta-band-illustrated:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: "80px"
  footer:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "80px"
---

# Shopify Starter Theme Design System

Este documento es el núcleo arquitectónico del sistema de diseño de nuestro tema base para Shopify, estructurado para ser interpretado y mantenido por agentes de IA y desarrolladores de forma unificada.

## 🎯 Directrices y Filosofía de Diseño

1. **Canvas y Contraste:** El fondo general del tema (`{colors.canvas}`) ofrece un tono blanco-cálido muy suave para diferenciarse de los grises planos habituales, mientras que el texto utiliza un negro casi puro (`{colors.ink}`) para la máxima legibilidad.
2. **Jerarquía y Profundidad:** Usamos bordes muy finos (`{colors.hairline}`) y variaciones sutiles de fondo (`{colors.surface-card}`, `{colors.surface-soft}`) en lugar de sombras pesadas para estructurar componentes y contenedores.
3. **Escala Fluida:** Tanto los tamaños de fuentes como los márgenes y rellenos utilizan fórmulas `clamp()`, eliminando breakpoints manuales innecesarios para adaptarse de forma reactiva a móviles, tablets y monitores.
