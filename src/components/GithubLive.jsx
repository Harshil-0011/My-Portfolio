import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const fmtDate = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}.${d.getFullYear()}`;
};

const fmtSize = (kb) => (typeof kb === "number" && kb > 0
  ? kb < 1024 ? `${kb} KB` : `${(kb / 1024).toFixed(1)} MB`
  : "—");

/**
 * Live rows queried from the GitHub API the moment a register record is
 * opened (unauthenticated, fires once per open, never blocks the printed
 * record: pending and fail degrade to the static facts).
 */
export default function GithubLive({ url }) {
  const { t } = useLanguage();
  const gh = t("register.gh");
  const [state, setState] = useState({ status: "loading", rows: [] });

  useEffect(() => {
    let alive = true;
    setState({ status: "loading", rows: [] });
    const ownerRepo = url.replace(/^https?:\/\/github\.com\//, "").replace(/\/+$/, "");

    (async () => {
      try {
        const [repoRes, langRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${ownerRepo}`),
          fetch(`https://api.github.com/repos/${ownerRepo}/languages`).catch(() => null),
        ]);
        if (!alive) return;
        if (!repoRes.ok) throw new Error(`GitHub ${repoRes.status}`);
        const repo = await repoRes.json();
        const langs = langRes && langRes.ok ? await langRes.json() : {};
        if (!alive) return;

        const totals = Object.values(langs).reduce((a, b) => a + b, 0);
        const langText = totals
          ? Object.entries(langs)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([name, bytes]) => `${name} ${((bytes / totals) * 100).toFixed(1)} %`)
            .join(" · ")
          : "—";

        setState({
          status: "ok",
          rows: [
            [gh.created, fmtDate(repo.created_at)],
            [gh.updated, fmtDate(repo.updated_at)],
            [gh.stars, String(repo.stargazers_count ?? "—")],
            [gh.forks, String(repo.forks_count ?? "—")],
            [gh.issues, String(repo.open_issues_count ?? "—")],
            [gh.branch, repo.default_branch || "—"],
            [gh.license, (repo.license && repo.license.spdx_id) || "—"],
            [gh.size, fmtSize(repo.size)],
            [gh.languages, langText],
            [gh.topics, (Array.isArray(repo.topics) && repo.topics.length) ? repo.topics.join(" · ") : "—"],
          ],
        });
      } catch {
        if (alive) setState({ status: "fail", rows: [] });
      }
    })();

    return () => { alive = false; };
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  if (state.status === "fail") {
    return (
      <div className="border-t-[1.5px] border-ink pt-4">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
          {gh.label}
        </p>
        <p className="text-[0.82rem] leading-relaxed text-graphite" aria-live="polite">
          {gh.fail}
        </p>
      </div>
    );
  }

  return (
    <div className="border-t-[1.5px] border-ink pt-4">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-graphite mb-2.5">
        {gh.label}
      </p>
      {state.status === "loading" ? (
        <p className="leader" aria-live="polite">
          <span className="text-graphite">{gh.pending}</span>
          <span className="dots" aria-hidden="true" />
        </p>
      ) : (
        <ul className="space-y-1.5">
          {state.rows.map(([k, v]) => (
            <li key={k} className="leader">
              <span className="uppercase text-stamp flex-none">{k}</span>
              <span className="dots" aria-hidden="true" />
              <span className="text-ink-soft min-w-0 break-all">{v}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
