# ALGORYX — Scroll-Based Animated Landing Page

A modern, premium-quality **scroll-based animated landing page** engineered for **ALGORYX**, a digital innovation and creative technology collective. Developed for the Week 2 Algoryx Frontend Internship project.

---

## 🌟 Live Features & Highlights

1. **Scroll-Driven Motion & Orchestration**
   - **Progress Indicator**: Real-time spring-physics scroll progress bar pinned to the top viewport.
   - **Scroll-Triggered Reveals**: Staggered component animations using `motion` (Framer Motion v12) as sections enter the viewport.
   - **Parallax Background Atmosphere**: Multi-layer ambient blur nodes that shift at varying velocities relative to window scroll position.

2. **Full Section Architecture (All 10 Required Sections)**
   - **Navigation Bar**: Responsive glassmorphic navbar adhering to the 3-zone contract, with light/dark theme toggle and responsive mobile menu drawer.
   - **Hero Section**: Headline *"Build Beyond Boundaries."*, dual CTAs (*"Explore Our Work"* & *"Get in Touch"*), and a high-fidelity visual showcase with floating glassmorphism feature cards.
   - **About Section**: Company introduction, mission, vision, and dynamic animated statistics counters with tabular figures (`99.2%`, `240+`, `14`, `4.6x`).
   - **Services Section**: 4 Core pillars (*Web Development*, *UI/UX Design*, *Digital Experiences*, *Creative Technology*) with interactive cards and technology breakdowns.
   - **Featured Projects**: Filterable portfolio by category (*All*, *Web Architecture*, *Spatial & 3D*, *Design Systems*, *Creative Tech*) with interactive modal case study inspector.
   - **Scroll Animation Section**: 4-phase sequential engineering pipeline with connecting timeline gradient line and phase deliverables.
   - **Testimonials Section**: Interactive carousel with verified quantitative outcome metrics, client attribution, and quotes.
   - **Pricing Section**: 3 responsive tiers (*Starter*, *Professional* [Recommended], and *Enterprise*) with Monthly / Annual billing switcher (-20% discount calculation).
   - **Contact Section**: Full client-side form validation (required checks, email regex, character minimums), simulated async submission state, and confirmation feedback banner.
   - **Footer**: Brand statement, quick links, capabilities index, validated newsletter subscription, and smooth back-to-top button.

3. **Design System & Aesthetics**
   - **Theme**: Premium dark obsidian aesthetic (`#030712`) with vibrant indigo, purple, and electric cyan gradients.
   - **Full Light / Dark Mode Toggle**: Instant switching with CSS class synchronization and `localStorage` state persistence.
   - **Anti-Slop Discipline**: Zero static pills on metadata, clean editorial numbering, and strict single-elevation cards.

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Motion / Framer Motion
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)

---

## 💻 Local Setup & Execution

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with Plus Jakarta Sans & JetBrains Mono
├── package.json                 # Project dependencies and build scripts
├── metadata.json                # AI Studio application metadata
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite & Tailwind configuration
├── README.md                    # Project documentation
└── src/
    ├── main.tsx                 # React application mounting point
    ├── App.tsx                  # Master application orchestrator & theme state
    ├── index.css                # Tailwind CSS v4 setup & custom utilities
    ├── types/
    │   └── index.ts             # TypeScript interfaces for projects, services, plans
    ├── data/
    │   └── mockData.ts          # Authentic project data, metrics, and copy
    ├── assets/
    │   └── images/              # High-fidelity generated imagery
    └── components/
        ├── Navbar.tsx           # Fixed header, scroll progress bar & mobile drawer
        ├── Hero.tsx             # Hero section with headline and visual showcase
        ├── About.tsx            # Company overview & animated statistics counters
        ├── Services.tsx         # Interactive capability cards with tech stack
        ├── Projects.tsx         # Filterable portfolio grid
        ├── ProjectModal.tsx     # In-depth case study inspector modal
        ├── ScrollProcess.tsx    # Scroll animation & 4-step engineering process
        ├── Testimonials.tsx     # Interactive testimonial carousel with metric tags
        ├── Pricing.tsx          # 3-tier pricing cards with monthly/annual toggle
        ├── Contact.tsx          # Validated contact form & submission feedback
        └── Footer.tsx           # Footer with newsletter and back-to-top link
```

---

## 📜 License
Apache-2.0
