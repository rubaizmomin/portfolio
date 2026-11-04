# Portfolio Content Updates

## Purpose
Use this skill when updating the personal portfolio with new professional experience, achievements, education, or project details.

## Primary editing targets
- `src/components/portfolio/ExperienceSection.tsx` for work history
- `src/components/portfolio/ProjectsSection.tsx` for project highlights
- `src/components/portfolio/AboutSection.tsx` for personal summary
- `src/components/portfolio/EducationSection.tsx` for education entries
- `src/components/portfolio/ContactSection.tsx` for contact details

## Content rules
- Keep descriptions concise, factual, and outcome oriented.
- Prefer metrics and impact when available.
- Match the existing tone of the portfolio: polished, professional, and modern.
- Keep formatting consistent with existing arrays and JSX patterns.
- Use root-relative image paths for public assets like `/logo.png`.

## Best practices
- Add company logos in `public/` when available.
- Preserve responsive layout and card styling.
- Keep text readable and avoid overloading sections with too much content.
- Prefer small, targeted edits over broad redesigns.

## Validation
Run this before finishing:
- `npm run build`

If the change is content-only and the build passes, the update is acceptable.

## Example workflow
1. Add/update the data object in the relevant section component.
2. Add any new asset to `public/` if needed.
3. Check for layout issues or broken paths.
4. Run `npm run build`.
5. Submit the change.
