'use client';

import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { LeadForm } from '@/components/LeadForm';

export default function Page() {
  return (
    <SectionShell title={<>Contacto</>} kicker="// Cotizar">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading text-4xl font-black italic">Hablemos de tu impacto.</h2>
          <p className="mt-4 text-white/80 font-bold">
            Al enviar el formulario, te llega un WhatsApp directo al número del equipo (API). Datos editables aquí.
          </p>

          <div className="mt-8 space-y-4 font-bold">
            <div className="flex gap-3 items-center">
              <span className="bg-white text-black px-2 py-1 text-xs">EM</span> hola@nimbusmarketing.mx
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white text-black px-2 py-1 text-xs">WA</span> +52 55 0000 0000
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white text-black px-2 py-1 text-xs">IG</span> @nimbus_mkt_rp
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border-4 border-white p-10 paper-clip shadow-[15px_15px_0px_#ff0000]">
          <LeadForm source="/contacto" />
        </div>
      </div>
    </SectionShell>
  );
}
