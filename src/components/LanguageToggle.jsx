import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-3 px-4 py-2 border border-pure-white/20 hover:border-safety-orange transition-all duration-300 bg-pure-white/[0.05] hover:bg-pure-white/[0.1] relative overflow-hidden"
      aria-label="Toggle Language"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] flex items-center gap-2 text-pure-white">
        <span className="opacity-40 uppercase">Lang:</span>
        <span className="flex items-center gap-1">
          <span className={language === 'en' ? 'text-safety-orange font-bold' : 'text-pure-white/40'}>EN</span>
          <span className="text-pure-white/10">/</span>
          <span className={language === 'de' ? 'text-safety-orange font-bold' : 'text-pure-white/40'}>DE</span>
        </span>
      </span>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-safety-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </button>
  );
};

export default LanguageToggle;
