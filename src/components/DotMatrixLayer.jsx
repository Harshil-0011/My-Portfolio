import React from 'react';

export const DotMatrixLayer = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(#1B2A4A 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        backgroundPosition: 'center'
      }}
    />
  );
};
