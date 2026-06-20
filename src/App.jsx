import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import ProjectArchive from './components/ProjectArchive';
import ExperienceLog from './components/ExperienceLog';
import ContactPortal from './components/ContactPortal';

function App() {
  const [loading, setLoading] = useState(true);

  const [coords, setCoords] = useState({ x: '0.000', y: '0.000' });

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Grid Coordination Decoration
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth).toFixed(3);
      const y = (e.clientY / window.innerHeight).toFixed(3);
      setCoords({ x, y });
      document.documentElement.style.setProperty('--cursor-x', x);
      document.documentElement.style.setProperty('--cursor-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative selection:bg-safety-orange selection:text-pure-white bg-obsidian">
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

      {/* Floating System Stats */}
      <div className="fixed top-10 right-10 z-[100] mix-blend-difference hidden md:block">
        <div className="font-mono text-[10px] text-pure-white/40 space-y-1 text-right uppercase tracking-[0.2em]">
           <p>SYSTEM_V6.1.0 // STABLE</p>
           <p>SYNC_COORD: [{coords.x}, {coords.y}]</p>
        </div>
      </div>

      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Hero />
        <SkillsGrid />
        <ProjectArchive />
        <ExperienceLog />
        <ContactPortal />
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
