# Portfolio Website Maintenance

## Purpose
This skill helps maintain and extend the personal portfolio website in this repository.

## Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Repository overview
The app is a single-page portfolio built from section components under `src/components/portfolio`.

## Typical tasks
- Add new work experience entries
- Update projects or impact statements
- Tweak section styling or layout spacing
- Replace images or add assets to `public/`
- Improve accessibility and content clarity

## Editing rules
- Keep content factual and concise.
- Match the current tone of the portfolio: confident, professional, and modern.
- Use the existing component structure and not ad hoc page patterns.
- Prefer reusable arrays of data objects for sections like experience and projects.

## Validation
Before considering a change complete, run:
- `npm run build`

If the change is purely content and the build passes, it is usually sufficient for this project.

## Quick reference
- Experience section: `src/components/portfolio/ExperienceSection.tsx`
- Projects section: `src/components/portfolio/ProjectsSection.tsx`
- Skills section: `src/components/portfolio/SkillsSection.tsx`
- Global styles: `src/index.css`
- Static assets: `public/`

## Notes for future agents
- This repository is a portfolio, not a product app. Keep changes aligned with personal branding and professional presentation.
- Prefer editing content in place rather than introducing heavy architectural changes.
- Maintain mobile responsiveness and polished UI details.
