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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
