import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ASSETS } from '@/data/assets';

const services = [
  {
    href: '/servicios/marketing-digital',
    title: 'Marketing Digital',
    img: ASSETS.services.marketingDigital,
  },
  {
    href: '/servicios/relaciones-publicas',
    title: 'Relaciones Públicas',
    img: ASSETS.services.relacionesPublicas,
  },
  {
    href: '/servicios/street-marketing',
    title: 'Street Marketing',
    img: ASSETS.services.streetMarketing,
  },
  {
    href: '/servicios/atl-display',
    title: 'Medios ATL & Display',
    img: ASSETS.services.atlDisplay,
  },
  {
    href: '/servicios/diseno-branding',
    title: 'Diseño & Branding',
    img: ASSETS.services.disenoBranding,
  },
] as const;

export default function Page() {
  return (
    <SectionShell title={<>Servicios</>} kicker="// Nuestras soluciones">
      <p className="text-white/80 font-bold max-w-3xl">
        Cada servicio tiene su propia subpágina con espacios para imágenes y contenido. Reemplaza las imágenes en
        <span className="font-black"> /public/assets/services/</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/60 transition"
          >
            <div className="aspect-video bg-zinc-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-black italic">{s.title}</h3>
              <p className="text-white/70 font-bold mt-2">Ver detalle →</p>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
