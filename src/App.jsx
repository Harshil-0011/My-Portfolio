import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import {
  Clock,
  CalendarCheck,
  IdCard,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Download,
  ChevronRight,
  ExternalLink,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  Zap,
  Briefcase,
  Languages,
  Send
} from 'lucide-react';

// --- System Critical: Sovereign Magnifier (Mosaic Intel Interface) ---

const SovereignMagnifier = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    const cw = 2000;
    const ch = cw;
    c.width = c.height = cw;

    let cRect = c.getBoundingClientRect();
    let sx = cw / cRect.width;
    let sy = ch / cRect.height;

    const T = Math.PI * 2;
    const m = { x: cw / 2, y: ch / 2, s: 1.5, x2: cw / 2, y2: ch / 2 };
    const xTo = gsap.quickTo(m, "x", { duration: 1, ease: "expo" });
    const yTo = gsap.quickTo(m, "y", { duration: 1, ease: "expo" });
    const sTo = gsap.quickTo(m, "s", { duration: 2, ease: "power2" });
    let boxes = [];

    const props = {
      // High-end abstract neural mesh - Executive Tech aesthetic
      img: 'https://images.unsplash.com/photo-1620712943543-bcc46386ca00?q=80&w=2000',
      boxSize: 20, // Retina-grade micro-mosaic
      fade: true,
      dots: true,
      dotColor: 'rgba(27, 42, 74, 0.02)', // Even more subtle
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = props.img;

    const initImg = () => {
      boxes = [];
      for (let x = 0; x <= cw; x += props.boxSize) {
        for (let y = 0; y <= ch; y += props.boxSize) {
          boxes.push({ x, y, d: 0, s: 0 });
        }
      }
    };

    const drawImg = (box) => {
      box.d = Math.hypot((box.x - m.x), (box.y - m.y));
      box.s = 1 - gsap.utils.clamp(0, 1, box.d / cw / m.s);
      if (box.s < 0.001) return;
      let boxScaled = props.boxSize * (box.s);
      if (props.fade) ctx.globalAlpha = box.s;
      ctx.drawImage(img, box.x + boxScaled / 2, box.y + boxScaled / 2, props.boxSize - boxScaled, props.boxSize - boxScaled, box.x, box.y, props.boxSize, props.boxSize);
    };

    const drawDots = (box) => {
      ctx.beginPath();
      ctx.arc(box.x, box.y, props.boxSize * 0.15 * box.s, 0, T);
      ctx.fill();
    };

    const update = () => {
      const d = Math.hypot((m.x - m.x2), (m.y - m.y2));
      sTo(d / cw * 3);
      ctx.clearRect(0, 0, cw, ch);

      // Draw static background at ultra-low opacity for depth
      ctx.globalAlpha = 0.015;
      ctx.drawImage(img, 0, 0, cw, ch);

      // Draw the interactive mosaic
      ctx.fillStyle = props.dotColor;
      boxes.forEach(drawImg);

      // Reset alpha for dots
      ctx.globalAlpha = 0.3;
      if (props.dots) boxes.forEach(drawDots);
    };

    img.onload = () => {
      initImg();
      gsap.ticker.add(update);
    };

    const handleMouseMove = (e) => {
      cRect = c.getBoundingClientRect();
      sx = cw / cRect.width;
      sy = ch / cRect.height;
      m.x2 = (e.clientX - cRect.left) * sx;
      m.y2 = (e.clientY - cRect.top) * sy;
      xTo(m.x2);
      yTo(m.y2);
    };

    const handleResize = () => {
      cRect = c.getBoundingClientRect();
      sx = cw / cRect.width;
      sy = ch / cRect.height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-20">
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto lg:w-full lg:h-auto aspect-square mix-blend-multiply"
      />
    </div>
  );
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

const NeuralCoreInterface = () => {
  const [activeLog, setActiveLog] = useState(0);

  const coreData = useMemo(() => [
    { label: "COGNITIVE_CORE", text: "RAG & Agentic Architecture" },
    { label: "ACADEMIC_SYNC", text: "M.Sc. Software Engineering" },
    { label: "VALIDATED_INTEL", text: "Anthropic Claude Certified" },
    { label: "LINGUAL_BRIDGE", text: "Bilingual: EN (C1) / DE (A2+)" }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog(prev => (prev + 1) % coreData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [coreData.length]);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 relative">
      <div className="relative group flex items-center h-14 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 overflow-hidden transition-all duration-1000 shadow-2xl shadow-navy/5">

        {/* Left: Technical ID */}
        <div className="hidden md:flex items-center gap-4 px-8 h-full border-r border-white/20 bg-navy/[0.02]">
           <div className="flex flex-col items-start">
             <span className="text-[8px] font-black text-navy/30 uppercase tracking-[0.3em]">Protocol</span>
             <span className="text-[10px] font-black text-navy/80 tracking-tighter">SOV_CORE_V5</span>
           </div>
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
        </div>

        {/* Center: Intelligence Stream */}
        <div className="flex-grow h-full relative flex items-center px-10 overflow-hidden">
           <AnimatePresence mode="wait">
            <motion.div
              key={activeLog}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 w-full"
            >
              <span className="text-[8px] font-black text-emerald-600/60 uppercase tracking-[0.5em] whitespace-nowrap">{coreData[activeLog].label}</span>
              <div className="hidden md:block w-1.5 h-1.5 bg-navy/10 rounded-full" />
              <span className="text-[11px] font-black text-navy tracking-tight uppercase whitespace-nowrap">
                {coreData[activeLog].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Metrics Cluster */}
        <div className="flex items-center gap-8 px-10 h-full border-l border-white/20 bg-navy/[0.02]">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-navy/30 uppercase tracking-[0.3em]">Academic</span>
            <span className="text-[10px] font-black text-navy/80 tracking-tighter">GPA 1.9</span>
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[8px] font-black text-navy/30 uppercase tracking-[0.3em]">Bandwidth</span>
            <span className="text-[10px] font-black text-navy/80 tracking-tighter">20H/WK</span>
          </div>
        </div>

        {/* Scanning Line Overlay */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
        />
      </div>
    </div>
  );
};

// --- Sub-Components ---

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-none select-none">
    <div className="relative">
      <div className="w-11 h-11 bg-navy rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-[20deg] transition-all duration-700">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="white" />
          <circle cx="6" cy="6" r="1.5" fill="white" opacity="0.6" />
          <circle cx="18" cy="6" r="1.5" fill="white" opacity="0.6" />
          <circle cx="6" cy="18" r="1.5" fill="white" opacity="0.6" />
          <circle cx="18" cy="18" r="1.5" fill="white" opacity="0.6" />
          <path d="M12 12L6 6" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <path d="M12 12L18 6" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <path d="M12 12L6 18" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <path d="M12 12L18 18" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-navy rounded-md flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-navy rounded-full animate-pulse" />
      </div>
    </div>
    <div className="hidden sm:block">
      <div className="text-[11px] font-black text-navy tracking-[0.25em] leading-none">HARSHIL</div>
      <div className="text-[9px] font-bold text-silver-blue tracking-[0.1em] leading-none mt-1">GORASIYA</div>
    </div>
  </div>
);

const PersistentNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-20 px-6 flex items-center justify-between glass shadow-sm border-b border-white/40 pointer-events-none child-pointer-events-auto">
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

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailLower = email.toLowerCase().trim();

    // Strict Gmail Check: Must end with @gmail.com
    if (!emailLower.endsWith('@gmail.com')) {
      return "Access Denied: Only authenticated @gmail.com addresses are permitted.";
    }

    // Gmail username rules: 6-30 chars, alphanumeric or dots
    // Note: Gmail ignores dots but they are valid in the address.
    const username = emailLower.split('@')[0];

    // Strict Gmail check (6-30 characters)
    if (username.length < 6 || username.length > 30) {
      return "Identity Check Failed: Gmail usernames must be between 6 and 30 characters.";
    }

    const gmailUsernameRegex = /^[a-z0-9.]+$/;
    if (!gmailUsernameRegex.test(username)) {
      return "Identity Check Failed: Invalid Gmail username structure (6-30 characters, alphanumeric or dots).";
    }

    // Block suspicious patterns and common bot-like Gmails
    const suspiciousPatterns = ['temp', 'bot', 'fake', 'test', 'trash'];
    if (suspiciousPatterns.some(pattern => username.includes(pattern))) {
       return "Access Denied: Suspicious account signature detected.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const emailValidationError = validateEmail(formData.email);
    if (emailValidationError) {
      setError(emailValidationError);
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f768b753-9133-4f99-906d-e435f9923838", // Note: User should replace this with their unique key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact System"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setError("Protocol Error: Transmission could not be completed.");
      }
    } catch (err) {
      setError("Network Failure: Connection to central core lost.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading icon={Mail}>Get in Touch</SectionHeading>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 bg-soft-off-white rounded-[3rem] border border-silver-blue/10 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute -inset-20 bg-navy/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alan Turing"
                  className="w-full px-8 py-5 bg-white border border-silver-blue/10 rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alan.turing@gmail.com"
                  className="w-full px-8 py-5 bg-white border border-silver-blue/10 rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration on Neural Architectures"
                className="w-full px-8 py-5 bg-white border border-silver-blue/10 rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-4">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your vision..."
                className="w-full px-8 py-5 bg-white border border-silver-blue/10 rounded-2xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all resize-none"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-6 py-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-900 text-[10px] font-black uppercase tracking-widest leading-none">{error}</span>
              </motion.div>
            )}

            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-xs text-center md:text-left">
                Your message will be sent directly to my secure inbox.
              </p>

              <button
                type="submit"
                disabled={isSending || isSent}
                className={`flex items-center gap-3 px-12 py-5 rounded-2xl font-black transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap ${
                  isSent
                    ? 'bg-emerald-500 text-white shadow-emerald-200'
                    : 'bg-navy text-white shadow-navy/20'
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <Zap size={20} className="animate-pulse" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};


const HeroSection = () => {
  const [displayName, setDisplayName] = useState("Harshil Gorasiya");
  const originalName = "Harshil Gorasiya";
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayName(originalName.split("")
        .map((char, index) => {
          if (index < iteration) return originalName[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );

      if (iteration >= originalName.length) clearInterval(intervalRef.current);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden">
      {/* Gradient Mesh Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-navy/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-8">
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
            onMouseEnter={scramble}
            className="text-7xl md:text-9xl font-display font-black text-navy tracking-tighter cursor-default select-none whitespace-nowrap hover-trigger"
          >
            {displayName}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl text-charcoal max-w-4xl mx-auto font-medium leading-relaxed px-6 opacity-80 mb-12"
        >
          Applied AI Engineer Specializing in RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure
        </motion.p>

        {/* Information Cluster: The Hook Architecture */}
        <div className="space-y-16">

          {/* Row 1: Primary Coordinates */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-10 text-navy font-black tracking-tight"
          >
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <MapPin size={16} />
              </div>
              <span className="text-sm">Heilbronn, Germany</span>
            </div>
            <a href="tel:+4915563517346" className="flex items-center gap-3 group">
              <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <Phone size={16} />
              </div>
              <span className="text-sm">0 155 6351 7346</span>
            </a>
            <a href="mailto:harshil.gorasiya.0011@gmail.com" className="flex items-center gap-3 group">
              <div className="p-2 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <Mail size={16} />
              </div>
              <span className="text-sm">harshil.gorasiya.0011@gmail.com</span>
            </a>
          </motion.div>

          {/* Row 2: The Neural Ribbon (Dynamic Hook) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <NeuralCoreInterface />
          </motion.div>

          {/* Row 3: Action & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="https://linkedin.com/in/harshil-gorasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-navy/10 text-navy font-black hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <Linkedin size={18} className="group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
            <a
              href="https://github.com/N0t-Harshil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-navy/10 text-navy font-black hover:bg-navy hover:text-white hover:border-navy transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <Github size={18} className="group-hover:-rotate-12 transition-transform" />
              GitHub
            </a>
            <button className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#0F172A] text-white font-black shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:scale-105 active:scale-95 transition-all duration-500">
              <Download size={18} />
              Download Full LaTeX CV (PDF)
            </button>
          </motion.div>

        </div>
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
      if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('.hover-trigger')) {
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
      <SovereignMagnifier />
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
        <SectionDivider />
        <ContactForm />
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
