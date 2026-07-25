export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  role: string;
  year: string;
  status: "production" | "archived" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "kosera",
    title: "KOSERA: AI-Powered Property Search Engine",
    summary: "Platform pencarian indekos yang mengimplementasikan AI untuk menerjemahkan kueri bahasa natural ke dalam kalkulasi vektor.",
    description:
      "Kosera adalah web platform berbasis Next.js untuk pencarian properti kos yang dilengkapi fitur Semantic Search bertenaga AI. Sistem memiliki arsitektur microservice: web app Next.js (Vercel) berkomunikasi dengan AI Service terpisah (FastAPI + Docker, dihosting di HuggingFace Spaces) yang mengonversi query teks menjadi 384-dimensional vector embeddings menggunakan Sentence Transformers. Pengguna dapat mencari kos menggunakan bahasa natural seperti 'kos murah dekat kampus dengan wifi', dan sistem akan menemukan hasil paling relevan secara semantik.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "FastAPI", "Python", "Docker", "Sentence Transformers", "HuggingFace", "Cloudinary", "Vercel"],
    metrics: [
      { label: "Vector Dimension", value: "384" },
      { label: "Languages", value: "50+" },
      { label: "AI Model", value: "MiniLM-L12-v2" },
    ],
    role: "Full-stack Engineer",
    year: "2024",
    status: "in-progress",
  },
  {
    slug: "titipyuk",
    title: "TitipYuk Semarang",
    summary: "Platform penitipan barang berbasis Next.js 14 dengan Chatbot AI streaming dan sistem Email OTP custom.",
    description:
      "TitipYuk adalah platform layanan penitipan barang yang dibangun end-to-end dengan Next.js 14 dan Supabase. Sistem memiliki alur autentikasi lengkap (Sign Up, Login, protected routes via middleware) dengan Email OTP custom yang diverifikasi menggunakan bcrypt dan dikirim via Mailry API. Fitur unggulan adalah Chatbot AI Lunos yang mendukung streaming token real-time, persistensi riwayat percakapan, dan konteks domain khusus TitipYuk.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Supabase Auth", "shadcn/ui", "Lunos AI", "Mailry API", "Vercel"],
    metrics: [
      { label: "Auth System", value: "Email OTP + bcrypt" },
      { label: "AI Chatbot", value: "Streaming + History" },
      { label: "Chat Endpoints", value: "4 REST API" },
    ],
    role: "Full-stack Engineer",
    year: "2025",
    status: "in-progress",
  },
  {
    slug: "krz-digishop",
    title: "KRZ DIGISHOP",
    summary: "Landing page premium untuk layanan AI software & VPN dengan desain dark futuristik berbasis Astro.js.",
    description:
      "KRZ DIGISHOP adalah landing page modern dan minimalis yang dibangun dengan Astro.js untuk menampilkan layanan digital premium (AI software & VPN). Menampilkan dark theme dengan aksen lime green, tipografi Space Grotesk, animasi CSS halus, dan product grid yang bisa difilter per kategori. Dioptimasi untuk performa tinggi dengan pendekatan zero-JS Astro.",
    tech: ["Astro.js", "Scoped CSS", "Space Grotesk", "Inter", "Custom SVG Icons", "Google Fonts"],
    metrics: [
      { label: "Framework", value: "Astro.js" },
      { label: "Sections", value: "6 (Hero, Features, Products, About, Testimonials, Footer)" },
      { label: "JS Bundle", value: "Zero-JS Default" },
    ],
    role: "Frontend Engineer",
    year: "2025",
    status: "production",
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection Decision Engine",
    summary: "3-tier operational risk framework (Approve / Authentication / Manual Review) for e-commerce fraud detection powered by Random Forest.",
    description:
      "A fraud detection system that transforms the standard binary classification approach into a 3-tier operational risk management framework — Approve, Authentication, and Manual Review — for e-commerce transactions. The data pipeline employs selective imputation and datatype downcasting strategies, reducing dataset memory usage by 55% (from 2.06 GB to 922 MB). After evaluating multiple tree-based ensemble models, Random Forest was selected as the primary predictive model, outperforming the Logistic Regression baseline. The final model secures 65.4% of actual fraud cases while limiting intervention friction to only 3.06% of total transaction volume.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Logistic Regression", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Memory Reduction", value: "55%" },
      { label: "Fraud Recall", value: "65.4%" },
      { label: "Intervention Rate", value: "3.06%" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
  },
  {
    slug: "telco-dashboard",
    title: "Telco Portfolio Dashboard & Incident Detection",
    summary: "NLP-driven operational dashboard that translates raw customer reviews into actionable business insights with statistical anomaly detection.",
    description:
      "An analytical system that translates raw customer review text into actionable business insights for monitoring app release stability and proactively detecting infrastructure anomalies. The pipeline implements multi-label NLP classification to extract and categorize complaints (Network, Price, App/System). A custom Telco Friction Index (TFI) with 7-day moving average and a 14-day rolling Z-Score statistical model enable dynamic incident detection when complaint volume breaches the threshold (> 2.0 standard deviations). All insights are visualized in an operational dashboard rendered with Matplotlib and Seaborn.",
    tech: ["Python", "Pandas", "NLP", "Matplotlib", "Seaborn", "NumPy", "Statistical Modeling"],
    metrics: [
      { label: "TFI Window", value: "7-day MA" },
      { label: "Z-Score Window", value: "14-day Rolling" },
      { label: "Anomaly Threshold", value: "> 2.0 SD" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
  },
  {
    slug: "telco-churn",
    title: "Telco Customer Churn Prediction & Retention Strategy",
    summary: "Logistic Regression churn predictor achieving 87% recall with a 3-tier risk routing algorithm and automated CSV export for operations teams.",
    description:
      "A churn prediction and retention strategy system analyzing 7,000+ telecom customer records to identify churn behavior, expose survivorship bias in historical retention indicators, and formulate financial retention architectures such as Ecosystem Lock-in. Data cleaning includes imputing empty financial records for new customers and preventing multicollinearity through One-Hot Encoding with drop_first=True to produce a 30-dimensional orthogonal feature matrix. The Logistic Regression model configured with balanced class weights, combined with decision boundary engineering through threshold adjustment to 0.4, achieves 87% churn detection recall. An intervention routing algorithm segments customers into 3 risk tiers (High, Medium, Low) and automatically exports results as CSV for operational teams.",
    tech: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Churn Recall", value: "87%" },
      { label: "Threshold", value: "0.4" },
      { label: "Feature Dimensions", value: "30" },
    ],
    role: "Data Analyst",
    year: "2025",
    status: "archived",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
