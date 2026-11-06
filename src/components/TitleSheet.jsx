import { useLanguage } from "../context/LanguageContext";
import Stamp from "./Stamp";

const TB_ROWS = [
  ["name", "name"],
  ["domain", "domain"],
  ["method", "method"],
  ["place", "place"],
  ["date", "date"],
  ["scale", "scale"],
  ["language", "language"],
];

export default function TitleSheet({ stampArmed }) {
  const { t } = useLanguage();
  const hero = t("hero");
  const block = t("register").items;

  return (
    <section
      id="title"
      className="relative grid gap-12 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-14 px-6 md:px-12 pt-10 md:pt-14 pb-12"
      aria-labelledby="sheet-name"
    >
      <div className="min-w-0">
        <h1
          id="sheet-name"
          className="font-display font-extrabold text-ink leading-[0.95] tracking-tight text-[clamp(2.7rem,4.8vw,4.7rem)] uppercase"
        >
          {hero.name}
        </h1>
        <p className="mt-3 inline-block border-b-2 border-stamp pb-1 font-cond font-bold uppercase tracking-[0.14em] text-ink text-[0.95rem] md:text-[1.1rem]">
          {hero.roleA}
        </p>

        <div className="dimension mt-10 mb-1 max-w-md">
          <span>{hero.dimension}</span>
        </div>

        <div className="relative max-w-2xl">
          <table className="w-full border-collapse" aria-label={hero.kpiTitle}>
            <caption className="mt-0 mb-4 font-mono text-[10px] tracking-[0.3em] uppercase text-graphite">{hero.kicker}</caption>
            <tbody>
              {hero.kpis.map((row) => (
                <tr key={row.label} className="kpi-row">
                  <th scope="row" className="kpi-value align-baseline text-left font-normal">
                    {row.value}
                  </th>
                  <td className="kpi-label align-baseline">{row.label}</td>
                  <td className="kpi-src align-baseline text-right">{row.src}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="stamp-anchor absolute -top-2 right-0 md:top-2 md:-right-10">
            <Stamp lines={hero.stamp} armed={stampArmed} />
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-graphite uppercase leading-relaxed">
          {hero.seeking}
        </p>
      </div>

      <aside className="flex flex-col min-w-0 md:pt-16" aria-label={hero.indexTitle}>
        <p className="font-mono text-[10px] tracking-[0.3em] text-graphite uppercase">
          {hero.indexTitle}
        </p>
        <ul className="mt-3 space-y-1.5">
          {block.map((item) => (
            <li key={item.pos} className="leader">
              <span className="text-stamp">{item.pos}</span>
              <span className="dots" aria-hidden="true" />
              <span className="text-ink">{item.name}</span>
            </li>
          ))}
        </ul>

        <dl className="titleblock mt-10 md:mt-auto">
          {TB_ROWS.map(([key, label]) => (
            <div key={key} className="titleblock-row">
              <dt>{t("hero").tbLabels[label]}</dt>
              <dd>{t("hero").titleblock[key]}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
