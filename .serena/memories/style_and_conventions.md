# Style & Conventions

## Code Style
- **Components:** Functional components with default exports
- **File format:** `.jsx` (not TypeScript)
- **Naming:** PascalCase for components, camelCase for functions/variables
- **Imports:** Named imports from libraries, default imports for local components
- **Styling:** Tailwind utility classes inline (no separate CSS modules except index.css for globals)
- **No semicolons or specific linter enforced** (no ESLint/Prettier config found)

## Design Conventions
- Dark theme with charcoal (#142F40) background
- Gold/clay (#DCAE1D) as accent color
- Space Grotesk as primary typeface
- GSAP for scroll-triggered and entrance animations
- Rounded corners (4xl/5xl border-radius tokens)

## Task Completion
- Run `npm run build` in ad-website-2/ to verify no build errors
- Test visually with `npm run dev`
- Commit changes with descriptive messages
