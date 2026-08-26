# DocuMind AI — Enterprise Document Intelligence SaaS

> **Tagline**: Understand your documents faster.  
> **Portfolio Project**: A commercial-grade, enterprise AI document intelligence workspace demonstrating scalable frontend architecture, AI service abstraction, multi-language LTR/RTL support, and accessible UI design.

---

## 🚀 Key Features & Highlights

1. **Multi-Stage Document Processing Pipeline**
   - Visual step progress: `Uploading` → `Reading document` → `Analyzing content` → `Extracting insights` → `Ready`.
   - Ingests PDF, DOCX, and TXT files with format and size validation.

2. **Interactive 3-Column Document Workspace**
   - **Left**: Table of Contents, page selector, and section tree.
   - **Center**: Reader preview with zoom, inline search highlighting, and selectable text.
   - **Right**: Structured AI Insights tabs (Summary, Key Points, Action Items, Dates, Entities, Topics, Risks).
   - **Mobile**: Responsive single-column with tabbed switching ([Document] / [Insights] / [Ask AI]).

3. **Verifiable Source Citations**
   - Clicking citation badges (e.g., `Page 1 — Executive Overview`) in AI answers or key points automatically scrolls to and highlights the target section in the document reader.

4. **Document-Scoped "Ask AI"**
   - Scoped strictly to the active document context.
   - Includes suggested question chips and structured response cards.

5. **Global Command Palette (Cmd + K)**
   - Instant search across documents, extracted insights, and audit history.

6. **Full Localization & Theme Engine**
   - English (LTR) and Arabic (RTL) localization with mirrored UI layouts and Arabic font support (`IBM Plex Sans Arabic`).
   - Dark mode, Light mode, and System preference options with `localStorage` persistence.

---

## 🛠 Tech Stack & Architecture

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Custom Scrollbars & Animations
- **Icons & Visuals**: Lucide React
- **Data Visualization**: Recharts
- **State & Storage**: React Context API, `localStorage` persistence layer

### Scalable AIService Abstraction

To avoid placing AI logic inside UI components, DocuMind AI uses a decoupled service architecture:

```
src/services/
├── AIService.ts         # TypeScript Interface contract
├── MockAIService.ts     # Default offline demo implementation (dynamic outputs & citations)
├── RealAIService.ts     # Ready-to-connect production REST / gRPC template
└── StorageService.ts    # Persistence service for docs, history, user preferences
```

### Switching to a Real AI Backend
To connect DocuMind AI to a live LLM or API endpoint:
1. Open `src/services/index.ts`.
2. Replace `new MockAIService()` with `new RealAIService('https://api.your-domain.com/v1', apiKey)`.
3. UI components require zero code modifications!

---

## ⚙️ Getting Started

### Development Command
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Type Checking
```bash
npx tsc --noEmit
```

---

## 📝 Demo Limitations & Transparency

- **Portfolio Prototype**: All numbers, analytics charts, and AI outputs are generated locally in browser for demonstration purposes.
- **Privacy & Security**: Files uploaded during the demo are processed client-side in browser memory and are **never** transmitted to remote third-party servers.
