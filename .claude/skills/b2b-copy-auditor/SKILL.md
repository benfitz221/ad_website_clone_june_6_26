---
name: b2b-copy-auditor
description: >
  Audit and rewrite B2B website copy for consulting firms targeting mid-sized
  multifamily property management operators (B/C class, tight margins, skeptical
  of vendors, people-focused businesses). Uses Bob Bly's direct response principles
  and Joanna Wiebe's conversion copywriting methodology to score existing pages and
  generate alternate copy. Use this skill whenever the user mentions auditing website
  copy, reviewing landing page text, improving B2B messaging, rewriting headlines,
  scoring page copy, analyzing website conversion copy, or wants help making their
  consulting website more persuasive for property management or similar blue-collar
  B2B operator audiences. Also trigger when the user mentions Bly, Wiebe, VOC,
  voice of customer, conversion copywriting, copy audit, or the 4 U's formula.
---

# B2B Copy Auditor

Audit existing B2B consulting website copy page-by-page using principles from
Bob Bly (direct response) and Joanna Wiebe (conversion copywriting), tuned for
an audience of mid-sized multifamily property management operators running B/C
class portfolios.

---

## When This Skill Triggers

- User asks to audit, review, or score website copy
- User asks for copy rewrites or alternate headline/CTA suggestions
- User shares a URL or page content for copy feedback
- User references Bly, Wiebe, VOC, or conversion copywriting principles
- User wants to improve a B2B consulting website's messaging

---

## Target Audience Profile

Every audit and rewrite must be evaluated against this buyer:

- **Role:** Owner, COO, VP of Operations, or Regional Manager at a mid-sized
  multifamily residential property management company
- **Portfolio:** 200-2,000+ units, primarily B and C class
- **Mindset:** Margin-conscious, operationally focused, skeptical of outside
  vendors and consultants, values people over technology, has been burned by
  false promises before
- **Goals:** Expand portfolio without proportional headcount growth. Improve NOI.
  Systematize operations. Reduce vendor dependency and cost.
- **Fears:** Overextending. Hiring the wrong consultant. Wasting money on
  deliverables that sit in a drawer. Losing good site-level staff to burnout.
- **Language:** Uses industry terms (NOI, cap rate, per-unit cost, turn cost,
  lease-up, stabilized occupancy). Distrusts consultant-speak (synergy, leverage,
  holistic, paradigm, stakeholder alignment).
- **VOC Echo Phrases** (use as pattern-match references when actual VOC data is
  unavailable):
  - "Margins are tighter than they've ever been."
  - "We've heard every promise from tech vendors."
  - "We're a people business, not a software company."
  - "I can't justify another full-time regional just to grow."
  - "The last consultant gave us a binder that's been collecting dust."
  - "We need systems, but not at the expense of the people who actually run
    the properties."
  - "Show me it works on a B-class portfolio, not a luxury high-rise."
  - "If I'm spending money, I need to explain it to my partners."

---

## How to Use This Skill

### Step 1: Read the Reference Files

Before auditing any page, read these three files:

1. `references/bly-principles.md` — Bob Bly's B2B direct response frameworks
2. `references/wiebe-methodology.md` — Joanna Wiebe's conversion copywriting process
3. `references/audit-checklist.md` — Per-page scoring rubric

Read all three on first use. On subsequent pages in the same session, you may
skip re-reading unless you need to reference a specific framework.

### Step 2: Gather the Page Content

Ask the user which page they want to audit. Accept content in any of these forms:

- **A URL** — Use Serena MCP tools, browser tools, or `web_fetch` to pull the
  page content. Extract all visible text, headings, CTAs, navigation labels,
  meta title, and meta description.
- **Pasted text** — The user pastes the copy directly into chat.
- **A file** — The user uploads a document with the page content.
- **A screenshot** — Extract text from the image.

**Important:** Audit one page at a time. Do not attempt to audit an entire site
in a single pass. This prevents context window overload and produces better
results. After completing one page, offer to move to the next.

### Step 3: Run the Audit

For the target page, work through the following sequence:

#### 3a. Page Classification

Identify the page type and its job in the buyer journey:

| Page Type | Primary Job |
|-----------|-------------|
| Homepage | Qualify the visitor, establish credibility, route to deeper pages |
| Service Page | Present a specific offering, build the case, drive to contact |
| About Page | Build trust through team credibility and origin story |
| Case Study | Prove results with a specific, named example |
| Contact Page | Remove friction from the final conversion step |
| Blog/Resource | Educate, build authority, capture email |
| Landing Page | Single-purpose conversion for a specific campaign or offer |
| Bait Piece / Lead Magnet | Capture email by demonstrating expertise on a specific pain point (executive briefing, playbook, checklist) |

The page type determines which audit criteria are weighted most heavily. A
homepage is judged primarily on clarity and routing. A service page is judged
primarily on the Motivating Sequence and proof elements. A contact page is
judged primarily on zero-risk and CTA clarity.

#### 3b. Structural Scan

Before scoring individual elements, assess the page's overall structure:

1. **Map the Motivating Sequence** — Label each section of the page: is it
   performing Attention, Need, Solution, Proof, or Action? Which steps are
   missing?
2. **Count proof elements** — Testimonials, case studies, specific numbers,
   client logos, methodology descriptions, guarantees.
3. **Compute the you:we ratio** — Count instances of "you/your/you're" vs.
   "we/our/we're/I/us." Report the ratio.
4. **Identify the primary CTA** — What is the page asking the reader to do?
   Is it clear? Is it specific? Is it low-risk?
5. **Check for a credibility band** — Is there a compact proof strip (client
   logos + a short numeric testimonial) positioned immediately below the hero?
   This element is high-impact and most consulting sites either omit it or
   bury it mid-page.

#### 3c. Per-Section Scoring

Using the checklist from `references/audit-checklist.md`, score each section
(A through G). Provide the numeric score and brief notes for each item.

#### 3d. Generate the Audit Report

Present findings in this format:

```
## Page Audit: [Page Name]
### Page Type: [type]
### Overall Score: [X] / 156 ([percentage]%)

### Strengths
- [what's working, 2-4 bullets]

### Priority Fixes (items scoring 1 or 2)
For each fix:
1. [Item code] — [What's wrong]
   - Principle violated: [Bly or Wiebe principle name]
   - Current copy: "[exact text from the page]"
   - Suggested rewrite: "[new copy]"
   - Confidence: [High / Medium / Low]

### Secondary Improvements (items scoring 3 that could reach 4)
- [brief suggestions, no full rewrites unless requested]

### Structural Notes
- Motivating Sequence coverage: [which steps are present/missing]
- You:We ratio: [ratio]
- Proof element count: [number]
- Word count assessment: [sufficient / thin / bloated]
```

### Step 4: Offer Next Steps

After presenting the audit, offer these options:

1. **"Want me to rewrite the priority fixes?"** — Generate alternate copy for
   every item that scored 1 or 2, using Bly and Wiebe principles.
2. **"Want to audit another page?"** — Move to the next page. Ask which one.
3. **"Want me to generate a full rewrite of this page?"** — Produce a complete
   alternate version of the page copy, structured as a wireframe with section
   labels, headings, body copy, and CTAs.
4. **"Want a VOC research brief?"** — Generate a list of questions and data
   sources the user should mine to strengthen the copy with real customer language.

---

## Rewrite Guidelines

When generating alternate copy (for priority fixes or full rewrites):

### Headline Rewrites
- Test against Bly's 4 U's. Score must be 3+ on at least three U's.
- Must fit one of Bly's eight headline types (Direct, Indirect, News, How-to,
  Question, Command, Reason-why, Testimonial).
- Must use prospect language, not consultant language.
- Provide 2-3 options ranked by approach (e.g., "benefit-forward," "pain-forward,"
  "proof-forward").

### Body Copy Rewrites
- Follow the Motivating Sequence for service pages.
- Use PAS (Problem-Agitation-Solution) for sections that introduce a problem.
- Apply the FAB Pyramid: every feature must reach at least the advantage level.
  Benefits in headlines and subheads. Push hero copy toward Ultimate Benefits.
- Draft using the "You" technique: rewrite each line starting with "you/your,"
  then edit for flow. The final version doesn't need to literally start with
  "you" but the drafting step forces a reader-first perspective.
- Front-load all lines: the first 2-3 words of every headline, subhead, and
  bullet should be reader-relevant (margin, NOI, portfolio, vacancy, headcount).
- Use "even if" clauses to handle objections inline when writing benefit
  statements for a skeptical audience.
- Write in second person ("you"). First person ("we") only in proof and
  credibility sections.
- Sentences under 20 words where possible. Paragraphs under 4 sentences.
- Use industry language (NOI, per-unit cost, Class B/C). Avoid consultant jargon.

### CTA Rewrites
- Specific action, not generic. "Schedule a 15-minute portfolio review" over
  "Contact us."
- Address risk explicitly. "No commitment. No pitch deck. Just a conversation
  about your portfolio."
- Anchor notional value on free offers: "A Portfolio Margin Review that would
  normally cost $3,500 — yours at no charge."
- Match the CTA to the page's position in the buyer journey. Awareness pages
  get softer CTAs (download, read). Decision pages get harder CTAs (schedule,
  start).

### Proof Element Suggestions
- If the page lacks proof, suggest what types of proof the user should gather
  and where to place them.
- Provide placeholder copy formatted as the final version would read, with
  brackets for specifics: "We helped [Client Name] reduce per-unit operating
  costs by [X]% across [Y] properties in [timeframe]."

---

## What This Skill Does NOT Do

- **Does not replace VOC research.** Every rewrite generated without actual
  customer data is a hypothesis. Flag confidence levels accordingly.
- **Does not audit design, layout, or visual elements.** This is copy-only.
  Structural notes about information architecture are included, but CSS,
  imagery, and design are out of scope.
- **Does not perform SEO audits.** Meta titles and descriptions are checked
  for messaging clarity, not keyword optimization.
- **Does not audit the entire site at once.** Always work page by page.

---

## Session Flow Example

```
User: "Can you audit my homepage copy?"
Agent: "Sure. Share the URL or paste the copy and I'll run a full audit using
       Bly and Wiebe frameworks. I'll score it section by section and generate
       rewrite suggestions for anything that scores below a 3."

[User shares URL or content]

Agent: [Reads reference files if first audit in session]
       [Extracts page content]
       [Runs structural scan]
       [Scores per checklist]
       [Presents audit report with priority fixes and rewrites]
       [Offers next steps: rewrite, next page, full rewrite, or VOC brief]
```

---

## Quick Reference: Core Frameworks

| Framework | Source | Use For |
|-----------|--------|---------|
| 4 U's (Urgent, Unique, Ultra-specific, Useful) | Bly | Scoring headlines and CTAs |
| BDF (Beliefs, Desires, Feelings) | Bly | Checking audience alignment |
| Motivating Sequence (5 steps) | Bly | Page structure and flow |
| FAB Pyramid (Features, Advantages, Benefits, Ultimate Benefits) | Bly | Service descriptions |
| 4 C's (Clear, Concise, Compelling, Credible) | Bly | General copy quality |
| 8 Headline Types | Bly | Headline classification and rewrites |
| Power of Proof | Bly | Evidence and credibility |
| 3-Part Process (Research, Write, Validate) | Wiebe | Overall methodology |
| VOC Message Mining | Wiebe | Customer language extraction |
| Seven Sweeps | Wiebe | Editing and quality control |
| Messaging Hierarchy | Wiebe | Information prioritization |
| Copy-Data Gap Analysis | Wiebe | Finding what's missing |
| PAS (Problem-Agitation-Solution) | Wiebe | Section-level structure |
| Verbatim Principle | Wiebe | Authentic voice |
| "Even If" Objection Pre-emption | Wiebe | Inline objection handling in benefit statements |
| Front-Loading | Wiebe | Headline, subhead, and bullet structure |
| Copy as UX | Wiebe | Line-level momentum and value check |
| Notional Value Anchoring | Bly | CTA and offer framing |
