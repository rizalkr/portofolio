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
      "Cross-platform orchestration toolkit for Google Antigravity that decouples Planner/Executor models across 6 presets, blocks mid-task context compaction via a stateful Python hook, and eliminates global MCP token overhead.",
    description:
      "Long agentic coding sessions fail when global MCP schemas, redundant full-file reads, and mistimed context compactions drain the token window. agy-setup fixes these four leaks across Windows, macOS, and Linux. It pairs reasoning planners (Gemini 4 Argon and Neon) with fast executors (Gemini 4 Hydrogen) across 6 presets, enforces a 'Never Compact Mid-Task' guard via a PreInvocation Python hook (context-guardian.py) that tracks transcript.jsonl growth, isolates MCP servers per workspace, and routes 18 domain skills on demand alongside Graphify AST queries.",
    tech: [
      "Python 3",
      "Google Antigravity",
      "Bash",
      "PowerShell",
      "PreInvocation Hooks",
      "MCP Protocol",
      "Graphify AST",
      "JSON Schema",
    ],
    metrics: [
      { label: "Orchestrator Presets", value: "6 (Argon & Neon)" },
      { label: "Skill Library", value: "5 Core + 18 Domain" },
      { label: "Global MCP Tax", value: "0 Tokens" },
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
      "Microservice boarding-house search engine that encodes natural-language queries into 384-dimensional vectors via FastAPI and Sentence Transformers instead of rigid SQL filters.",
    description:
      "Standard property portals force renters to guess exact filter combinations, missing relevant listings written in informal Indonesian. Kosera decouples a Next.js storefront on Vercel from a containerized FastAPI inference microservice on HuggingFace Spaces. The AI service encodes queries like 'quiet boarding house near campus with fast Wi-Fi' into 384-dimensional embeddings using paraphrase-multilingual-MiniLM-L12-v2 across 50+ languages, ranking PostgreSQL listings by cosine similarity and Profile Matching.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "FastAPI",
      "Python",
      "Docker",
      "Sentence Transformers",
      "HuggingFace",
      "Cloudinary",
      "Vercel",
    ],
    metrics: [
      { label: "Vector Dimension", value: "384" },
      { label: "Languages", value: "50+" },
      { label: "AI Model", value: "MiniLM-L12-v2" },
    ],
    role: "Full-stack Engineer",
    year: "2024",
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
