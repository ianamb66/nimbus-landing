import React from 'react';
import { SectionShell } from '@/components/SectionShell';

export default function Page() {
  return (
    <SectionShell title={<>Contacto</>} kicker="// Cotizar">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading text-4xl font-black italic">Hablemos de tu impacto.</h2>
          <p className="mt-4 text-white/80 font-bold">
            Placeholder de datos reales: correo, WhatsApp, redes. (Puedes reemplazarlo fácilmente.)
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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b-2 border-white/20">
              <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Quién eres?</label>
              <input type="text" placeholder="NOMBRE COMPLETO" className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10" />
            </div>
            <div className="border-b-2 border-white/20">
              <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Cómo te contactamos?</label>
              <input type="email" placeholder="E-MAIL DE NEGOCIOS" className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10" />
            </div>
            <div className="border-b-2 border-white/20">
              <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">Tu proyecto</label>
              <textarea placeholder="CUÉNTANOS EL RETO" rows={2} className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10" />
            </div>
            <button className="btn-nimbus w-full text-2xl italic" type="submit">ENVIAR SEÑAL</button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
