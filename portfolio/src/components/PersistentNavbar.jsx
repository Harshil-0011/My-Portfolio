import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarCheck, IdCard } from 'lucide-react';

export const PersistentNavbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex items-center justify-between"
      style={{
        backdropFilter: 'blur(24px) saturate(180%)',
        background: 'rgba(255, 255, 255, 0.7)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Left: Status Dot */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] md:text-xs font-bold text-navy tracking-widest uppercase select-none">
          STATUS: Seeking Werkstudent / Part-time Positions in Germany
        </span>
      </div>

      {/* Right: Logistics Badges */}
      <div className="hidden md:flex items-center gap-2">
        <Badge icon={<Clock size={12} />} text="20h/Week (Semester)" />
        <Badge icon={<CalendarCheck size={12} />} text="Full-time (Breaks)" />
        <Badge icon={<IdCard size={12} />} text="Valid Aufenthaltserlaubnis" />
      </div>
    </nav>
  );
};

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 border border-slate-200/50 rounded-full">
    <span className="text-slate-600">{icon}</span>
    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight whitespace-nowrap">
      {text}
    </span>
  </div>
);
