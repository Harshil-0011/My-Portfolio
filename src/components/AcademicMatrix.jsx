import React from 'react';

export const AcademicMatrix = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <h2 className="text-4xl font-bold text-navy mb-12 tracking-tight">Academic Foundations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* M.Sc. Card */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-10 right-10">
            <span className="px-5 py-2 rounded-full bg-navy text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
              GPA: 1.9 (German Scale)
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-navy pr-32">M.Sc. Software Engineering & Management</h3>
            <p className="text-slate-500 font-bold text-sm">
              Hochschule Heilbronn, Germany (Current Semester 3) | Expected Graduation: 09/2027
            </p>
            <div className="h-px bg-slate-100 w-full" />
            <div className="space-y-4">
              <span className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em]">Relevant Modules</span>
              <div className="flex flex-wrap gap-2">
                {["Advanced ML", "Software Architecture", "Cloud Computing", "Distributed Systems", "Data Engineering"].map((mod, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold">
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* B.Tech. Card */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-10 right-10">
            <span className="px-5 py-2 rounded-full border border-slate-200 text-navy text-[10px] font-black uppercase tracking-widest shadow-sm">
              GPA: 8.4/10
            </span>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-navy pr-32">B.Tech. Information Technology</h3>
            <p className="text-slate-500 font-bold text-sm">
              A.D. Patel Institute of Technology, India | Graduated: 05/2024
            </p>
            <div className="h-px bg-slate-100 w-full" />
            <div className="space-y-4">
              <span className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em]">Relevant Modules</span>
              <div className="flex flex-wrap gap-2">
                {["Deep Learning", "Computer Vision", "Advanced Data Structures"].map((mod, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold">
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
