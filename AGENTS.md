# SRH — Safe Reach for Elevators

## Repo layout: two parallel apps
- Root is a stock Vite + React 19 + TS scaffold (`src/App.tsx` is still the untouched Vite demo; no router). Only deps: `react`, `react-dom`.
- `SRH-main/` holds the real product: the static multi-page SRH site (HTML + Tailwind + vanilla JS). The root `index.html` (Vite) and `SRH-main/index.html` are different files — confirm which app you're editing.

## SRH-main (static site)
- Tailwind 3.4.17 via CDN (`cdn.tailwindcss.com`) + `js/tailwind-config.js`, loaded at runtime in every page. No Tailwind build step.
- Custom palette `navy`/`slate`/`gold` with fractional shades (`navy-4`, `slate-1.5`, `gold-5`) exists only through that config; those utilities won't resolve on the Vite side.
- Pages: `index|about|services|projects|project|agents|faq|contact|maintenance.html`, plus anchors `index.html#values` / `#vision`.
- Header/footer are injected client-side by `js/site-shell.js` into `[data-site-header]` / `[data-site-footer]`; active nav item comes from `body[data-page]`.
- Interactivity follows one pattern: a guarded `init*` function per feature (no-op if its DOM element is missing), bootstrapped in `js/main.js`. Follow this when adding features.
- `js/file-fallback.js` is a separate ES5 IIFE duplicating the shell for `file://` opens. Keep it in sync when changing `main.js` / `site-shell.js`.
- Dark mode: `dark` class on `<html>`, persisted under `srh-theme` in localStorage. Each page `<head>` has a pre-paint script that must run before CSS.

## Commands (root)
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck is part of build; no standalone typecheck script)
- `npm run lint` — `eslint .`
- No test framework configured.

## TypeScript rules (src/)
- `verbatimModuleSyntax`: use `import type` for type-only imports.
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties.
- `noUnusedLocals` / `noUnusedParameters` are on.
