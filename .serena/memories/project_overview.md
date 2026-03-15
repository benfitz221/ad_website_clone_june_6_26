# Project Overview: Skills-hub-ad-website-2

## Purpose
Marketing/branding website for "Agent Done" (SIA Fitzgerald Change Consulting). The active website is in the `ad-website-2/` directory. Other directories (`ad-website-1/`, `ad-website/`, `website-template/`) are earlier iterations.

The `execution/` directory contains Python utility scripts for lead enrichment, email campaigns, LinkedIn scraping, and invoice extraction — separate from the website itself.

## Tech Stack
- **Framework:** React 19 (JSX, not TypeScript)
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3 with custom theme
- **Animations:** GSAP 3
- **Icons:** Lucide React
- **Fonts:** Space Grotesk (primary), JetBrains Mono (monospace)
- **Deployment:** Vercel

## Custom Color Palette (Tailwind extended)
- `moss`: #0D2535
- `clay`: #DCAE1D (gold/accent)
- `cream`: #D1E3DB
- `charcoal`: #142F40 (main background)

## Site Structure (App.jsx)
Navbar → Hero → Features → CommunityGallery → Philosophy → Protocol → Membership → Footer

## Key Directories
- `ad-website-2/src/components/` — All React components (JSX)
- `ad-website-2/public/` — Static assets
- `ad-website-2/docs/` — Change request log (Excel)
- `execution/` — Python scripts (lead gen, enrichment, campaigns)
