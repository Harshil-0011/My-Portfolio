import { useEffect, useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import SheetChrome from "./components/SheetChrome";
import SheetHeader from "./components/SheetHeader";
import TitleSheet from "./components/TitleSheet";
import Register from "./components/Register";
import Custody from "./components/Custody";
import Matrix from "./components/Matrix";
import Attestations from "./components/Attestations";
import Exchange from "./components/Exchange";
import CV_EN from "./components/CV_EN";
import CV_DE from "./components/CV_DE";
import { LINKS } from "./utils/links";

function AppBody() {
  const { language, t } = useLanguage();
  const [proof, setProof] = useState(false);
  const [stampArmed, setStampArmed] = useState(false);
  const [cv, setCv] = useState(null); // null | 'en' | 'de'

  useEffect(() => {
    document.documentElement.classList.toggle("proof", proof);
  }, [proof]);

  useEffect(() => {
    document.title = cv
      ? `CV ${language === "en" ? "EN" : "DE"} — Harshil Gorasiya`
      : t("meta").documentTitle;
  }, [cv, language, t]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "cv-en") setCv("en");
    else if (hash === "cv-de") setCv("de");
    else setCv(null);

    const onHashChange = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "cv-en") setCv("en");
      else if (h === "cv-de") setCv("de");
      else setCv(null);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [language]);

  useEffect(() => {
    const anchor = document.querySelector(".stamp-anchor");
    if (!anchor || cv) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStampArmed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, [cv]);

  if (cv) {
    const CvComponent = cv === "en" ? CV_EN : CV_DE;
    return (
      <div className="relative min-h-screen overflow-x-clip">
        <a href="#" className="cv-back" onClick={() => setCv(null)}>
          ← {language === "en" ? "Back to portfolio" : "Zurück zum Portfolio"}
        </a>
        <button
          type="button"
          className="cv-back"
          style={{ top: "auto", bottom: "1rem", right: "1rem" }}
          onClick={() => window.print()}
        >
          {language === "en" ? "Print / Save as PDF" : "Drucken / Als PDF speichern"}
        </button>
        <main className="relative z-10">
          <CvComponent />
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SheetChrome />
      <a
        href="#register"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:font-mono focus:text-[11px]"
      >
        {t("nav.skip")}
      </a>
      <SheetHeader proof={proof} onToggleProof={() => setProof((p) => !p)} />
      <main className="relative z-10">
        <TitleSheet stampArmed={stampArmed} />
        <Register />
        <Custody />
        <Matrix />
        <Attestations />
        <Exchange />
      </main>
      <footer className="relative z-10 mx-6 md:mx-12 mt-16 md:mt-24 border-t-[1.5px] border-ink py-7 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink">{t("footer").postal}</p>
        <a
          className="font-mono text-[10px] tracking-[0.16em] uppercase text-graphite hover:text-stamp underline decoration-dotted underline-offset-4"
          href={LINKS.sources}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer").sources}
        </a>
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-graphite max-w-xs">
          {t("footer").noPhone}
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppBody />
    </LanguageProvider>
  );
}
