import React from 'react';

export const LinguisticMatrix = () => {
  const languages = [
    {
      code: "EN",
      name: "English",
      level: "C1 — Professional Working Proficiency",
      color: "bg-navy"
    },
    {
      code: "DE",
      name: "German",
      level: "A2 — Basic Proficiency (Actively Learning)",
      color: "bg-slate-300"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row gap-6">
        {(languages || []).map((lang, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 flex items-center gap-6 border border-white/50 shadow-lg"
          >
            <div className={`w-16 h-16 rounded-2xl ${lang.color} flex items-center justify-center text-white font-black text-xl shadow-xl shrink-0`}>
              {lang.code}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-navy">{lang.name}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">
                {lang.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
