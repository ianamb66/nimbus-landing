import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ASSETS } from '@/data/assets';

export default function Page() {
  return (
    <SectionShell title={<>Street <span className="text-blue-600">Marketing</span></>} kicker="// Servicio">
      <ServiceDetail
        title="Street Marketing"
        subtitle="Acciones en calle y experiencias con estética Nimbus: alto impacto, alto recuerdo." 
        bullets={[
          'Guerrilla, sampling, activaciones',
          'Producción y permisos (según ciudad)',
          'Foto/video para uso en pauta y PR',
          'Medición y reporte de impacto',
        ]}
        imageSrc={ASSETS.services.streetMarketing}
      />
    </SectionShell>
  );
}
