import { useLanguage } from "../context/LanguageContext";

export default function Custody() {
  const { t } = useLanguage();
  const cust = t("custody");

  return (
    <section id="custody" className="void scroll-mt-24" aria-labelledby="custody-head">
      <div className="block-head mx-6 md:mx-12">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="no">{cust.no}</span>
          <span className="block-sq" aria-hidden="true" />
          <h2 id="custody-head">{cust.title}</h2>
        </div>
        <p className="block-note hidden md:block">{cust.note}</p>
      </div>

      <div className="px-6 md:px-12 mt-6">
        {cust.roles.map((role) => (
          <article key={role.date + role.org} className="item p-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)]">
              <p className="ledger-date text-ink md:pt-1">{role.date}</p>
              <div className="ledger-rule pl-4 md:pl-5 -ml-2 md:ml-0 min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.2rem] md:text-[1.35rem] leading-tight">
                  {role.role}
                </h3>
                <p className="stack mt-1">
                  {role.org} · {role.place}
                </p>
                <ul className="mt-3 space-y-2 list-none">
                  {role.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-soft">
                      <span className="text-stamp font-mono text-[10px] pt-1.5 flex-none">■</span>
                      <span className="max-w-[70ch]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="px-6 md:px-12 mt-10">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-3">
          {cust.educationLabel}
        </p>
        {cust.education.map((row) => (
          <article key={row.date + row.title} className="item px-5 py-4 md:px-7">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="ledger-date text-ink">{row.date}</span>
              <h3 className="font-cond font-bold uppercase text-ink text-[1.05rem]">{row.title}</h3>
              <span className="stack">{row.org}</span>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-graphite basis-full">
                {row.note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
