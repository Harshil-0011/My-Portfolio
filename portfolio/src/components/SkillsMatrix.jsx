import React from 'react';
import { ExternalLink } from 'lucide-react';

export const SkillsMatrix = () => {
  const skillGroups = [
    {
      title: "LLM & Agentic Orchestration",
      skills: ["LangChain", "FAISS", "SentenceTransformers", "Ollama", "RAG Pipelines", "Knowledge Graphs", "ReAct Loops", "Model Quantization", "Model Context Protocol (MCP)"]
    },
    {
      title: "Deep Learning & CV",
      skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "scikit-learn", "YOLOv8", "CNNs", "Real-ESRGAN Super-Resolution"]
    },
    {
      title: "Languages & Architecture",
      skills: ["Python", "C++ (Multithreaded Engines)", "SQL", "Bash", "Low-latency CLI Design"]
    },
    {
      title: "MLOps & Infrastructure",
      skills: ["MLflow", "Docker", "FastAPI", "REST APIs", "Git Version Control", "Linux Systems", "AWS Foundation", "MySQL", "MongoDB", "SQLite"]
    }
  ];

  const credentials = [
    { title: "Anthropic: Claude API Developer", url: "https://verify.skilljar.com/c/abtyb7rnh5gg" },
    { title: "Anthropic: MCP Advanced Topics", url: "https://verify.skilljar.com/c/9ogn74na4fmf" },
    { title: "IBM: Machine Learning with Python", url: "#" },
    { title: "Databricks: Data Science Fundamentals", url: "#" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <h2 className="text-4xl font-bold text-navy mb-12 tracking-tight">Skills Matrix</h2>

      {/* 4-Column Balanced Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[8px_8px_16px_#f1f5f9,-8px_-8px_16px_#ffffff]"
          >
            <h3 className="text-xs font-black text-navy/40 uppercase tracking-[0.2em] mb-6 border-b border-slate-50 pb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verified Credentials */}
      <div className="flex flex-wrap gap-4 items-center">
        <span className="text-[10px] font-black text-navy/30 uppercase tracking-[0.3em] mr-4">Verified Credentials</span>
        {credentials.map((cred, idx) => (
          <a
            key={idx}
            href={cred.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-navy hover:border-navy hover:shadow-lg transition-all"
          >
            {cred.title}
            {cred.url !== "#" && <ExternalLink size={10} />}
          </a>
        ))}
      </div>
    </section>
  );
};
