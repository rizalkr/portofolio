import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("rk-theme-v2");document.documentElement.classList.toggle("dark",t==="dark");}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Rizal Kurnia — Backend, AI Systems & Data Engineer",
  description:
    "Portfolio of Rizal Kurnia — Backend, AI Systems & Data Engineer architecting production backend services, semantic AI search pipelines, and context-engineered developer tooling.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        {modal}
      </body>
    </html>
  );
}
