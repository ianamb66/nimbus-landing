export type ClientCategoryKey = 'Retail' | 'Salud' | 'Tech' | 'Gobierno' | 'Turismo';

export const CLIENT_CATEGORIES: Record<
  ClientCategoryKey,
  {
    subtitle: string;
    clients: { name: string; note?: string }[];
  }
> = {
  Retail: {
    subtitle: 'Marcas de consumo, punto de venta y eCommerce.',
    clients: [
      { name: 'Cliente Retail 01', note: 'Campaña / performance / PR' },
      { name: 'Cliente Retail 02', note: 'Lanzamiento / evento / contenido' },
      { name: 'Cliente Retail 03', note: 'Branding / piezas / pauta' },
    ],
  },
  Salud: {
    subtitle: 'Farmacéutica, bienestar y servicios médicos.',
    clients: [
      { name: 'Cliente Salud 01', note: 'PR + vocería' },
      { name: 'Cliente Salud 02', note: 'Contenido + paid' },
      { name: 'Cliente Salud 03', note: 'Activación + evento' },
    ],
  },
  Tech: {
    subtitle: 'Productos digitales, SaaS y tecnología de consumo.',
    clients: [
      { name: 'Cliente Tech 01', note: 'Go-to-market' },
      { name: 'Cliente Tech 02', note: 'Demand gen' },
      { name: 'Cliente Tech 03', note: 'Brand + performance' },
    ],
  },
  Gobierno: {
    subtitle: 'Instituciones, campañas públicas y comunicación social.',
    clients: [
      { name: 'Cliente Gobierno 01', note: 'Campaña institucional' },
      { name: 'Cliente Gobierno 02', note: 'PR + medios' },
      { name: 'Cliente Gobierno 03', note: 'Producción + pauta' },
    ],
  },
  Turismo: {
    subtitle: 'Destinos, hospitalidad y experiencias.',
    clients: [
      { name: 'Cliente Turismo 01', note: 'Contenido + pauta' },
      { name: 'Cliente Turismo 02', note: 'PR + influencers' },
      { name: 'Cliente Turismo 03', note: 'Activación + evento' },
    ],
  },
};
