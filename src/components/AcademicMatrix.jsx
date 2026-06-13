import React, { useRef, useState } from 'react';

export const AcademicMatrix = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <h2 className="text-4xl font-bold text-navy mb-12 tracking-tight">Academic Foundations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AcademicCard
          title="M.Sc. Software Engineering & Management"
          institution="Hochschule Heilbronn, Germany (Current Semester 3) | Expected Graduation: 09/2027"
          gpa="GPA: 1.9 (German Scale)"
          gpaClass="bg-navy text-white shadow-lg"
          modules={["Advanced ML", "Software Architecture", "Cloud Computing", "Distributed Systems", "Data Engineering"]}
        />
        <AcademicCard
          title="B.Tech. Information Technology"
          institution="A.D. Patel Institute of Technology, India | Graduated: 05/2024"
          gpa="GPA: 8.4/10"
          gpaClass="border border-white/40 text-navy shadow-sm bg-white/20"
          modules={["Deep Learning", "Computer Vision", "Advanced Data Structures"]}
        />
      </div>
    </section>
  );
};

const AcademicCard = ({ title, institution, gpa, gpaClass, modules }) => {
  const cardRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOpacity(0)}
      className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/40 shadow-xl relative overflow-hidden group transition-all"
    >
      {/* Interactive Radial Glow (Pop Effect) */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${glowPos.x}px ${glowPos.y}px, rgba(27,42,74,0.12), transparent 50%)`,
          inset: 0,
          zIndex: 0
        }}
      />

      <div className="absolute top-10 right-10 z-10">
        <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${gpaClass}`}>
          {gpa}
        </span>
      </div>

      <div className="space-y-6 relative z-10">
        <h3 className="text-2xl font-black text-navy pr-32">
          {title}
        </h3>
        <p className="text-slate-500 font-bold text-sm">
          {institution}
        </p>
        <div className="h-px bg-navy/5 w-full" />
        <div className="space-y-4">
          <span className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em]">Relevant Modules</span>
          <div className="flex flex-wrap gap-2">
            {(modules || []).map((mod, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/40 border border-white/20 text-slate-600 text-[10px] font-bold shadow-sm group-hover:border-navy/20 transition-colors">
                {mod}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
