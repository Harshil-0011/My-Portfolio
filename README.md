<div align="center">

  <img src="public/favicon.svg" width="70" alt="HG logo" />

  # Harshil Gorasiya — Portfolio

  LLM & RAG Engineer · Based in Heilbronn, Germany 🇩🇪

  [![Live site](https://img.shields.io/badge/%F0%9F%8C%90%20Visit%20Portfolio-harshil--0011.github.io%2FMy--Portfolio-FF3300?style=for-the-badge&labelColor=050505)](https://harshil-0011.github.io/My-Portfolio/)

  ![React](https://img.shields.io/badge/React-19-149ECA?style=flat&logo=react&logoColor=white&labelColor=050505)
  ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white&labelColor=050505)
  ![Languages](https://img.shields.io/badge/English%20%2F%20Deutsch-bilingual-FF3300?style=flat&labelColor=050505)

</div>

---

## The sheet

This portfolio is a **Datenblatt** — a DIN engineering drawing sheet, not a landing page.

Warm technical paper (#F6F4EE) under a fixed-pitch dot grain, ink #16130E, one stamp-red accent (#B3291E), a double drawing frame with crop ticks and edge coordinates, index-tab navigation, and a DIN title block clamped to the frame. Every claim carries its measured value beside its source; sections open as cut-blocks separated by deep void gaps. Stamped *GEPRÜFT*.

- **No shadows, no glass, no blur, no gradient text** — flat paper world.
- **One accent only**, stamp red, kept rare.
- **Bilingual**: English first, German via toggle — both from the same sheet.
- **No phone number on the page**; it lives only inside the CV downloads.
- Built on React 19, Vite, Tailwind CSS 4; self-hosted Barlow, Barlow Semi Condensed, Overpass Mono.
- Deployed on GitHub Pages from the `redesign` branch, `/docs` folder.

---

## Sections

| Section | What's inside |
|---|---|
| **§ 1 Title block** | DIN title block with name, domain, method, place, date, scale |
| **§ 2 Register of executed work** | Six repositories: Ardan-CLI, Local Perplex, ANVITHA, Ekdant, Raslila, Dhara. Each opens a popout sheet with the measured result, stack, a *"From the record"* block, a recruiter-facing *"Why it matters"* block, live GitHub data (stars, forks, issues, languages, size, dates, licence) fetched live from the API, and a live LinkedIn read |
| **§ 3 Custody of assignments** | Professional roles and education, each opening into a ledger record with further details and a link to the full CV download |
| **§ 4 Instrument specification** | Capability matrix — LLM & RAG, LLM research, ML & Vision, Engineering, Evaluation — each row opening into strata breakdowns with proven-in trails back to the register |
| **§ 5 Attestations & languages** | Certifications and language levels, same visual weight as certificate rows |
| **§ 6 Exchange** | CV download (EN/DE), email, GitHub, LinkedIn, message-on-record form |

---

## Where to find me

[![Email](https://img.shields.io/badge/harshil.gorasiya.0011%40gmail.com-Contact-FF3300?style=flat-square&labelColor=050505&logo=gmail&logoColor=white)](mailto:harshil.gorasiya.0011@gmail.com)
[![LinkedIn](https://img.shields.io/badge/harshil--gorasiya-LinkedIn-0A66C2?style=flat-square&labelColor=050505&logo=linkedin&logoColor=white)](https://linkedin.com/in/harshil-gorasiya-054a58319)
[![GitHub](https://img.shields.io/badge/N0t--Harshil-GitHub-181717?style=flat-square&labelColor=050505&logo=github&logoColor=white)](https://github.com/N0t-Harshil)

---

<details>
<summary>⚙️ Developer notes</summary>

<br>

**Stack:** React 19 · Vite · Tailwind CSS 4 · self-hosted fonts (Barlow, Barlow Semi Condensed, Overpass Mono)

**Run locally**

```bash
git clone https://github.com/Harshil-0011/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev      # development server
npm run build    # production build (outputs to ./docs)
```

**Deploying**

Site deploys from branch `redesign`, folder `/docs` via GitHub Pages "Deploy from a branch". `docs/` is committed after every build; `.nojekyll` is included so Vite assets serve with correct MIME types.

</details>

---

<div align="center">
  <sub>Engineered with too many coffee breaks · ©2026 Harshil Gorasiya</sub>
</div>
