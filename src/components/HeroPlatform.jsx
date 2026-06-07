import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Code, FileDown } from 'lucide-react';
import { HardwareTerminal } from './HardwareTerminal';

export const HeroPlatform = () => {
  const name = "Harshil Gorasiya";

  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
      {/* Ambient Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(circle,rgba(27,42,74,0.08)_0%,transparent_70%)] blur-3xl -z-10 pointer-events-none" />

      <div className="text-center space-y-8">
        {/* Anti-Fragmentation Heading with Reveal Engine */}
        <h1 className="whitespace-nowrap break-keep select-none block tracking-tight font-bold text-navy text-6xl md:text-8xl lg:text-9xl z-20 relative">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 font-medium leading-tight z-20 relative">
          Applied AI Engineer Specializing in <span className="text-navy font-bold">RAG, Autonomous Agentic Pipelines & Intelligent Infrastructure</span>.
        </p>

        {/* Contact Link Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-4 z-20 relative">
          <div className="flex items-center gap-2 text-navy font-bold text-sm">
            <MapPin size={16} /> Heilbronn, Germany
          </div>
          <a href="tel:+4915563517346" className="flex items-center gap-2 text-navy font-bold text-sm hover:text-slate-500 transition-colors">
            <Phone size={16} /> 0 155 6351 7346
          </a>
          <a href="mailto:harshil.gorasiya.0011@gmail.com" className="flex items-center gap-2 text-navy font-bold text-sm hover:text-slate-500 transition-colors">
            <Mail size={16} /> harshil.gorasiya.0011@gmail.com
          </a>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4 z-20 relative">
          <a
            href="https://linkedin.com/in/harshil-gorasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            <ExternalLink size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/N0t-Harshil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            <Code size={18} /> GitHub
          </a>
          <button className="flex items-center gap-2 px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-navy/90 shadow-xl hover:shadow-navy/20 transition-all">
            <FileDown size={18} /> Download Full LaTeX CV (PDF)
          </button>
        </div>

        {/* Terminal Simulation Panel */}
        <HardwareTerminal />
      </div>
    </section>
  );
};
