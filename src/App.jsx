import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import anime from 'animejs';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll } from 'framer-motion';
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
  Languages,
  Send
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
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.length = Math.random() * 8 + 4;
        this.baseLength = this.length;
        this.angle = Math.atan2(this.vy, this.vx);

        // Luxury Corporate Colors
        const colors = [
          'rgba(27, 42, 74, 0.15)', // Navy
          'rgba(176, 189, 208, 0.25)', // Silver Blue
          'rgba(74, 74, 74, 0.1)'    // Charcoal
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // "Antigravity" push effect
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.vx -= (dx / dist) * force * 0.6;
          this.vy -= (dy / dist) * force * 0.6;
          this.length = this.baseLength + force * 15;
        } else {
          this.length = Math.max(this.baseLength, this.length - 0.5);
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.97; // Friction
        this.vy *= 0.97;
        this.angle = Math.atan2(this.vy, this.vx);

        // Wrap
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.length, 0);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.2;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
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
      <div className="w-11 h-11 bg-navy rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-[20deg] transition-all duration-700">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" translate="no" className="notranslate">
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

const NeuralQuantumVault = () => {
  const vaultRef = useRef(null);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const scope = (selector) => containerRef.current.querySelectorAll(selector);

    // 1. Initial Continuous Ambient Rotation
    anime({
      targets: scope('.vault-wrapper'),
      rotateY: '360deg',
      duration: 20000,
      easing: 'linear',
      loop: true
    });

    // 2. Scroll-Linked Transformation Timeline
    timelineRef.current = anime.timeline({
      autoplay: false,
      easing: 'easeInOutSine',
      duration: 1000
    });

    // Expansion & Tilt shift on scroll
    timelineRef.current.add({
      targets: scope('.vault-wrapper'),
      scale: [1, 1.4],
      rotateX: ['15deg', '30deg'],
    }, 0);

    // Facet Deconstruction (Sliding Open)
    const offset = 80;
    const expansion = 300;

    timelineRef.current.add({
      targets: scope('.facet-front'),
      translateZ: [offset, expansion],
      opacity: [1, 0.1],
    }, 0);
    timelineRef.current.add({
      targets: scope('.facet-back'),
      translateZ: [-offset, -expansion],
      opacity: [1, 0.1],
    }, 0);
    timelineRef.current.add({
      targets: scope('.facet-left'),
      translateX: [-offset, -expansion],
      opacity: [1, 0.1],
    }, 0);
    timelineRef.current.add({
      targets: scope('.facet-right'),
      translateX: [offset, expansion],
      opacity: [1, 0.1],
    }, 0);
    timelineRef.current.add({
      targets: scope('.facet-top'),
      translateY: [-offset, -expansion],
      opacity: [1, 0.1],
    }, 0);
    timelineRef.current.add({
      targets: scope('.facet-bottom'),
      translateY: [offset, expansion],
      opacity: [1, 0.1],
    }, 0);

    // Core Reveal
    timelineRef.current.add({
      targets: scope('.vault-core'),
      scale: [0.2, 2.5],
      opacity: [0, 1],
      rotateY: '720deg',
    }, 100);

    // Meta Data Nodes Reveal
    timelineRef.current.add({
      targets: scope('.meta-data-node'),
      scale: [0, 1],
      opacity: [0, 1],
      translateY: (el, i) => [i % 2 === 0 ? 50 : -50, 0],
      delay: anime.stagger(100),
    }, 300);

  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (timelineRef.current) {
        timelineRef.current.seek(latest * timelineRef.current.duration);
        setHasScrolled(latest > 0.05);
      }
    });
  }, [scrollYProgress]);

  const facetClass = "absolute inset-0 bg-[#1B2A4A]/40 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden flex flex-col p-4 shadow-2xl backface-hidden preserve-3d";

  const GlassFacet = ({ side, children, transform }) => (
    <div className={`${facetClass} facet-${side}`} style={{ transform }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta/40 to-transparent" />
      <div className="flex justify-between items-start mb-4">
        <div className="text-[8px] font-black text-white/40 uppercase tracking-widest">Protocol: AI-CORE</div>
        <div className="text-[8px] font-black text-white/40 uppercase tracking-widest">RANK: S-TIER</div>
      </div>
      {children}
      <div className="mt-auto flex justify-between items-end">
        <div className="text-[7px] font-black text-white/20 uppercase tracking-widest">© 2024 HARSHIL G.</div>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
           <Zap size={10} className="text-magenta/40" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl h-[600px] md:h-[700px] flex items-center justify-center perspective-2000 pointer-events-none">
      {/* Internal Core Glow (Magenta/Purple) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-magenta/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div ref={vaultRef} className="vault-wrapper relative w-40 h-40 preserve-3d">
        {/* Facets */}
        <GlassFacet side="front" transform="translateZ(80px)">
           <h4 className="text-xl font-black text-white tracking-tighter leading-none mt-2">REASONING ENGINE</h4>
           <div className="w-full h-px bg-white/10 my-3" />
           <p className="text-[7px] text-white/60 font-medium leading-relaxed">HIGH-FIDELITY RAG ARCHITECTURE INTEGRATED FOR AUTONOMOUS DECISION LOOPS.</p>
        </GlassFacet>

        <GlassFacet side="back" transform="translateZ(-80px) rotateY(180deg)">
           <div className="flex flex-col gap-2">
             <div className="h-2 w-3/4 bg-white/10 rounded-full" />
             <div className="h-2 w-1/2 bg-white/10 rounded-full" />
             <div className="h-2 w-2/3 bg-white/10 rounded-full" />
           </div>
        </GlassFacet>

        <GlassFacet side="left" transform="translateX(-80px) rotateY(-90deg)">
           <div className="text-[10px] font-black text-magenta mb-2">METRICS</div>
           <div className="space-y-1">
             <div className="flex justify-between text-[6px] font-bold text-white/40"><span>LATENCY</span><span>&lt;4s</span></div>
             <div className="flex justify-between text-[6px] font-bold text-white/40"><span>VELOCITY</span><span>120t/s</span></div>
           </div>
        </GlassFacet>

        <GlassFacet side="right" transform="translateX(80px) rotateY(90deg)">
           <div className="flex items-center justify-center h-full opacity-20">
             <Database size={40} className="text-white" />
           </div>
        </GlassFacet>

        <GlassFacet side="top" transform="translateY(-80px) rotateX(90deg)">
           <div className="text-[6px] font-black text-white/40 text-center">UPPER DECK DEPLOYED</div>
        </GlassFacet>

        <GlassFacet side="bottom" transform="translateY(80px) rotateX(-90deg)">
           <div className="text-[6px] font-black text-white/40 text-center">LOWER DECK STABILIZED</div>
        </GlassFacet>

        {/* The Internal Collectible Artifact (Quantum Core) */}
        <div className="vault-core absolute inset-0 flex items-center justify-center preserve-3d opacity-0">
          <div className="relative w-28 h-28">
            {/* Pulsing Crystalline Core */}
            <div className="vault-core-sphere absolute inset-0 bg-gradient-to-br from-magenta via-purple-600 to-navy rounded-[2rem] shadow-[0_0_80px_rgba(255,0,255,0.4)] flex items-center justify-center border-4 border-white/30 animate-[spin_8s_linear_infinite]">
               <Cpu size={48} className="text-white drop-shadow-[0_0_15px_white]" />
            </div>

            {/* Orbiting Tech Tags */}
            <div className="absolute -inset-32 flex items-center justify-center pointer-events-none">
              {[
                { label: "ARDAN-CLI", x: -180, y: -80, rarity: "LEGENDARY" },
                { label: "GRAPH-RAG", x: 180, y: -80, rarity: "ULTRA" },
                { label: "LOCAL-PERPLEX", x: -180, y: 80, rarity: "S-TIER" },
                { label: "AI-UPSCALER", x: 180, y: 80, rarity: "RARE" }
              ].map((tag, i) => (
                <div
                  key={i}
                  className="meta-data-node absolute p-4 bg-navy/80 backdrop-blur-xl border border-magenta/30 rounded-2xl shadow-2xl flex flex-col gap-1 min-w-[140px]"
                  style={{ transform: `translate(${tag.x}px, ${tag.y}px)` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-black text-magenta tracking-widest">{tag.rarity}</span>
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{tag.label}</span>
                  <div className="w-full h-0.5 bg-white/5 mt-1" />
                  <span className="text-[6px] font-bold text-white/40 mt-1 uppercase">AUTHENTICATED ENGINE DATA</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Instructions */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 flex flex-col items-center gap-4"
        >
          <div className="px-6 py-2 bg-navy/20 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] animate-pulse">Scroll to Unbox Core</span>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40"
          >
            <ChevronRight className="rotate-90" size={24} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const HeroSection = () => {
  const [displayName, setDisplayName] = useState("Harshil Gorasiya");

  const triggerOverclock = useCallback(() => {
    // 1. Text Scramble Effect
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayName(prev =>
        "Harshil Gorasiya".split("").map((letter, index) => {
          if (index < iteration) return "Harshil Gorasiya"[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= "Harshil Gorasiya".length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    // 2. Vault Power Surge
    anime({
      targets: document.querySelectorAll('.vault-core-sphere'),
      scale: [1, 1.4, 1],
      boxShadow: [
        '0 0 60px rgba(27,42,74,0.5)',
        '0 0 120px rgba(16,185,129,0.8)',
        '0 0 60px rgba(27,42,74,0.5)'
      ],
      duration: 1000,
      easing: 'easeOutElastic(1, .5)'
    });
  }, []);

  return (
    <section className="relative pt-48 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-navy/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-8">
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
              onClick={triggerOverclock}
              className="text-6xl md:text-9xl font-display font-black text-navy tracking-tighter cursor-pointer hover:text-emerald-600 transition-colors duration-500 select-none whitespace-nowrap hover-trigger"
            >
              {displayName}
            </motion.h1>
          </div>

          <div className="relative z-50 flex items-center justify-center">
            <NeuralQuantumVault />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-charcoal max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Applied AI Engineer Specializing in RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure
          </motion.p>
        </div>

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
  useEffect(() => {
    // Aggressive anti-translation protection for SVGs to prevent path mangling by extensions
    const noTranslate = (el) => {
      if (el.classList) el.classList.add('notranslate');
      el.setAttribute('translate', 'no');
    };
    document.querySelectorAll('svg').forEach(noTranslate);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'svg') noTranslate(node);
          else if (node.querySelectorAll) node.querySelectorAll('svg').forEach(noTranslate);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-navy selection:text-white font-sans overflow-x-hidden notranslate" translate="no">
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
