# Animation Stack Research — Skills-hub-ad-website-2

**Audience:** Budget holders in mid-sized multi-family residential property management businesses
**Site purpose:** Consulting services — AI, automation, business change, centralization support, change impact assessment
**Primary CTA:** Discovery call
**Stack:** Next.js + React + Tailwind CSS

---

## Stack overview

The recommended animation stack is organized into three tiers based on impact-to-effort ratio for this specific audience and use case. A fourth tier covers a forward-looking native browser capability worth adopting as progressive enhancement.

---

## Foundation layer — high impact, proven ROI

### 1. Motion (formerly Framer Motion)

- **Package:** `motion`
- **Size:** ~18KB
- **Weekly downloads:** 8M+
- **GitHub stars:** 30k+

The primary animation engine. Declarative React API where animations live directly on components. Handles entrance/exit transitions, layout animations, gesture interactions, and shared layout animations between routes. This is what makes the hero section fade-stagger in, cards lift on hover, and page transitions feel polished. Works natively with Next.js App Router.

**Where it applies on this site:** Hero entrance stagger, card hover lifts, page-level transitions, CTA button micro-interactions, accordion/expand animations in FAQ or service detail sections.

### 2. GSAP + ScrollTrigger

- **Package:** `gsap`
- **Size:** ~25KB (core + ScrollTrigger plugin)
- **React hook:** `@gsap/react` (`useGSAP`)

Industry standard for timeline-based, scroll-driven storytelling. ScrollTrigger pins sections, scrubs animations to scroll position, and creates the "as you scroll, the story unfolds" narrative that keeps visitors engaged through the value proposition before reaching the CTA. The `useGSAP` hook handles cleanup properly in React Strict Mode.

**Where it applies on this site:** Features section reveal sequence, Philosophy/Protocol sections that build a narrative on scroll, parallax depth on background elements, pinned section transitions.

### 3. Lenis

- **Package:** `lenis`
- **Size:** 3KB
- **Maintainer:** darkroom.engineering

Smooth-scroll library that has become the 2026 industry standard. It fixes the jittery feel of native browser scrolling when paired with scroll-driven animations. Does not hijack the scrollbar or break `position: sticky`. The difference is subtle but visceral — it makes the entire site feel premium in a way the audience will register without consciously noticing.

**Where it applies on this site:** Global smooth scrolling wrapper. Pairs directly with GSAP ScrollTrigger for synchronized scroll-driven animation timing.

---

## Engagement layer — visitor attention and credibility

### 4. react-type-animation

- **Package:** `react-type-animation`
- **Size:** ~4KB

Typing effect ideal for the hero section to cycle through industry-specific pain points: "We help property managers *centralize operations* / *assess change impact* / *implement AI workflows*". Keeps the hero dynamic, communicates breadth of services, and gives a reason to linger. More engaging than static text for a consulting value proposition.

**Where it applies on this site:** Hero subheadline, rotating through 3–5 service-specific value propositions that speak directly to multi-family property management pain points.

### 5. react-countup

- **Package:** `react-countup`
- **Size:** ~6KB

Animated number counters triggered on scroll into view. This is the social proof section: metrics like properties transformed, average cost reduction percentage, implementation timeline. Animated numbers feel more credible than static ones. Lightweight, well-maintained, configurable easing.

**Where it applies on this site:** A dedicated metrics/social proof strip between major content sections — ideally between Features and Philosophy, or as part of a "results" section above the final CTA.

### 6. tailwindcss-motion

- **Package:** `tailwindcss-motion`
- **Runtime size:** 0KB (compiles to CSS)
- **Companion:** `tailwindcss-intersect` for scroll-triggered variants

A Tailwind plugin that adds animation utility classes directly in markup. Classes like `motion-preset-fade-lg`, `motion-delay-200` add entrance animations without writing keyframes or importing a runtime library. Since the project is already on Tailwind, this slots in with zero architectural changes.

**Where it applies on this site:** Card entrance animations, feature icon reveals, subtle fade-ins on scroll for text blocks. Handles the bulk of "things appearing nicely" without touching JS.

---

## Differentiation layer — memorable and distinctive

### 7. Lottie / dotLottie

- **Package:** `@lottiefiles/dotlottie-react`
- **Size:** ~50KB (player runtime)

Vector animations exported from After Effects as tiny JSON files (1/10th the size of GIFs). Use for animated service icons (a gear turning into a workflow), loading states, and section illustrations that bring process diagrams to life. LottieFiles has a large free library, and the dotLottie format supports hover-to-play state machines without code. This is where the site differentiates from competitors using stock photography.

**Where it applies on this site:** Service offering icons in the Features section, animated process flow illustration in the Protocol section, subtle background accents in the Philosophy section.

### 8. Rive

- **Package:** `@rive-app/react-webgl2`
- **Capability:** Interactive animations with built-in state machines

SaaS and consulting sites are increasingly using Rive for hero sections that respond to cursor position or scroll. For this site, this could be an animated visualization of a property management workflow that transforms as visitors explore — a "before centralization" state morphing into "after." Higher effort than Lottie but significantly more impressive. Requires a designer or learning the Rive editor.

**Where it applies on this site:** Hero background interactive visualization, or a dedicated "how it works" interactive section. Consider this a Phase 2 investment after the foundation is solid.

### 9. AutoAnimate

- **Package:** `@formkit/auto-animate`
- **Size:** ~2KB

One-line animation for any DOM mutation — items appearing, disappearing, or reordering. Apply `useAutoAnimate()` to a parent ref and its children automatically animate in/out. Zero configuration.

**Where it applies on this site:** Features grid filtering, testimonial carousel transitions, FAQ accordion, CommunityGallery card transitions.

---

## Future-proof layer

### 10. CSS Scroll-Driven Animations (native browser API)

- **Package:** None — native CSS
- **Size:** 0KB
- **Support:** Chrome 115+, growing cross-browser adoption

The `animation-timeline: scroll()` and `view-timeline` CSS properties bind any CSS animation to scroll position, running on the compositor thread (hardware-accelerated, zero jank). Worth using as progressive enhancement for simple parallax and reveal effects — they work alongside GSAP for visitors on supported browsers and gracefully degrade.

**Where it applies on this site:** Subtle parallax on background elements, progress indicators, fade-in reveals as a CSS-only fallback layer beneath the JS-driven animations.

---

## Best practices

### Hover and micro-interaction timing

Use subtle, short-duration animations (150–300ms) for hover states on buttons or cards. This range is fast enough to feel responsive without creating lag or distraction. Apply these consistently across all interactive elements — CTA buttons, service cards, navigation links, and any clickable surface.

### Hero-first, motion-second

Reserve more elaborate motions (scroll-reveals, Lottie illustrations, animated counters) for sections below the hero. The discovery-call CTA must remain the first visual focal point. The hero should load clean and fast with only the typed text animation and a staggered fade-in on the headline and CTA button. Heavier scroll-driven narratives and illustrated animations belong in Features, Philosophy, and Protocol sections where the visitor is already engaged and scrolling with intent.

### Interaction-gated motion

Leverage Tailwind's `hover:` and `focus:` variants in combination with the above libraries to add motion only when the user interacts. This avoids distraction on passive scan-throughs. A budget holder skimming the page should see a clean, professional layout. The moment they hover a card or focus a button, the motion rewards their engagement without competing for attention during the initial scan.

### Performance and accessibility

- Wrap all continuous animations in `@media (prefers-reduced-motion: no-preference)` to respect user accessibility settings.
- Keep total animation JS payload under 55KB (Motion + GSAP + Lenis + type-animation + countup combined).
- Lenis and GSAP ScrollTrigger should be initialized in a single layout-level provider to avoid duplicate scroll listeners.
- Lazy-load Lottie/Rive assets below the fold — they should not affect initial page load or Largest Contentful Paint.

### CTA protection

Every animation decision should be tested against one question: does this move attention toward or away from the discovery call? Animated backgrounds, particle effects, and aggressive parallax pull focus. Purposeful entrance staggers, subtle hover feedback, and scroll-driven narrative pacing push focus toward the CTA. If an animation doesn't serve the conversion path, cut it.

---

## Implementation priority

**Sprint 1 (foundation):** Install Motion, GSAP + ScrollTrigger, Lenis, tailwindcss-motion. Wire up global smooth scrolling, hero entrance stagger, section scroll-reveals, and CTA hover states.

**Sprint 2 (engagement):** Add react-type-animation to the hero, react-countup to a social proof section, and tailwindcss-intersect for scroll-triggered utility animations on cards and text blocks.

**Sprint 3 (differentiation):** Source or create Lottie animations for service icons and process illustrations. Add AutoAnimate to dynamic list/card sections. Evaluate Rive for an interactive hero or "how it works" section.

**Ongoing:** Adopt CSS Scroll-Driven Animations as browser support widens, progressively replacing JS-driven parallax and simple reveals with native CSS equivalents.
