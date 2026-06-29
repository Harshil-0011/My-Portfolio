import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 glass glass-hover group"
  >
    <div className="flex justify-between items-start mb-10">
      <h3 className="font-headline font-black text-2xl text-silver uppercase tracking-tighter group-hover:text-cyan-glow transition-colors">
        {title}
      </h3>
      <span className="font-mono text-[10px] text-silver/20">/0{index + 1}</span>
    </div>

    <div className="space-y-4">
      {skills.map((skill, i) => (
        <div key={i} className="group/skill">
          <div className="flex justify-between items-center mb-1">
            <span className="font-mono text-xs text-silver/60 uppercase tracking-widest">{skill}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow opacity-0 group-hover/skill:opacity-100 transition-opacity" />
          </div>
          <div className="h-[1px] w-full bg-silver/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
              className="h-full w-full bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsGrid = () => {
  const categories = [
    {
      title: "Agentic Systems",
      skills: ["LangChain", "ReAct Loops", "MCP", "Autonomous Agents", "RAG Pipelines"]
    },
    {
      title: "Neural Engine",
      skills: ["PyTorch", "TensorFlow", "Transformers", "YOLOv8", "Computer Vision"]
    },
    {
      title: "Core Architecture",
      skills: ["C++ Engines", "Python", "Multithreading", "REST APIs", "FastAPI"]
    },
    {
      title: "Data Infrastructure",
      skills: ["FAISS", "Vector DBs", "PostgreSQL", "Docker", "MLOps"]
    }
  ];

  return (
    <section className="py-40 px-10 bg-space-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-12">
          <h2 className="text-hero text-silver uppercase leading-[0.8] tracking-tighter">
            Neural<br />
            <span className="text-cyan-glow">Matrix</span>
          </h2>
          <p className="max-w-md font-body text-xl text-silver/40 leading-relaxed italic border-l-2 border-violet-glow pl-8">
            Technical competencies mapped across autonomous intelligence, distributed neural systems, and infrastructure optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <SkillCategory key={i} index={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
