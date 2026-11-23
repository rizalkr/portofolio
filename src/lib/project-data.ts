export type ProjectCategory = "web-backend" | "data-analytics";

export interface StackProject {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
}

export const MOCK_PROJECTS: StackProject[] = [
  { slug: "agy-setup", title: "AGY-SETUP: Context Engineering & Orchestrator Suite", description: "6 Plan-Execute presets, PreInvocation auto-compact hook, and 18-skill progressive disclosure router for Google Antigravity.", category: "web-backend" },
  { slug: "kosera", title: "KOSERA: AI-Powered Property Search Engine", description: "Mesin pencari properti cerdas dengan Semantic Search.", category: "web-backend" },
  { slug: "titipyuk", title: "TitipYuk Semarang", description: "Platform penitipan barang dengan Chatbot AI & Email OTP.", category: "web-backend" },
  { slug: "krz-digishop", title: "KRZ DIGISHOP", description: "Landing page premium untuk layanan AI software & VPN.", category: "web-backend" },
  { slug: "fraud-detection", title: "Fraud Detection Decision Engine", description: "3-tier risk framework for e-commerce fraud detection using Random Forest.", category: "data-analytics" },
  { slug: "telco-dashboard", title: "Telco Portfolio Dashboard & Incident Detection", description: "NLP-powered dashboard for app review monitoring and infrastructure anomaly detection.", category: "data-analytics" },
  { slug: "telco-churn", title: "Telco Customer Churn Prediction & Retention Strategy", description: "Logistic Regression churn predictor with 3-tier risk routing algorithm.", category: "data-analytics" },
];
