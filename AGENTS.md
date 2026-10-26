# Project instructions

Use the existing checkout. Cloud tasks already run in an isolated environment; do not create a Git worktree unless the user explicitly asks for one.

## Setup

- Use Node.js 22 or newer and Python 3.10 or newer for the installed skill helpers.
- Run `npm ci`, then `npm run setup:skills` from this repository.
- The app uses Next.js App Router, TypeScript, Tailwind CSS v4, and GSAP. Run `npm run dev` for development. Validate changes with `npm run lint`, `npm run typecheck`, and `npm run build`; run the production build with `npm start`.
- The page is the ARISU Creative company profile, based on the supplied 20-page deck. Do not invent company facts, services, clients, contact details, or testimonials. Gulo Bakes is a single case study. Use ARISU consistently; residual “lunch” text in the deck is not website copy. Read `docs/design/creative-direction.md` before visual changes.
- Keep browser-only animation code in client components and respect reduced-motion preferences. Keep page content server-rendered when it needs no client state. Tailwind scans `src/`, not vendored skill examples.

## Project skills

- For a requested Design DNA workflow, read `.agents/skills/design-dna/SKILL.md` and its referenced resources.
- For a requested Impeccable workflow, read `.agents/skills/impeccable/SKILL.md` and its referenced resources. `npm run setup:skills` prepares its engine from the locked npm platform package for both Codex and Claude Code. The install includes no automatic edit hooks.
- For a requested Genjutsu workflow, read `.agents/skills/genjutsu/SKILL.md`. This is a complete bundle; its pipelines and modules use `GUIDE.md` internally.
- When loading Genjutsu on a host other than Claude Code, set `GENJUTSU_BUNDLE_DIR` to the absolute path of `.agents/skills/genjutsu` as its router describes. Preserve the resolved module paths in the same shell call as each loader.
- Treat these files as project skills, not npm runtime dependencies. Installation does not establish that a host supports every workflow. See `SKILLS.md` for compatibility and checks.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
