# AGENTS.md

This repository is a Vite + React + TypeScript portfolio site for a software engineer.

## Project goals
- Keep the portfolio polished, lightweight, and easy to maintain.
- Showcase professional experience, projects, education, skills, and contact information.
- Prefer clean, reusable React components and Tailwind styling.

## Working conventions
- Use TypeScript for new code.
- Keep component logic simple and readable.
- Prefer updating existing section files in `src/components/portfolio` when making content changes.
- Use static assets from `public/` for logos and images.
- Preserve the existing visual design language: glass cards, accent color treatments, and subtle motion.

## Common commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build check: `npm run build`
- Lint check: `npm run lint`

## File map
- `src/App.tsx` — page composition
- `src/components/portfolio/*` — portfolio section content
- `src/index.css` — global styling and theme tokens
- `public/` — static images, resume, and marketing assets

## Editing guidance
- When adding experience entries, update the data array in `src/components/portfolio/ExperienceSection.tsx`.
- When adding or changing company logos, place the image in `public/` and reference it with a root-relative path like `/company-logo.png`.
- Keep descriptions concise, results-focused, and consistent with the current portfolio tone.
- Validate with `npm run build` after substantial UI or content changes.

## Quality bar
- Do not break the TypeScript build.
- Do not introduce lint issues or invalid JSX.
- Preserve accessibility, responsive layout, and motion behavior.
- Prefer minimal, targeted edits over broad refactors.
