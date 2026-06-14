import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
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

// --- System Critical: Vector Particle Field (Google Antigravity Engine) ---

const VectorParticleField = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.2 + 0.5;
        this.baseRadius = this.radius;
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // "Antigravity" push effect
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.vx -= (dx / dist) * force * 0.4;
          this.vy -= (dy / dist) * force * 0.4;
          this.radius = this.baseRadius + force * 2;
        } else {
          this.radius = Math.max(this.baseRadius, this.radius - 0.1);
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98; // Friction
        this.vy *= 0.98;

        // Bounce/Wrap
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(27, 42, 74, 0.15)';
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 80 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Connect particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(176, 189, 208, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10 opacity-60" />;
};

// --- Shared Components ---

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-md border border-white/20 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
    <span className="text-navy/60">{icon}</span>
    <span className="text-[10px] font-black text-navy/70 uppercase tracking-tight whitespace-nowrap">
      {text}
    </span>
  </div>
);

const SectionDivider = () => (
  <div className="group relative py-24 px-6 max-w-7xl mx-auto w-full">
    <hr className="border-t-2 border-silver-blue/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-navy group-hover:shadow-[0_0_25px_rgba(27,42,74,0.5)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-navy opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full shadow-[0_0_20px_#1B2A4A]" />
  </div>
);

const SectionHeading = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-5 mb-16">
    <div className="p-3 bg-navy/5 rounded-2xl">
      {Icon && <Icon className="text-navy" size={28} />}
    </div>
    <h2 className="text-4xl md:text-6xl font-display font-black text-navy tracking-tight">{children}</h2>
  </div>
);

// --- Sub-Components ---

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-none select-none">
    <div className="relative">
      <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-500">
        <span className="text-white font-display font-black text-xl tracking-tighter">HG</span>
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-navy rounded-md flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-navy rounded-full" />
      </div>
    </div>
    <div className="hidden sm:block">
      <div className="text-sm font-black text-navy tracking-tighter leading-none">HARSHIL</div>
      <div className="text-[10px] font-bold text-silver-blue tracking-[0.2em] leading-none mt-0.5">GORASIYA</div>
    </div>
  </div>
);

const PersistentNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-20 px-6 flex items-center justify-between glass shadow-sm border-b border-white/40">
      {/* Left: Logo & Status */}
      <div className="flex items-center gap-6">
        <Logo />
        <div className="h-8 w-px bg-silver-blue/20 hidden md:block" />
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-[9px] md:text-[10px] font-black text-navy tracking-widest uppercase select-none leading-tight">
            <strong>Status:</strong> Seeking <span className="text-emerald-600">Werkstudent</span> Positions in DE
          </span>
        </div>
      </div>

      {/* Right: Logistics Badges */}
      <div className="hidden xl:flex items-center gap-3">
        <Badge icon={<Clock size={12} />} text="20h/Week (Semester)" />
        <Badge icon={<CalendarCheck size={12} />} text="Full-time (Breaks)" />
        <Badge icon={<IdCard size={12} />} text="Valid Aufenthaltserlaubnis" />
      </div>
    </nav>
  );
};

const Terminal = ({ triggerIdentityAnim }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalState, setTerminalState] = useState('booting'); // 'booting', 'menu', 'project-details', 'identity'
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrambledName, setScrambledName] = useState("****************");

  const script = useMemo(() => [
    { type: 'input', text: ">>> import ardan_agent" },
    { type: 'input', text: ">>> agent = ardan_agent.initialize(providers=6) # Claude, GPT, Gemini, Groq, Mistral, Ollama" },
    { type: 'input', text: ">>> agent.execute_react_loop(task=\"Optimize localized infrastructure pipelines\")" },
    { type: 'info', text: "[INFO] Auto-failover active. Executing Docker containment sandbox tool..." },
    { type: 'success', text: "[SUCCESS] Low-latency response achieved. Latency: sub-10ms. Cost: $0.00" }
  ], []);

  useEffect(() => {
    if (terminalState !== 'booting') return;

    let isCancelled = false;
    if (lineIndex >= script.length) {
      const finishTimeout = setTimeout(() => {
        if (!isCancelled) {
          setIsTyping(false);
          setTerminalState('menu');
        }
      }, 800);
      return () => {
        isCancelled = true;
        clearTimeout(finishTimeout);
      };
    }

    const currentLine = script[lineIndex];
    if (currentLine.type === 'input') {
      if (currentText.length < currentLine.text.length) {
        const timeout = setTimeout(() => {
          if (!isCancelled) setCurrentText(currentLine.text.slice(0, currentText.length + 1));
        }, Math.random() * 20 + 15);
        return () => {
          isCancelled = true;
          clearTimeout(timeout);
        };
      } else {
        const timeout = setTimeout(() => {
          if (!isCancelled) {
            setVisibleLines(prev => [...prev, currentLine]);
            setCurrentText("");
            setLineIndex(prev => prev + 1);
          }
        }, 700);
        return () => {
          isCancelled = true;
          clearTimeout(timeout);
        };
      }
    } else {
      const timeout = setTimeout(() => {
        if (!isCancelled) {
          setVisibleLines(prev => [...prev, currentLine]);
          setLineIndex(prev => prev + 1);
        }
      }, 1000);
      return () => {
        isCancelled = true;
        clearTimeout(timeout);
      };
    }
  }, [lineIndex, currentText, script, terminalState]);

  // Listen for Identity Animation Trigger from Hero
  useEffect(() => {
    if (triggerIdentityAnim) {
      setTerminalState('identity');
      const timer = setTimeout(() => setTerminalState('menu'), 4000);
      return () => clearTimeout(timer);
    }
  }, [triggerIdentityAnim]);

  const projects = [
    { id: 1, name: "Ardan-CLI", desc: "Autonomous Multi-Provider Coding Agent", tech: "Python, ReAct, MCP" },
    { id: 2, name: "Graph-RAG", desc: "Hierarchical Graph-Based RAG System", tech: "FAISS, Ollama, Python" },
    { id: 3, name: "Local Perplex", desc: "Private Multimodal Research Engine", tech: "C++, Ollama Core" }
  ];

  const renderContentLine = (line) => {
    if (line.type === 'input') {
      const parts = line.text.split('#');
      return (
        <div className="flex gap-3">
          <span className="text-slate-500 shrink-0 select-none font-bold">{">>>"}</span>
          <span className="text-slate-100 font-medium">
            {parts[0].replace('>>> ', '')}
            {parts[1] && <span className="text-slate-500">#{parts[1]}</span>}
          </span>
        </div>
      );
    }
    return (
      <span className={line.type === 'info' ? 'text-blue-400/90' : 'text-emerald-400 font-bold drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]'}>
        {line.text}
      </span>
    );
  };

  return (
    <div id="terminal-simulator" className="bg-[#030712] rounded-2xl shadow-3xl border border-white/10 w-full max-w-4xl mx-auto overflow-hidden font-mono text-[11px] md:text-[13px] leading-relaxed tracking-tight backdrop-blur-sm">
      {/* Header */}
      <div className="bg-white/5 px-6 py-3 flex items-center relative border-b border-white/5">
        <div className="flex gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <span className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Ardan-CLI / Intelligence Nexus</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-12 min-h-[420px] flex flex-col items-start text-left overflow-y-auto">
        <AnimatePresence mode="wait">
          {terminalState === 'booting' && (
            <motion.div
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3 w-full"
            >
              {visibleLines.map((line, i) => (
                <div key={i}>{renderContentLine(line)}</div>
              ))}
              {lineIndex < script.length && script[lineIndex].type === 'input' && (
                <div className="flex gap-3">
                  <span className="text-slate-500 shrink-0 select-none font-bold">{">>>"}</span>
                  <span className="text-slate-100">
                    {currentText.replace('>>> ', '')}
                    <span className="inline-block w-2 h-4 bg-emerald-500/80 translate-y-0.5 ml-1 animate-pulse" />
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {terminalState === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full space-y-6"
            >
              <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px] border-b border-white/10 pb-2">Main Menu / Select Option</div>
              <div className="space-y-4">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setSelectedProject(p); setTerminalState('project-details'); }}
                    className="flex items-center gap-4 group w-full text-left cursor-none"
                  >
                    <span className="text-navy bg-emerald-500 px-2 py-0.5 rounded text-[10px] font-black">{p.id}</span>
                    <span className="text-slate-200 group-hover:text-emerald-400 transition-colors font-bold tracking-tight">[{p.name}]</span>
                    <span className="text-slate-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">-- {p.desc}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setTerminalState('identity');
                    setTimeout(() => setTerminalState('menu'), 4000);
                  }}
                  className="flex items-center gap-4 group w-full text-left cursor-none"
                >
                  <span className="text-navy bg-emerald-500 px-2 py-0.5 rounded text-[10px] font-black">4</span>
                  <span className="text-slate-200 group-hover:text-emerald-400 transition-colors font-bold tracking-tight">[Harshil Gorasiya]</span>
                  <span className="text-slate-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">-- Identity Verification / Nexus Handshake</span>
                </button>
              </div>
              <div className="pt-8 text-slate-500 text-[10px] animate-pulse">Waiting for input... _</div>
            </motion.div>
          )}

          {terminalState === 'project-details' && selectedProject && (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full space-y-6"
            >
              <button
                onClick={() => setTerminalState('menu')}
                className="text-slate-500 hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4"
              >
                {"< Back to menu"}
              </button>
              <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-emerald-400 font-black text-xl tracking-tight">{selectedProject.name}</div>
                <div className="text-slate-300 text-sm">{selectedProject.desc}</div>
                <div className="flex gap-3">
                  {selectedProject.tech.split(', ').map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-navy/50 text-white/60 rounded border border-white/5 text-[9px] font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {terminalState === 'identity' && (
            <motion.div
              key="identity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onViewportEnter={() => {
                const name = "HARSHIL GORASIYA";
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
                let iterations = 0;
                const interval = setInterval(() => {
                  setScrambledName(name.split("").map((char, index) => {
                    if (index < iterations) return name[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                  }).join(""));
                  iterations += 1/3;
                  if (iterations >= name.length) clearInterval(interval);
                }, 40);
              }}
              className="w-full h-full flex flex-col items-center justify-center space-y-8"
            >
              <div className="text-center space-y-4">
                <div className="text-emerald-500 font-black text-4xl tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  {scrambledName}
                </div>
                <div className="text-slate-500 text-[10px] tracking-[0.8em] font-black uppercase">Identity Verified</div>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full max-w-sm">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="h-1 bg-emerald-500/30 rounded-full"
                  />
                ))}
              </div>
              <div className="text-slate-600 text-[9px] font-mono">ENCRYPTED NEXUS HANDSHAKE... OK</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [triggerAnim, setTriggerAnim] = useState(false);

  const handleIdentityClick = () => {
    setTriggerAnim(true);
    setTimeout(() => setTriggerAnim(false), 100);
  };

  return (
    <section className="relative pt-48 pb-20 px-6 overflow-hidden">
      {/* Gradient Mesh Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-navy/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-navy/10 bg-navy/5 text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-4"
          >
            Applied AI Engineer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 12 }}
            onClick={handleIdentityClick}
            className="text-6xl md:text-9xl font-display font-black text-navy tracking-tighter cursor-pointer hover:text-emerald-600 transition-colors duration-500 select-none"
          >
            Harshil Gorasiya
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl text-charcoal max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Applied AI Engineer Specializing in RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-10 bg-navy/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <Terminal triggerIdentityAnim={triggerAnim} />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-10 py-6 text-navy font-black tracking-tight"
        >
          <div className="flex items-center gap-3 group">
            <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <MapPin size={18} />
            </div>
            <span className="text-sm">Heilbronn, Germany</span>
          </div>
          <a href="tel:+4915563517346" className="flex items-center gap-3 group">
            <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Phone size={18} />
            </div>
            <span className="text-sm">0 155 6351 7346</span>
          </a>
          <a href="mailto:harshil.gorasiya.0011@gmail.com" className="flex items-center gap-3 group">
            <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              <Mail size={18} />
            </div>
            <span className="text-sm">harshil.gorasiya.0011@gmail.com</span>
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-5 pt-6"
        >
          <a
            href="https://linkedin.com/in/harshil-gorasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-navy/10 text-navy font-black hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 group"
          >
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
            LinkedIn
          </a>
          <a
            href="https://github.com/N0t-Harshil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-navy/10 text-navy font-black hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 group"
          >
            <Github size={20} className="group-hover:-rotate-12 transition-transform" />
            GitHub
          </a>
          <button className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-navy text-white font-black shadow-[0_20px_40px_rgba(27,42,74,0.3)] hover:scale-105 active:scale-95 transition-all duration-500">
            <Download size={20} />
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

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <SectionHeading icon={Layers}>Skills Matrix</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 bg-soft-off-white rounded-[2.5rem] border border-silver-blue/10 shadow-sm group hover:shadow-2xl hover:bg-white transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-navy/20 group-hover:bg-navy transition-colors duration-500" />
            <h3 className="text-[10px] font-black text-slate-400 mb-10 uppercase tracking-[0.3em]">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cat.skills.map((skill, si) => (
                <span
                  key={si}
                  className="px-5 py-2.5 bg-white border border-silver-blue/10 rounded-2xl text-[11px] font-black text-navy shadow-sm hover:scale-105 hover:bg-navy hover:text-white hover:shadow-lg transition-all duration-300 cursor-none ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {[
          { text: "Anthropic: Claude API Developer", url: "https://verify.skilljar.com/c/abtyb7rnh5gg" },
          { text: "Anthropic: MCP Advanced Topics", url: "https://verify.skilljar.com/c/9ogn74na4fmf" },
          { text: "IBM: Machine Learning with Python" },
          { text: "Databricks: Data Science Fundamentals" }
        ].map((badge, i) => (
          <a
            key={i}
            href={badge.url || "#"}
            target={badge.url ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white border border-silver-blue/20 rounded-2xl text-[11px] font-black text-navy hover:bg-navy hover:text-white transition-all duration-500 shadow-sm"
          >
            <Award size={16} /> {badge.text}
          </a>
        ))}
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
      badge: { text: "⚡ 4s Latency @ $0 Infrastructure Cost", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
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
      badge: { text: "⏱️ Sub-10ms Ranking Latency", color: "bg-blue-100 text-blue-800 border-blue-200" },
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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Cpu}>Architecture & System Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="relative group p-10 rounded-[3rem] bg-white border border-silver-blue/20 shadow-2xl overflow-hidden"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-navy leading-tight pr-6">{proj.title}</h3>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-navy/5 rounded-2xl hover:bg-navy hover:text-white transition-all duration-500">
                  <ExternalLink size={24} />
                </a>
              </div>

              {proj.badge && (
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${proj.badge.color} mb-6 w-fit`}>
                  <Zap size={12} /> {proj.badge.text}
                </div>
              )}

              <p className="text-charcoal mb-8 text-sm font-medium leading-relaxed italic opacity-80 border-l-4 border-navy/10 pl-6">
                "{proj.overview}"
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {proj.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-4 text-[13px] text-slate-600 font-medium">
                    <ChevronRight size={18} className="text-navy shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-8 border-t border-silver-blue/10">
                {proj.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/60 bg-navy/5 px-3 py-1.5 rounded-lg">
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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Briefcase}>Professional Experience</SectionHeading>
      <div className="relative border-l-4 border-navy/5 ml-4 md:ml-12 space-y-20 py-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-16 group">
            {/* Timeline Node */}
            <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-white border-4 border-navy shadow-[0_0_15px_rgba(27,42,74,0.3)] group-hover:scale-125 transition-transform duration-500" />

            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-6">
                <h3 className="text-3xl font-black text-navy">{exp.title}</h3>
                <span className="text-slate-400 font-mono text-sm font-bold uppercase tracking-widest">{exp.duration}</span>
              </div>
              <p className="text-navy/70 font-black text-sm uppercase tracking-[0.3em]">{exp.context}</p>

              <ul className="mt-8 space-y-5 max-w-4xl">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-5 text-charcoal leading-relaxed font-semibold text-sm">
                    <span className="text-navy font-black text-lg">/</span>
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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={GraduationCap}>Academic Foundations</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* M.Sc. Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="p-10 bg-soft-off-white rounded-[3rem] border border-silver-blue/10 shadow-sm flex flex-col h-full group relative overflow-hidden"
        >
          <div className="absolute -inset-20 bg-navy/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-black text-navy max-w-[240px]">M.Sc. Software Engineering & Management</h3>
              <span className="px-5 py-2.5 bg-navy text-white text-xs font-black rounded-2xl shadow-xl">GPA: 1.9 (DE Scale)</span>
            </div>
            <div className="space-y-2 mb-10">
              <p className="text-navy font-black text-lg">Hochschule Heilbronn, Germany</p>
              <p className="text-slate-500 text-sm font-bold">Current Semester 3 | Expected Graduation: 09/2027</p>
            </div>
            <div className="mt-auto pt-8 border-t border-silver-blue/10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Relevant Modules</p>
              <div className="flex flex-wrap gap-2.5">
                {["Advanced ML", "Software Architecture", "Cloud Computing", "Distributed Systems", "Data Engineering"].map((mod, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white border border-silver-blue/10 rounded-xl text-[10px] font-black text-slate-600 shadow-sm">
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* B.Tech. Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="p-10 bg-soft-off-white rounded-[3rem] border border-silver-blue/10 shadow-sm flex flex-col h-full group relative overflow-hidden"
        >
          <div className="absolute -inset-20 bg-navy/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-black text-navy max-w-[240px]">B.Tech. Information Technology</h3>
              <span className="px-5 py-2.5 bg-navy/5 text-navy text-xs font-black rounded-2xl border border-navy/10">GPA: 8.4/10</span>
            </div>
            <div className="space-y-2 mb-10">
              <p className="text-navy font-black text-lg">A.D. Patel Institute of Technology, India</p>
              <p className="text-slate-500 text-sm font-bold">Graduated: 05/2024</p>
            </div>
            <div className="mt-auto pt-8 border-t border-silver-blue/10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Relevant Modules</p>
              <div className="flex flex-wrap gap-2.5">
                {["Deep Learning", "Computer Vision", "Advanced Data Structures"].map((mod, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white border border-silver-blue/10 rounded-xl text-[10px] font-black text-slate-600 shadow-sm">
                    {mod}
                  </span>
                ))}
              </div>
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
    { code: "DE", name: "German", level: "A2 — Basic Proficiency (Actively Learning)", color: "bg-silver-blue/20" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Languages}>Language Robustness</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {langs.map((lang, i) => (
          <div key={i} className="flex items-center gap-8 p-10 bg-soft-off-white rounded-[3rem] border border-silver-blue/10 shadow-sm group">
            <div className={`w-20 h-20 rounded-3xl ${lang.color} flex items-center justify-center text-2xl font-black ${lang.code === 'EN' ? 'text-white' : 'text-navy'} shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
              {lang.code}
            </div>
            <div>
              <h3 className="text-3xl font-black text-navy">{lang.name}</h3>
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mt-2">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

const DotMatrixBackground = () => (
  <div
    className="fixed inset-0 pointer-events-none -z-20 opacity-[0.03]"
    style={{
      backgroundImage: 'radial-gradient(#1B2A4A 0.5px, transparent 0.5px)',
      backgroundSize: '24px 24px'
    }}
  />
);

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('.hover-trigger')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'transparent' : '#1B2A4A',
        border: isHovering ? '1px solid #1B2A4A' : 'none',
        backdropFilter: isHovering ? 'blur(4px)' : 'none'
      }}
    >
      {isHovering && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 bg-navy/10 rounded-full"
        />
      )}
    </motion.div>
  );
};

function App() {
  return (
    <div className="relative min-h-screen selection:bg-navy selection:text-white font-sans overflow-x-hidden">
      {/* Base Background Layer */}
      <div className="fixed inset-0 bg-white -z-30" />

      <DotMatrixBackground />
      <VectorParticleField />
      <CustomCursor />

      <PersistentNavbar />

      <main className="relative z-10">
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

      <footer className="py-24 text-center border-t border-silver-blue/10 bg-soft-off-white/50">
        <div className="mb-10 flex justify-center items-center gap-6">
          <Logo />
        </div>
        <div className="text-slate-400 font-black text-[10px] uppercase tracking-[0.8em] opacity-60">
          © {new Date().getFullYear()} Harshil Gorasiya — Engineered for Autonomous Intelligence
        </div>
      </footer>
    </div>
  );
}

export default App;
