# SRH — Convert static site (SRH-main/) to React

Goal: port the static multi-page site in `SRH-main/` into React pages + components using Vite, react-router-dom, and Tailwind 4. Keep `SRH-main/` as reference; do not delete.

## Milestone 1 — Setup: Tailwind 4 + Router + assets
- [x] Install dependencies: `react-router-dom`, `tailwindcss`, `@tailwindcss/vite`
- [x] Add `tailwindcss()` plugin to `vite.config.ts`
- [x] Replace `src/index.css` with Tailwind 4 CSS-first setup (`@import "tailwindcss";`)
- [x] Add class-based dark mode: `@custom-variant dark (&:where(.dark, .dark *));`
- [x] Port navy/slate/gold color scales into `@theme` (`--color-navy-*`, `--color-slate-*`, `--color-gold-*`)
- [x] Port Poppins fonts into `@theme` (`--font-sans`, `--font-heading`)
- [x] Merge `SRH-main/css/style.css` custom classes into `src/index.css`
- [x] Rewrite `@font-face` URLs from `../assets/fonts/` to `/assets/fonts/`
- [x] Copy `SRH-main/assets/` to `public/assets/`
- [x] Remove Vite demo content (`App.css`, demo markup, unused demo assets)
- [x] Verify: `npm run build` passes; dotted utilities (`text-slate-1.5`, `bg-gold-5`) generate (fallback: explicit `@utility` definitions)

## Milestone 2 — Shared layout, hooks, data
- [x] Create `useTheme` hook (dark mode + `srh-theme` localStorage; pre-paint sync in `index.html`)
- [x] Create `useReveal` hook / `Reveal` wrapper (IntersectionObserver, replaces `reveal.js`)
- [x] Create `ToastProvider` + `useToast` (replaces `toast.js`, used by forms + lang toggle)
- [x] Build `Header` component (logo, nav, search toggle, contact, lang, theme, mobile menu; replaces `site-shell.js`/`nav.js`/`theme.js`)
- [x] Build `Footer` component (menu, links of interest, contact, socials, copyright)
- [x] Build `Layout` (Header + Outlet + Footer + Toast + skip-link)
- [x] Build `PageHero` (shared hero for services/projects/project/agents/faq/contact/maintenance)
- [x] Build `ScienceStrip` (shared "Science and Technology" band)
- [x] Create data modules: `navigation.ts`, `testimonials.ts`, `projects.ts`, `faqs.ts`, `agents.ts`, `branches.ts`

## Milestone 3 — Shared UI components
- [x] Build `SectionKicker` (kicker + title pattern)
- [x] Build `SplitSection` (image + text two-column block)
- [x] Build `StatBand` (108 / 201679 / +200 stats)
- [x] Build `ContactForm` (shared: index, faq, contact; submit → toast)
- [x] Build `MapEmbed` (Google map on home; OpenStreetMap on faq/contact)
- [x] Build `SupportCardGrid` (detail cards, reused on services + maintenance)
- [x] Build `ServiceColumns` (3-column service lists, reused on services + maintenance)
- [x] Build `FaqAccordion` (replaces `faq.js`)
- [x] Build `AgentBand` (agents page)
- [x] Build `ProjectCard` + `ProjectGrid` (tabs + filter, replaces `projects.js` tabs)
- [x] Build `ProjectGallery` (main image + thumbnails, replaces `projects.js` gallery)

## Milestone 4 — Home page sections
- [x] Build `HomeHero`
- [x] Build `AboutOverview`
- [x] Build `FutureSection`
- [x] Build `VisionSection`
- [x] Build `ProjectsStrip`
- [x] Build `Testimonials` (carousel, replaces `testimonials.js`)
- [x] Build `MaintenanceSection`
- [x] Build `AgentsPreview`
- [x] Build `ContactSection`
- [x] Build `BranchesSection`
- [x] Assemble `HomePage` (includes `#values` / `#vision` anchor targets)

## Milestone 5 — About page sections
- [x] Build `AboutHero` (with stat band)
- [x] Build `CompanyOverview`
- [x] Reuse `FutureSection` / `VisionSection`
- [x] Build `SafeWay` (bullet list)
- [x] Build `Achievements` (top-10 manufacturer years)
- [x] Assemble `AboutPage`

## Milestone 6 — Content pages
- [x] Assemble `ServicesPage`
- [x] Assemble `ProjectsPage` (tabs + grid + pagination)
- [x] Assemble `ProjectDetailsPage` (route `/projects/:id`, gallery + specs)
- [x] Assemble `AgentsPage`
- [x] Assemble `FaqPage` (accordion + contact section)
- [x] Assemble `ContactPage` (hero with support number, form + office image + map)
- [x] Assemble `MaintenancePage`

## Milestone 7 — Routing + integration
- [x] Wire routes in `App.tsx`: `/`, `/about`, `/services`, `/projects`, `/projects/:id`, `/agents`, `/faq`, `/contact`, `/maintenance`
- [x] Mount providers (Theme + Toast) in `main.tsx`
- [x] Convert all `*.html` links to `<Link>`/`<NavLink>`; active nav from route
- [x] Add scroll-to-top on route change; handle `#values` / `#vision` scrolling

## Milestone 8 — Verification
- [x] `npm run lint` passes
- [x] `npm run build` passes (includes `tsc -b`)
- [x] Dev-server spot-check every route vs. static originals
- [ ] Verify dark mode toggle persists and applies on every page
- [x] Verify dotted color utilities resolve in built CSS
- [ ] Verify custom-CSS pages (services/projects/faq/etc.) render correctly under global preflight
- [x] Confirm `SRH-main/` left untouched as reference
