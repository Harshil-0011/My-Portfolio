import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Matrix() {
  const { t } = useLanguage();
  const mx = t("matrix");
  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen((o) => ({ ...o, [i]: !o[i] }));

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
            {mx.rows.map((row, i) => (
              <div
                key={row.cat}
                className="grid cursor-pointer gap-1.5 py-4 first:pt-0 last:pb-0 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-6"
                onClick={(e) => {
                  if (e.target.closest("a, button, input, textarea, select, label")) return;
                  toggle(i);
                }}
              >
                <dt className="item-pos text-ink uppercase">
                  <button
                    type="button"
                    className="record-toggle group flex w-full items-center justify-between gap-3 text-left cursor-pointer"
                    aria-expanded={!!open[i]}
                    aria-controls={`mxr-${i}`}
                    onClick={() => toggle(i)}
                  >
                    {row.cat}
                    <span className={`disclose disclose--sm ${open[i] ? "is-open" : ""}`} aria-hidden="true" />
                  </button>
                </dt>
                <dd className="text-[0.9rem] leading-relaxed text-ink-soft max-w-[75ch]">{row.stack}</dd>
                <div
                  id={`mxr-${i}`}
                  className={`panel col-span-full ${open[i] ? "is-open" : ""}`}
                  aria-hidden={open[i] ? undefined : true}
                  inert={open[i] ? undefined : true}
                >
                  <div className="pt-3">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2 md:pl-[12rem]">
                      {mx.moreLabel}
                    </p>
                    <ul className="space-y-1.5 md:pl-[12rem]">
                      {row.pairs.map((p) => (
                        <li key={p.k} className="leader">
                          <span className="uppercase text-stamp">{p.k}</span>
                          <span className="dots" aria-hidden="true" />
                          <span className="text-ink-soft">{p.v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
