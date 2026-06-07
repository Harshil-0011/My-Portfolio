import React from 'react';
import { HardwareTerminal } from './HardwareTerminal';

export const HeroPlatform = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
      <div className="text-center space-y-8">
        {/* Anti-Fragmentation Heading */}
        <h1 className="whitespace-nowrap break-keep select-none block tracking-tight font-bold text-navy text-6xl md:text-8xl lg:text-9xl z-20 relative">
          Harshil Gorasiya
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 font-medium leading-tight z-20 relative">
          Applied AI Engineer Specializing in <span className="text-navy font-bold">RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure</span>.
        </p>

        {/* Terminal Simulation Panel */}
        <HardwareTerminal />
      </div>
    </section>
  );
};
