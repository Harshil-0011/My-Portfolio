import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import ProjectArchive from './components/ProjectArchive';
import ExperienceLog from './components/ExperienceLog';
import ContactPortal from './components/ContactPortal';
import CustomCursor from './components/CustomCursor';
import Logo from './components/Logo';

function App() {
  const [loading, setLoading] = useState(true);

  // Refs for navigation targets
  const heroRef = useRef(null);
  const matrixRef = useRef(null);
  const archiveRef = useRef(null);
  const portalRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global CSS Variable Tracker (Optimized)
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth).toFixed(3);
      const y = (e.clientY / window.innerHeight).toFixed(3);
      document.documentElement.style.setProperty('--cursor-x', x);
      document.documentElement.style.setProperty('--cursor-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (target) => {
    if (lenisRef.current && target.current) {
      lenisRef.current.scrollTo(target.current);
    }
  };

  return (
    <div className="relative selection:bg-safety-orange selection:text-pure-white bg-obsidian cursor-none">
      <CustomCursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-6 flex justify-between items-center glass">
        <Logo />
        <div className="flex gap-10 font-mono text-[10px] text-silver/60 uppercase tracking-widest">
           <button onClick={() => scrollTo(heroRef)} className="hover:text-cyan-glow transition-colors cursor-pointer">/IDENTITY</button>
           <button onClick={() => scrollTo(matrixRef)} className="hover:text-cyan-glow transition-colors cursor-pointer">/MATRIX</button>
           <button onClick={() => scrollTo(archiveRef)} className="hover:text-cyan-glow transition-colors cursor-pointer">/ARCHIVE</button>
           <button onClick={() => scrollTo(portalRef)} className="hover:text-cyan-glow transition-colors cursor-pointer">/PORTAL</button>
        </div>
      </nav>

      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <div ref={heroRef}><Hero /></div>
        <div ref={matrixRef}><SkillsGrid /></div>
        <div ref={archiveRef}><ProjectArchive /></div>
        <ExperienceLog />
        <div ref={portalRef}><ContactPortal /></div>
      </main>

      <footer className="py-20 px-8 border-t border-pure-white/10 bg-obsidian text-center">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-headline font-black text-2xl text-pure-white uppercase tracking-tighter">
              Harshil Gorasiya
            </div>
            <div className="font-mono text-[10px] text-pure-white/20 uppercase tracking-[0.5em]">
              ©2026 // ALL_RIGHTS_RESERVED // ENGINEERED_BY_HG
            </div>
            <div className="flex gap-6 font-mono text-[10px] text-pure-white/40 uppercase tracking-widest">
              <a href="#" className="hover:text-safety-orange transition-colors">BACK_TO_TOP</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
