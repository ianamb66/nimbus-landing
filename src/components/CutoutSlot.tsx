'use client';

import React, { useState } from 'react';

/**
 * CutoutSlot
 * - Muestra siempre un fallback (cuadro normal)
 * - Encima intenta cargar un PNG de recorte.
 * - Si el PNG existe y carga -> se muestra.
 * - Si no existe -> se queda invisible (placeholder).
 */
export function CutoutSlot({
  src,
  alt,
  className = '',
  imgClassName = '',
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {children}
      {/* Placeholder invisible: si el archivo existe, aparece encima */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`pointer-events-none absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        onLoad={() => setShow(true)}
        onError={() => setShow(false)}
        draggable={false}
      />
    </div>
  );
}
