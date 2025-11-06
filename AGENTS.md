# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router routes (`page.tsx`, `layout.tsx`), UI, and styles (`globals.css`).
- `public/`: Static assets (e.g., `*.svg`, icons). Served at the root path.
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- Build artifacts: `.next/` (ignored). Node deps: `node_modules/` (ignored).

## Build, Test, and Development Commands

- `npm run dev` - Start local dev server on http://localhost:3000.
- `npm run build` - Create an optimized production build into `.next/`.
- `npm run start` - Serve the production build (after `build`).
- `npm run lint` - Run ESLint with Next.js Core Web Vitals rules.

## Coding Style & Naming Conventions

- Language: TypeScript (strict). Prefer explicit types for exports and public APIs.
- Style: 2-space indent, semicolons, double quotes, ES modules.
- React: Components in PascalCase; hooks in `useX` camelCase. File names follow Next.js patterns: `page.tsx`, `layout.tsx`, `route.ts`.
- CSS: Tailwind via `@tailwindcss/postcss`. Keep class lists readable; group by layout -> spacing -> color.
- Imports: Use `@/*` alias when helpful per `tsconfig.json`.
- Formatting: Prettier enforced. Run `npm run format` to write changes, or `npm run format:check` in CI. Tailwind classes are auto-sorted via `prettier-plugin-tailwindcss`.
- SEO: Maintain `app/sitemap.ts`, `app/robots.ts`, and OpenGraph meta in `app/layout.tsx`. Set `NEXT_PUBLIC_SITE_URL` so absolute URLs resolve.

## Testing Guidelines

- No test runner is configured yet. When adding tests:
  - Prefer Vitest or Jest + React Testing Library.
  - Place tests alongside files (`Component.test.tsx`) or under `__tests__/`.
  - Aim for >= 80% coverage on new/changed code; test behavior, not implementation details.

## Commit & Pull Request Guidelines

- Commits: Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `test:`. Use scopes when useful (e.g., `feat(app):`).
- PRs: Clear title, summary of changes, linked issues (e.g., `Closes #123`), and screenshots/GIFs for UI changes.
- Quality gate: Ensure `npm run build` and `npm run lint` pass before requesting review.
- CI: Pull requests run `npm run lint` and `npm run format:check` via GitHub Actions.

## Security & Configuration Tips

- Secrets: Use `.env.local` (ignored by Git). Client-side vars must be prefixed `NEXT_PUBLIC_`.
- After env changes, restart the dev server. Never commit credentials or real API keys.
- Accessibility: Address ESLint Core Web Vitals/a11y warnings; prefer Next.js `<Image>` and `<Link>` where applicable.
