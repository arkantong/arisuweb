# Project instructions

Use the existing checkout. Cloud tasks already run in an isolated environment; do not create a Git worktree unless the user explicitly asks for one.

## Setup

- Use Node.js 22 or newer and Python 3.10 or newer for the installed skill helpers.
- Run `npm ci`, then `npm run setup:skills` from this repository.
- This repository currently contains dependencies and AI skills. It has no application, development server, or application build command yet.

## Project skills

- For a requested Design DNA workflow, read `.agents/skills/design-dna/SKILL.md` and its referenced resources.
- For a requested Genjutsu workflow, read `.agents/skills/genjutsu/SKILL.md`. This is a complete bundle; its pipelines and modules use `GUIDE.md` internally.
- When loading Genjutsu on a host other than Claude Code, set `GENJUTSU_BUNDLE_DIR` to the absolute path of `.agents/skills/genjutsu` as its router describes. Preserve the resolved module paths in the same shell call as each loader.
- Treat these files as project skills, not npm runtime dependencies. Installation does not establish that a host supports every workflow. See `SKILLS.md` for compatibility and checks.
