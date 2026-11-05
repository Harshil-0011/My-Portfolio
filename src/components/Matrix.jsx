import { useLanguage } from "../context/LanguageContext";

export default function Matrix() {
  const { t } = useLanguage();
  const mx = t("matrix");

  return (
    <section id="matrix" className="void scroll-mt-24" aria-labelledby="matrix-head">
      <div className="block-head mx-6 md:mx-12">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="no">{mx.no}</span>
          <span className="block-sq" aria-hidden="true" />
          <h2 id="matrix-head">{mx.title}</h2>
        </div>
        <p className="block-note hidden md:block">{mx.note}</p>
      </div>

      <div className="px-6 md:px-12 mt-6">
        <div className="item p-5 md:p-7">
          <dl className="divide-y divide-[rgba(22,19,14,0.28)]">
            {mx.rows.map((row) => (
              <div key={row.cat} className="grid gap-1.5 py-4 first:pt-0 last:pb-0 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-6">
                <dt className="item-pos text-ink uppercase md:pt-0.5">{row.cat}</dt>
                <dd className="text-[0.9rem] leading-relaxed text-ink-soft max-w-[75ch]">{row.stack}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="px-6 md:px-12 mt-8 grid gap-6 md:grid-cols-2">
        <div className="item p-5 md:p-7">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-4">
            {mx.certsTitle}
          </p>
          <ul className="space-y-3">
            {mx.certs.map((cert) => (
              <li key={cert.year} className="flex gap-4 text-[0.88rem] leading-relaxed text-ink-soft">
                <span className="ledger-date text-stamp flex-none w-16 md:w-20">{cert.year}</span>
                <span>{cert.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="item p-5 md:p-7 self-start">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-4">
            {mx.languagesTitle}
          </p>
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">{mx.languages}</p>
        </div>
      </div>
    </section>
  );
}
