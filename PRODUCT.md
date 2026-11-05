# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers (German companies in the Heilbronn region and international LLM/RAG teams) deciding whether to interview Harshil for a working-student role (20 hrs/week during semester), full-time work during semester breaks, or a post-graduation LLM/RAG role in 2027. Secondary: researchers and developers who arrive from GitHub and want to see real engineering depth.

## Product Purpose

A single-page portfolio that converts technical evidence into interview invitations. Success = a visitor can verify Harshil's claims with numbers, see six production-grade repos within one scroll, and be one click from his CV (EN/DE) or contact form.

## Positioning

Measured-evidence LLM engineering: unlike typical AI-engineer portfolios that advertise buzzwords, every claim here carries a number from a real benchmark or test suite (0.654 nDCG@10 on BEIR SciFact, 8.1 ms agent-step overhead, 28–32 FPS YOLOv8n on CPU, 71→79 % validation accuracy, 250/292 pytest tests), backed by public repos — including three from-scratch model architecture experiments (Raslila, Dhara, Ekdant) that sit above typical working-student scope.

## Operating Context

Deployed statically on GitHub Pages (built by GitHub Actions into `docs/`). Viewed primarily on desktop by recruiters, sometimes on mobile. Bilingual audience: English-first with a German toggle. Joined by CV PDFs (EN + DE, dated 2026-11-05) that the site must serve for download.

## Capabilities and Constraints

- React 19 + Vite 6 + Tailwind 4 SPA (JavaScript, not TypeScript), deployed by `.github/workflows/deploy.yml`; build output goes to `docs/` (do not store design artifacts in `docs/` — it is wiped every build).
- Bilingual via `src/i18n/translations.js` and a language toggle (localStorage). English is the default; German must reach feature parity.
- Contact form via web3forms (access key present in ContactPortal). Lazy-loaded hero chunk (`HeroCore`) keeps initial JS small — preserve a code-split hero.
- Phone number deliberately stays OFF the public site (user decision, recorded 2026-11-05); it lives in the CV download instead.
- All résumé metrics must come from the CV; no invented benchmarks, employers, or dates.

## Brand Commitments

- Name: Harshil Gorasiya. GitHub presence: `N0t-Harshil` (confirmed his account on the CV). Portfolio URL: `harshil-0011.github.io/My-Portfolio`.
- Voice: precise, evidence-led, technically literate, no hype. Optimization/controls metaphors are welcome; fabricated enthusiasm is not.

## Evidence on Hand

- `files/CV_Harshil_Gorasiya_EN.pdf|tex` and `files/Lebenslauf_Harshil_Gorasiya.pdf|tex` — authoritative content: profile, KPI row, education (M.Sc. Heilbronn since 03/2025 GPA 1.9; B.Tech ADIT 2020–2024), 3 jobs (Aani Brothers Infotech 05/2024–02/2025; PD Avenue 12/2023–04/2024; Dotcom IoT 05/2023–06/2023), full skills matrix, certifications (Anthropic 2026, IBM/Databricks 2025, AWS), languages.
- GitHub `N0t-Harshil`, 12 public repos (verified 2026-11-05): Ardan-CLI, Local-Perplex, Anvitha-RAG, Ekdant-LLM, Raslila-LLM, Dhara-Model, Vehical-Detection-and-counting-app, Age-and-Gender-Prediction, Ai-Chatbot-using-prompt-engineering, Online-voting-system-using-self-made-blockchain-in-python, MNIST-MLOps--Incremental-Model-Training-and-Web-Monitoring-System, AI-Powered-Video-Upscaling-Windows-Application.
- No photographs of Harshil on hand beyond CV render preferences; do not fabricate portraits or stock photos of people. Repo screenshots not available; use typographic/data treatments instead.

## Product Principles

1. Evidence over adjectives — a number beats a claim; every visible metric traces to the CV.
2. Research depth is the differentiator — model-architecture experiments (Raslila, Dhara, Ekdant) must be visible, not hidden under internships.
3. One action away — CV download and contact are never more than one interaction away from any scroll position.
4. Bilingual parity — EN and DE carry the same content weight.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard navigation, visible focus states, and honest `prefers-reduced-motion` behavior are required. Language switch must not reflow-induce layout jumps.
