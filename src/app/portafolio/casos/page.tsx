import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { CASE_STUDIES } from '@/data/caseStudies';

function byDateDesc(a: { date: string }, b: { date: string }) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export default function Page() {
  const cases = [...CASE_STUDIES].sort(byDateDesc);

  return (
    <SectionShell title={<>Portafolio</>} kicker="// Casos (blog)">
      <p className="text-white/80 font-bold max-w-3xl">
        Página tipo blog para subir proyectos (marca, fotos, justificación). Ordena de <span className="font-black">nuevo → viejo</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {cases.map((c) => (
          <a
            key={c.slug}
            href={`/portafolio/casos/${c.slug}`}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/60 transition"
          >
            <div className="aspect-video bg-zinc-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition" />
            </div>
            <div className="p-6">
              <div className="text-[10px] font-black tracking-[0.3em] uppercase text-white/60">{c.date}</div>
              <h3 className="font-heading text-2xl font-black italic mt-2">{c.title}</h3>
              <p className="text-white/70 font-bold mt-2">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs font-black bg-black/40 border border-white/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-white font-black">Ver caso →</div>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
