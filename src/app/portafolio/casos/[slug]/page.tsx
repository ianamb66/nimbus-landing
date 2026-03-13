import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionShell } from '@/components/SectionShell';
import { CASE_STUDIES } from '@/data/caseStudies';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const c = CASE_STUDIES.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  return (
    <SectionShell title={<>{c.title}</>} kicker={`// ${c.brand}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="paper-clip p-3 rotate-[0.5deg] bg-white">
            <div className="bg-zinc-900 aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={c.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-heading text-3xl font-black italic">Justificación</h3>
            <p className="mt-4 text-white/80 font-bold leading-relaxed">{c.justification}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-heading text-3xl font-black italic">Galería</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
              {c.gallery.map((src, i) => (
                <div key={src} className="paper-clip p-2 bg-white rotate-[0.5deg]">
                  <div className="bg-zinc-900 aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${c.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-black/50 border border-white/10 rounded-3xl p-6">
            <div className="text-[10px] font-black tracking-[0.3em] uppercase text-white/60">Fecha</div>
            <div className="mt-2 font-black text-white">{c.date}</div>

            <div className="mt-6 text-[10px] font-black tracking-[0.3em] uppercase text-white/60">Tags</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="text-xs font-black bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a href="/contacto" className="btn-nimbus w-full block text-center">Cotizar este estilo</a>
            </div>

            <div className="mt-4">
              <Link
                href="/portafolio/casos"
                className="border-2 border-white px-6 py-3 font-black uppercase hover:bg-white hover:text-black transition w-full block text-center"
              >
                Volver al blog
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
