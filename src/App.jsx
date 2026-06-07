import React from 'react';
import { PersistentNavbar } from './components/PersistentNavbar';
import { HeroPlatform } from './components/HeroPlatform';
import { VectorParticleField } from './components/VectorParticleField';
import { DotMatrixLayer } from './components/DotMatrixLayer';
import { SkillsMatrix } from './components/SkillsMatrix';
import { SystemShowcase } from './components/SystemShowcase';
import { AcademicMatrix } from './components/AcademicMatrix';
import { LinguisticMatrix } from './components/LinguisticMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SectionDivider } from './components/SectionDivider';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden selection:bg-navy selection:text-white">
      {/* Background Layers (z-0) */}
      <VectorParticleField />
      <DotMatrixLayer />

      {/* Navigation (z-50) */}
      <PersistentNavbar />

      {/* Main Content (z-10/z-20) */}
      <main className="relative">
        <HeroPlatform />
        <div className="space-y-4">
          <SectionDivider />
          <SkillsMatrix />
          <SectionDivider />
          <SystemShowcase />
          <SectionDivider />
          <ExperienceTimeline />
          <SectionDivider />
          <AcademicMatrix />
          <SectionDivider />
          <LinguisticMatrix />
        </div>
      </main>

      {/* Footer (z-10) */}
      <footer className="py-20 text-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em] z-10 relative">
        © {new Date().getFullYear()} Harshil Gorasiya — Engineered for Autonomous Intelligence
      </footer>
    </div>
  );
}

export default App;
