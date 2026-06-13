import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  CalendarCheck,
  IdCard,
  MapPin,
  Phone,
  Mail,
  Link as Linkedin,
  GitBranch as Github,
  Download,
  Terminal as TerminalIcon,
  ChevronRight,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Layers,
  GraduationCap,
  Globe2,
  Award,
  Zap,
  Timer,
  Lock,
  Monitor,
  Briefcase,
  Languages
} from 'lucide-react';

// --- Shared Components ---

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-md border border-white/20 rounded-full">
    <span className="text-slate-600">{icon}</span>
    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight whitespace-nowrap">
      {text}
    </span>
  </div>
);

const SectionDivider = () => (
  <div className="group relative py-12 px-6 max-w-7xl mx-auto w-full">
    <hr className="border-t border-silver-blue/30 transition-all duration-500 group-hover:border-navy group-hover:shadow-[0_0_15px_rgba(27,42,74,0.3)]" />
  </div>
);

const SectionHeading = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-12">
    {Icon && <Icon className="text-navy" size={32} />}
    <h2 className="text-4xl md:text-5xl font-display font-bold text-navy tracking-tight">{children}</h2>
  </div>
);

// --- Sub-Components ---

const PersistentNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex items-center justify-between glass shadow-sm">
      {/* Left: Status Dot */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] md:text-xs font-bold text-navy tracking-widest uppercase select-none">
          <strong>Status:</strong> Seeking Werkstudent / Part-time Positions in Germany
        </span>
      </div>

      {/* Right: Logistics Badges */}
      <div className="hidden lg:flex items-center gap-2">
        <Badge icon={<Clock size={12} />} text="20h/Week (Semester)" />
        <Badge icon={<CalendarCheck size={12} />} text="Full-time (Breaks)" />
        <Badge icon={<IdCard size={12} />} text="Valid Aufenthaltserlaubnis" />
      </div>
    </nav>
  );
};

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const fullContent = [
    { text: ">>> import ardan_agent", delay: 500 },
    { text: ">>> agent = ardan_agent.initialize(providers=6) # Claude, GPT, Gemini, Groq, Mistral, Ollama", delay: 800 },
    { text: ">>> agent.execute_react_loop(task=\"Optimize localized infrastructure pipelines\")", delay: 1000 },
    { text: "[INFO] Auto-failover active. Executing Docker containment sandbox tool...", type: "info", delay: 600 },
    { text: "[SUCCESS] Low-latency response achieved. Latency: sub-10ms. Cost: $0.00", type: "success", delay: 400 }
  ];

  useEffect(() => {
    let currentLine = 0;
    const addLine = () => {
      if (currentLine < fullContent.length) {
        setLines(prev => [...prev, fullContent[currentLine]]);
        setTimeout(addLine, fullContent[currentLine].delay);
        currentLine++;
      }
    };
    addLine();
  }, []);

  return (
    <div className="bg-slate-950 text-emerald-400 font-mono text-xs rounded-lg p-5 shadow-2xl border border-white/5 w-full max-w-2xl mx-auto overflow-hidden">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
        <span className="ml-2 text-slate-500 text-[10px] uppercase tracking-widest">Ardan-CLI / React Loop</span>
      </div>
      <div className="space-y-1.5 min-h-[140px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={line?.type === 'info' ? 'text-blue-400' : line?.type === 'success' ? 'text-emerald-400 font-bold' : 'text-slate-300'}
          >
            {line?.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-emerald-400 translate-y-1"
        />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Gradient Mesh Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-navy/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display font-extrabold text-navy tracking-tight"
        >
          Harshil Gorasiya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl text-charcoal max-w-3xl mx-auto font-medium"
        >
          Applied AI Engineer Specializing in RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Terminal />
        </motion.div>

        {/* Contact Link Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 py-4 text-navy font-semibold"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-navy" />
            <span className="text-sm">Heilbronn, Germany</span>
          </div>
          <a href="tel:+4915563517346" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Phone size={18} className="text-navy" />
            <span className="text-sm">0 155 6351 7346</span>
          </a>
          <a href="mailto:harshil.gorasiya.0011@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Mail size={18} className="text-navy" />
            <span className="text-sm">harshil.gorasiya.0011@gmail.com</span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a
            href="https://linkedin.com/in/harshil-gorasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all duration-300"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/N0t-Harshil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all duration-300"
          >
            <Github size={18} />
            GitHub
          </a>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-navy text-white font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            <Download size={18} />
            Download Full LaTeX CV (PDF)
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsMatrix = () => {
  const categories = [
    {
      title: "LLM & Agentic Orchestration",
      color: "border-blue-500",
      skills: ["LangChain", "FAISS", "SentenceTransformers", "Ollama", "RAG Pipelines", "Knowledge Graphs", "ReAct Loops", "Model Quantization", "Model Context Protocol (MCP)"]
    },
    {
      title: "Deep Learning & CV",
      color: "border-emerald-500",
      skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "scikit-learn", "YOLOv8", "CNNs", "Real-ESRGAN Super-Resolution"]
    },
    {
      title: "Languages & Architecture",
      color: "border-amber-500",
      skills: ["Python", "C++ (Multithreaded Engines)", "SQL", "Bash", "Low-latency CLI Design"]
    },
    {
      title: "MLOps & Infrastructure",
      color: "border-navy",
      skills: ["MLflow", "Docker", "FastAPI", "REST APIs", "Git Version Control", "Linux Systems", "AWS Foundation", "MySQL", "MongoDB", "SQLite"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Layers}>Skills Matrix</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`p-8 bg-soft-off-white rounded-2xl border-l-4 ${cat.color} shadow-sm group hover:shadow-md transition-all duration-300`}
          >
            <h3 className="text-xl font-bold text-navy mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <span
                  key={si}
                  className="px-3 py-1 bg-white border border-silver-blue/30 rounded-full text-xs font-semibold text-charcoal hover:scale-105 hover:bg-navy hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a href="https://verify.skilljar.com/c/abtyb7rnh5gg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/10 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-colors">
          <Award size={14} /> Anthropic: Claude API Developer
        </a>
        <a href="https://verify.skilljar.com/c/9ogn74na4fmf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/10 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-colors">
          <Award size={14} /> Anthropic: MCP Advanced Topics
        </a>
        <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/10 rounded-lg text-xs font-bold text-navy">
          <Award size={14} /> IBM: Machine Learning with Python
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/10 rounded-lg text-xs font-bold text-navy">
          <Award size={14} /> Databricks: Data Science Fundamentals
        </div>
      </div>
    </section>
  );
};

const SystemShowcase = () => {
  const projects = [
    {
      title: "Ardan-CLI — Autonomous Multi-Provider Coding Agent",
      link: "https://github.com/N0t-Harshil/Ardan-CLI",
      overview: "Engineered a standalone, terminal-based AI software engineer utilizing an explicit ReAct execution loop in Python.",
      bullets: [
        "Supports 6 major LLM providers with instant runtime failover setups.",
        "Parallel tool executions across Git, Docker containment structures, and system compilers.",
        "Secure local environment handling via embedded AES-encrypted keys."
      ],
      tags: ["Python", "ReAct Framework", "Anthropic MCP"]
    },
    {
      title: "Hierarchical Graph-Based RAG System",
      link: "https://github.com/N0t-Harshil",
      badge: { text: "⚡ 4s Latency @ $0 Infrastructure Cost", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
      overview: "Designed a complete production alternatives architecture replacing expensive graph calls with deterministic multi-level mappings.",
      bullets: [
        "5-level document entity indexing (Document down to raw sentences) to minimize hallucinations.",
        "Indexes entire 75-page corpora variants locally within 19 seconds using FAISS + Ollama."
      ],
      tags: ["Python", "Knowledge Graphs", "FAISS Vector DB"]
    },
    {
      title: "Local Perplex — Private Multimodal AI Research Engine",
      link: "https://github.com/N0t-Harshil/Local-Perplex",
      badge: { text: "⏱️ Sub-10ms Ranking Latency", color: "bg-blue-100 text-blue-700 border-blue-200" },
      overview: "A completely sandboxed, zero-data-leakage desktop research platform supporting multimodal analytics.",
      bullets: [
        "Custom native multi-threaded search rankings parsing over 10,000 documents under 10ms.",
        "Fully functional local OCR subsystems for processing layouts and optical assets."
      ],
      tags: ["C++ Engine", "Ollama Core", "Multithreading"]
    },
    {
      title: "AI-Powered Video Upscaling App",
      link: "https://github.com/N0t-Harshil/AI-Powered-Video-Upscaling-Windows-Application",
      overview: "Native Windows desktop deployment infrastructure built for executing real-time video super-resolution.",
      bullets: [
        "Integrated Real-ESRGAN networks with structural selection models.",
        "Features clean local hardware monitors tracking real-time VRAM/GPU limits.",
        "Evaluated model configs objectively via structural peak signal-to-noise metrics (PSNR/SSIM)."
      ],
      tags: ["PyTorch", "Super-Resolution", "Windows Application"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Cpu}>Architecture & System Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="relative group p-8 rounded-3xl bg-white border border-silver-blue/20 shadow-xl overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-navy leading-tight pr-4">{proj.title}</h3>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy/5 rounded-full hover:bg-navy hover:text-white transition-all duration-300">
                  <ExternalLink size={20} />
                </a>
              </div>

              {proj.badge && (
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${proj.badge.color} mb-4 w-fit`}>
                  {proj.badge.text}
                </div>
              )}

              <p className="text-charcoal mb-6 text-sm font-medium leading-relaxed italic opacity-80">
                "{proj.overview}"
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {proj.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm text-slate-600">
                    <ChevronRight size={16} className="text-navy shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-silver-blue/10">
                {proj.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-bold uppercase tracking-widest text-navy bg-navy/5 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Deep Learning Intern",
      company: "PD Avenue",
      duration: "12/2023 — 04/2024",
      context: "PD Avenue (Remote)",
      bullets: [
        "Built custom classification heads using TensorFlow/Keras, achieving a +8% boost in validation accuracy via systematic architecture search and tuning.",
        "Slashed total baseline processing runtimes by 20% through adaptive schedule adjustments.",
        "Isolated structural overfitting patterns across 10+ core test branches with strict config tracing."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Dotcom IoT LLP",
      duration: "05/2023 — 06/2023",
      context: "Dotcom IoT LLP (India)",
      bullets: [
        "Deployed YOLOv8 tracking frameworks processing 35,000+ frames per hour at 28-32 FPS purely on CPU-only edge hardware.",
        "Curated, audited, and hand-annotated 3,000+ custom evaluation frames to stabilize structural accuracy drops."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Briefcase}>Professional Experience</SectionHeading>
      <div className="relative border-l-2 border-navy/10 ml-4 md:ml-8 space-y-16 py-4">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-12">
            {/* Timeline Node */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-navy border-4 border-white shadow-sm" />

            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-4">
                <h3 className="text-2xl font-bold text-navy">{exp.title}</h3>
                <span className="text-slate-400 font-mono text-sm">{exp.duration}</span>
              </div>
              <p className="text-navy/60 font-bold text-sm italic">{exp.context}</p>

              <ul className="mt-6 space-y-4 max-w-4xl">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-4 text-charcoal leading-relaxed font-medium">
                    <span className="text-navy font-bold">/</span>
                    {bullet}
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

const AcademicMatrix = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={GraduationCap}>Academic Foundations</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* M.Sc. Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 bg-soft-off-white rounded-3xl border border-silver-blue/20 shadow-sm flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-navy max-w-[200px]">M.Sc. Software Engineering & Management</h3>
            <span className="px-4 py-2 bg-navy text-white text-xs font-bold rounded-lg shadow-lg">GPA: 1.9 (German Scale)</span>
          </div>
          <div className="space-y-1 mb-8">
            <p className="text-navy font-bold">Hochschule Heilbronn, Germany</p>
            <p className="text-slate-500 text-sm">Current Semester 3 | Expected Graduation: 09/2027</p>
          </div>
          <div className="mt-auto pt-6 border-t border-silver-blue/10">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Relevant Modules</p>
            <div className="flex flex-wrap gap-2">
              {["Advanced ML", "Software Architecture", "Cloud Computing", "Distributed Systems", "Data Engineering"].map((mod, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-silver-blue/20 rounded-md text-[10px] font-bold text-slate-600">
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* B.Tech. Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 bg-soft-off-white rounded-3xl border border-silver-blue/20 shadow-sm flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-navy max-w-[200px]">B.Tech. Information Technology</h3>
            <span className="px-4 py-2 bg-navy/5 text-navy text-xs font-bold rounded-lg border border-navy/10">GPA: 8.4/10</span>
          </div>
          <div className="space-y-1 mb-8">
            <p className="text-navy font-bold">A.D. Patel Institute of Technology, India</p>
            <p className="text-slate-500 text-sm">Graduated: 05/2024</p>
          </div>
          <div className="mt-auto pt-6 border-t border-silver-blue/10">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Relevant Modules</p>
            <div className="flex flex-wrap gap-2">
              {["Deep Learning", "Computer Vision", "Advanced Data Structures"].map((mod, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-silver-blue/20 rounded-md text-[10px] font-bold text-slate-600">
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LanguageRobustness = () => {
  const langs = [
    { code: "EN", name: "English", level: "C1 — Professional Working Proficiency", color: "bg-navy" },
    { code: "DE", name: "German", level: "A2 — Basic Proficiency (Actively Learning)", color: "bg-silver-blue/30" }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Languages}>Language Robustness</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {langs.map((lang, i) => (
          <div key={i} className="flex items-center gap-6 p-8 bg-soft-off-white rounded-3xl border border-silver-blue/10">
            <div className={`w-16 h-16 rounded-2xl ${lang.color} flex items-center justify-center text-xl font-black ${lang.code === 'EN' ? 'text-white' : 'text-navy'} shadow-inner`}>
              {lang.code}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy">{lang.name}</h3>
              <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mt-1">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('.hover-trigger')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div className="relative min-h-screen bg-primary-canvas selection:bg-navy selection:text-white font-sans overflow-x-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: mousePos.x - 10,
          y: mousePos.y - 10,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(27, 42, 74, 0.1)' : '#1B2A4A',
          border: isHovering ? '1px solid #1B2A4A' : 'none'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />

      <PersistentNavbar />

      <main>
        <HeroSection />
        <SectionDivider />
        <SkillsMatrix />
        <SectionDivider />
        <SystemShowcase />
        <SectionDivider />
        <ExperienceTimeline />
        <SectionDivider />
        <AcademicMatrix />
        <SectionDivider />
        <LanguageRobustness />
      </main>

      <footer className="py-20 text-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Harshil Gorasiya — Engineered for Autonomous Intelligence
      </footer>
    </div>
  );
}

export default App;
