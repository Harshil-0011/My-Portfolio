import React from 'react';
import { Code, Zap, Timer } from 'lucide-react';

export const SystemShowcase = () => {
  const projects = [
    {
      title: "Ardan-CLI — Autonomous Multi-Provider Coding Agent",
      link: "https://github.com/N0t-Harshil/Ardan-CLI",
      overview: "Engineered a standalone, terminal-based AI software engineer utilizing an explicit ReAct execution loop in Python.",
      metrics: [
        "Supports 6 major LLM providers with instant runtime failover setups.",
        "Parallel tool executions across Git, Docker containment structures, and system compilers.",
        "Secure local environment handling via embedded AES-encrypted keys."
      ],
      tags: ["Python", "ReAct Framework", "Anthropic MCP"],
      accent: "navy"
    },
    {
      title: "Hierarchical Graph-Based RAG System",
      link: "https://github.com/N0t-Harshil",
      badge: { icon: <Zap size={14} />, text: "4s Latency @ $0 Infrastructure Cost" },
      overview: "Designed a complete production alternatives architecture replacing expensive graph calls with deterministic multi-level mappings.",
      metrics: [
        "5-level document entity indexing (Document down to raw sentences) to minimize hallucinations.",
        "Indexes entire 75-page corpora variants locally within 19 seconds using FAISS + Ollama."
      ],
      tags: ["Python", "Knowledge Graphs", "FAISS Vector DB"],
      accent: "emerald"
    },
    {
      title: "Local Perplex — Private Multimodal AI Research Engine",
      link: "https://github.com/N0t-Harshil/Local-Perplex",
      badge: { icon: <Timer size={14} />, text: "Sub-10ms Ranking Latency" },
      overview: "A completely sandboxed, zero-data-leakage desktop research platform supporting multimodal analytics.",
      metrics: [
        "Custom native multi-threaded search rankings parsing over 10,000 documents under 10ms.",
        "Fully functional local OCR subsystems for processing layouts and optical assets."
      ],
      tags: ["C++ Engine", "Ollama Core", "Multithreading"],
      accent: "cobalt"
    },
    {
      title: "AI-Powered Video Upscaling App",
      link: "https://github.com/N0t-Harshil/AI-Powered-Video-Upscaling-Windows-Application",
      overview: "Native Windows desktop deployment infrastructure built for executing real-time video super-resolution.",
      metrics: [
        "Integrated Real-ESRGAN networks with structural selection models.",
        "Features clean local hardware monitors tracking real-time VRAM/GPU limits.",
        "Evaluated model configs objectively via structural peak signal-to-noise metrics (PSNR/SSIM)."
      ],
      tags: ["PyTorch", "Super-Resolution", "Windows Application"],
      accent: "coral"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <h2 className="text-4xl font-bold text-navy mb-12 tracking-tight">Systems Architecture Showcase</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {(projects || []).map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-white/80 backdrop-blur-md border border-white/50 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl transition-all hover:shadow-[0_40px_80px_-20px_rgba(27,42,74,0.15)]"
          >
            {/* Dynamic Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
               <div className="absolute top-0 right-0 w-64 h-64 bg-navy/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-4 max-w-[80%]">
                {project.badge && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    {project.badge.icon} {project.badge.text}
                  </div>
                )}
                <h3 className="text-2xl font-black text-navy leading-tight group-hover:text-accent-cobalt transition-colors">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-xl"
              >
                <Code size={20} />
              </a>
            </div>

            {/* Content */}
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              {project.overview}
            </p>

            {/* Metrics */}
            <ul className="space-y-4 mb-10">
              {(project.metrics || []).map((metric, mIdx) => (
                <li key={mIdx} className="flex gap-4 text-sm text-slate-500 font-semibold leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy/20 mt-2 shrink-0" />
                  {metric}
                </li>
              ))}
            </ul>

            {/* Footer Tags */}
            <div className="flex flex-wrap gap-2">
              {(project.tags || []).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-4 py-2 rounded-xl bg-navy/5 text-navy text-[10px] font-black uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
