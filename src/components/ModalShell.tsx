'use client';

import React from 'react';

export function ModalShell({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-3xl bg-white text-black paper-clip relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8 border-b-4 border-black flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-500">NIMBUS</div>
            <h3 className="font-heading text-2xl md:text-3xl font-black italic mt-2">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-white font-black px-4 py-2 uppercase tracking-widest hover:bg-[color:var(--nimbus-blue)] transition"
          >
            Cerrar
          </button>
        </div>
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}
