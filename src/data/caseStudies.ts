export type CaseStudy = {
  slug: string;
  brand: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  summary: string;
  cover: string; // image path
  gallery: string[]; // image paths
  justification: string;
};

// Orden: más nuevo arriba (se ordena por date)
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'proyecto-alpha',
    brand: 'Marca Alpha',
    title: 'Proyecto Alpha',
    date: '2026-03-01',
    tags: ['Campaña Digital', 'Contenido', 'Paid'],
    summary: 'Placeholder: proyecto enfocado a performance y narrativa de marca con identidad Nimbus.',
    cover: '/assets/portfolio/casos/proyecto-alpha/cover.jpg',
    gallery: [
      '/assets/portfolio/casos/proyecto-alpha/01.jpg',
      '/assets/portfolio/casos/proyecto-alpha/02.jpg',
      '/assets/portfolio/casos/proyecto-alpha/03.jpg',
    ],
    justification:
      'Placeholder: el proyecto se justificó por necesidad de crecimiento, posicionamiento y conversión con una estética grunge/collage consistente.',
  },
  {
    slug: 'lanzamiento-retail',
    brand: 'Marca Retail',
    title: 'Lanzamiento Retail',
    date: '2026-02-10',
    tags: ['RP', 'Evento', 'Medios'],
    summary: 'Placeholder: lanzamiento con narrativa, invitados, cobertura y piezas de comunicación.',
    cover: '/assets/portfolio/casos/lanzamiento-retail/cover.jpg',
    gallery: [
      '/assets/portfolio/casos/lanzamiento-retail/01.jpg',
      '/assets/portfolio/casos/lanzamiento-retail/02.jpg',
      '/assets/portfolio/casos/lanzamiento-retail/03.jpg',
    ],
    justification:
      'Placeholder: buscábamos prestigio + notoriedad. Diseñamos un momento para medios y contenido reutilizable.',
  },
  {
    slug: 'guerrilla-urbana',
    brand: 'Marca Urbana',
    title: 'Guerrilla Urbana',
    date: '2026-01-20',
    tags: ['Street Marketing', 'Activación', 'Contenido'],
    summary: 'Placeholder: acción callejera con alto recall, sampling y producción audiovisual.',
    cover: '/assets/portfolio/casos/guerrilla-urbana/cover.jpg',
    gallery: [
      '/assets/portfolio/casos/guerrilla-urbana/01.jpg',
      '/assets/portfolio/casos/guerrilla-urbana/02.jpg',
      '/assets/portfolio/casos/guerrilla-urbana/03.jpg',
    ],
    justification:
      'Placeholder: el producto requería calle y contexto real; construimos una ejecución viralizable + PR.',
  },
];
