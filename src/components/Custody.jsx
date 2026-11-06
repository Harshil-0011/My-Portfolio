import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { base } from "../utils/links";

export default function Custody() {
  const { language, t } = useLanguage();
  const cust = t("custody");
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));

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
        {cust.roles.map((role, i) => (
          <article
            key={role.date + role.org}
            className="item p-5 md:p-7"
            onClick={(e) => {
              if (e.target.closest("a, button, input, textarea, select, label")) return;
              toggle(`role-${i}`);
            }}
          >
            <div className="grid gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)]">
              <p className="ledger-date text-ink md:pt-1">{role.date}</p>
              <div className="ledger-rule pl-4 md:pl-5 -ml-2 md:ml-0 min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.2rem] md:text-[1.35rem] leading-tight">
                  <button
                    type="button"
                    className="record-toggle group flex w-full flex-wrap items-baseline gap-x-2 text-left cursor-pointer"
                    aria-expanded={!!open[`role-${i}`]}
                    aria-controls={`cvr-${i}`}
                    onClick={() => toggle(`role-${i}`)}
                  >
                    <span className="toggle-title transition-colors">{role.role}</span>
                    <span
                      className={`disclose self-center ml-auto ${open[`role-${i}`] ? "is-open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
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
                <div
                  id={`cvr-${i}`}
                  className={`panel mt-3 ${open[`role-${i}`] ? "is-open" : ""}`}
                  aria-hidden={open[`role-${i}`] ? undefined : true}
                  inert={open[`role-${i}`] ? undefined : true}
                >
                  <div className="pt-2">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
                      {cust.moreLabel}
                    </p>
                    <ul className="space-y-2">
                      {role.more.map((line) => (
                        <li key={line} className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-soft">
                          <span className="text-stamp font-mono text-[10px] pt-1.5 flex-none">■</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="px-6 md:px-12 mt-10">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-3">
          {cust.educationLabel}
        </p>
        {cust.education.map((row, i) => (
          <article
            key={row.date + row.title}
            className="item p-5 md:p-7"
            onClick={(e) => {
              if (e.target.closest("a, button, input, textarea, select, label")) return;
              toggle(`edu-${i}`);
            }}
          >
            <div className="grid gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)]">
              <p className="ledger-date text-ink md:pt-1">{row.date}</p>
              <div className="ledger-rule pl-4 md:pl-5 -ml-2 md:ml-0 min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.2rem] md:text-[1.35rem] leading-tight">
                  <button
                    type="button"
                    className="record-toggle group flex w-full flex-wrap items-baseline gap-x-2 text-left cursor-pointer"
                    aria-expanded={!!open[`edu-${i}`]}
                    aria-controls={`edu-${i}`}
                    onClick={() => toggle(`edu-${i}`)}
                  >
                    <span className="toggle-title transition-colors">{row.title}</span>
                    <span
                      className={`disclose self-center ml-auto ${open[`edu-${i}`] ? "is-open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <p className="stack mt-1">{row.org}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft max-w-[70ch]">
                  {row.note}
                </p>
                <div
                  id={`edu-${i}`}
                  className={`panel mt-3 ${open[`edu-${i}`] ? "is-open" : ""}`}
                  aria-hidden={open[`edu-${i}`] ? undefined : true}
                  inert={open[`edu-${i}`] ? undefined : true}
                >
                  <div className="pt-2">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
                      {cust.moreLabel}
                    </p>
                    <ul className="space-y-2">
                      {row.more.map((line) => (
                        <li key={line} className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-soft">
                          <span className="text-stamp font-mono text-[10px] pt-1.5 flex-none">■</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      className="repo-link mt-3 inline-block text-[0.72rem]"
                      href={`${base}files/${language === "en" ? "CV_Harshil_Gorasiya_EN" : "Lebenslauf_Harshil_Gorasiya"}.pdf`}
                      download
                    >
                      {cust.cvRecord}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
