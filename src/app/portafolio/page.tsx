import React from 'react';
import Link from 'next/link';
import { SectionShell } from '@/components/SectionShell';
import { ASSETS } from '@/data/assets';

const projects = [
  { title: 'Proyecto Alpha', tag: 'CAMPAÑA DIGITAL', img: ASSETS.portfolio.proyectoAlpha },
  { title: 'Lanzamiento Retail', tag: 'R.P. & EVENTOS', img: ASSETS.portfolio.lanzamientoRetail },
  { title: 'Guerrilla Urbana', tag: 'STREET MARKETING', img: ASSETS.portfolio.guerrillaUrbana },
] as const;

export default function Page() {
  return (
    <SectionShell title={<>Portafolio</>} kicker="// Casos de éxito">
      <p className="text-white/80 font-bold max-w-3xl">
        Aquí van tus proyectos. Reemplaza las imágenes en <span className="font-black">/public/assets/portfolio</span>.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/portafolio/casos" className="btn-nimbus">Ver portafolio (blog)</Link>
        <Link
          href="/contacto"
          className="border-2 border-white px-8 py-4 font-black uppercase hover:bg-white hover:text-black transition"
        >
          Cotizar
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((p) => (
          <div key={p.title} className="bg-zinc-900 aspect-video group relative overflow-hidden border-4 border-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-95 transition" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.20] mix-blend-overlay" style={{ backgroundImage: 'url(/assets/textures/grunge-02.png)' }} />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="bg-red-600 text-white px-2 py-1 text-[10px] font-black italic">{p.tag}</span>
              <h4 className="text-white font-black text-xl">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
