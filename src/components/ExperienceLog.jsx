import { motion } from 'framer-motion';

const LogEntry = ({ entry, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-pure-white/5 group hover:bg-pure-white/[0.01] transition-colors"
  >
    <div className="md:col-span-3 font-mono text-[10px] text-pure-white/30 uppercase tracking-widest pt-2">
      {entry.duration}
    </div>
    <div className="md:col-span-9 space-y-6">
      <div>
        <h3 className="text-3xl font-headline font-black text-pure-white uppercase group-hover:text-safety-orange transition-colors">
          {entry.title}
        </h3>
        <p className="font-technical text-safety-orange/60 mt-1">
          [{entry.company}] — {entry.context}
        </p>
      </div>
      <ul className="space-y-4 max-w-2xl">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-4 font-body text-sm text-pure-white/60 leading-relaxed">
            <span className="text-safety-orange font-mono">{`>>`}</span>
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
    <section className="py-32 px-8 bg-obsidian">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-huge font-headline font-black text-pure-white uppercase hover:skew-y-3 transition-transform duration-300">
            System<br />Log
          </h2>
          <div className="text-right">
             <p className="font-mono text-[10px] text-pure-white/40 mb-2 uppercase">Current Environment</p>
             <p className="font-headline font-black text-2xl text-pure-white uppercase">M.Sc. Software Engineering</p>
             <p className="font-technical text-safety-orange">HEILBRONN, GERMANY</p>
          </div>
        </div>

        <div className="border-t border-pure-white/10">
          {experiences.map((exp, i) => (
            <LogEntry key={i} index={i} entry={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLog;
