import React from 'react';
import { SectionShell } from '@/components/SectionShell';

export default function Page() {
  return (
    <SectionShell title={<>Clientes</>} kicker="// Confianza">
      <p className="text-white/80 font-bold max-w-3xl">
        Aquí puedes poner logos de clientes y testimonios. (Los logos irían en <span className="font-black">/public/assets/logos</span>.)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
        {['Retail', 'Salud', 'Tech', 'Gobierno', 'Turismo'].map((label) => (
          <div
            key={label}
            className="p-8 border-2 border-white/10 hover:border-blue-600 transition flex items-center justify-center font-black italic text-xl uppercase opacity-40 hover:opacity-100"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="text-white/70 font-bold">Testimonio {i}</div>
            <div className="mt-3 text-white font-black text-xl">&ldquo;Placeholder de cita corta y poderosa.&rdquo;</div>
            <div className="mt-4 text-white/60 font-bold">— Nombre, Empresa</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
