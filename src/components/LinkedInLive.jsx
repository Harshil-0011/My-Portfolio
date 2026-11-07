import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const LINKEDIN_URL = "https://www.linkedin.com/in/harshil-gorasiya-054a58319";

/**
 * Live LinkedIn read: fetches the public profile HTML once when a record
 * opens, pulls the headline (og:title) and about snippet (og:description),
 * and degrades gracefully to a link + curated summary when LinkedIn blocks
 * the request (CORS / bot protection).
 */
export default function LinkedInLive() {
  const { t } = useLanguage();
  const li = t("linkedin");
  const [state, setState] = useState({ status: "idle", data: null });

  useEffect(() => {
    let alive = true;
    setState({ status: "loading", data: null });
    fetch(LINKEDIN_URL, { headers: { "Accept-Language": "en-US,en;q=0.9" } })
      .then(async (r) => {
        if (!r.ok) throw new Error(`LinkedIn ${r.status}`);
        const html = await r.text();
        if (!alive) return;
        const title = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)?.[1] || "";
        const desc = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i)?.[1] || "";
        setState({ status: "ok", data: { title, desc } });
      })
      .catch(() => {
        if (alive) setState({ status: "fail", data: null });
      });
    return () => { alive = false; };
  }, []);

  if (state.status === "fail") {
    return (
      <div className="border-t-[1.5px] border-ink pt-4">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
          {li.label}
        </p>
        <p className="text-[0.82rem] leading-relaxed text-graphite" aria-live="polite">
          {li.fail}
        </p>
        <a
          className="repo-link mt-2 inline-block"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          {li.visit}
        </a>
      </div>
    );
  }

  return (
    <div className="border-t-[1.5px] border-ink pt-4">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
        {li.label}
      </p>
      {state.status === "loading" ? (
        <p className="leader" aria-live="polite">
          <span className="text-graphite">{li.pending}</span>
          <span className="dots" aria-hidden="true" />
        </p>
      ) : state.data ? (
        <>
          {state.data.title && (
            <p className="text-[0.88rem] leading-relaxed text-ink-soft max-w-[70ch]">
              {state.data.title}
            </p>
          )}
          {state.data.desc && (
            <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft max-w-[70ch]">
              {state.data.desc}
            </p>
          )}
          <a
            className="repo-link mt-3 inline-block"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            {li.visit}
          </a>
        </>
      ) : null}
    </div>
  );
}
