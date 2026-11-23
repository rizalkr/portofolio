export type ProjectCategory = "web-backend" | "data-analytics";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  role: string;
  year: string;
  status: "production" | "archived" | "in-progress";
  repoUrl?: string;
  blogLink?: {
    label: string;
    href: string;
  };
}

export const projects: Project[] = [
  {
    slug: "agy-setup",
    title: "AGY-SETUP: Context Engineering & Orchestrator Suite",
    category: "web-backend",
    summary:
      "Cross-platform orchestration toolkit for Google Antigravity pairing Argon/Neon planners with Hydrogen executors across 6 presets, a stateful Context Guardian hook, and a 19-skill lazy router.",
    description:
      "Long agentic coding sessions stall when bloated tool schemas, redundant file reads, and mistimed compactions drain the context window. agy-setup enforces token discipline across three pillars: a Plan-Execute orchestrator splitting Gemini 4 Argon/Neon planners from Hydrogen executors across 6 presets, a stateful PreInvocation Python hook (context-guardian.py) tracking transcript.jsonl to enforce 'Never Compact Mid-Task', and an on-demand Skill Router indexing 5 core and 19 domain skills alongside Graphify AST subgraphs and project-scoped MCP.",
    tech: [
      "Plan-Execute (6 Presets)",
      "Context Guardian Hook",
      "Lazy Skill Router (19)",
      "Graphify AST",
      "Project-Scoped MCP",
      "Python 3",
      "Google Antigravity",
      "Cross-Platform CLI",
    ],
    metrics: [
      { label: "Plan-Execute (6 Presets)", value: "Argon/Neon + Hydrogen" },
      { label: "Context Guardian", value: "PreInvocation FSM" },
      { label: "Lazy Skill Router", value: "5 Core + 19 Domain" },
    ],
    role: "AI Systems & DX Engineer",
    year: "2026",
    status: "production",
    repoUrl: "https://github.com/rizalkr/agy-setup",
    blogLink: {
      label: "Read Engineering Case Study",
      href: "/blog/agy-setup-context-engineering",
    },
  },
  {
    slug: "kosera",
    title: "KOSERA: AI-Powered Property Search Engine",
    category: "web-backend",
    summary:
      "Hybrid AI boarding-house search engine pairing a QLoRA-tuned Qwen2.5-7B-Instruct assistant with MiniLM-L12-v2 384d embeddings and pgvector HNSW across 7,000 indexed listings.",
    description:
      "Standard property portals force renters into rigid SQL filters that fail on informal Indonesian queries, while ranking thousands of listings with an LLM alone is too slow. Kosera splits retrieval and reasoning across microservices: a CPU FastAPI service encodes queries into 384-dimensional vectors via paraphrase-multilingual-MiniLM-L12-v2 for pgvector HNSW search (7,000 indexed listings), and a QLoRA-tuned Qwen2.5-7B-Instruct model (trained on 750 leakage-free conversations, 91.75% eval pass rate, 100% groundedness) extracts tool-call JSON and explains Profile Matching SPK scores.",
    tech: [
      "Qwen2.5-7B (QLoRA)",
      "MiniLM-L12-v2",
      "pgvector (HNSW)",
      "Next.js 15",
      "FastAPI",
      "PostgreSQL 16",
      "Drizzle ORM",
      "PyTorch / PEFT",
      "Docker",
      "TypeScript",
    ],
    metrics: [
      { label: "LLM (QLoRA SFT)", value: "Qwen2.5-7B" },
      { label: "Embedding (384d)", value: "MiniLM-L12-v2" },
      { label: "pgvector HNSW", value: "7,000 Indexed" },
    ],
    role: "Full-stack Engineer",
    year: "2026",
    status: "in-progress",
    repoUrl: "https://github.com/rizalkr/kosera-spk",
    blogLink: {
      label: "Read 6-Part Engineering Series",
      href: "/blog/kosera-part-1",
    },
  },
  {
    slug: "titipyuk",
    title: "TitipYuk Semarang",
    category: "web-backend",
    summary:
      "Luggage storage booking platform built on Next.js 14 and Supabase featuring bcrypt-hashed Email OTP verification and a domain-scoped streaming AI assistant.",
    description:
      "Built end-to-end with Next.js 14 App Router and Supabase for luggage storage operations in Semarang. Replaces default magic links with a custom 6-digit Email OTP flow delivered via Mailry API, hashed with bcrypt in PostgreSQL, and throttled to one request per 60 seconds with a 10-minute TTL. Includes a Lunos AI support assistant across 4 REST endpoints that streams token responses in real time and persists per-user conversation history under strict Row-Level Security (RLS).",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Supabase Auth",
      "shadcn/ui",
      "Lunos AI",
      "Mailry API",
      "Vercel",
    ],
    metrics: [
      { label: "Auth System", value: "Email OTP + bcrypt" },
      { label: "AI Chatbot", value: "Streaming + History" },
      { label: "Chat Endpoints", value: "4 REST API" },
    ],
    role: "Full-stack Engineer",
    year: "2025",
    status: "in-progress",
    repoUrl: "https://github.com/rizalkr/titipyuk",
  },
  {
    slug: "krz-digishop",
    title: "KRZ DIGISHOP",
    category: "web-backend",
    summary:
      "Zero-JS Astro.js storefront for AI software and VPN subscriptions engineered with scoped CSS, category filtering, and instant static asset delivery.",
    description:
      "Marketing storefronts for digital subscriptions often suffer from heavy client-side JavaScript bundles that delay initial paint on mobile networks. KRZ DIGISHOP uses Astro.js static generation with a zero-JS default baseline, scoped CSS custom properties, and custom SVG iconography across 6 conversion sections (Hero, Features, Filterable Product Grid, About, Testimonials, Footer). Delivers instant first-load rendering with a high-contrast dark purple and lime-green visual hierarchy.",
    tech: [
      "Astro.js",
      "Scoped CSS",
      "Space Grotesk",
      "Inter",
      "Custom SVG Icons",
      "Google Fonts",
    ],
    metrics: [
      { label: "Architecture", value: "Astro Static" },
      { label: "Page Sections", value: "6 Conversion Blocks" },
      { label: "Client JS Baseline", value: "0 KB Default" },
    ],
    role: "Frontend Engineer",
    year: "2025",
    status: "production",
    repoUrl: "https://github.com/rizalkr/krz-digishop",
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection Decision Engine",
    category: "data-analytics",
    summary:
      "Random Forest risk engine that replaces binary fraud flags with a 3-tier routing pipeline (Approve / Auth / Manual Review), catching 65.4% of fraud at 3.06% customer friction.",
    description:
      "Binary fraud classifiers either block legitimate buyers or overwhelm analysts with false positives. This pipeline ingests 2.06 GB of raw e-commerce transactions, cutting memory usage by 55% (down to 922 MB) through selective imputation and numeric downcasting. Benchmarked against a Logistic Regression baseline, the Random Forest classifier routes transactions into three operational tiers—Approve, Step-Up Authentication, and Manual Review—capturing 65.4% of actual fraud while restricting manual or step-up friction to 3.06% of total volume.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Logistic Regression",
      "Matplotlib",
      "Seaborn",
    ],
    metrics: [
      { label: "Memory Reduction", value: "55%" },
      { label: "Fraud Recall", value: "65.4%" },
      { label: "Intervention Rate", value: "3.06%" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
    repoUrl: "https://github.com/rizalkr/fraud_detection",
  },
  {
    slug: "telco-dashboard",
    title: "Telco Portfolio Dashboard & Incident Detection",
    category: "data-analytics",
    summary:
      "NLP anomaly detection pipeline that classifies raw app reviews and flags infrastructure incidents using a 7-day Telco Friction Index and 14-day rolling Z-Score (> 2.0 SD).",
    description:
      "App store reviews spike during network outages and buggy releases, but manual triage is too slow for incident response. This Python pipeline runs multi-label NLP classification to sort raw customer reviews into Network, Pricing, and App/System defects. It aggregates daily complaint velocity into a 7-day Moving Average Telco Friction Index (TFI) paired with a 14-day rolling Z-Score model, triggering automated incident alerts whenever complaint volume breaches 2.0 standard deviations above baseline.",
    tech: [
      "Python",
      "Pandas",
      "NLP",
      "Matplotlib",
      "Seaborn",
      "NumPy",
      "Statistical Modeling",
    ],
    metrics: [
      { label: "TFI Window", value: "7-day MA" },
      { label: "Z-Score Window", value: "14-day Rolling" },
      { label: "Anomaly Threshold", value: "> 2.0 SD" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
    repoUrl: "https://github.com/rizalkr/provider_tfi",
  },
  {
    slug: "telco-churn",
    title: "Telco Customer Churn Prediction & Retention Strategy",
    category: "data-analytics",
    summary:
      "Threshold-tuned Logistic Regression pipeline across 7,000+ telecom accounts achieving 87% churn recall and automated 3-tier CSV routing for retention teams.",
    description:
      "Analyzes 7,000+ telecom customer records to correct survivorship bias in tenure metrics and isolate the contract and billing drivers behind early churn. After imputing missing new-account financials and encoding a 30-dimensional orthogonal feature matrix (drop_first=True to prevent multicollinearity), a class-balanced Logistic Regression model was tuned from the default 0.50 decision threshold to 0.40. The shift lifts churn recall to 87% and feeds a 3-tier risk router (High, Medium, Low) that exports action-ready CSVs for retention operations.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    metrics: [
      { label: "Churn Recall", value: "87%" },
      { label: "Threshold", value: "0.4" },
      { label: "Feature Dimensions", value: "30" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
    repoUrl: "https://github.com/rizalkr/telco_churn",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
