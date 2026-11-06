import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LINKS, base } from "../utils/links";

const STATUS = { IDLE: 0, SENDING: 1, SUCCESS: 2, ERROR: 3 };

export default function Exchange() {
  const { language, t } = useLanguage();
  const ex = t("exchange");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(LINKS.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f768b753-9133-4f99-906d-e435f9923838",
          ...form,
          subject: language === "de" ? "Neue Nachricht von Portfolio" : "New message from portfolio",
          from_name: "Datenblatt — Harshil Gorasiya",
          botcheck: "",
        }),
      });
      if (response.ok) {
        setStatus(STATUS.SUCCESS);
        setForm({ name: "", email: "", message: "" });
        window.setTimeout(() => setStatus(STATUS.IDLE), 6000);
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <section id="exchange" className="void scroll-mt-24" aria-labelledby="exchange-head">
      <div className="block-head mx-6 md:mx-12">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="no">{ex.no}</span>
          <span className="block-sq" aria-hidden="true" />
          <h2 id="exchange-head">{ex.title}</h2>
        </div>
        <p className="block-note hidden md:block">{ex.note}</p>
      </div>

      <div className="px-6 md:px-12 mt-6 grid gap-8 md:grid-cols-2 items-start">
        <div className="min-w-0">
          <p className="text-[1rem] leading-relaxed text-ink-soft max-w-[52ch]">{ex.lead}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a
              className="chip chip--red"
              href={`${base}files/${language === "en" ? "CV_Harshil_Gorasiya_EN" : "Lebenslauf_Harshil_Gorasiya"}.pdf`}
              download
            >
              {language === "en" ? ex.cvLabel : ex.germanCvLabel}
            </a>
            <a
              className="chip chip--red"
              href={`${base}files/${language === "en" ? "Lebenslauf_Harshil_Gorasiya" : "CV_Harshil_Gorasiya_EN"}.pdf`}
              download
            >
              {language === "en" ? ex.germanCvLabel : ex.cvLabel}
            </a>
          </div>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="field-label">{ex.emailLabel}</dt>
              <dd className="flex flex-wrap items-center gap-3">
                <a className="font-mono text-[0.9rem] underline decoration-[1.5px] underline-offset-4 hover:text-stamp" href="mailto:harshil.gorasiya.0011@gmail.com">
                  {LINKS.email}
                </a>
                <button type="button" className="chip" onClick={copyEmail}>
                  {copied ? ex.copied : ex.copy}
                </button>
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <dt className="field-label">{ex.githubLabel}</dt>
                <dd className="mt-1">
                  <a className="chip w-full sm:w-auto justify-between" href={LINKS.github} target="_blank" rel="noreferrer">
                    github.com/N0t-Harshil
                  </a>
                </dd>
              </div>
              <div>
                <dt className="field-label">{ex.linkedinLabel}</dt>
                <dd className="mt-1">
                  <a className="chip w-full sm:w-auto justify-between" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                    /harshil-gorasiya-054a58319
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <p className="mt-8 font-mono text-[10px] tracking-[0.16em] uppercase text-graphite max-w-xl leading-relaxed">
            {ex.availability}
          </p>
        </div>

        <form onSubmit={submit} className="item p-5 md:p-7" noValidate={false}>
          <p className="font-mono text-[10px] tracking-[0.26em] uppercase text-stamp mb-5">
            {ex.formTitle}
          </p>
          <div className="space-y-5">
            <div>
              <label className="field-label" htmlFor="f-name">
                {ex.fields.name}
              </label>
              <input
                id="f-name"
                type="text"
                required
                autoComplete="name"
                className="field"
                placeholder={ex.fields.namePh}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="f-email">
                {ex.fields.email}
              </label>
              <input
                id="f-email"
                type="email"
                required
                autoComplete="email"
                className="field"
                placeholder={ex.fields.emailPh}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="f-message">
                {ex.fields.message}
              </label>
              <textarea
                id="f-message"
                rows="5"
                required
                className="field resize-none"
                placeholder={ex.fields.messagePh}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="submit" disabled={status === STATUS.SENDING}>
              {status === STATUS.SENDING ? ex.fields.sending : ex.fields.send}
            </button>
            <p className="font-mono text-[10px] tracking-[0.12em] text-graphite leading-relaxed">
              {ex.formNote}
            </p>
            <p aria-live="polite" className="font-mono text-[11px] tracking-[0.1em] leading-relaxed" role="status">
              {status === STATUS.SUCCESS && <span className="text-stamp">{ex.state.success}</span>}
              {status === STATUS.ERROR && <span className="text-stamp font-semibold">{ex.state.error}</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
