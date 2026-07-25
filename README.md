# rizalkr/portofolio — Personal Portfolio

Personal portfolio website of **Rizal Kurnia**, a Backend Developer & Data Analyst. Built with Next.js App Router, TypeScript, and Tailwind CSS.

Feel free to fork, clone, and use this project as a template for your own portfolio.

## Highlights

- **Intercepting & Parallel Routes** — Clicking a project card opens a modal without a full page reload, while the URL still updates to `/projects/[slug]`. Direct URL access renders a standalone page.
- **Dynamic Project Components** — Adding a new project only requires creating a file at `src/components/projects/ProjectName.tsx`. No manual registry needed.
- **Categorized Projects** — Projects are split into separate sections (Web & Backend, Data Analytics), each with its own animated card stack.
- **Asymmetric Layout** — 2-column asymmetric grid (`1fr / 1.5fr`) with a sticky identity panel on the left.
- **Midnight Slate + Electric Indigo** — Dark theme with Indigo-500 accent.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Dialog, Badge, Button, Carousel) |
| Animation | Framer Motion |
| Font | Inter (body), JetBrains Mono (code) |

## Project Structure

```
src/
├── app/
│   ├── @modal/              # Parallel route for modal overlay
│   │   └── (.)projects/[slug]/page.tsx  # Intercepting route
│   ├── projects/[slug]/     # Standalone project page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── projects/            # One file per project (Kosera.tsx, FraudDetection.tsx, etc.)
│   ├── ProjectStack.tsx     # Animated project card stack component
│   └── ui/                  # shadcn/ui components
└── lib/
    ├── project-data.ts      # Shared project card data & categories
    └── projects.ts          # Full project type & metadata
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a New Project

1. Add an entry in `src/lib/project-data.ts` (`MOCK_PROJECTS`):
   ```ts
   { slug: "project-name", title: "Project Name", description: "Short description.", category: "web-backend" }
   ```
2. Add full metadata in `src/lib/projects.ts` (`projects` array).
3. Create a new slide component at `src/components/projects/ProjectName.tsx`:
   ```tsx
   export const SLIDE_COUNT = 4;

   export function ProjectNameSlides({ project, activeSlide }) {
     return <div>...</div>;
   }
   ```
4. Done — the modal will automatically load the component via dynamic import.

## License

MIT — free to use, modify, and distribute.
