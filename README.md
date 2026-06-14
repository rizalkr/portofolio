# rizalkr/portofolio — Personal Portfolio

Portfolio pribadi **Rizal Kurnia**, seorang Backend & Data Engineer. Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS.

## ✨ Highlights

- **Intercepting & Parallel Routes** — Klik project card membuka modal *tanpa* full page reload, namun URL tetap berubah (`/projects/[slug]`). Akses URL langsung tetap render halaman standalone.
- **Dynamic Project Components** — Menambah proyek baru cukup dengan membuat file `src/components/projects/NamaProyek.tsx`. Tidak ada registry manual.
- **Asymmetric Layout** — Grid 2 kolom asimetris (`1fr / 1.5fr`) dengan sticky identity panel di kiri.
- **Midnight Slate + Electric Indigo** — Tema gelap dengan aksen Indigo-500.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Dialog, Badge, Button, Carousel) |
| Animation | Framer Motion |
| Font | Inter (body), JetBrains Mono (code) |

## 📁 Project Structure

```
src/
├── app/
│   ├── @modal/              # Parallel route untuk modal overlay
│   │   └── (.)projects/[slug]/page.tsx  # Intercepting route
│   ├── projects/[slug]/     # Standalone project page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── projects/            # Satu file per proyek (Kosera.tsx, Titipyuk.tsx, dll.)
│   ├── ProjectStack.tsx     # Data & animasi project cards
│   └── ui/                  # shadcn/ui components
└── lib/
    └── projects.ts          # Type & data proyek lengkap
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## ➕ Menambah Proyek Baru

1. Tambah entry di `src/components/ProjectStack.tsx` (`MOCK_PROJECTS`):
   ```ts
   { slug: "nama-proyek", title: "Nama Proyek", description: "Deskripsi singkat." }
   ```
2. Buat file komponen baru `src/components/projects/NamaProyek.tsx`:
   ```tsx
   export const SLIDE_COUNT = 4;

   export function NamaProyekSlides({ project, activeSlide }) {
     return <div>...</div>;
   }
   ```
3. Selesai — modal akan otomatis memuat komponen tersebut via dynamic import.

## 📄 License

MIT
