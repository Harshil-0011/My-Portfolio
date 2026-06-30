import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-2 px-3 py-1.5 border border-pure-white/10 hover:border-safety-orange transition-colors bg-pure-white/[0.02]"
    >
      <span className="font-mono text-[10px] tracking-widest flex items-center gap-1.5">
        <span className={language === 'en' ? 'text-safety-orange' : 'text-pure-white/40'}>EN</span>
        <span className="text-pure-white/20">|</span>
        <span className={language === 'de' ? 'text-safety-orange' : 'text-pure-white/40'}>DE</span>
      </span>
      <div className="w-1.5 h-1.5 bg-safety-orange scale-0 group-hover:scale-100 transition-transform duration-300" />
    </button>
  );
};

export default LanguageToggle;
