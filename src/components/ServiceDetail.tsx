import React from 'react';
import { ASSETS } from '@/data/assets';

export function ServiceDetail({
  title,
  subtitle,
  bullets,
  imageSrc,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  imageSrc: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <p className="text-white/80 font-bold text-lg leading-relaxed">{subtitle}</p>
        <ul className="mt-8 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 bg-red-600 inline-block" />
              <span className="font-bold text-white/90">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/contacto" className="btn-nimbus">
            Cotizar
          </a>
          <a
            href="/servicios"
            className="border-2 border-white px-8 py-4 font-black uppercase hover:bg-white hover:text-black transition"
          >
            Ver todos los servicios
          </a>
        </div>
      </div>

      <div className="paper-clip rotate-[1deg] p-2 bg-white">
        <div className="relative aspect-video overflow-hidden bg-zinc-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-90" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.20] mix-blend-overlay"
            style={{ backgroundImage: `url(${ASSETS.textures.scratches})` }}
          />
        </div>
      </div>
    </div>
  );
}
