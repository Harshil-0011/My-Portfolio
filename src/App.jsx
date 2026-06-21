import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Activity,
  Zap,
  Send,
  Copy,
  Check,
  FileDown,
  Menu,
  X
} from 'lucide-react';

// --- Utility Components ---

const Magnetic = ({ children, strength = 0.5 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

// --- Core Branding Components ---

const MonolithLogo = () => (
  <div className="flex items-center gap-4 group cursor-none hover-trigger" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-white group-hover:bg-accent group-hover:border-accent transition-colors duration-300 relative overflow-hidden">
      <span className="text-black font-display font-black text-2xl group-hover:text-white transition-colors z-10">H</span>
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-accent/20 skew-x-12"
      />
    </div>
    <div className="flex flex-col">
      <span className="font-display font-black text-xl tracking-tighter leading-none group-hover:text-accent transition-colors">GORASIYA</span>
      <span className="font-mono text-[10px] text-white/50 tracking-widest mt-1">ENGINEER_05</span>
    </div>
  </div>
);

const KineticTicker = () => (
  <div className="w-full bg-accent py-2 overflow-hidden flex whitespace-nowrap border-y-2 border-black relative z-20 my-4 rotate-[-1deg] scale-[1.05] shadow-[0_0_30px_rgba(255,62,62,0.3)]">
    <motion.div
      animate={{ x: [0, -2000] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 items-center"
    >
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex gap-12 items-center">
          <span className="font-mono font-black text-black text-[10px] tracking-widest">
            SYSTEM_STATUS: OPTIMIZED // LATENCY: 4MS // NEURAL_LOAD: 12% // PROTOCOL: ARDAN_V2 // ENCRYPTION: AES-256
          </span>
          <Zap size={14} className="text-black fill-black animate-pulse" />
          <span className="font-mono font-black text-black text-[10px] tracking-widest">
             AI_AGENT_PIPELINE_ACTIVE // RAG_STATE: SYNCHRONIZED // MCP_VERSION: 1.0.4 // UPLINK: STABLE
          </span>
          <Activity size={14} className="text-black" />
          <span className="font-mono font-black text-black text-[10px] tracking-widest">
             CORE_TEMP: 32°C // MEMORY_USAGE: 4.2GB // THREADS: 128_ACTIVE
          </span>
          <div className="w-2 h-2 bg-black rounded-full animate-ping" />
        </div>
      ))}
    </motion.div>
  </div>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="font-mono text-[11px] font-bold uppercase tracking-widest hover:text-accent transition-colors py-2 px-4 border-b-2 border-transparent hover:border-accent"
  >
    {children}
  </a>
);

// --- Structural UI Components ---

const BrutalistSection = ({ id, title, subtitle, children, dark = true }) => (
  <section id={id} className={`py-32 px-6 md:px-12 border-b-2 border-white/10 scroll-mt-24 ${dark ? 'bg-black' : 'bg-white text-black'}`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="space-y-4">
          <span className={`font-mono text-xs uppercase tracking-[0.4em] ${dark ? 'text-white/40' : 'text-black/40'}`}>
            {subtitle}
          </span>
          <h2 className={`text-6xl md:text-9xl tracking-tighter leading-none ${!dark && 'text-outline-black'}`}>
            {title}
          </h2>
        </div>
        <div className={`hidden md:block h-px flex-grow mx-12 ${dark ? 'bg-white/10' : 'bg-black/10'}`} />
        <div className="flex items-center gap-4">
           <div className={`w-3 h-3 rounded-full animate-pulse ${dark ? 'bg-white' : 'bg-black'}`} />
           <span className="font-mono text-[10px] opacity-50 uppercase tracking-widest">LIVE_FEED_01</span>
        </div>
      </div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, desc, tags, link }) => (
  <motion.div
    whileHover={{ x: 20 }}
    className="group relative flex flex-col md:flex-row items-stretch border-2 border-white mb-12 overflow-hidden bg-black hover:border-accent transition-all duration-300 glitch-border"
  >
    <div className="md:w-1/3 p-12 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-white group-hover:border-accent transition-colors bg-black text-white group-hover:bg-white group-hover:text-black">
       <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl tracking-tighter leading-tight group-hover:text-accent transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="font-mono text-[9px] border border-white/30 px-2 py-1 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
       </div>
       <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 flex items-center gap-4 group/btn"
       >
          <div className="w-12 h-12 rounded-full border-2 border-white group-hover:border-black flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all">
            <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest font-black group-hover:text-black">View Repository</span>
       </a>
    </div>
    <div className="flex-grow p-12 flex flex-col justify-center group-hover:bg-accent/10 transition-colors text-white">
       <p className="text-xl md:text-2xl font-sans leading-relaxed text-white/70 max-w-2xl">
         {desc}
       </p>
       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-1 bg-white/10 relative overflow-hidden">
               <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute inset-0 bg-accent"
               />
            </div>
          ))}
       </div>
    </div>
  </motion.div>
);

// --- Sections ---

const ManifestoHero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const textVariants = {
    hidden: { opacity: 0, x: -200, skewX: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        delay: 0.1 * i,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-accent font-black">Portfolio_v2.0</span>
            <div className="h-px w-24 bg-accent" />
          </div>
          <div className="flex flex-col relative">
            <h1 className="text-[17vw] md:text-[12vw] leading-[0.8] tracking-tighter flex flex-col">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                whileHover={{
                  x: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.2, repeat: Infinity }
                }}
                className="text-white cursor-none hover:text-accent transition-colors"
              >
                HARSHIL
              </motion.span>
            </h1>

            <KineticTicker />

            <h1 className="text-[17vw] md:text-[12vw] leading-[0.8] tracking-tighter flex flex-col">
              <motion.span
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                whileHover={{
                  skewX: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.2, repeat: Infinity }
                }}
                className="text-outline-white cursor-none hover:text-accent transition-colors"
              >
                GORASIYA
              </motion.span>
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl font-sans leading-tight max-w-xl text-white/60"
          >
            APPLIED AI ENGINEER. ARCHITECT OF AUTONOMOUS AGENTIC PIPELINES AND INTELLIGENT INFRASTRUCTURE.
          </motion.p>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex gap-4">
               <a href="https://github.com/N0t-Harshil" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github size={24} />
               </a>
               <a href="https://linkedin.com/in/harshil-gorasiya" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin size={24} />
               </a>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Magnetic>
                <a href="#archives" className="brutalist-button flex items-center gap-3">
                  Explore Work <ArrowDown size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/Harshil_Gorasiya_CV.pdf" target="_blank" className="brutalist-button bg-black text-white hover:bg-white hover:text-black flex items-center gap-3">
                  Download CV <FileDown size={20} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Background Kinetic Element */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 text-[30vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none"
      >
        SYSTEM_01
      </motion.div>
    </section>
  );
};

const TheArsenal = () => {
  const categories = [
    { title: "Agentic Systems", items: ["LangChain", "FAISS", "MCP", "RAG Pipelines", "Ollama"], load: "92%" },
    { title: "Deep Learning", items: ["PyTorch", "TensorFlow", "YOLOv8", "HuggingFace", "CNNs"], load: "88%" },
    { title: "Core Architecture", items: ["Python", "C++", "Docker", "FastAPI", "Linux"], load: "95%" },
    { title: "Data Engines", items: ["SQL", "MongoDB", "VectorDB", "Elastic", "Spark"], load: "84%" }
  ];

  return (
    <BrutalistSection id="arsenal" title="Arsenal" subtitle="Technological Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-black p-8 border-2 border-white group hover:border-accent transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 border-l-2 border-b-2 border-white group-hover:border-accent font-mono text-[8px] opacity-40">
               VER: 2.0.4 // LOAD: {cat.load}
            </div>
            <h3 className="text-2xl mb-12 group-hover:text-accent transition-colors flex items-center gap-2">
              <Zap size={18} className="text-accent fill-accent" />
              {cat.title}
            </h3>
            <div className="space-y-6">
               {cat.items.map((item, j) => (
                 <div key={j} className="space-y-2">
                    <div className="flex items-center justify-between">
                       <span className="font-mono text-xs uppercase tracking-widest">{item}</span>
                       <span className="font-mono text-[8px] opacity-30">READY</span>
                    </div>
                    <div className="h-1 bg-white/10 w-full overflow-hidden">
                       <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: j * 0.1 }}
                        className="h-full bg-white group-hover:bg-accent"
                        style={{ width: `${((i * 7 + j * 13) % 40) + 60}%` }}
                       />
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-12 pt-4 border-t border-white/10 flex justify-between items-center">
               <Activity size={12} className="text-white/20" />
               <span className="font-mono text-[8px] opacity-20">SYSTEM_READY_FOR_DEPLOYMENT</span>
            </div>
          </div>
        ))}
      </div>
    </BrutalistSection>
  );
};

const TheArchives = () => (
  <BrutalistSection id="archives" title="Archives" subtitle="Selected Operations" dark={true}>
    <ProjectCard
      title="ARDAN-CLI"
      desc="ENGINEERED A STANDALONE, TERMINAL-BASED AI SOFTWARE ENGINEER UTILIZING AN EXPLICIT REACT EXECUTION LOOP IN PYTHON."
      tags={["PYTHON", "REACT", "MCP"]}
      link="https://github.com/N0t-Harshil/Ardan-CLI"
    />
    <ProjectCard
      title="GRAPH-RAG"
      desc="HIERARCHICAL GRAPH-BASED RAG SYSTEM. 4S LATENCY @ $0 INFRASTRUCTURE COST. 5-LEVEL DOCUMENT ENTITY INDEXING."
      tags={["FAISS", "GRAPHS", "PYTHON"]}
      link="https://github.com/N0t-Harshil"
    />
    <ProjectCard
      title="LOCAL PERPLEX"
      desc="PRIVATE MULTIMODAL AI RESEARCH ENGINE. ZERO-DATA-LEAKAGE DESKTOP RESEARCH PLATFORM SUPPORTING MULTIMODAL ANALYTICS."
      tags={["C++ ENGINE", "OLLAMA", "OCR"]}
      link="https://github.com/N0t-Harshil/Local-Perplex"
    />
  </BrutalistSection>
);

const TheLedger = () => {
  const data = [
    { type: "Experience", title: "Deep Learning Intern", org: "PD Avenue", date: "2023 - 2024" },
    { type: "Experience", title: "Machine Learning Intern", org: "Dotcom IoT", date: "2023" },
    { type: "Education", title: "M.Sc. Software Engineering", org: "HH Heilbronn", date: "2024 - 2027" },
    { type: "Education", title: "B.Tech. IT", org: "ADIT India", date: "2024" }
  ];

  return (
    <BrutalistSection id="ledger" title="Ledger" subtitle="Timeline of Progress">
      <div className="space-y-2">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000000" }}
            className="group flex flex-col md:flex-row md:items-center justify-between p-12 border-2 border-white transition-all duration-300"
          >
            <div className="flex items-center gap-8">
               <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-black/40">{item.type}</span>
               <h3 className="text-3xl md:text-5xl tracking-tighter">{item.title}</h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-8 text-right">
               <span className="font-display text-xl">{item.org}</span>
               <span className="font-mono text-sm border-l-2 border-white/20 pl-8 group-hover:border-black/20">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </BrutalistSection>
  );
};

const TheGateway = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error, error_email
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("harshil.gorasiya.0011@gmail.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const validateEmail = (email) => {
    const gmailRegex = /^[a-z0-9.]{6,30}@gmail\.com$/i;
    return gmailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setStatus('error_email');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'f768b753-9133-4f99-906d-e435f9923838',
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Transmission Error:', err);
      setStatus('error');
    }
  };

  return (
    <BrutalistSection id="gateway" title="Gateway" subtitle="Establish Contact" dark={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <p className="text-4xl font-display leading-tight tracking-tighter">
            INITIATE SECURE TRANSMISSION FOR COLLABORATIONS, DEPLOYMENTS, OR STRATEGIC CONSULTATIONS.
          </p>
          <div className="space-y-6">
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                   <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xl">harshil.gorasiya.0011@gmail.com</span>
                  <button
                    onClick={handleCopy}
                    className="font-mono text-[10px] text-accent uppercase tracking-widest flex items-center gap-2 mt-1 hover:underline decoration-2"
                  >
                    {copySuccess ? <Check size={10} /> : <Copy size={10} />}
                    {copySuccess ? "Address_Copied" : "Copy_to_Clipboard"}
                  </button>
                </div>
             </div>
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                   <Phone size={20} />
                </div>
                <span className="font-mono text-xl">+49 155 6351 7346</span>
             </div>
             <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                   <MapPin size={20} />
                </div>
                <span className="font-mono text-xl">Heilbronn, Germany</span>
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME_ID"
                required
                className="w-full bg-transparent border-b-4 border-black p-4 font-mono text-xl focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="CONTACT_ADDR"
                required
                className={`w-full bg-transparent border-b-4 p-4 font-mono text-xl focus:outline-none transition-colors ${status === 'error_email' ? 'border-accent text-accent' : 'border-black focus:border-accent'}`}
              />
              {status === 'error_email' && (
                <p className="text-[10px] font-mono uppercase tracking-widest text-accent font-black">Error: Must be a valid @gmail.com address (6-30 chars).</p>
              )}
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="TRANSMISSION_DATA"
            rows="5"
            required
            className="w-full bg-transparent border-b-4 border-black p-4 font-mono text-xl focus:outline-none focus:border-accent transition-colors resize-none"
          />

          <div className="relative">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`brutalist-button w-full border-black transition-all ${status === 'sending' ? 'bg-black/50 cursor-wait' : 'bg-black text-white hover:bg-accent hover:border-accent'}`}
            >
              {status === 'sending' ? 'TRANSMITTING...' : 'Send Transmission'}
              {status !== 'sending' && <Send className="inline ml-3" size={20} />}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-12 left-0 right-0 text-center font-mono text-xs uppercase tracking-widest text-green-600 font-black"
                >
                  Transmission Received. Protocol Complete.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-12 left-0 right-0 text-center font-mono text-xs uppercase tracking-widest text-accent font-black"
                >
                  Transmission Failed. Check Connection.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </BrutalistSection>
  );
};

// --- Global UI Components ---

const MonolithNavbar = () => {
  const [activeSection, setActiveSection] = useState('HERO');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['archives', 'arsenal', 'ledger', 'gateway'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.toUpperCase());
          return;
        }
      }
      if (window.scrollY < 300) setActiveSection('HERO');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Archives', href: '#archives' },
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Ledger', href: '#ledger' },
    { name: 'Gateway', href: '#gateway' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-24 px-6 md:px-12 flex items-center justify-between mix-blend-difference">
       <div className="flex items-center gap-12">
         <MonolithLogo />
         <div className="hidden xl:flex items-center gap-4 font-mono text-[10px] text-accent font-black tracking-widest border-l border-white/20 pl-8">
            <span className="opacity-40">CURRENT_LOC:</span>
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-accent text-black px-2"
            >
              {activeSection}
            </motion.span>
         </div>
       </div>

       {/* Desktop Nav */}
       <div className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
          ))}
       </div>

       {/* Mobile Nav Trigger */}
       <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black transition-all"
       >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
       </button>

       {/* Mobile Menu Overlay */}
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-24 bg-black border-t-2 border-white/10 p-12 lg:hidden z-50 flex flex-col gap-8"
           >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-black tracking-tighter hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="mt-auto pt-12 border-t-2 border-white/10 flex gap-8">
                  <a href="https://github.com/N0t-Harshil" className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Github</a>
                  <a href="https://linkedin.com/in/harshil-gorasiya" className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Linkedin</a>
              </div>
           </motion.div>
         )}
       </AnimatePresence>
    </nav>
  );
};

const NeuralScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-64 w-1 bg-white/10 z-[100] hidden md:block border border-white/20">
      <motion.div
        className="absolute top-0 left-0 right-0 bg-accent origin-top"
        style={{ scaleY }}
      />
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/40 tracking-tighter vertical-text">
        SCROLL_PROGRESS
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/40 tracking-tighter">
        100%
      </div>
    </div>
  );
};

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, h1, h2, .magnetic-target, .hover-trigger');
      if (target) {
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
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 45 : 0
        }}
        className="w-full h-full border-2 border-white"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white" />
    </motion.div>
  );
};

function App() {
  const [time, setTime] = useState(new Date().toISOString().split('T')[1].split('.')[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString().split('T')[1].split('.')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white font-sans bg-black text-white">
      <div className="noise" />
      <div className="scanning-line" />

      {/* Technical Metadata Overlays */}
      <div className="fixed top-28 left-6 md:left-12 z-50 font-mono text-[8px] text-white/30 uppercase tracking-[0.3em] vertical-text pointer-events-none hidden md:block">
        BUILD_REF: BRUTALIST_V4.0 / COORDS: 49.1427°N 9.2109°E
      </div>
      <div className="fixed bottom-12 left-6 md:left-12 z-50 font-mono text-[8px] text-white/30 uppercase tracking-[0.3em] vertical-text pointer-events-none hidden md:block rotate-180">
        TS: {time} / STATUS: ONLINE
      </div>

      <CustomCursor />
      <NeuralScroll />
      <MonolithNavbar />

      <main>
        <ManifestoHero />
        <TheArchives />
        <TheArsenal />
        <TheLedger />
        <TheGateway />
      </main>

      <footer className="py-24 px-12 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
        <Magnetic>
          <MonolithLogo />
        </Magnetic>
        <div className="font-mono text-[10px] uppercase tracking-[0.6em] opacity-40 text-center md:text-right">
          © 2025 HARSHIL GORASIYA // SYSTEM_OPTIMIZED_FOR_AI
        </div>
        <div className="flex gap-12 font-mono text-[11px] font-black uppercase tracking-widest">
           <Magnetic strength={0.2}><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-accent transition-colors">Top</a></Magnetic>
           <Magnetic strength={0.2}><a href="https://github.com/N0t-Harshil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></Magnetic>
           <Magnetic strength={0.2}><a href="https://linkedin.com/in/harshil-gorasiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></Magnetic>
        </div>
      </footer>
    </div>
  );
}

export default App;
