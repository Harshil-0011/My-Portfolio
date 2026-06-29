import { motion } from 'framer-motion';
import NeuralAura from './NeuralAura';
import ScrambleText from './ScrambleText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 overflow-hidden bg-space-950">
      <NeuralAura />

      <div className="z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-cyan-glow/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-glow">
              Status: Researching Autonomous Systems
            </span>
          </div>

          <p className="font-mono text-xs text-silver/40 uppercase tracking-[0.3em] mb-4">
            System Lead: <ScrambleText text="Harshil Gorasiya" />
          </p>

          <h1 className="text-hero font-headline font-black text-silver uppercase leading-[0.9]">
            Architecting<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-violet-glow to-cyan-glow bg-[length:200%_auto] animate-gradient-flow">
              Intelligence
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <p className="font-body text-xl text-silver/60 leading-relaxed max-w-xl">
              Applied AI Engineer specializing in RAG architectures and multi-agent neural pipelines. Turning complex data into deterministic intelligence.
            </p>

            <div className="flex flex-wrap gap-8 items-center lg:justify-end">
               <motion.a
                 href="./Harshil_Gorasiya_CV.pdf"
                 download
                 className="btn-premium"
                 whileHover={{ y: -5 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Download Full CV (PDF)
               </motion.a>

               <div className="font-mono text-[10px] text-silver/30 uppercase tracking-widest text-right">
                  <p>LAT: 49.1427° N</p>
                  <p>LNG: 9.2109° E</p>
                  <p>LOC: Heilbronn, DE</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Mesh Gradient (Secondary Layer) */}
      <div className="absolute inset-0 bg-mesh opacity-50 z-0" />

      {/* Decorative Floating Data */}
      <div className="absolute bottom-10 left-10 z-10 hidden xl:block">
        <div className="font-mono text-[8px] text-silver/20 space-y-1">
          <p>// NEURAL_LATENCY: 12ms</p>
          <p>// SYSTEM_UPTIME: 99.98%</p>
          <p>// CORE_TEMP: STABLE</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
