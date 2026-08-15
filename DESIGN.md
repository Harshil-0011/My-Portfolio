---
name: Universal Design System (UDS) Master Spec
version: 3.1.0
author: Universal Web & AI Architecture Lab
description: Universal, project-agnostic design specification for AI coding agents (Claude, Cursor, v0, Bolt, Jules, GPT-4o) to generate distinctive, high-end web applications across any project archetype without AI slop or generic boilerplate.
---

# 🌐 UNIVERSAL DESIGN SYSTEM (UDS) MASTER SPECIFICATION

> **CRITICAL MANDATE FOR ALL AI CODING AGENTS (Claude, Cursor, v0, Bolt, Jules, GPT-4o, Windsurf):**
> Read and strictly enforce this entire document when generating layout structures, UI components, color palettes, animations, and stylesheets for ANY project.
>
> ⛔ **THE ANTI-AI-SLOP DIRECTIVE:**
> - **NEVER** generate generic white cards with soft fuzzy drop shadows on plain gray backgrounds.
> - **NEVER** use generic purple-to-blue default gradients (`from-purple-500 to-blue-500`).
> - **NEVER** rely on standard symmetrical 3-column grid repeats (`grid-cols-3`) for feature showcases without asymmetric visual anchors.
> - **NEVER** use `transition-all duration-300` as a lazy fallback—use specific accelerated transform/opacity transitions and precise cubic-bezier curves.
> - **NEVER** compromise on typography pairing or tabular numeric alignment.

---

## 📐 TABLE OF CONTENTS
1. [Foundational Laws & Engineering Constraints](#1-foundational-laws--engineering-constraints)
2. [Frosted Glass & Depth Architecture](#2-frosted-glass--depth-architecture)
3. [Multi-Archetype Design Matrix (The 6 Voices)](#3-multi-archetype-design-matrix-the-6-voices)
4. [Universal Color Architecture (Cloud & Stealth Tokens)](#4-universal-color-architecture-cloud--stealth-tokens)
5. [Typography Hierarchy & Font Strategy](#5-typography-hierarchy--font-strategy)
6. [Layout Engine, Responsive Grids & Asymmetry](#6-layout-engine-responsive-grids--asymmetry)
7. [Elevation, Z-Index & Atmospheric Surface Treatments](#7-elevation-z-index--atmospheric-surface-treatments)
8. [Component Specifications & Blueprints](#8-component-specifications--blueprints)
9. [Physics, Motion Timing & Micro-Interactions](#9-physics-motion-timing--micro-interactions)
10. [Explicit DOs and DON'Ts Directive](#10-explicit-dos-and-donts-directive)
11. [Accessibility, Performance & Reduced Motion](#11-accessibility-performance--reduced-motion)
12. [Universal CSS Variables Engine (`:root`)](#12-universal-css-variables-engine-root)
13. [AI Prompting Templates & Execution Instructions](#13-ai-prompting-templates--execution-instructions)

---

## 1. FOUNDATIONAL LAWS & ENGINEERING CONSTRAINTS

### 1.1 The 4px Baseline Grid (Strict Requirement)
- **Rhythm**: All margins, paddings, gaps, heights, and element offsets **MUST** be exact multiples of `4px` (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Line-Height Vertical Alignment**: Font sizes and line-heights must resolve to exact 4px multiples:
  - Font 14px → Line Height `20px` (1.428)
  - Font 16px → Line Height `24px` (1.500)
  - Font 24px → Line Height `32px` (1.333)
  - Font 48px → Line Height `56px` (1.166)

### 1.2 Layout Shift & Scrollbar Rules
- **Stable Layouts**: Always apply `scrollbar-gutter: stable;` and `overflow-y: auto;` on main viewports, dashboards, and scrollable modals to eliminate horizontal layout shifts when scrollbars appear or disappear.
- **Scrollbar Styling / Hiding**:
  - Interactive containers requiring scroll position awareness must use custom styled 4px micro-scrollbars.
  - Aesthetic sections (e.g., hero carousels, full-bleed horizontal sliders) may use the `.no-scrollbar` class:
  ```css
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  ```

### 1.3 Container Queries First
For component-driven UI architecture, prefer CSS Container Queries (`@container`) over standard viewport media queries (`@media`). Components must adapt based on their parent container's width, making them modular across sidebars, modals, and main content feeds.
```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 420px) {
  .card-inner {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 16px;
  }
}
```

---

## 2. FROSTED GLASS & DEPTH ARCHITECTURE

Glassmorphism is the primary visual technique for structural surfaces across all archetypes, providing tactile depth and spatial hierarchy.

### 2.1 Universal Glass CSS Implementation
```css
/* Base Glass Surface */
.uds-glass {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: background 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Glass Hover State */
.uds-glass-interactive:hover {
  background: rgba(15, 23, 42, 0.75);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35), 0 0 20px rgba(255, 255, 255, 0.05);
}
```

### 2.2 Glass Depth Hierarchy
- **Level 1 (Subtle Surface):** `blur(12px)` — Feed cards, inline panels, table rows, footer containers.
- **Level 2 (Elevated Layer):** `blur(24px)` — Floating navigation bars, sticky headers, dropdown menus, slide-overs.
- **Level 3 (Modal / Hero Overlay):** `blur(40px)` — Full-screen dialogs, hero spotlights, command palettes (`Cmd+K`).

---

## 3. MULTI-ARCHETYPE DESIGN MATRIX (THE 6 VOICES)

Choose **EXACTLY ONE** archetype per project. All archetypes inherit the 4px baseline grid and glass architecture, but interpret tone, typography, color accents, and geometry differently.

| Archetype | Persona & Voice | Canvas Theme | Key Accent | Display Font | Body Font | Mono Font | Radius | Glass Blur | Section Rhythm |
|---|---|---|---|---|---|---|---|---|---|
| **1. Tactical Cypher** | Sci-Fi, Autonomous, High-Density | Pitch Dark (`#030712`) | Neon Cyan (`#22D3EE`) & Hazard Orange (`#FF3300`) | Space Grotesk | Inter | JetBrains Mono | 2px – 4px | 24px (Crisp) | 96px |
| **2. Corporate Precision** | Institutional, Data-Driven, Authoritative | Slate Dark (`#0A0F1D`) or Crisp Light (`#FAFAFA`) | Cobalt Blue (`#1C69D4`) & Emerald (`#10B981`) | IBM Plex Sans | Inter | IBM Plex Mono | 0px (Sharp) | 12px (Min) | 80px |
| **3. Editorial Luxe** | Literary, Quiet Luxury, Refined | Warm Cream (`#FAF9F5`) or Obsidian (`#0F0F0F`) | Terracotta (`#CC785C`) & Gold Leaf (`#D4AF37`) | Playfair Display / Cormorant | DM Sans | Fira Code | 12px | 16px (Soft) | 96px |
| **4. Developer Tooling** | Command Line, Utilitarian, Fast | Matrix Obsidian (`#0D1117`) | Cyber Green (`#22C55E`) & Amber (`#F59E0B`) | JetBrains Mono | Inter | JetBrains Mono | 6px | 12px (Dense) | 80px |
| **5. Modern Productivity** | Clean Workspace, Zero-Chrome | Warm Slate (`#0F172A`) or Paper (`#F7F7F5`) | Electric Indigo (`#6366F1`) | Plus Jakarta Sans | Inter | Geist Mono | 8px | 16px (Clean) | 80px |
| **6. Consumer Lifestyle** | Vibrant, Expressive, High Energy | Deep Midnight (`#090D16`) | Solar Orange (`#FF5B32`) & Coral | Outfit | Outfit | Space Mono | 16px – 24px | 32px (High) | 96px |

---

## 4. UNIVERSAL COLOR ARCHITECTURE (CLOUD & STEALTH TOKENS)

### 4.1 Stealth / Dark Engine Palette (Default High-Contrast)
```yaml
canvas: "#030712"             # Deep Pitch Base
surface_card: "#0F172A"        # Card Level 1 Background
surface_elevated: "#1E293B"    # Elevated Level 2 Background
surface_border: "#1E293B"      # Hairline Dividers
border_glow: "rgba(34, 211, 238, 0.2)" # Subtle Accent Glow

primary_accent: "#22D3EE"      # Main CTA & Active Trigger
secondary_accent: "#8B5CF6"    # Neural / AI / Secondary Feature
hazard_accent: "#FF3300"       # High-priority callout / status
success_accent: "#10B981"      # Verification / Positive metrics

text_primary: "#F8FAFC"        # 100% Legibility Headlines
text_secondary: "#94A3B8"      # Paragraph Body Text
text_muted: "#64748B"          # Metadata, Labels, Timestamps
```

### 4.2 Cloud / Light Engine Override Palette
```yaml
canvas: "#FAFAFA"             # Clean Off-White Canvas
surface_card: "#FFFFFF"        # Card Level 1 Background
surface_elevated: "#F1F5F9"    # Elevated Level 2 Background
surface_border: "#E2E8F0"      # Crisp Hairline Dividers

primary_accent: "#0284C7"      # Deep Royal Blue
secondary_accent: "#7C3AED"    # Deep Violet
text_primary: "#0F172A"        # High Contrast Ink
text_secondary: "#334155"      # Muted Charcoal Body
```

---

## 5. TYPOGRAPHY HIERARCHY & FONT STRATEGY

### 5.1 Universal Type Scale
- **Display XL (Hero Headlines):** `clamp(36px, 5vw, 64px)` | Line Height: `1.1` | Weight: `700/800` | Letter Spacing: `-0.02em`
- **Display LG (Section Banners):** `clamp(28px, 3.5vw, 44px)` | Line Height: `1.2` | Weight: `700` | Letter Spacing: `-0.01em`
- **Title LG (Card Titles):** `20px` – `24px` | Line Height: `28px` – `32px` | Weight: `600`
- **Body MD (Primary Body):** `16px` | Line Height: `24px` (1.5) | Weight: `400`
- **Body SM (Secondary Body):** `14px` | Line Height: `20px` (1.42) | Weight: `400`
- **Caption / Mono HUD:** `12px` | Line Height: `16px` | Weight: `500` | Letter Spacing: `0.05em` (UPPERCASE)
- **KPI Numeric Value:** `clamp(32px, 4vw, 56px)` | Font: `font-mono tabular-nums` | Weight: `600`

### 5.2 Numeric & Code Alignment Rules
- **ALWAYS** set `font-mono tabular-nums` on financial figures, timestamps, counters, coordinates, and table columns so digits maintain identical character widths during dynamic state changes.
- Headline copy must use `text-wrap: balance` to eliminate awkward single-word typographic widows. Long paragraph copy must use `text-wrap: pretty`.

---

## 6. LAYOUT ENGINE, RESPONSIVE GRIDS & ASYMMETRY

### 6.1 Avoiding the "AI Symmetrical Fingerprint"
Standard AI outputs overuse `grid-cols-1 md:grid-cols-3`. To create memorable, custom layout compositions, implement **Asymmetric Bento Grids**:

```html
<!-- Asymmetric Bento Showcase Pattern -->
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Focal Feature (Span 8) -->
  <div class="lg:col-span-8 uds-glass p-8 rounded-2xl relative overflow-hidden">
    <div class="font-mono text-xs text-cyan-400 mb-2">[ FEATURE SPOTLIGHT // 01 ]</div>
    <h3 class="text-2xl font-bold text-slate-100 mb-4">Core Autonomous Engine</h3>
    <p class="text-slate-400 max-w-xl text-base leading-relaxed">
      High-density parallel processing pipeline with real-time vector indexing.
    </p>
  </div>

  <!-- Secondary HUD Widget (Span 4) -->
  <div class="lg:col-span-4 uds-glass p-6 rounded-2xl flex flex-col justify-between">
    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
      <span class="font-mono text-xs text-slate-400">SYSTEM HEALTH</span>
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
    </div>
    <div class="font-mono text-4xl text-slate-100 my-6 tabular-nums">99.98%</div>
    <div class="text-xs text-slate-500">Latency: <span class="text-cyan-400 font-mono">12ms</span></div>
  </div>
</div>
```

---

## 7. ELEVATION, Z-INDEX & ATMOSPHERIC SURFACE TREATMENTS

### 7.1 Z-Index Scale
```yaml
z_base: 0          # Main canvas content
z_raised: 10       # Interactive hover elements
z_dropdown: 100    # Tooltips, autocomplete menus
z_sticky: 200      # Top floating navigation bar
z_overlay: 500     # Backdrop blurs for dialogs
z_modal: 600       # Popups, main modals, drawer windows
z_toast: 9000      # Floating system notifications
z_cursor: 9999     # Custom cursor trail / dot
```

### 7.2 Atmospheric Background Texture Patterns
To prevent sterile dark voids, introduce structural background textures behind glass layers:
- **Matrix Grid Lines:**
  `bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]`
- **Ambient Glowing Orbs:** Blurred background SVG/CSS radial gradients (`w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none`).

---

## 8. COMPONENT SPECIFICATIONS & BLUEPRINTS

### 8.1 Floating Glass Navigation Bar
- **Position**: Sticky/fixed at `top: 16px`, centered with `max-w-6xl mx-auto`.
- **Styling**: `uds-glass rounded-full px-6 py-3 flex items-center justify-between`.
- **Elements**: Brand logo, monospaced nav links with cyan underline active indicators, theme/language pills, CTA action button.

### 8.2 Interactive Form Controls
- **Inputs**: `bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all outline-none`.
- **Validation**: Error states use `#FF3300` borders with monospaced helper messages below the field.

### 8.3 Buttons & Interactive Triggers
- **Primary Button**: High contrast solid or gradient fill:
  `bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`
- **Secondary Ghost Button**: Translucent slate fill with crisp hairline border:
  `bg-slate-900/60 border border-slate-700 text-slate-200 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200`

---

## 9. PHYSICS, MOTION TIMING & MICRO-INTERACTIONS

### 9.1 Motion Easing Curves
- **Primary Snappy Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` (Responsive UI transitions)
- **Spring Entrance Ease:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (Bouncy dialogs & badges)
- **Exit Ease:** `cubic-bezier(0.4, 0, 1, 1)` (Quick modal dismissals)

### 9.2 Motion Standard Durations
- Hover Feedback: `150ms`
- Button Press / Active State: `75ms`
- Dropdown / Card Expansion: `250ms`
- Modal / Page Fade-In: `400ms`
- Stagger Delay between List Items: `50ms` per item (max total `300ms`).

---

## 10. EXPLICIT DOs AND DON'Ts DIRECTIVE

### ✅ DO (MANDATORY PRACTICES)
1. **DO** use semantic CSS tokens (`var(--uds-canvas)`, `var(--uds-cyan)`) instead of hardcoded arbitrary hex codes in component files.
2. **DO** enforce monospaced tabular figures (`font-mono tabular-nums`) on all numbers, pricing tables, KPI dashboards, and counters.
3. **DO** use asymmetric grid proportions (e.g., 8-col / 4-col split or 7-col / 5-col split) to create visual interest.
4. **DO** use hairline structural borders (`1px solid rgba(255, 255, 255, 0.08)`) combined with frosted glass (`backdrop-blur-md`) to separate UI surfaces.
5. **DO** provide explicit hover, focus-visible, and active button feedback states (`hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2`).
6. **DO** utilize micro-monospaced technical HUD chips (e.g., `[STATUS: VERIFIED]` or `// SEC_01`) to frame key content blocks.
7. **DO** apply `text-wrap: balance` to titles and `text-wrap: pretty` to body text paragraphs.
8. **DO** respect user system preferences (`prefers-reduced-motion` and `prefers-reduced-transparency`).

### ❌ DON'T (STRICTLY FORBIDDEN)
1. **DON'T** generate generic white cards with blurry drop-shadows on plain light gray backgrounds.
2. **DON'T** use default AI purple-to-blue gradients (`from-purple-500 to-blue-500`) without intentional branding reasons.
3. **DON'T** use `transition-all duration-300` as a blanket transition rule; explicitly target transformed properties (`transform, opacity`).
4. **DON'T** hide scrollbars on interactive containers where users need scroll position awareness (use `.no-scrollbar` only for hero carousels or full-bleed horizontal sliders).
5. **DON'T** bold body text paragraphs or overuse heavy font weights for long-form reading.
6. **DON'T** use pure `#000000` pitch black or pure `#FFFFFF` white as uniform solid card fills without subtle tinting or glass translucency.
7. **DON'T** create repetitive 3-column feature grids (`grid-cols-3`) without varying card sizes or adding focal visual anchors.
8. **DON'T** apply `will-change: backdrop-filter` globally—apply performance hints only to active animating elements.

---

## 11. ACCESSIBILITY, PERFORMANCE & REDUCED MOTION

- **Color Contrast**: All primary text against background surfaces must achieve a contrast ratio of at least `4.5:1` (WCAG AA Standard).
- **Touch Targets**: Mobile buttons and clickable icons must have a minimum interactive surface area of `44px × 44px`.
- **Reduced Motion Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 12. UNIVERSAL CSS VARIABLES ENGINE (`:root`)

```css
:root {
  /* 4px Base Grid Tokens */
  --uds-space-1: 4px;
  --uds-space-2: 8px;
  --uds-space-3: 12px;
  --uds-space-4: 16px;
  --uds-space-6: 24px;
  --uds-space-8: 32px;
  --uds-space-12: 48px;
  --uds-space-16: 64px;
  --uds-space-24: 96px;

  /* Color Palette Tokens */
  --uds-canvas: #030712;
  --uds-surface: #0F172A;
  --uds-surface-elevated: #1E293B;
  --uds-border: rgba(30, 41, 59, 0.8);

  --uds-cyan: #22D3EE;
  --uds-violet: #8B5CF6;
  --uds-hazard: #FF3300;
  --uds-emerald: #10B981;

  --uds-text-primary: #F8FAFC;
  --uds-text-secondary: #94A3B8;
  --uds-text-muted: #64748B;

  /* Typography Stacks */
  --uds-font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --uds-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --uds-font-display: 'Space Grotesk', 'Inter', sans-serif;

  /* Universal Transitions */
  --uds-ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --uds-transition-fast: 150ms var(--uds-ease-snappy);
  --uds-transition-normal: 250ms var(--uds-ease-snappy);
}
```

---

## 13. AI PROMPTING TEMPLATES & EXECUTION INSTRUCTIONS

When instructing an AI coding agent to generate code using this master specification, copy and paste this system prompt:

> **AI System Prompt for Universal Design System Compliance:**
> *"You are a world-class principal frontend engineer and creative technologist. You must follow the Universal Design System (UDS) Master Specification in `DESIGN.md`. Ensure every component generated adheres strictly to the 4px baseline grid, glassmorphic depth rules, asymmetric layout grid, monospaced tabular numeric styling, precise cubic-bezier easing curves, explicit DOs and DON'Ts, and non-generic color tokens. Never generate plain gray cards with generic shadows. Treat every UI component as a precision-engineered piece of software."*

---
