'use client';

import React, { useState } from 'react';

export function LeadForm({ source = 'contacto' }: { source?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    try {
      // Enviamos a WhatsApp (Twilio) y a Google Sheets (webhook) en paralelo.
      const payload = { name, email, message, source };

      const [waRes, shRes] = await Promise.all([
        fetch('/api/whatsapp-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        fetch('/api/sheets-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
      ]);

      const waData = await waRes.json().catch(() => null);
      const shData = await shRes.json().catch(() => null);

      if (!waRes.ok || !waData?.ok) throw new Error(waData?.error || 'No se pudo enviar WhatsApp');
      if (!shRes.ok || !shData?.ok) throw new Error(shData?.error || 'No se pudo guardar en Sheets');

      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (e: unknown) {
      setStatus('error');
      setError(e instanceof Error ? e.message : 'Error');
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="border-b-2 border-white/20">
        <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Quién eres?</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="NOMBRE COMPLETO"
          className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
          required
        />
      </div>
      <div className="border-b-2 border-white/20">
        <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">¿Cómo te contactamos?</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-MAIL DE NEGOCIOS"
          className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
          required
        />
      </div>
      <div className="border-b-2 border-white/20">
        <label className="text-[10px] font-black opacity-50 uppercase tracking-widest">Tu proyecto</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="CUÉNTANOS EL RETO"
          rows={2}
          className="w-full bg-transparent p-2 focus:outline-none font-black text-xl uppercase text-white placeholder:text-white/10"
          required
        />
      </div>

      <button className="btn-nimbus w-full text-2xl italic" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'ENVIANDO…' : 'ENVIAR SEÑAL'}
      </button>

      {status === 'sent' && <p className="text-green-300 font-bold">Listo. Te escribimos por WhatsApp en breve.</p>}
      {status === 'error' && <p className="text-red-300 font-bold">Error: {error}</p>}

      <p className="text-white/50 text-xs font-bold">
        Al enviar aceptas que te contactemos por WhatsApp/correo para dar seguimiento a tu solicitud.
      </p>
    </form>
  );
}
