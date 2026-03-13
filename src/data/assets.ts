export const ASSETS = {
  textures: {
    grunge01: '/assets/textures/grunge-01.png',
    grunge02: '/assets/textures/grunge-02.png',
    scratches: '/assets/textures/scratches.png',
    halftone: '/assets/textures/halftone.png',
    paper: '/assets/textures/paper.png',
  },
  hero: {
    bg: '/assets/hero/hero-bg.jpg',
    collage01: '/assets/hero/collage-01.png',
    collage02: '/assets/hero/collage-02.png',
    // PNG recortes (si existen se sobreponen automáticamente)
    cutouts: {
      expCard: '/assets/hero/cutout-exp-card.png',
      visionFrame: '/assets/hero/cutout-vision-frame.png',
      agencyQuote: '/assets/hero/cutout-agency-quote.png',
    },
  },
  services: {
    marketingDigital: '/assets/services/marketing-digital.jpg',
    relacionesPublicas: '/assets/services/relaciones-publicas.jpg',
    streetMarketing: '/assets/services/street-marketing.jpg',
    atlDisplay: '/assets/services/atl-display.jpg',
    disenoBranding: '/assets/services/diseno-branding.jpg',
  },
  portfolio: {
    proyectoAlpha: '/assets/portfolio/proyecto-alpha.jpg',
    lanzamientoRetail: '/assets/portfolio/lanzamiento-retail.jpg',
    guerrillaUrbana: '/assets/portfolio/guerrilla-urbana.jpg',
  },
  logos: {
    // coloca logos aquí (png/svg)
    // ejemplo: cliente01: '/assets/logos/cliente-01.png'
  },
} as const;
