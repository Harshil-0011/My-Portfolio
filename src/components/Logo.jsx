import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 border border-cyan-glow/40 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-700"
        />
        <div className="w-1.5 h-1.5 bg-cyan-glow shadow-[0_0_10px_#22D3EE]" />
      </div>
      <span className="font-headline font-black text-xl tracking-tighter text-silver">
        HG<span className="text-cyan-glow">.</span>LAB
      </span>
    </motion.div>
  );
};

export default Logo;
