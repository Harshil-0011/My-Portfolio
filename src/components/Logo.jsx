const Logo = () => {
  return (
    <div className="flex items-center gap-3 group select-none">
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Geometric Framework */}
        <div className="absolute inset-0 border border-pure-white/10 group-hover:border-safety-orange transition-colors" />

        {/* Core Elements */}
        <div className="w-1.5 h-1.5 bg-pure-white group-hover:bg-safety-orange group-hover:scale-150 transition-all duration-500" />

        {/* Decorative Corner Dots */}
        <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-pure-white/40" />
        <div className="absolute top-0 right-0 w-0.5 h-0.5 bg-pure-white/40" />
        <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-pure-white/40" />
        <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-pure-white/40" />

        {/* Pulse Ring */}
        <div className="absolute inset-[-4px] border border-safety-orange/0 group-hover:border-safety-orange/50 group-hover:inset-0 transition-all duration-500 rounded-full" />
      </div>

      <div className="overflow-hidden">
        <div className="font-headline font-black text-xs text-pure-white tracking-widest leading-none">
          HG_ARCHIVE
        </div>
        <div className="font-mono text-[8px] text-pure-white/20 tracking-[0.4em] leading-none mt-1">
          EST_2026
        </div>
      </div>
    </div>
  );
};

export default Logo;
