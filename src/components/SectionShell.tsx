import React from 'react';

export function SectionShell({
  title,
  kicker,
  children,
}: {
  title: React.ReactNode;
  kicker?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          {kicker && <div className="text-red-600 font-black tracking-[0.3em] uppercase">{kicker}</div>}
          <h1 className="font-heading text-5xl md:text-7xl font-black italic mt-4">{title}</h1>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.10] pointer-events-none" style={{ backgroundImage: 'url(/assets/textures/halftone.png)' }} />
          <div className="relative">{children}</div>
        </div>
      </div>
    </section>
  );
}
