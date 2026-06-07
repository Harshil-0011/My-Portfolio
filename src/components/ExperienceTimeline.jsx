import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Deep Learning Intern",
      company: "PD Avenue",
      location: "Remote",
      duration: "12/2023 — 04/2024",
      details: [
        "Built custom classification heads using TensorFlow/Keras, achieving a +8% boost in validation accuracy via systematic architecture search and tuning.",
        "Slashed total baseline processing runtimes by 20% through adaptive schedule adjustments.",
        "Isolated structural overfitting patterns across 10+ core test branches with strict config tracing."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Dotcom IoT LLP",
      location: "India",
      duration: "05/2023 — 06/2023",
      details: [
        "Deployed YOLOv8 tracking frameworks processing 35,000+ frames per hour at 28-32 FPS purely on CPU-only edge hardware.",
        "Curated, audited, and hand-annotated 3,000+ custom evaluation frames to stabilize structural accuracy drops."
      ]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative z-20">
      <h2 className="text-4xl font-bold text-navy mb-16 tracking-tight">Professional Experience</h2>

      <div className="relative border-l-2 border-slate-100 ml-4 space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy border-4 border-white shadow-sm" />

            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="text-xl font-bold text-navy">{exp.role}</h3>
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">{exp.duration}</span>
              </div>

              <div className="text-slate-500 font-medium italic">
                {exp.company} — {exp.location}
              </div>

              <ul className="space-y-3 max-w-3xl">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 leading-relaxed font-medium">
                    <span className="text-navy font-bold mt-1">/</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
