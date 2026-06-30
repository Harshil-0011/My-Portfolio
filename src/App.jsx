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
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
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

  const { t } = useLanguage();

  const scrollTo = (target) => {
    if (lenisRef.current && target.current) {
      lenisRef.current.scrollTo(target.current);
    }
  };

  return (
    <div className="relative selection:bg-safety-orange selection:text-pure-white bg-obsidian cursor-none">
      <CustomCursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Visual Identity Grid Overlay */}
      <div className="grid-overlay">
        <div className="grid-line grid-line-v left-1/4" />
        <div className="grid-line grid-line-v left-1/2" />
        <div className="grid-line grid-line-v left-3/4" />
        <div className="grid-line grid-line-h top-1/4" />
        <div className="grid-line grid-line-h top-1/2" />
        <div className="grid-line grid-line-h top-3/4" />
      </div>

      {/* Technical Navigation */}
      <nav className="fixed top-6 left-6 md:top-10 md:left-10 z-[100] flex flex-col md:flex-row md:items-center gap-6 md:gap-16 mix-blend-difference pointer-events-auto">
        <Logo />

        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex gap-4 md:gap-8 font-mono text-[10px] text-pure-white/40 uppercase tracking-widest overflow-x-auto no-scrollbar">
             <button onClick={() => scrollTo(heroRef)} className="hover:text-safety-orange transition-colors whitespace-nowrap">{t('nav.identity')}</button>
             <button onClick={() => scrollTo(matrixRef)} className="hover:text-safety-orange transition-colors whitespace-nowrap">{t('nav.matrix')}</button>
             <button onClick={() => scrollTo(archiveRef)} className="hover:text-safety-orange transition-colors whitespace-nowrap">{t('nav.archive')}</button>
             <button onClick={() => scrollTo(portalRef)} className="hover:text-safety-orange transition-colors whitespace-nowrap">{t('nav.portal')}</button>
          </div>
          <LanguageToggle />
        </div>
      </nav>

      {/* Floating System Stats */}
      <div className="fixed top-10 right-10 z-[100] mix-blend-difference hidden md:block">
        <div className="font-mono text-[10px] text-pure-white/40 space-y-1 text-right uppercase tracking-[0.2em]">
           <p>SYSTEM_V6.1.0 // STABLE</p>
           <p id="coord-display">SYNC_COORD: [0.000, 0.000]</p>
        </div>
      </div>

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
              {t('footer.rights')}
            </div>
            <div className="flex gap-6 font-mono text-[10px] text-pure-white/40 uppercase tracking-widest">
              <a href="#" className="hover:text-safety-orange transition-colors">{t('footer.top')}</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
