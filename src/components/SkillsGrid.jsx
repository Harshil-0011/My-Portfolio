import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative p-8 border border-pure-white/10 bg-pure-white/[0.02] group overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-[2px] bg-safety-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    <span className="font-mono text-[10px] text-safety-orange mb-6 block opacity-50">
      0{index + 1}_STACK
    </span>
    <h3 className="font-headline font-bold text-2xl text-pure-white mb-8 tracking-tight uppercase">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 border border-pure-white/20 text-technical text-pure-white/60 hover:border-safety-orange hover:text-safety-orange transition-colors duration-300"
        >
          {skill}
        </span>
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
    <section className="py-32 px-8 bg-obsidian">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <h2 className="text-huge font-headline font-black text-pure-white uppercase">
            Capability<br />Matrix
          </h2>
          <p className="max-w-md font-body text-lg text-pure-white/40 leading-relaxed">
            A comprehensive overview of technical competencies categorized by system architecture and deployment readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={i} index={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
