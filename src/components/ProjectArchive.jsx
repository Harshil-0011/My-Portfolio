import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="relative py-24 border-b border-pure-white/10 group">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Project Info */}
        <div className="lg:col-span-5 z-10">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-safety-orange mb-4 block">
              CASEFILE_0{index + 1}
            </span>
            <h3 className="text-5xl md:text-7xl font-headline font-black text-pure-white uppercase tracking-tighter mb-8 group-hover:text-safety-orange transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-xl font-body text-pure-white/60 mb-10 leading-relaxed italic">
              &quot;{project.overview}&quot;
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-technical text-pure-white/40">
                  [{tag}]
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 font-mono text-xs text-pure-white group-hover:text-safety-orange transition-colors"
            >
              ACCESS_REPOSITORY
              <span className="w-8 h-[1px] bg-pure-white/20 group-hover:bg-safety-orange transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Project Visual (Placeholder for now, keeping it abstract/minimal) */}
        <div className="lg:col-span-7 relative h-[400px] overflow-hidden bg-pure-white/[0.03] border border-pure-white/5">
          <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center">
             <div className="w-[120%] h-[120%] opacity-20 bg-gradient-to-br from-safety-orange/40 to-transparent blur-3xl animate-pulse" />
             <span className="font-headline font-black text-9xl text-pure-white/[0.05] select-none uppercase">
                {project.title.split(' ')[0]}
             </span>
          </motion.div>

          {/* Detailed stats */}
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-pure-white/20 space-y-1 text-right">
             {project.bullets.map((b, i) => (
               <p key={i}>{'//'} {b.substring(0, 40)}...</p>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectArchive = () => {
  const projects = [
    {
      title: "Ardan-CLI",
      overview: "Autonomous terminal-based AI software engineer utilizing a ReAct execution loop.",
      link: "https://github.com/N0t-Harshil/Ardan-CLI",
      tags: ["Python", "ReAct", "MCP"],
      bullets: ["Supports 6 major LLM providers", "Parallel tool execution", "AES-encrypted keys"]
    },
    {
      title: "Graph RAG",
      overview: "Hierarchical graph-based retrieval system replacing expensive graph calls with deterministic mappings.",
      link: "https://github.com/N0t-Harshil",
      tags: ["Python", "FAISS", "Ollama"],
      bullets: ["5-level document indexing", "Sub-4s latency", "Zero infrastructure cost"]
    },
    {
      title: "Local Perplex",
      overview: "Private multimodal AI research engine with custom native multi-threaded rankings.",
      link: "https://github.com/N0t-Harshil/Local-Perplex",
      tags: ["C++", "Ollama", "Multithreading"],
      bullets: ["Sub-10ms ranking latency", "Zero data leakage", "Native OCR subsystem"]
    }
  ];

  return (
    <section className="bg-obsidian">
      <div className="py-32 px-8 border-y border-pure-white/10 overflow-hidden">
        <h2 className="text-huge font-headline font-black text-pure-white uppercase text-right hover:-skew-x-12 transition-transform duration-300">
          The<br />{'Archive'}
        </h2>
      </div>

      <div>
        {projects.map((proj, i) => (
          <ProjectCard key={i} index={i} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectArchive;
