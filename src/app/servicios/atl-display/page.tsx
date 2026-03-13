import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ASSETS } from '@/data/assets';

export default function Page() {
  return (
    <SectionShell title={<>ATL & <span className="text-red-600">Display</span></>} kicker="// Servicio">
      <ServiceDetail
        title="Medios ATL & Display"
        subtitle="Planeación y compra de medios con enfoque en alcance, frecuencia y contexto." 
        bullets={[
          'OOH / espectaculares / mobiliario urbano',
          'Display programático y partners',
          'Negociación y producción',
          'Reportes por periodo y aprendizajes',
        ]}
        imageSrc={ASSETS.services.atlDisplay}
      />
    </SectionShell>
  );
}
