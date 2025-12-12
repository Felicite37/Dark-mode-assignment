# Next.js Assignment

A Next.js project demonstrating different rendering techniques including CSR, SSR, SSG, and ISR with dark/light mode functionality.

## 🚀 Deployed Link
[Add your deployed link here]

## Features

- **App Router** with nested layouts
- **Dark/Light Mode Toggle** with localStorage persistence
- **Multiple Rendering Techniques**:
  - CSR (Client-Side Rendering) - Real-time clock
  - SSR (Server-Side Rendering) - Author information
  - SSG (Static Site Generation) - Blog posts listing
  - ISR (Incremental Static Regeneration) - Individual blog posts
- **Search functionality** in blog sidebar
- **Responsive design** with Tailwind CSS

## Project Structure

```
src/app/
├── layout.tsx          # Main layout with header/footer
├── page.tsx            # Home page (SSR + CSR)
├── about/
│   └── page.tsx        # About page
├── blog/
│   ├── layout.tsx      # Blog nested layout with sidebar
│   ├── page.tsx        # Blog listing (SSG)
│   ├── [id]/
│   │   └── page.tsx    # Blog detail (ISR)
│   └── components/
│       └── BlogSidebar.tsx
└── components/
    ├── ThemeProvider.tsx
    ├── ThemeToggle.tsx
    └── Clock.tsx
```

## Rendering Techniques Used

1. **CSR**: Clock component updates every second
2. **SSR**: Author information fetched on each request
3. **SSG**: Blog posts list generated at build time
4. **ISR**: Blog details revalidated every 60 seconds

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- JSONPlaceholder API