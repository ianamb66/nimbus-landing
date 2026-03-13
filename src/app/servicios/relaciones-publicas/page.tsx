import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ASSETS } from '@/data/assets';

export default function Page() {
  return (
    <SectionShell title={<>Relaciones <span className="text-red-600">Públicas</span></>} kicker="// Servicio">
      <ServiceDetail
        title="Relaciones Públicas"
        subtitle="Construimos reputación: narrativa, vocería, medios y presencia estratégica." 
        bullets={[
          'Estrategia de comunicación y posicionamiento',
          'Gestión de medios y PR kits',
          'Vocería, entrevistas y crisis',
          'Eventos, lanzamientos y alianzas',
        ]}
        imageSrc={ASSETS.services.relacionesPublicas}
      />
    </SectionShell>
  );
}
