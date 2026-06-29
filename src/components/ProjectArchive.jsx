import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ title, tech, description, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass glass-hover p-10 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 font-mono text-[8px] text-cyan-glow/20 uppercase tracking-widest">
        ARCHIVE_ID: {index + 101}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 border border-cyan-glow/20 text-[10px] font-mono text-cyan-glow/60 uppercase">
            {t}
          </span>
        ))}
      </div>

      <h3 className="text-4xl font-headline font-black text-silver uppercase mb-6 group-hover:text-cyan-glow transition-colors duration-500">
        {title}
      </h3>

      <p className="font-body text-silver/50 leading-relaxed mb-10 text-lg">
        {description}
      </p>

      <motion.button
        className="text-technical text-cyan-glow flex items-center gap-4 hover:gap-6 transition-all"
        whileHover={{ x: 5 }}
      >
        <span className="w-10 h-[1px] bg-cyan-glow" />
        EXPLORE_CASEFILE
      </motion.button>
    </motion.div>
  );
};

const ProjectArchive = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projects = [
    {
      title: "Ardan-CLI",
      tech: ["Python", "ReAct", "MCP"],
      description: "Autonomous terminal AI engineer with a deterministic ReAct execution loop and native multi-provider support."
    },
    {
      title: "Graph RAG",
      tech: ["FAISS", "Ollama", "Python"],
      description: "Deterministic hierarchical graph retrieval system optimizing cross-document knowledge mapping."
    },
    {
      title: "Local Perplex",
      tech: ["C++", "Ollama", "Multithreading"],
      description: "Native multimodal AI research engine with sub-10ms ranking latency and isolated local OCR."
    }
  ];

  return (
    <section ref={containerRef} className="py-40 px-10 bg-space-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <motion.h2
            style={{ y }}
            className="text-hero text-silver/5 uppercase opacity-20 absolute top-0 left-0 -translate-x-10 pointer-events-none"
          >
            PROJECTS
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8 relative z-10">
            <h2 className="text-7xl font-headline font-black text-silver uppercase leading-tight">
              Project<br />
              <span className="text-cyan-glow">Archive</span>
            </h2>
            <p className="max-w-md font-body text-lg text-silver/40 leading-relaxed">
              Curated selection of high-impact neural systems and autonomous agentic frameworks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {projects.map((p, i) => (
            <div key={i} className={i === 0 ? "lg:col-span-2" : ""}>
               <ProjectCard {...p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;
