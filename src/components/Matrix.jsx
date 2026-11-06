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
    </section>
  );
}
