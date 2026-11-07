import { useLanguage } from "../context/LanguageContext";

export default function Attestations() {
  const { t } = useLanguage();
  const at = t("attestations");

  return (
    <section id="attestations" className="void scroll-mt-24" aria-labelledby="attestations-head">
      <div className="block-head mx-6 md:mx-12">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="no">{at.no}</span>
          <span className="block-sq" aria-hidden="true" />
          <h2 id="attestations-head">{at.title}</h2>
        </div>
        <p className="block-note hidden md:block">{at.note}</p>
      </div>

      <div className="px-6 md:px-12 mt-6 grid gap-6 md:grid-cols-2">
        <div className="item p-5 md:p-7">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-4">
            {at.certsTitle}
          </p>
          <ul className="space-y-3">
            {at.certs.map((cert) => (
              <li key={cert.year} className="flex gap-4 text-[0.88rem] leading-relaxed text-ink-soft">
                <span className="ledger-date text-stamp flex-none w-16 md:w-20">{cert.year}</span>
                <span>{cert.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="item p-5 md:p-7">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-4">
            {at.languagesTitle}
          </p>
          <ul className="space-y-3.5">
            {at.languages.map((row) => (
              <li key={row.lang} className="lang-row">
                <span className="font-cond font-bold uppercase text-ink text-[1.05rem] leading-[1.2] tracking-[0.04em]">
                  {row.lang}
                </span>
                <span className="lang-dots" aria-hidden="true" />
                <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink-soft">
                  {row.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
