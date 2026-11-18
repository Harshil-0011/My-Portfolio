import CVSheet from "./CVSheet";

const PROJECTS = [
  {
    kind: "AI agent",
    title: "Ardan-CLI: Autonomous Terminal Coding Agent",
    stack: "TypeScript, Node.js, MCP, LSP",
    items: [
      "Agent with streaming, plan mode, sub-agents, and checkpoints; <strong>35 tools</strong>.",
      "<strong>8 LLM providers</strong> with automatic failover; <strong>0 runtime dependencies</strong>, MCP and LSP clients built by hand.",
      "<strong>8.1 ms</strong> overhead per agent step (model time excluded); automated tests on Linux, macOS, and Windows.",
    ],
  },
  {
    kind: "Research engine",
    title: "Local Perplex: Local AI Research Assistant with Citations",
    stack: "Python, FastAPI, SSE, SQLite, Ollama, Docker",
    items: [
      "Searches the web and your own documents (PDF, Word, Excel) and streams answers with citations.",
      "<strong>26 LLM providers</strong>, 7 search backends, fully offline if desired.",
      "<strong>17× better retrieval quality</strong> than my first version (BEIR SciFact); answer page in about <strong>200 ms</strong>; knowledge graph with <strong>77×</strong> faster writes.",
    ],
  },
  {
    kind: "RAG system",
    title: "ANVITHA: Local Knowledge Vault with Grounded, Cited Answers",
    stack: "Python, FastAPI, Ollama, SQLite, BM25",
    items: [
      "Turns PDF, text, and Markdown files into a linked knowledge vault; every answer cites the page of the original source.",
      "Each answer sentence is checked against the sources; unsupported claims are removed.",
      "Questions outside the topic are refused in under <strong>0.3 s</strong>, without a model call.",
      "Notes stored as editable Markdown with a full change log; runs fully local via Ollama.",
    ],
  },
];

const SKILLS = [
  ["Programming", "Python, TypeScript, Node.js, SQL, Bash"],
  ["Engineering", "Git, GitHub Actions (CI/CD), Docker, Linux, pytest, REST APIs, FastAPI, Flask, streaming (SSE), JSON-RPC"],
  ["ML & Vision", "PyTorch, TensorFlow/Keras, Hugging Face Transformers, YOLOv8, CNNs with residual blocks, object detection, super-resolution (Real-ESRGAN), OpenCV, data annotation, hyperparameter tuning, learning-rate scheduling, overfitting analysis"],
  ["LLM & Agents", "RAG systems, retrieval (BM25, embeddings), knowledge graphs, source-grounded answering, prompt engineering, fine-tuning, small language models (SmolLM2), AI agents with tool use (ReAct), Model Context Protocol (MCP), Anthropic API, OpenAI-compatible APIs, Ollama"],
  ["Evaluation & Research", "A/B experiment design, model evaluation (accuracy, latency, throughput, PSNR/SSIM, perplexity, ROUGE-L), literature review"],
  ["Databases & UX", "SQLite, PostgreSQL, MongoDB, NumPy · user research, wireframing, prototyping, usability"],
];

function Head() {
  return (
    <header className="flex justify-between items-start">
      <div className="flex-1 min-w-0">
        <h1 className="font-display font-bold text-[24px] leading-[1.05] text-ink mb-1 tracking-tight">Harshil Gorasiya</h1>
        <p className="font-cond font-bold text-[12.5px] leading-tight text-ink mb-0.5 uppercase">
          LLM systems: retrieval, AI agents, and small-model research
        </p>
        <p className="font-mono text-[10px] leading-none text-stamp mb-2.5 uppercase tracking-[0.18em]">
          Python · PyTorch · LLM · RAG · Computer Vision
        </p>
        <div className="font-mono text-[9px] leading-[1.7] text-ink-soft">
          <p>Heilbronn, Germany · +49 155 6351 7346 · harshil.gorasiya.0011@gmail.com</p>
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
      <span className="font-bold text-ink">Seeking:</span>{" "}
      Working student position (20 hrs/week during semester) · Full-time during semester breaks · Entry-level LLM/RAG role from 2027
      <br />
      <span className="font-bold text-ink">Available:</span> immediately · <span className="font-bold text-ink">Residence status:</span> valid residence permit with work permit
    </div>
  );
}

function Kpis() {
  const kpis = [
    ["+8 pts", "accuracy: 71% to 79%"],
    ["–20%", "training time (V100 GPUs)"],
    ["2.4×", "throughput vs. YOLOv5s"],
    ["28–32 FPS", "real-time object detection on CPU"],
    ["8 providers", "LLMs with failover (Ardan-CLI)"],
  ];
  return (
    <div className="grid grid-cols-5 border-t-[2px] border-b-[2px] border-ink">
      {kpis.map(([v, l], i) => (
        <div key={l} className={`flex flex-col items-center py-2 ${i > 0 ? "border-l-[1px] border-[rgba(22,19,14,0.28)]" : ""}`}>
          <span className="font-mono text-[17px] font-bold text-ink leading-none tabular-nums">{v}</span>
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

export default function CV_EN() {
  return (
    <div className="cv-doc">
      {/* ——— Sheet 1 ——— */}
      <CVSheet pageNo={1} totalPages={2} footerLabel="CV · Sheet">
        <Head />
        <div className="mt-3"><Seeking /></div>
        <div className="mt-3"><Kpis /></div>

        <section className="mt-3">
          <SectionHead>Profile</SectionHead>
          <p className="mt-1.5 text-[9.5px] leading-[1.6] text-ink-soft max-w-[78ch]">
            Master's student at Hochschule Heilbronn. I build LLM applications: local RAG systems with source citations, AI agents with tool use, and computer vision models that run on CPU. I also bring two ML internships, 10 months of AI-enabled web development, and a research project on reasoning modules for language models.
          </p>
        </section>

        <section className="mt-3">
          <SectionHead>Education</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="Since 03/2025"
              title="M.Sc. Software Engineering and Management"
              org="Hochschule Heilbronn"
              meta="English-taught programme · GPA so far: 1.9 (German scale) · Expected graduation: 2027"
            />
            <Entry
              date="2020 – 2024"
              title="B.Tech. Information Technology"
              org="A. D. Patel Institute of Technology, Gujarat"
              meta="India · Grade: 1.9 (converted to German scale)"
            />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Projects</SectionHead>
          <div className="mt-1.5 space-y-2.5">
            {PROJECTS.map((p) => (
              <div key={p.title}>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[7.5px] text-stamp uppercase tracking-[0.14em]">{p.kind}</span>
                  <span className="font-mono text-[7.5px] text-graphite uppercase tracking-[0.14em]">§ project</span>
                </div>
                <div className="font-cond font-bold text-[10.5px] text-ink leading-tight">{p.title}</div>
                <div className="font-mono text-[8px] text-graphite uppercase tracking-[0.12em] mt-0.5">{p.stack}</div>
                <Bullets items={p.items} />
              </div>
            ))}
          </div>
        </section>
      </CVSheet>

      {/* ——— Sheet 2 ——— */}
      <CVSheet pageNo={2} totalPages={2} footerLabel="CV · Sheet">
        <section>
          <SectionHead>Master's thesis · Ongoing</SectionHead>
          <div className="mt-1.5">
            <Entry
              date="Research"
              title="Ekdant: Reasoning Module for Language Models"
              org="Hochschule Heilbronn, supervised by a professor"
              meta="PyTorch, Hugging Face"
            >
              <Bullets
                items={[
                  "Parallel debate module (4 paths, consensus) added as a final stage to SmolLM2-135M; <strong>+19.6M parameters</strong>.",
                  "Controlled comparison against an architecture-matched baseline on medical question answering: the best variant leads on every metric, by a narrow margin.",
                  "Literature base of 66 research papers.",
                ]}
              />
            </Entry>
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>More Projects</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="AI Video Upscaling"
              title="Windows desktop application"
              meta="Python, PyTorch · Video super-resolution with model selection; compared Real-ESRGAN variants using PSNR and SSIM."
            />
            <Entry
              date="MNIST-MLOps"
              title="MLOps workflow demo"
              meta="Python, PyTorch, Flask, SQLite · Incremental training, model version management, and a web dashboard."
            />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Professional Experience</SectionHead>
          <div className="mt-1.5 space-y-2">
            <Entry
              date="05/2024 – 02/2025"
              title="AI & Web Solutions Developer"
              org="Aani Brothers Infotech, Surat, India · 10 months"
            >
              <Bullets
                items={[
                  "Built web applications that turn business requirements into user interfaces and workflows, including AI-enabled features.",
                  "Conducted user research, wireframing, and prototyping; optimized designs for usability.",
                ]}
              />
            </Entry>
            <Entry
              date="12/2023 – 04/2024"
              title="Deep Learning Intern"
              org="PD Avenue, Surat, India · 5 months"
            >
              <Bullets
                items={[
                  "Built a residual-block CNN (TensorFlow/Keras) for age and gender classification on <strong>22,000+ images</strong>; raised accuracy from <strong>71% to 79%</strong>.",
                  "Cut training time on V100 GPUs by <strong>20%</strong> (learning-rate scheduling, larger batch size) with no loss of accuracy.",
                  "Identified and fixed a data-leakage issue.",
                ]}
              />
            </Entry>
            <Entry
              date="05/2023 – 06/2023"
              title="Machine Learning Intern"
              org="Dotcom IoT LLP, Surat, India · 2 months"
            >
              <Bullets
                items={[
                  "YOLOv8n object detection on a CPU-only edge device (Intel Core i7): 720p video at <strong>28–32 FPS</strong>; <strong>2.4× higher throughput</strong> than YOLOv5s.",
                  "Curated and annotated <strong>3,000+ images</strong> across five vehicle classes.",
                  "Reduced false positives in low light by <strong>18%</strong> through IoU and NMS tuning.",
                ]}
              />
            </Entry>
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Skills</SectionHead>
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
          <SectionHead>Certifications</SectionHead>
          <div className="mt-1.5 space-y-1">
            <Entry date="2026" meta="Claude with the Anthropic API · Model Context Protocol: Advanced Topics (both Anthropic)" />
            <Entry date="2025" meta="Machine Learning with Python (IBM) · Fundamentals of Data Science (Databricks)" />
          </div>
        </section>

        <section className="mt-3">
          <SectionHead>Languages</SectionHead>
          <div className="mt-1.5">
            <Entry
              date=""
              meta={
                <span>
                  <strong>English:</strong> fluent · <strong>German:</strong> A2–B1 (self-assessed) · <strong>Hindi:</strong> fluent · <strong>Gujarati:</strong> native
                </span>
              }
            />
          </div>
        </section>
      </CVSheet>
    </div>
  );
}
