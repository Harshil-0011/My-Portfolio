import { motion } from 'framer-motion';

const LogEntry = ({ entry, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="py-20 flex flex-col md:flex-row gap-12 border-b border-silver/10 hover:bg-silver/[0.02] transition-colors px-6"
  >
    <div className="md:w-1/4 font-mono text-[10px] text-cyan-glow uppercase tracking-[0.4em] pt-2">
      {entry.duration} // {entry.context}
    </div>
    <div className="md:w-3/4">
      <h3 className="text-5xl font-headline font-black text-silver uppercase mb-2 group-hover:text-cyan-glow transition-colors">
        {entry.title}
      </h3>
      <p className="font-mono text-xs text-silver/40 uppercase mb-8 tracking-widest">
        Deployment: {entry.company}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-4 font-body text-sm text-silver/50 leading-relaxed italic">
            <span className="text-cyan-glow not-italic">◈</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ExperienceLog = () => {
  const experiences = [
    {
      title: "Deep Learning Intern",
      company: "PD Avenue",
      duration: "2023_12 — 2024_04",
      context: "Remote",
      bullets: [
        "Built custom classification heads using TensorFlow/Keras, achieving +8% validation accuracy.",
        "Slashed baseline processing runtimes by 20% through adaptive scheduling.",
        "Isolated structural overfitting patterns across 10+ core test branches."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Dotcom IoT LLP",
      duration: "2023_05 — 2023_06",
      context: "India",
      bullets: [
        "Deployed YOLOv8 tracking frameworks processing 35,000+ frames per hour on CPU-only hardware.",
        "Curated and audited 3,000+ custom evaluation frames for model stabilization."
      ]
    }
  ];

  return (
    <section className="py-40 bg-space-950">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-hero text-silver uppercase leading-[0.8]">
            System<br />
            <span className="text-transparent border-b-4 border-violet-glow pb-4">Chronicle</span>
          </h2>
          <div className="text-right glass p-8">
             <p className="font-mono text-[10px] text-cyan-glow mb-4 uppercase tracking-widest">Current Node</p>
             <p className="font-headline font-black text-3xl text-silver uppercase tracking-tight">M.Sc. Software Engineering</p>
             <p className="font-mono text-xs text-silver/40 mt-2 uppercase tracking-widest">Heilbronn University of Applied Sciences</p>
          </div>
        </div>

        <div className="border-t border-silver/10">
          {experiences.map((exp, i) => (
            <LogEntry key={i} index={i} entry={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLog;
