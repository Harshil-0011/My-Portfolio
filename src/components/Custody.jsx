import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { base } from "../utils/links";
import RecordSheet from "./RecordSheet";

export default function Custody() {
  const { language, t } = useLanguage();
  const cust = t("custody");
  const [open, setOpen] = useState(null);

  const close = () => setOpen(null);

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
              setOpen(`role-${i}`);
            }}
          >
            <div className="grid gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)]">
              <p className="ledger-date text-ink md:pt-1">{role.date}</p>
              <div className="ledger-rule pl-4 md:pl-5 -ml-2 md:ml-0 min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.2rem] md:text-[1.35rem] leading-tight">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    className="record-toggle group flex w-full flex-wrap items-baseline gap-x-2 text-left cursor-pointer"
                    onClick={() => setOpen(`role-${i}`)}
                  >
                    <span className="toggle-title transition-colors">{role.role}</span>
                    <span className="disclose self-center ml-auto" aria-hidden="true" />
                  </button>
                </h3>
                <p className="stack mt-1">
                  {role.org} · {role.place}
                </p>
                <ul className="mt-3 space-y-2 list-none">
                  {role.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-soft">
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
        {cust.education.map((row, i) => (
          <article
            key={row.date + row.title}
            className="item p-5 md:p-7"
            onClick={(e) => {
              if (e.target.closest("a, button, input, textarea, select, label")) return;
              setOpen(`edu-${i}`);
            }}
          >
            <div className="grid gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)]">
              <p className="ledger-date text-ink md:pt-1">{row.date}</p>
              <div className="ledger-rule pl-4 md:pl-5 -ml-2 md:ml-0 min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.2rem] md:text-[1.35rem] leading-tight">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    className="record-toggle group flex w-full flex-wrap items-baseline gap-x-2 text-left cursor-pointer"
                    onClick={() => setOpen(`edu-${i}`)}
                  >
                    <span className="toggle-title transition-colors">{row.title}</span>
                    <span className="disclose self-center ml-auto" aria-hidden="true" />
                  </button>
                </h3>
                <p className="stack mt-1">{row.org}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft max-w-[70ch]">
                  {row.note}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open !== null && (() => {
        const isRole = open.startsWith("role-");
        const idx = Number(open.slice(isRole ? 5 : 4));
        const record = isRole ? cust.roles[idx] : cust.education[idx];
        return (
          <RecordSheet
            tag={isRole
              ? `${record.date} · ${record.org} · ${record.place}`
              : `${record.date} · ${record.org}`}
            title={isRole ? record.role : record.title}
            closeLabel={t("nav.close")}
            onClose={close}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
              {cust.moreLabel}
            </p>
            <ul className="space-y-2 border-l-[1.5px] border-ink pl-4">
              {record.more.map((line) => (
                <li key={line} className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-soft">
                  <span className="text-stamp font-mono text-[10px] pt-1.5 flex-none">■</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {record.recruiter && (
              <div className="mt-5">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
                  {t("register.recruiterLabel")}
                </p>
                <ul className="space-y-2 border-l-[1.5px] border-ink pl-4">
                  {record.recruiter.map((line) => (
                    <li key={line} className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-soft">
                      <span className="text-stamp font-mono text-[10px] pt-1.5 flex-none">■</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!isRole && (
              <a
                className="repo-link mt-5 inline-block"
                href={`${base}files/${language === "en" ? "CV_Harshil_Gorasiya_EN" : "Lebenslauf_Harshil_Gorasiya"}.pdf`}
                download
              >
                {cust.cvRecord}
              </a>
            )}
          </RecordSheet>
        );
      })()}
    </section>
  );
}
