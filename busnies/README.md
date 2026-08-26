# NEXORA — SaaS Business Management Dashboard

NEXORA is a modern, production-quality SaaS business management dashboard designed for small and medium-sized businesses. Built with React 18, TypeScript, Vite, Tailwind CSS, Recharts, and Lucide React.

> **Portfolio Notice**: NEXORA is a fictional portfolio project created to demonstrate professional frontend web application architecture, design systems, interactive state management, and internationalization capability. All data presented is fictional demo data.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/example/nexora.git
cd busnies

# Install dependencies
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```

### Production Build
Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🏛️ Application Architecture

NEXORA adheres to standard modern SaaS application patterns with clean separation of concerns:

```
src/
├── components/
│   ├── charts/       # Recharts wrappers (RevenueChart, SalesBreakdownChart, CustomerGrowthChart)
│   ├── layout/       # AppLayout, Sidebar, Header, MobileNav
│   └── ui/           # Reusable UI Primitives (Button, Input, Select, Badge, Card, Modal, Drawer, Table, Tabs, Dropdown, CommandPalette, GlobalSearchModal)
├── context/          # State providers (ThemeContext, LanguageContext, NotificationContext)
├── data/             # Centralized demo datasets (analytics, orders, customers, products, tasks, team)
├── hooks/            # Custom hooks (useLocalStorage, useSearch)
├── pages/            # 9 Major application screens (Dashboard, Orders, Customers, Products, Analytics, Tasks, Team, Notifications, Settings)
├── translations/     # i18n dictionaries (en.ts, ar.ts with RTL layout support)
├── types/            # Strict TypeScript interfaces
├── App.tsx           # HashRouter configuration and Provider wrap
└── main.tsx          # DOM root mount
```

---

## ⚡ Key Features

1. **Dashboard Home**: Real-time KPI summaries (Revenue $84,240, Orders 1,284, Customers 8,492, Conversion Rate 4.8%), interactive revenue/orders area chart, sales breakdown donut chart, recent orders table with order drawer.
2. **Orders Management**: Full searchable, filterable by status (Completed, Processing, Pending, Cancelled), sortable, and paginated orders table with detailed timeline and items breakdown drawer.
3. **Customers**: Customer cards grid with status badges (VIP, Active, Inactive), search, and customer profile side panel.
4. **Products**: Stock management interface with category & stock level filters, and an interactive "Add Product" modal with local state persistence.
5. **Analytics**: Deep-dive financial & operational metrics with multiple responsive visualizations.
6. **Tasks**: Interactive task manager with priority badges, status columns (To Do, In Progress, Completed), local state & `localStorage` persistence, and task editor.
7. **Team**: Workspace member cards with live status indicators, roles, and completion statistics.
8. **Notifications**: Full notification center with category filtering, mark as read, and batch actions.
9. **Settings**: Multi-tab settings panel for Profile, Preferences, Business Info, and Security UI demo.
10. **Dark / Light Mode**: System, Light, and Dark mode support with persistent preference and automatic document element class updates.
11. **Language & RTL Support**: Dual-language support for English (LTR) and Arabic (RTL) with dynamic HTML `dir="rtl"` layout mirroring.
12. **Command Palette & Global Search**: Quick action modal triggered via `Ctrl+K` / `⌘K` or search bar across all entities.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router v6 (HashRouter)
- **State Persistence**: Typed `localStorage` hooks
- **Zero Paid Dependencies / No Backend Required**
