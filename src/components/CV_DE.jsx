import CVSheet from "./CVSheet";

const PROJECTS = [
  {
    kind: "KI-Agent",
    title: "Ardan-CLI: KI-Coding-Agent für das Terminal",
    stack: "TypeScript, Node.js, MCP, LSP",
    items: [
      "Agent mit Streaming, Plan-Modus, Sub-Agenten und Checkpoints; <strong>35 Werkzeuge</strong>.",
      "<strong>8 LLM-Anbieter</strong> mit automatischem Failover; <strong>0 Laufzeit-Abhängigkeiten</strong>, MCP- und LSP-Client selbst implementiert.",
      "<strong>8,1 ms</strong> Overhead pro Agent-Schritt (ohne Modellzeit); automatisierte Tests auf Linux, macOS und Windows.",
    ],
  },
  {
    kind: "Recherche-Engine",
    title: "Local Perplex: lokaler KI-Recherche-Assistent mit Quellenbelegen",
    stack: "Python, FastAPI, SSE, SQLite, Ollama, Docker",
    items: [
      "Durchsucht Web und eigene Dokumente (PDF, Word, Excel) und streamt Antworten mit Zitaten.",
      "<strong>26 LLM-Anbieter</strong>, 7 Suchbackends, auf Wunsch vollständig offline betreibbar.",
      "<strong>17× bessere Trefferqualität</strong> als meine erste Version (BEIR SciFact); Antwortseite in ca. <strong>200 ms</strong>; Wissensgraph mit <strong>77×</strong> schnelleren Schreibvorgängen.",
    ],
  },
  {
    kind: "RAG-System",
    title: "ANVITHA: lokale Wissensdatenbank mit belegten Antworten",
    stack: "Python, FastAPI, Ollama, SQLite, BM25",
    items: [
      "Macht PDF-, Text- und Markdown-Dateien zu einer vernetzten Wissensdatenbank; jede Antwort nennt die Seite der Originalquelle.",
      "Jeder Satz der Antwort wird gegen die Quellen geprüft; nicht belegte Aussagen werden entfernt.",
      "Fragen außerhalb des Themas werden in unter <strong>0,3 s</strong> abgelehnt, ohne Modellaufruf.",
      "Notizen als editierbares Markdown mit vollständigem Änderungsprotokoll; läuft vollständig lokal über Ollama.",
    ],
  },
];

const SKILLS = [
  ["Programmierung", "Python, TypeScript, Node.js, SQL, Bash"],
  ["Engineering", "Git, GitHub Actions (CI/CD), Docker, Linux, pytest, REST-APIs, FastAPI, Flask, Streaming (SSE), JSON-RPC"],
  ["ML & Vision", "PyTorch, TensorFlow/Keras, Hugging Face Transformers, YOLOv8, CNNs mit Residual-Blöcken, Objekterkennung, Super-Resolution (Real-ESRGAN), OpenCV, Datenannotation, Hyperparameter-Tuning, Learning-Rate-Scheduling, Overfitting-Analyse"],
  ["LLM & Agenten", "RAG-Systeme, Retrieval (BM25, Embeddings), Wissensgraphen, Quellenprüfung für Antworten, Prompt Engineering, Fine-Tuning, kleine Sprachmodelle (SmolLM2), KI-Agenten mit Tool-Nutzung (ReAct), Model Context Protocol (MCP), Anthropic API, OpenAI-kompatible APIs, Ollama"],
  ["Evaluation & Forschung", "A/B-Experimentdesign, Modellbewertung (Genauigkeit, Latenz, Durchsatz, PSNR/SSIM, Perplexität, ROUGE-L), Literaturrecherche"],
  ["Datenbanken & UX", "SQLite, PostgreSQL, MongoDB, NumPy · Nutzerforschung, Wireframing, Prototyping, Usability"],
];

function Head() {
  return (
    <header className="flex justify-between items-start">
      <div className="flex-1 min-w-0">
        <h1 className="font-display font-bold text-[24px] leading-[1.05] text-ink mb-1 tracking-tight">Harshil Gorasiya</h1>
        <p className="font-cond font-bold text-[12.5px] leading-tight text-ink mb-0.5 uppercase">
          LLM-Systeme: Retrieval, KI-Agenten und Forschung zu kleinen Modellen
        </p>
        <p className="font-mono text-[10px] leading-none text-stamp mb-2.5 uppercase tracking-[0.18em]">
          Python · PyTorch · LLM · RAG · Computer Vision
        </p>
        <div className="font-mono text-[9px] leading-[1.7] text-ink-soft">
          <p>Heilbronn, Deutschland · +49 155 6351 7346 · harshil.gorasiya.0011@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/harshil-gorasiya-054a58319 · GitHub: github.com/N0t-Harshil · Portfolio: harshil-0011.github.io/My-Portfolio</p>
        </div>
      </div>
      <div className="ml-5 mt-1 flex-none">
        <div className="stamp cv-stamp-circle">
          GEPRÜFT<br />
          <span className="text-[9px] leading-none">05.11.2026</span>
        </div>
      </div>
    </header>
  );
}

function Seeking() {
  return (
    <div className="bg-[rgba(238,242,247,0.6)] border border-[rgba(22,19,14,0.28)] px-3 py-2 font-mono text-[9px] leading-[1.7] text-ink-soft">
      <span className="font-bold text-ink">Gesucht:</span>{" "}
      Werkstudentenstelle (20 Std./Woche im Semester) · Vollzeit in den Semesterferien · Berufseinstieg ab 2027
      <br />
      <span className="font-bold text-ink">Verfügbar:</span> ab sofort · <span className="font-bold text-ink">Aufenthaltstitel:</span> gültige Aufenthaltserlaubnis mit Arbeitserlaubnis
    </div>
  );
}

function Kpis() {
  const kpis = [
    ["+8 Pkt.", "Genauigkeit: 71 % auf 79 %"],
    ["–20 %", "Trainingszeit (V100-GPUs)"],
    ["2,4×", "Durchsatz gegenüber YOLOv5s"],
    ["28–32 FPS", "Echtzeit-Objekterkennung auf CPU"],
    ["8 Anbieter", "LLMs mit Failover (Ardan-CLI)"],
  ];
  return (
    <div className="grid grid-cols-5 border-t-[2px] border-b-[2px] border-ink">
      {kpis.map(([v, l], i) => (
        <div key={l} className={`flex flex-col items-center py-2 ${i > 0 ? "border-l-[1px] border-[rgba(22,19,14,0.28)]" : ""}`}>
          <span className="cv-em font-mono text-[17px] font-bold text-ink leading-none tabular-nums">{v}</span>
          <span className="font-mono text-[7px] text-ink-soft uppercase tracking-[0.12em] mt-1 text-center leading-tight px-1">{l}</span>
        </div>
      ))}
    </div>
  );
}

function SectionHead({ children }) {
  return (
    <div className="bg-ink text-paper px-2.5 py-1.5 font-cond font-bold text-[11px] uppercase tracking-[0.02em] leading-none">
      {children}
    </div>
  );
}

function Entry({ date, title, org, meta, children }) {
  return (
    <div className="grid grid-cols-[46mm_1fr] gap-2">
      <div className="font-cond font-bold text-[9px] text-ink leading-[1.5] uppercase tabular-nums pt-px">{date}</div>
      <div className="border-l-[2px] border-ink pl-2.5 min-w-0">
        <div className="font-cond font-bold text-[10.5px] text-ink leading-tight">{title}</div>
        {org && <div className="font-mono text-[8.5px] text-ink-soft leading-tight">{org}</div>}
        {meta && <div className="font-mono text-[8.5px] text-ink-soft leading-[1.6] mt-0.5">{meta}</div>}
        {children}
      </div>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-1 text-[9px] leading-[1.6] text-ink-soft list-disc list-outside ml-3 space-y-0.5">
      {items.map((item, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
}

export default function CV_DE() {
  return (
    <div className="cv-doc">
      {/* ——— Blatt 1 ——— */}
      <CVSheet pageNo={1} totalPages={2} footerLabel="Lebenslauf · Blatt">
        <Head />
        <div className="mt-3"><Seeking /></div>
        <div className="mt-3"><Kpis /></div>

        <section className="mt-3">
          <SectionHead>Kurzprofil</SectionHead>
          <p className="mt-1.5 text-[9.5px] leading-[1.6] text-ink-soft max-w-[78ch]">
            Masterstudent an der Hochschule Heilbronn. Ich baue LLM-Anwendungen: lokale RAG-Systeme mit Quellenangaben, KI-Agenten mit Tool-Nutzung und Computer-Vision-Modelle für den Einsatz auf CPU. Dazu zwei ML-Praktika, 10 Monate Webentwicklung mit KI-Funktionen und ein Forschungsprojekt zu Reasoning-Modulen für Sprachmodelle.
          </p>
        </section>

        <section className="mt-3">
          <SectionHead>Studium</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="Seit 03/2025"
              title="M.Sc. Software Engineering and Management"
              org="Hochschule Heilbronn"
              meta="Englischsprachiger Studiengang · Notendurchschnitt bisher: 1,9 · Voraussichtlicher Abschluss: 2027"
            />
            <Entry
              date="2020 – 2024"
              title="B.Tech. Information Technology"
              org="A. D. Patel Institute of Technology, Gujarat"
              meta="Indien · Note: 1,9 (umgerechnet auf deutsche Skala)"
            />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Projekte</SectionHead>
          <div className="mt-1.5 space-y-2.5">
            {PROJECTS.map((p) => (
              <div key={p.title}>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[7.5px] text-stamp uppercase tracking-[0.14em]">{p.kind}</span>
                  <span className="font-mono text-[7.5px] text-graphite uppercase tracking-[0.14em]">§ projekt</span>
                </div>
                <div className="font-cond font-bold text-[10.5px] text-ink leading-tight">{p.title}</div>
                <div className="font-mono text-[8px] text-graphite uppercase tracking-[0.12em] mt-0.5">{p.stack}</div>
                <Bullets items={p.items} />
              </div>
            ))}
          </div>
        </section>
      </CVSheet>

      {/* ——— Blatt 2 ——— */}
      <CVSheet pageNo={2} totalPages={2} footerLabel="Lebenslauf · Blatt">
        <section>
          <SectionHead>Masterarbeit · Laufend</SectionHead>
          <div className="mt-1.5">
            <Entry
              date="Forschung"
              title="Ekdant: Reasoning-Modul für Sprachmodelle"
              org="Hochschule Heilbronn, betreut durch einen Professor"
              meta="PyTorch, Hugging Face"
            >
              <Bullets
                items={[
                  "Paralleles Debattenmodul (4 Pfade, Konsens) als zusätzliche Stufe auf SmolLM2-135M; <strong>+19,6 Mio. Parameter</strong>.",
                  "Kontrollierter Vergleich mit gleich aufgebauter Baseline auf medizinischer Frage-Antwort-Aufgabe: bestes Modell in allen Metriken vorn, mit knappem Abstand.",
                  "Literaturbasis mit 66 Fachartikeln.",
                ]}
              />
            </Entry>
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Weitere Projekte</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="KI-Videohochskalierung"
              title="Windows-Desktop-Anwendung"
              meta="Python, PyTorch · Video-Super-Resolution mit Modellauswahl; Real-ESRGAN-Varianten mit PSNR und SSIM verglichen."
            />
            <Entry
              date="MNIST-MLOps"
              title="MLOps-Workflow-Demo"
              meta="Python, PyTorch, Flask, SQLite · Inkrementelles Training, Verwaltung von Modellversionen und Web-Dashboard."
            />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Berufserfahrung</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="05/2024 – 02/2025"
              title="AI & Web Solutions Developer"
              org="Aani Brothers Infotech, Surat, Indien · 10 Monate"
            >
              <Bullets
                items={[
                  "Entwicklung webbasierter Anwendungen: Geschäftsanforderungen in Benutzeroberflächen und Abläufe übersetzt, auch mit KI-Funktionen.",
                  "Nutzerforschung, Wireframing und Prototyping; Designs für bessere Usability optimiert.",
                ]}
              />
            </Entry>
            <Entry
              date="12/2023 – 04/2024"
              title="Deep Learning Intern"
              org="PD Avenue, Surat, Indien · 5 Monate"
            >
              <Bullets
                items={[
                  "CNN mit Residual-Blöcken (TensorFlow/Keras) für Alters- und Geschlechtsklassifikation auf <strong>22.000+ Bildern</strong>; Genauigkeit von <strong>71 % auf 79 %</strong> gesteigert.",
                  "Trainingszeit auf V100-GPUs um <strong>20 %</strong> gesenkt (Learning-Rate-Scheduling, größere Batchgröße), ohne Genauigkeitsverlust.",
                  "Data-Leakage erkannt und behoben.",
                ]}
              />
            </Entry>
            <Entry
              date="05/2023 – 06/2023"
              title="Machine Learning Intern"
              org="Dotcom IoT LLP, Surat, Indien · 2 Monate"
            >
              <Bullets
                items={[
                  "YOLOv8n-Objekterkennung auf CPU-Edge-Gerät (Intel Core i7): 720p-Video mit <strong>28–32 FPS</strong>; <strong>2,4× höherer Durchsatz</strong> als YOLOv5s.",
                  "<strong>3.000+ Bilder</strong> für fünf Fahrzeugklassen annotiert.",
                  "Falsch-Positive bei schwachem Licht durch IoU- und NMS-Anpassung um <strong>18 %</strong> reduziert.",
                ]}
              />
            </Entry>
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Kenntnisse</SectionHead>
          <div className="mt-1.5 space-y-1">
            {SKILLS.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[46mm_1fr] gap-2">
                <div className="font-cond font-bold text-[8.5px] text-ink leading-[1.5] uppercase tabular-nums pt-px">{k}</div>
                <div className="font-mono text-[8.5px] text-ink-soft leading-[1.6]">{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Zertifikate</SectionHead>
          <div className="mt-1.5 space-y-1">
            <Entry date="2026" meta="Claude with the Anthropic API · Model Context Protocol: Advanced Topics (beide Anthropic)" />
            <Entry date="2025" meta="Machine Learning with Python (IBM) · Fundamentals of Data Science (Databricks)" />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Sprachen</SectionHead>
          <div className="mt-1.5">
            <Entry
              date=""
              meta={
                <span>
                  <strong>Englisch:</strong> fließend · <strong>Deutsch:</strong> A2–B1 · <strong>Hindi:</strong> fließend · <strong>Gujarati:</strong> Muttersprache
                </span>
              }
            />
          </div>
        </section>
      </CVSheet>
    </div>
  );
}
