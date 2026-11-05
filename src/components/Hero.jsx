import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HeroCore = lazy(() => import('./HeroCore'));

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen split-screen bg-obsidian overflow-hidden">
      <div className="scanning-line" />

      {/* Left Column: Identity */}
      <div className="flex flex-col justify-center p-8 md:p-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-technical text-safety-orange mb-6 block">
            {t('hero.role')}
          </span>
          <h1 className="text-huge font-headline font-black text-pure-white uppercase hover:text-safety-orange transition-colors duration-700 cursor-default">
            {t('hero.nameLine1')}<br />
            {t('hero.nameLine2')}
          </h1>
          <p className="mt-12 text-xl font-body text-pure-white/60 max-w-lg leading-relaxed">
            {t('hero.bio')}
          </p>

          <div className="mt-16 flex flex-wrap gap-6">
            <a
              href="./Harshil_Gorasiya_CV.pdf"
              download
              className="magnetic-button flex items-center justify-center"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translate(0px, 0px)`;
              }}
            >
              {t('hero.download')}
            </a>
            <div className="flex items-center gap-4 text-technical text-pure-white/40">
              <span className="w-12 h-[1px] bg-pure-white/20" />
              {t('hero.location')}
            </div>
          </div>
        </motion.div>

        {/* System Coordinates (Decorative) */}
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <div className="font-mono text-[10px] text-pure-white/20 space-y-1">
            <p>LAT: 49.1427° N</p>
            <p>LNG: 9.2109° E</p>
            <p>SYS_STATUS: OPTIMIZED</p>
          </div>
        </div>
      </div>

      {/* Right Column: Neural Core */}
      <div className="relative h-[60vh] lg:h-full cursor-grab active:cursor-grabbing">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-safety-orange/10 border border-safety-orange/20 animate-pulse" />
            </div>
          }
        >
          <HeroCore />
        </Suspense>

        {/* Interaction Prompt */}
        <div className="absolute bottom-10 right-10 pointer-events-none">
          <div className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest flex items-center gap-3">
            {t('hero.drag')}
            <div className="w-1 h-1 bg-safety-orange animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
