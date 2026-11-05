import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { base } from "../utils/links";

const TABS = [
  { id: "register", key: "nav.projects" },
  { id: "custody", key: "nav.experience" },
  { id: "matrix", key: "nav.skills" },
  { id: "exchange", key: "nav.contact" },
];

export default function SheetHeader({ proof, onToggleProof }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [active, setActive] = useState("title");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const pick = () => {
      const line = window.innerHeight * 0.35;
      let current = "title";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  return (
    <header className="sheet-head mx-4 md:mx-5 top-[13px] sticky border border-ink px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-between gap-3 z-40">
      <div className="flex items-center gap-3 md:gap-6 min-w-0">
        <span className="font-mono text-[10px] tracking-[0.28em] text-ink hidden sm:inline">
          H. GORASIYA · {t("nav.sheet")}
        </span>
        <nav aria-label={t("nav.tabs")} className="flex items-center gap-1.5 md:gap-2 overflow-x-auto">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="tab"
              aria-current={active === tab.id ? "true" : undefined}
            >
              {t(tab.key)}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2 flex-none">
        <button
          type="button"
          onClick={onToggleProof}
          className="tab tab--proof"
          aria-pressed={proof}
          title={t("nav.proofHint")}
        >
          {t("nav.proof")}
        </button>
        <div className="flex" role="group" aria-label={t("hero.tbLabels.language")}>
          <button
            type="button"
            className={language === "en" ? "tab is-active" : "tab"}
            aria-pressed={language === "en"}
            onClick={() => language !== "en" && toggleLanguage()}
          >
            EN
          </button>
          <button
            type="button"
            className={language === "de" ? "tab is-active" : "tab"}
            aria-pressed={language === "de"}
            onClick={() => language !== "de" && toggleLanguage()}
          >
            DE
          </button>
        </div>
        <a className="tab tab--wide" href={`${base}files/CV_Harshil_Gorasiya_EN.pdf`} download>
          {t("nav.cv")}
        </a>
      </div>
    </header>
  );
}
