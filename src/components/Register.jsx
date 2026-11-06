import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { REPOS } from "../utils/links";

export default function Register() {
  const { t } = useLanguage();
  const reg = t("register");
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <section id="register" className="void scroll-mt-24" aria-labelledby="register-head">
      <div className="block-head mx-6 md:mx-12">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="no">{reg.no}</span>
          <span className="block-sq" aria-hidden="true" />
          <h2 id="register-head">{reg.title}</h2>
        </div>
        <p className="block-note hidden md:block">{reg.note}</p>
      </div>

      <div className="px-6 md:px-12 mt-6">
        {reg.items.map((item, i) => (
          <article
            key={item.pos}
            className="item p-5 md:p-7"
            onClick={(e) => {
              if (e.target.closest("a, button, input, textarea, select, label")) return;
              toggle(item.pos);
            }}
          >
            <div className="grid gap-4 md:grid-cols-[3.8rem_minmax(0,1fr)]">
              <span className="item-pos text-stamp md:pt-1">{item.pos}</span>
              <div className="min-w-0">
                <h3 className="font-cond font-bold uppercase text-ink text-[1.35rem] md:text-[1.6rem] leading-tight">
                  <button
                    type="button"
                    className="record-toggle group flex w-full flex-wrap items-baseline gap-x-2 gap-y-1 text-left cursor-pointer"
                    aria-expanded={!!open[item.pos]}
                    aria-controls={`rec-${item.pos}`}
                    onClick={() => toggle(item.pos)}
                  >
                    <span className="toggle-title transition-colors">{item.name}</span>
                    <span className="font-display font-medium normal-case text-ink-soft text-[0.95rem] md:text-[1.05rem] tracking-normal">
                      — {item.full}
                    </span>
                    <span
                      className={`disclose ml-auto self-center ${open[item.pos] ? "is-open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <p className="stack-kind mt-2.5">{item.kind}</p>
                <p className="stack mt-1">{item.stack}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft max-w-[65ch]">
                  {item.blurb}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="metric">{item.metric}</span>
                  <a
                    className="repo-link"
                    href={REPOS.register[i]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {reg.openRepo} {REPOS.register[i].replace("https://github.com/", "")}
                  </a>
                </div>
                <div
                  id={`rec-${item.pos}`}
                  className={`panel mt-3 ${open[item.pos] ? "is-open" : ""}`}
                  aria-hidden={open[item.pos] ? undefined : true}
                  inert={open[item.pos] ? undefined : true}
                >
                  <div className="pt-2">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
                      {reg.moreLabel}
                    </p>
                    <ul className="space-y-2 border-l-[1.5px] border-ink pl-4">
                      {item.more.map((line) => (
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
          {reg.annexLabel}
        </p>
        {reg.annex.map((item, i) => (
          <article key={item.pos} className="item px-5 py-4 md:px-7">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="item-pos text-stamp">{item.pos}</span>
              <h3 className="font-cond font-bold uppercase text-ink text-[1.05rem]">{item.name}</h3>
              <span className="stack">{item.stack}</span>
              <p className="text-[0.85rem] text-ink-soft leading-relaxed basis-full md:basis-0 md:flex-1 min-w-0">
                {item.note}
              </p>
              <a className="repo-link text-[0.68rem]" href={REPOS.annex[i]} target="_blank" rel="noreferrer">
                {reg.openRepo}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
