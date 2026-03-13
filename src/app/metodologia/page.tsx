import React from 'react';
import { SectionShell } from '@/components/SectionShell';

export default function Page() {
  return (
    <SectionShell title={<>Metodología</>} kicker="// El proceso">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-white/80 font-bold text-lg leading-relaxed">
            Esta es la versión extendida de la metodología. Puedes reemplazar texto y agregar imágenes de apoyo.
          </p>

          <ol className="mt-8 space-y-4">
            {[
              ['01', 'Investigación', 'Contexto, mercado, audiencia, competencia.'],
              ['02', 'Análisis', 'Patrones, señales y oportunidades.'],
              ['03', 'Diagnóstico', 'Qué pasa y qué significa para tu marca.'],
              ['04', 'Estrategia', 'El rumbo, el concepto y el plan.'],
              ['05', 'Acciones', 'Tácticas, piezas y cronograma.'],
              ['06', 'Implementación', 'Ejecución, gestión y producción.'],
              ['07', 'Resultados', 'Medición, aprendizajes y optimización.'],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="font-heading text-3xl font-black italic text-red-600">{n}</div>
                <div>
                  <div className="font-heading text-xl font-black">{t}</div>
                  <div className="text-white/70 font-bold mt-1">{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="paper-clip p-4 rotate-[1deg]">
          <div className="bg-zinc-200 aspect-[4/5] flex items-center justify-center">
            <div className="text-zinc-500 font-black italic text-center">
              PLACEHOLDER<br />IMAGEN METODOLOGÍA
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
