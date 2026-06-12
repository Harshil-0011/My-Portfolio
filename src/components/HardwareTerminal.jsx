import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HardwareTerminal = () => {
  const [lines, setLines] = useState([]);

  const scriptLines = [
    { type: 'input', text: 'import ardan_agent', color: 'text-rose-400' },
    { type: 'input', text: '', color: '' },
    { type: 'comment', text: '# Initialize multi-provider framework with automated stability', color: 'text-slate-500' },
    { type: 'input', text: 'agent = ardan_agent.initialize(', color: 'text-cyan-400' },
    { type: 'input', text: '    providers=["Claude", "GPT-4", "Gemini", "Groq", "Mistral", "Ollama"]', color: 'text-cyan-400' },
    { type: 'input', text: ')', color: 'text-cyan-400' },
    { type: 'input', text: 'agent.execute_react_loop(', color: 'text-cyan-400' },
    { type: 'input', text: '    task="Optimize localized infrastructure pipelines"', color: 'text-cyan-400' },
    { type: 'input', text: ')', color: 'text-cyan-400' },
    { type: 'output', text: '', color: '' },
    { type: 'log', text: '[INFO] Auto-failover active. Executing Docker containment sandbox tool...', color: 'text-blue-400' },
    { type: 'log', text: '[SUCCESS] Low-latency response achieved. Latency: sub-10ms. Cost: $0.00', color: 'text-emerald-400' },
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < scriptLines.length) {
        setLines(prev => [...prev, scriptLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 bg-[#0A0F1D] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-20 relative text-left">
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>

      {/* Content */}
      <div className="p-6 font-mono text-xs md:text-sm leading-relaxed min-h-[300px]">
        {(lines || []).map((line, idx) => (
          <div key={idx} className="flex gap-2">
            {line && line.type === 'input' && <span className="text-slate-600">{'>>>'}</span>}
            {line && line.type === 'output' && <span className="text-slate-600">&nbsp;</span>}
            <span className={line ? line.color : ''}>{line ? line.text : ''}</span>
          </div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-emerald-400 align-middle ml-1"
        />
      </div>
    </div>
  );
};
