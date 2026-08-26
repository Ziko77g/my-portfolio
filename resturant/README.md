# 🌙 Luna Restaurant — Premium Restaurant Website

A production-quality, visually stunning, bilingual restaurant website built as a professional portfolio project. Designed to communicate luxury, high-quality food, trust, and professionalism.

> **⚠️ Portfolio Disclaimer:** All restaurant details, chef profiles, menu prices, ratings, reviews, and business information presented on this website are entirely **fictional**. This project is for portfolio demonstration purposes only.

---

## ✨ Live Preview

```
npm run dev
# → http://localhost:5173
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI framework |
| TypeScript | 5.6 | Type safety |
| Vite | 5.4 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Lucide React | 0.475 | Lightweight icon library |
| Google Fonts | — | Playfair Display, Plus Jakarta Sans, Cairo, Amiri |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone or navigate to the project directory
cd resturant

# Install all dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.tsx          — Sticky responsive navigation
│   ├── MobileMenu.tsx      — Mobile slide-over drawer
│   ├── LanguageSwitcher.tsx — EN/AR language toggle
│   ├── Hero.tsx            — Cinematic full-screen hero
│   ├── RestaurantIntro.tsx — Brand story & philosophy
│   ├── FeaturedMenu.tsx    — Filterable signature dishes grid
│   ├── MenuCard.tsx        — Individual dish card
│   ├── FullMenu.tsx        — Complete restaurant menu list
│   ├── AboutSection.tsx    — Brand heritage narrative
│   ├── ChefSection.tsx     — Chef Adrian Vale profile
│   ├── GallerySection.tsx  — Editorial gallery grid
│   ├── Lightbox.tsx        — Fullscreen image lightbox
│   ├── Testimonials.tsx    — Guest reviews slider
│   ├── ReservationSection.tsx — Table reservation form
│   ├── ContactSection.tsx  — Contact details & map
│   ├── MapPlaceholder.tsx  — Custom SVG location map
│   ├── Footer.tsx          — Site footer with newsletter
│   ├── ScrollToTop.tsx     — Floating scroll-to-top button
│   └── SectionHeading.tsx  — Reusable section header
├── context/
│   └── LanguageContext.tsx — Language state & i18n
├── data/
│   └── restaurantData.ts   — All mock restaurant data
├── translations/
│   └── index.ts            — EN & AR translation dictionary
├── types/
│   └── index.ts            — TypeScript interfaces
├── App.tsx                 — Root component
├── main.tsx                — Entry point
└── index.css               — Global styles & Tailwind base
```

---

## 🌐 Language Support

The website fully supports **English** (LTR) and **Arabic** (RTL):

- Click the language toggle button in the Navbar
- Arabic mode automatically:
  - Sets `dir="rtl"` on `<html>`
  - Switches typography to **Amiri/Cairo** fonts
  - Mirrors layout directions (nav, buttons, icons)
  - Translates all text via a centralized dictionary
- Language preference persists in `localStorage`

---

## 📋 Features

### Design
- 🌑 Deep charcoal dark luxury aesthetic
- ✨ Warm cream typography (`#F4F0EA`)
- 🥇 Subtle bronze/gold accents (`#C5A880`)
- 📐 Editorial asymmetric layouts
- 🅰️ Playfair Display + Plus Jakarta Sans typography

### Sections
- **Hero** — Cinematic full-screen with dual CTAs
- **Restaurant Intro** — Philosophy + fictional stats
- **Signature Menu** — 6 dishes with category filter (All / Starters / Mains / Desserts / Beverages)
- **Full Menu** — Complete 4-category menu in editorial style
- **About** — Brand story & heritage narrative
- **Chef Profile** — Fictional Chef Adrian Vale
- **Gallery** — Editorial grid with Lightbox viewer
- **Testimonials** — 3 fictional guest reviews with navigation
- **Reservation** — Form with validation + local storage demo
- **Contact** — Hours, address, email, phone, social icons
- **Map** — Custom SVG map illustration (no API key needed)
- **Footer** — Newsletter demo, links, copyright

### Interactions
- Navbar blur effect on scroll
- Mobile full-screen drawer menu with body scroll lock
- Gallery lightbox with keyboard navigation (← → Esc)
- Menu category filtering with active state
- Reservation form validation with error messages
- Submission success modal
- Smooth hover transitions on all cards
- Scroll-to-top floating button
- `prefers-reduced-motion` compliance

### Accessibility
- Semantic HTML5 structure
- Correct heading hierarchy (h1 → h2 → h3)
- `aria-label` on all icon-only controls
- Visible focus states on all interactive elements
- Keyboard navigable (Tab, Enter, Space, Escape, Arrows)
- `alt` text on all images
- Form labels linked to inputs

### SEO
- Descriptive `<title>` tag
- `<meta name="description">`
- Open Graph metadata
- JSON-LD Restaurant structured data
- Semantic HTML headings

---

## 🖼 Images

All images are sourced from **Unsplash** (free for commercial and portfolio use).

To replace with real restaurant images:
1. Place your images in `/public/images/` or `/src/assets/`
2. Update URLs in [`src/data/restaurantData.ts`](./src/data/restaurantData.ts)
3. Update the hero image URL in [`src/components/Hero.tsx`](./src/components/Hero.tsx)

---

## 📝 Replacing Fictional Content

| File | What to Replace |
|------|----------------|
| `src/data/restaurantData.ts` | Menu items, gallery images, chef info, testimonials |
| `src/translations/index.ts` | All UI text in both EN and AR |
| `index.html` | Page title, meta descriptions, OG tags, schema.org data |
| `src/components/ContactSection.tsx` | Address, phone, email |
| `src/components/Footer.tsx` | Copyright, hours |

---

## 🔌 No External Services Required

- ✅ No map API key needed (custom SVG map)
- ✅ No form backend needed (local storage demo)
- ✅ No newsletter backend needed (client-side demo)
- ✅ No analytics or tracking scripts

---

## 🌟 Key Design Decisions

1. **Sharp edges over rounding** — Premium restaurant aesthetic over generic SaaS
2. **Restrained animations** — Purposeful, not flashy; respects reduced motion
3. **Editorial layout** — Asymmetric grids, not standard cards
4. **Typography first** — Playfair Display creates the luxury feeling
5. **Subtle gold, not garish** — `#C5A880` bronze rather than saturated gold

---

## 📄 License

This is a portfolio demonstration project. All fictional business details are for illustrative purposes only.
