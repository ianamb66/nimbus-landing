import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ASSETS } from '@/data/assets';

export default function Page() {
  return (
    <SectionShell title={<>Marketing <span className="text-blue-600">Digital</span></>} kicker="// Servicio">
      <ServiceDetail
        title="Marketing Digital"
        subtitle="Estrategia, performance y contenido para marcas que quieren crecer con claridad y ejecución." 
        bullets={[
          'Estrategia de contenidos (IG/TikTok/YouTube/LinkedIn)',
          'Paid Media (Meta/Google) con control de conversiones',
          'Landing pages + funnels',
          'Reporting y optimización semanal',
        ]}
        imageSrc={ASSETS.services.marketingDigital}
      />
    </SectionShell>
  );
}
