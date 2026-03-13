import React from 'react';
import { SectionShell } from '@/components/SectionShell';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ASSETS } from '@/data/assets';

export default function Page() {
  return (
    <SectionShell title={<>Diseño & <span className="text-blue-600">Branding</span></>} kicker="// Servicio">
      <ServiceDetail
        title="Diseño & Branding"
        subtitle="Sistemas visuales, identidad y piezas que se sienten: grunge, collage y precisión." 
        bullets={[
          'Identidad visual y brand system',
          'Key visuals por campaña',
          'Piezas para social / web / print',
          'Guidelines y templates',
        ]}
        imageSrc={ASSETS.services.disenoBranding}
      />
    </SectionShell>
  );
}
