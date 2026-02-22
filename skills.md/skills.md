UI/UX BEST PRACTICES LIBRARY
Version: 1.0  
 Purpose: Reference library for AI-assisted design decisions, reviews, and generation  
 Scope: Web, mobile, and AI-powered interface design

---

TABLE OF CONTENTS

1. [Foundational Principles](1-foundational-principles)
2. [Visual Design](2-visual-design)
3. [Typography](3-typography)
4. [Color](4-color)
5. [Layout & Spacing](5-layout--spacing)
6. [Navigation](6-navigation)
7. [Forms & Input](7-forms--input)
8. [Feedback & System Status](8-feedback--system-status)
9. [Interaction Design & Micro-interactions](9-interaction-design--micro-interactions)
10. [Accessibility (a11y)](10-accessibility-a11y)
11. [Mobile & Responsive Design](11-mobile--responsive-design)
12. [Performance & Perceived Speed](12-performance--perceived-speed)
13. [Content & UX Writing](13-content--ux-writing)
14. [Trust & Credibility](14-trust--credibility)
15. [Error Handling](15-error-handling)
16. [Onboarding & Empty States](16-onboarding--empty-states)
17. [Data Visualization](17-data-visualization)
18. [AI Agent Interface Design](18-ai-agent-interface-design)
19. [Design Tokens & Systems](19-design-tokens--systems)
20. [Research & Testing Heuristics](20-research--testing-heuristics)

---

1.  FOUNDATIONAL PRINCIPLES

    1.1 Nielsen's 10 Usability Heuristics

- Visibility of system status — Always keep users informed about what is going on through appropriate feedback within reasonable time.
- Match between system and real world — Use words, phrases, and concepts familiar to the user; follow real-world conventions.
- User control and freedom — Support undo and redo; provide clearly marked "emergency exits."
- Consistency and standards — Follow platform conventions; don't make users wonder whether different words or actions mean the same thing.
- Error prevention — Design carefully to prevent problems from occurring in the first place.
- Recognition over recall — Minimize the user's memory load; make objects, actions, and options visible.
- Flexibility and efficiency of use — Allow accelerators for expert users while keeping the interface accessible to novices.
- Aesthetic and minimalist design — Avoid irrelevant or rarely needed information; every extra unit of information competes with relevant information.
- Help users recognize, diagnose, and recover from errors — Express errors in plain language, precisely indicate the problem, and suggest a solution.
- Help and documentation — Even though it is better if the system can be used without documentation, it may be necessary to provide help.

  1.2 Core Design Principles

- Clarity — The interface communicates its purpose instantly without requiring explanation.
- Hierarchy — The most important elements receive the most visual weight.
- Proximity — Related elements are grouped together; unrelated elements are separated.
- Alignment — Elements are aligned to a grid, creating order and visual cohesion.
- Repetition — Consistent design patterns are repeated to unify the interface.
- Contrast — Differences in size, color, and weight create emphasis and guide attention.
- Progressive Disclosure — Show only what is necessary at each stage; reveal complexity on demand.
- Affordance — Design elements should suggest how they are used (buttons look tappable, links look clickable).
- Feedback — Every action produces a visible, audible, or tactile response.

  1.3 Cognitive Load Principles

- Chunk information into groups of 5–9 items maximum (Miller's Law).
- Eliminate unnecessary decisions (Hick's Law: more choices = longer decision time).
- Avoid requiring users to remember information between screens.
- Use defaults to reduce effort for the most common user path.
- Prefer recognition over recall in all UI patterns.

---

2.  VISUAL DESIGN

    2.1 General Rules

- Use no more than 2–3 typefaces in a single interface.
- Limit the primary palette to 3–5 colors, with one dominant, one accent, and neutrals.
- Maintain a consistent border-radius throughout the product (e.g., always 4px, 8px, or 12px).
- Use whitespace intentionally — empty space is not wasted space; it creates breathing room and focus.
- Ensure sufficient contrast ratios for all text (4.5:1 minimum for body text, 3:1 for large text — WCAG AA).
- Use a single, unified drop shadow style rather than mixing multiple shadow depths or styles.
- Design in grayscale first to validate hierarchy, then apply color.

  2.2 Component Consistency

- Every interactive component should have defined states: Default, Hover, Active/Pressed, Focused, Disabled, Loading, Error.
- Never change the function of a component between screens (a checkbox is always a checkbox).
- Use icon + label pairings for new or unfamiliar actions; icons alone are ambiguous unless universally recognized (e.g., home, search, close).

  2.3 Z-Index & Layering

- Use a defined z-index scale (e.g., base: 0, overlay: 100, modal: 200, toast: 300, tooltip: 400).
- Modals and overlays must dim the background with a scrim (typically rgba(0,0,0,0.4–0.6)).
- Toasts and alerts should float above modals when applicable.

---

3.  TYPOGRAPHY

    3.1 Scale & Hierarchy

- Use a modular type scale (e.g., 12, 14, 16, 18, 24, 32, 48, 64px) for consistency.
- Establish clear roles: Display, H1, H2, H3, Body Large, Body, Caption, Label, Overline.
- Body text: 16px minimum on desktop, 14px minimum on mobile (never go below 12px for any readable content).
- Line height: 1.4–1.6 for body text; 1.1–1.3 for headings.
- Line length: 60–80 characters per line for optimal readability (45–75 for narrow columns).

  3.2 Weight & Style

- Use no more than 3 weights in a family (e.g., Regular 400, Medium 500, Bold 700).
- Avoid using font size alone to indicate importance — pair with weight or color changes.
- Avoid all-caps for body text; use for labels, overlines, and navigation sparingly.
- Avoid italic for UI elements; reserve for editorial content and quotations.
- Never underline text unless it is a hyperlink.

  3.3 Readability

- Left-align body text in LTR languages (avoid justified text in digital interfaces — creates uneven spacing).
- Avoid text over complex or patterned backgrounds without a scrim or solid backing.
- Use letter-spacing adjustments sparingly: only for all-caps labels (+0.05em–+0.1em) and very large display type (-0.01em to -0.02em).

---

4.  COLOR

    4.1 Color System

- Define semantic colors with roles, not names: `--color-primary`, `--color-success`, `--color-warning`, `--color-error`, `--color-neutral`.
- Avoid using red/green as the sole differentiators (colorblind users — ~8% of males cannot distinguish these).
- Use a consistent tint/shade scale per color (e.g., 50, 100, 200, 300, 400, 500, 600, 700, 800, 900).
- Ensure interactive elements have a minimum 3:1 contrast ratio against their background (WCAG AA for UI components).

  4.2 Dark Mode

- Do not simply invert colors — rebuild the palette for dark mode semantically.
- Use elevation to convey depth in dark mode (lighter surfaces appear higher).
- Slightly desaturate colors in dark mode — fully saturated hues on dark backgrounds cause eye strain.
- Ensure shadows use opacity on dark backgrounds (shadows don't work the same way; use glow or elevation instead).

  4.3 Color Psychology (apply judiciously)

- Blue: trust, reliability, calm (most universally safe for professional tools).
- Green: success, health, growth, positive actions.
- Red: error, danger, urgency, deletion.
- Yellow/Orange: warning, attention, warmth.
- Purple: creativity, premium, innovation.
- Gray: neutral, inactive, disabled.

---

5.  LAYOUT & SPACING

    5.1 Grid Systems

- Use a 4px or 8px base unit for all spacing decisions (everything divisible by 4).
- For web, use a 12-column grid with consistent gutters (16px–32px).
- For mobile, use a 4-column grid with 16px margins.
- Define fixed breakpoints and stick to them: Mobile (≤375px), Tablet (≤768px), Desktop (≤1280px), Wide (>1280px).

  5.2 Spacing Scale

- Use a defined spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Apply consistent internal padding within components (e.g., buttons: 12px vertical, 24px horizontal).
- Use more space between sections than between related elements within a section.
- Touch targets must be at least 44×44px (Apple HIG) or 48×48dp (Material Design).

  5.3 Visual Weight & Balance

- Heavy content (images, data-dense tables) needs more surrounding space.
- Asymmetric layouts create dynamism; symmetric layouts convey stability and trust.
- Use negative space to group and separate elements, not just lines/dividers.

---

6.  NAVIGATION

    6.1 Structure Principles

- Limit primary navigation to 5–7 items (cognitive limit for scanning).
- The user should always know: where they are, where they can go, how to get back.
- Provide breadcrumbs for hierarchical navigation (3+ levels deep).
- The current page/state must always be visually indicated (active state).

  6.2 Navigation Patterns

- Top nav bar : Best for flat hierarchies with 5–7 primary destinations.
- Side nav : Best for complex apps with deep hierarchy and frequent switching.
- Bottom nav (mobile): Best for 3–5 top-level destinations; thumbs reach naturally.
- Hamburger menu : Acceptable for secondary navigation; avoid for primary navigation on desktop.
- Tabs : Use for switching between parallel sections of the same context; not for primary navigation.

  6.3 Back & Exit

- Always provide a reliable back action; never trap users in a flow.
- Confirmation dialogs before destructive exits (unsaved work, account deletion).
- Browser back button must always work as expected on web products.

---

7.  FORMS & INPUT

    7.1 Field Design

- Use one-column layouts for forms when possible (easier scanning, less confusion about order).
- Always display labels above input fields, not inside (placeholder text disappears on typing and is not a label replacement).
- Group related fields visually (address fields, payment details, personal info).
- Use input types that match the content (email, tel, number, date — triggers correct mobile keyboard).
- Show password visibility toggle on password fields.

  7.2 Validation

- Validate inline after the user leaves a field (on blur), not on submit or on every keystroke.
- Show error messages immediately below the relevant field, not at the top of the form.
- Error messages must explain what went wrong AND how to fix it.
- Preserve the user's input when showing validation errors — never clear a form on error.
- Use green confirmation for fields that have been successfully validated (especially for complex rules like passwords).

  7.3 Labels & Placeholder Text

- Labels are always visible, always outside the input.
- Placeholder text is example input, not the label (e.g., "e.g., john@example.com" not "Email").
- Required fields should be marked consistently — prefer marking optional fields instead (if most are required).
- Use helper text below the input for constraints (e.g., "Minimum 8 characters").

  7.4 Reducing Friction

- Auto-focus the first field on page load for form-primary pages.
- Enable autocomplete where appropriate (name, email, address fields).
- Allow tab key to navigate between fields in logical order.
- Show progress indicators on multi-step forms (Step 2 of 4).
- Allow users to return to previous steps in multi-step forms without losing progress.

---

8.  FEEDBACK & SYSTEM STATUS

    8.1 Response Times

- 0–100ms : Feels instantaneous. No loading indicator needed.
- 100ms–1s : Noticeable delay. Show a spinner or progress bar.
- 1s–10s : Use a progress indicator and maintain context.
- 10s+ : Show estimated time, allow the user to continue other tasks if possible.

  8.2 Loading States

- Use skeleton screens instead of spinners for content that has defined structure.
- Use spinners for actions with unknown duration and no predictable layout.
- Use progress bars for actions with known duration (file uploads, long processes).
- Never show a blank white screen — always show a loading state.

  8.3 Notification Patterns

- Toast / Snackbar : Temporary, non-blocking, for confirmations and low-priority feedback. Auto-dismiss after 3–5s. Position bottom-center or bottom-right.
- Banner : Persistent, for important information that requires acknowledgment. Position at top of relevant section.
- Modal/Dialog : Blocking, for decisions or actions that require user response before proceeding.
- Inline alert : Adjacent to the relevant content; for contextual warnings and errors.
- Badge : Numerical count of unread items; keep counts under 99 and add "+" for overflow.

  8.4 Success & Confirmation

- Confirm every significant action with a clear, human-readable success state.
- Show what happened, not just "Success" — e.g., "Your changes have been saved" not just a green checkmark.
- Distinguish between partial success and full success when actions have multiple outcomes.

---

9.  INTERACTION DESIGN & MICRO-INTERACTIONS

    9.1 Animation Principles

- Animation should have purpose: indicate state change, direct attention, or provide spatial context.
- Duration guidelines: Micro-interactions 100–200ms; Transitions 200–300ms; Complex animations 300–500ms.
- Use ease-in-out for most UI transitions (natural deceleration); ease-in for exits; ease-out for entrances.
- Avoid bouncing or elastic animations in professional/enterprise contexts.
- Respect `prefers-reduced-motion` media query — disable or minimize animations for users who have opted out.

  9.2 Hover & Focus States

- All interactive elements must have a visible focus state (never remove outline without providing an alternative).
- Hover states should change the cursor (pointer for clickable, text for editable, not-allowed for disabled).
- Focus styles must meet 3:1 contrast ratio against surrounding color.

  9.3 Drag & Drop

- Show a drag handle affordance (grip icon) on draggable items.
- Provide visual feedback during drag (ghost of item, highlighted drop zones).
- Provide keyboard alternatives for all drag-and-drop interactions.
- Show clear "cancel drag" affordance (press Escape to cancel).

  9.4 Gestures (Mobile)

- Primary gesture: tap (always reliable).
- Secondary gestures: swipe, pinch, long press — must be discoverable or taught.
- Never rely on a gesture as the only way to access critical functionality.
- Swipe to delete must require confirmation or provide immediate undo.

---

10. ACCESSIBILITY (A11Y)

    10.1 WCAG Compliance Levels

- AA is the standard target for most products.
- AAA for public services, government, healthcare, and educational content.
- Key WCAG 2.1 criteria: Perceivable, Operable, Understandable, Robust (POUR).

  10.2 Color & Contrast

- Normal text: 4.5:1 contrast ratio (WCAG AA).
- Large text (18px+ regular, 14px+ bold): 3:1 contrast ratio.
- UI components and graphical objects: 3:1 contrast ratio.
- Do not use color as the only means of conveying information (add text, icons, or patterns).

  10.3 Keyboard Navigation

- All interactive elements must be reachable and operable by keyboard alone.
- Tab order must follow logical visual order.
- Modal dialogs must trap focus within the modal while open.
- Provide a visible focus indicator at all times.
- Add skip navigation links at the top of pages with repetitive navigation.

  10.4 Screen Reader Support

- Use semantic HTML (nav, main, aside, article, section, header, footer).
- All images require alt text (decorative images use alt="" to be ignored).
- Form inputs must have associated labels (via `for`/`id` or `aria-label`).
- Dynamic content changes must be announced via `aria-live` regions.
- Use ARIA roles and attributes only when HTML semantics are insufficient.

  10.5 Motion & Sensory

- Provide pause/stop controls for any animation that plays for 5+ seconds.
- No content should flash more than 3 times per second (seizure risk).
- Provide captions for all video content; transcripts for audio.
- Do not use audio as the sole means of conveying important information.

---

11. MOBILE & RESPONSIVE DESIGN

    11.1 Mobile-First Approach

- Design for the smallest screen first, then scale up — forces prioritization.
- Critical content and primary actions must be accessible without scrolling (above the fold on mobile).
- Avoid hover-dependent interactions — touch has no hover.
- Minimum tap target: 44×44px with adequate spacing between targets (8px minimum).

  11.2 Responsive Patterns

- Reflow : Single-column stack at small screens; multi-column at large screens.
- Reveal : Show condensed content on mobile, expanded on desktop (progressive disclosure).
- Collapse : Convert multi-column navigation to hamburger menu on mobile.
- Transform : Tabs on desktop become an accordion on mobile.
- Off-canvas : Sidebar navigation slides in from off-screen on mobile.

  11.3 Touch-Specific Considerations

- Scrollable containers must have visible scrollbars or scroll affordances.
- Avoid small text links inline with body text — too hard to tap accurately.
- Group related actions into bottom sheets instead of dropdown menus on mobile.
- Use swipe gestures only for secondary actions; primary actions need a tap.
- Avoid requiring precise gestures (multi-finger, precise tap) in critical flows.

---

12. PERFORMANCE & PERCEIVED SPEED

    12.1 Core Web Vitals Targets

- LCP (Largest Contentful Paint) : < 2.5 seconds (good), 2.5–4s (needs improvement), > 4s (poor).
- FID (First Input Delay) : < 100ms (good), 100–300ms (needs improvement), > 300ms (poor).
- CLS (Cumulative Layout Shift) : < 0.1 (good), 0.1–0.25 (needs improvement), > 0.25 (poor).

  12.2 Perceived Performance Techniques

- Load above-the-fold content first; defer off-screen content.
- Show skeleton screens or placeholder content immediately.
- Optimistic UI: Apply changes immediately in the UI before server confirmation; revert on failure.
- Use transitions and animations to mask loading time and create perceived smoothness.
- Pre-fetch likely next actions (hover intent, predictive loading).
- Persist user input locally during loading to avoid loss of data.

  12.3 Image & Asset Optimization

- Use next-gen formats (WebP, AVIF) with fallbacks.
- Lazy-load images below the fold.
- Always specify image dimensions to prevent layout shift.
- Use SVG for icons and simple illustrations.
- Compress all assets; target < 200KB for initial page load critical path.

---

13. CONTENT & UX WRITING

    13.1 Voice & Tone

- Write in second person (you/your) to address users directly.
- Use active voice: "Save your file" not "Your file will be saved."
- Be conversational but professional; match the brand voice consistently.
- Avoid jargon, acronyms, and technical language in user-facing strings unless the audience is technical.
- Contractions are acceptable and can make tone feel warmer (you're, it's, we'll).

  13.2 Microcopy Best Practices

- Button labels : Use verb + noun for clarity ("Save Document" not "Submit"; "Delete Account" not "Confirm").
- Empty states : Explain why it's empty and what to do next — never just say "No results."
- Error messages : Say what went wrong + how to fix it. Avoid blame ("You entered an invalid email" → "That email address doesn't look right.").
- Confirmation dialogs : Repeat the destructive action in the confirm button ("Delete Account" not "OK").
- Tooltips : 1–2 sentences maximum. Triggered by hover or focus on an info icon.
- Placeholder text : Example input only (e.g., "john@example.com"), never instructions.

  13.3 Readability Guidelines

- Target a Flesch-Kincaid reading grade of 8th grade or lower for consumer products.
- Use short sentences (15–20 words maximum).
- Prefer common words over complex synonyms.
- Front-load the most important information (inverted pyramid structure).
- Use bullet points only for genuinely list-like content (3+ parallel items).

---

14. TRUST & CREDIBILITY

    14.1 Design for Trust

- Maintain visual consistency — inconsistent design signals poor quality.
- Show real people, real names, and real photos where appropriate.
- Communicate security explicitly at critical moments (checkout, login, account creation).
- Display trust signals near high-stakes actions: security badges, encryption indicators, privacy statements.
- Be transparent about how data is used, especially on forms requesting sensitive information.

  14.2 Social Proof

- Show user counts, review counts, or ratings near decisions (but only if they are genuinely strong).
- Testimonials are most effective when specific, attributed, and proximate to relevant features.
- Avoid fake or placeholder reviews/ratings — users detect these and it destroys trust.

  14.3 Transparency Signals

- Show last-updated dates on articles and data.
- Be explicit about the source and freshness of information.
- Acknowledge uncertainty honestly rather than presenting guesses as facts.

---

15. ERROR HANDLING

        15.1 Error Message Anatomy

    Every effective error message contains:

1.  What happened — Clearly state the problem.
1.  Why it happened — Briefly explain the cause (if helpful).
1.  How to fix it — Specific next steps the user can take.
1.  Path to help — Link or reference to further support if the error persists.

    15.2 Error Prevention Strategies

- Disable submit buttons until all required fields are complete.
- Validate format constraints in real time (phone number format, date format).
- Use constrained inputs where possible (date pickers, dropdowns, sliders) to eliminate invalid entry.
- Show character limits before users hit them, not after.
- Warn before destructive or irreversible actions.

  15.3 System Errors & Downtime

- 404 Page: Explain what happened, provide search or navigation to recover, use brand voice.
- 500 Page: Apologize, explain briefly, provide a path forward (try again, contact support).
- Maintenance mode: Show expected recovery time and provide status page link.
- Never show raw error codes or stack traces to end users.

---

16. ONBOARDING & EMPTY STATES

    16.1 Onboarding Principles

- Reduce time-to-value — get users to their first meaningful success as quickly as possible.
- Avoid mandatory walkthroughs that block usage; use progressive onboarding instead.
- Show the value of features in context, at the moment the user needs them.
- Use checklists or progress bars to gamify setup and encourage completion.
- Allow users to skip onboarding and return to it later.

      16.2 Empty State Design

  Every empty state should have:

1.  An illustrative or visual element — Makes the blank space feel intentional.
2.  A headline — Explains the state in human terms.
3.  A description — Adds context and sets expectations.
4.  A primary CTA — One clear action to move forward.

Types of empty states:

- First use : User has no data yet. Focus on getting started.
- No results : Search or filter returned nothing. Suggest adjusting parameters.
- Cleared state : User deleted everything. Acknowledge and suggest next action.
- Error state : Data failed to load. Provide retry option and support link.

  16.3 Progressive Onboarding

- Surface tips and guidance contextually when a feature is first encountered.
- Use tooltips, coach marks, or spotlight highlights — not modal interruptions.
- Track completion and resurface uncompleted guidance, don't just show it once.
- Allow permanent dismissal of guidance that users have indicated they don't need.

---

17. DATA VISUALIZATION

    17.1 Choosing the Right Chart

- Comparison : Bar chart, grouped bar chart, radar chart.
- Composition : Stacked bar, pie chart (max 5 segments), treemap, area chart.
- Trend over time : Line chart, area chart, sparklines.
- Relationship/Correlation : Scatter plot, bubble chart.
- Distribution : Histogram, box plot, violin plot.
- Geography : Choropleth map, dot density map.

Rules:

- Pie charts: Use only when parts sum to 100%, max 5 segments, always label values.
- Never use 3D charts — they distort perception of values.
- Bar charts should always start at zero.
- Dual y-axes are almost always misleading — use separate charts instead.

  17.2 Chart Design Standards

- Include clear, descriptive chart titles and axis labels.
- Show data source and last-updated date.
- Use consistent colors across charts in the same dashboard.
- Provide textual summaries for complex charts (key takeaway above or below the chart).
- Ensure charts are readable in grayscale (don't rely on color alone for differentiation).
- Provide accessible alternatives (data tables) for complex visualizations.

  17.3 Dashboard Principles

- Most important metrics go top-left (F-pattern and Z-pattern reading behavior).
- Limit KPI tiles to 4–6 per section.
- Group related charts with clear section labels.
- Allow filtering that affects all charts simultaneously.
- Show trend direction (up/down arrows, sparklines) alongside current values.

---

18. AI AGENT INTERFACE DESIGN

    18.1 Transparency & Legibility

- Show what the agent is doing, not just what it produced — make reasoning visible.
- Collapsed by default, expandable on demand: show tool calls, steps, and data sources.
- Distinguish between the agent's output (definitive) and its reasoning (process).
- Indicate when the agent has used external tools or data vs. its own knowledge.
- Show timestamps on agent actions for auditability in high-stakes workflows.

  18.2 Trust Calibration

- Never design the interface to make the agent appear more reliable than it is.
- Surface confidence or uncertainty signals — a definitive answer and a best-guess should look different.
- Warn users explicitly before the agent takes irreversible actions.
- Show a preview of actions before execution (e.g., "About to send this email — confirm?").
- Track record: show accuracy metrics or user correction rates where available.

  18.3 Control & Interruption Design

- Provide a stop/cancel mechanism for all long-running agent tasks.
- Design explicit human-in-the-loop checkpoints for consequential actions.
- Allow users to redirect or refine mid-task, not just after the task is complete.
- Show an undo option after every agent-executed action where technically possible.
- Distinguish between "pause and ask me" and "proceed autonomously" modes.

  18.4 Agent State Communication

- Design a clear set of status states: Idle, Thinking, Working, Waiting for input, Done, Error.
- Use streaming output to reduce perceived latency and make progress visible.
- For multi-step tasks, show a task breakdown with current step indicated.
- Collapse completed steps; emphasize the current and upcoming steps.
- Never show a blank state or indefinite spinner for agent tasks — always communicate progress.

  18.5 Correction & Feedback UX

- Allow users to point at a specific part of the output and say what's wrong.
- Avoid making users restart from scratch after an agent error — preserve context.
- Offer structured correction (e.g., "The tone is too formal" or "The data is wrong") not just free-text.
- Log correction patterns to surface systemic failure modes.
- Distinguish between user preference (soft feedback) and factual error (hard correction).

  18.6 Output Design

- Structure complex outputs with hierarchy: summary first, details on demand.
- Separate agent-generated content from user data clearly.
- Provide copy, export, and share affordances for all significant outputs.
- Apply progressive disclosure: summary view and detail view for long agent responses.
- Show the source or basis for claims whenever possible.

  18.7 Avoid the Chat-Only Trap

- Conversational interfaces are often the laziest implementation, not the best UX.
- Structured interfaces (panels, forms, dashboards) serve many agent tasks better.
- Hybrid approach: use chat for exploration; switch to structured UI for action and output.
- Provide keyboard shortcuts and structured commands for power users.

  18.8 Latency Design

- Stream tokens as they generate — never wait for completion before showing output.
- Use skeleton placeholders for agent-populated UI sections.
- While the agent works, show what it has completed so far.
- Give users something to read or review while waiting.
- Communicate expected duration for tasks >5 seconds.

  18.9 Permission & Scope Transparency

- Clearly communicate what data, tools, and permissions the agent has access to.
- Allow users to restrict agent scope (read-only mode, limited tool access).
- Notify users when the agent requests or uses new capabilities.
- Provide an audit log of all agent actions in sensitive workflows.

---

19. DESIGN TOKENS & SYSTEMS

    19.1 Token Structure

- Organize tokens in 3 tiers:
  - Global tokens : Raw values (color-blue-500: 3B82F6).
  - Alias/Semantic tokens : Role-based (color-interactive-primary: {color-blue-500}).
  - Component tokens : Component-specific (button-background-primary: {color-interactive-primary}).
- Never hard-code values in component styles — always reference tokens.
- Name tokens by role, not by value (color-error, not color-red).

  19.2 Component Library Standards

- Every component must have: name, description, anatomy, states, usage guidelines, do/don't examples.
- Components should be composable — built from smaller primitives.
- Deprecate rather than delete old components; provide migration path.
- Version component APIs; document breaking changes.
- Document accessibility requirements per component.

  19.3 Design–Dev Handoff

- Use design tokens that map directly to code variables.
- Annotate interactive states and edge cases, not just happy-path.
- Provide spacing, color, and type values in dev-ready units.
- Document responsive behavior for every component.
- Include error and empty states in designs, not just filled states.

---

20. RESEARCH & TESTING HEURISTICS

    20.1 When to Research

- Before starting design: understand user goals, mental models, and context.
- During design: validate key decisions with quick usability tests.
- After launch: measure outcomes and identify improvement areas.
- At every major feature addition: test with target users before full build.

  20.2 Common Research Methods

- Usability testing : 5 users is usually sufficient to identify 80% of usability issues (Nielsen's Law).
- Card sorting : Understand user-defined information architecture.
- Tree testing : Validate navigation structure without visual design influence.
- A/B testing : Validate quantitative impact of design changes at scale (requires statistical significance).
- First-click testing : Test whether users can initiate a task correctly.
- Heuristic evaluation : Expert review against established usability heuristics.
- Diary studies : Longitudinal self-reported use over days/weeks.
- Analytics review : Identify drop-offs, rage clicks, and unexpected navigation patterns.

  20.3 Key Metrics

- Task completion rate : % of users who successfully complete a given task.
- Time on task : How long it takes users to complete tasks (lower is better when task is simple).
- Error rate : Frequency and type of mistakes during task completion.
- SUS (System Usability Scale) : 10-question standardized usability survey (score > 68 = above average).
- NPS (Net Promoter Score) : Likelihood to recommend (product-level measure, not task-level).
- Retention : % of users returning after first use (key measure of actual value delivery).

  20.4 Anti-Patterns to Avoid in Research

- Confirmation bias: designing tests that only validate existing assumptions.
- Leading questions: "How easy was it to use?" vs. "How would you describe the experience?"
- Testing with team members or designers instead of target users.
- Testing prototypes that don't reflect real performance (latency, real data, edge cases).
- Acting on sample sizes too small for statistical confidence in quantitative tests.

---

APPENDIX: QUICK REFERENCE RULES

| Category      | Rule                                                           |
| ------------- | -------------------------------------------------------------- |
| Typography    | Body text minimum: 16px desktop, 14px mobile                   |
| Typography    | Line length: 60–80 characters                                  |
| Typography    | Line height body: 1.4–1.6                                      |
| Contrast      | Body text: 4.5:1 minimum (WCAG AA)                             |
| Contrast      | UI components: 3:1 minimum                                     |
| Touch         | Target size: 44×44px minimum                                   |
| Touch         | Gap between targets: 8px minimum                               |
| Response time | < 100ms = instantaneous                                        |
| Response time | 100ms–1s = needs indicator                                     |
| Response time | 1–10s = progress bar + context                                 |
| Forms         | Validate on blur, not on submit                                |
| Forms         | Label above input, always visible                              |
| Navigation    | Primary items: 5–7 maximum                                     |
| Animation     | UI transitions: 200–300ms                                      |
| Animation     | Always honor prefers-reduced-motion                            |
| Spacing       | Base unit: 4px or 8px                                          |
| Research      | 5 users = 80% of usability issues found                        |
| Charts        | Bar charts always start at zero                                |
| Charts        | Pie charts: max 5 segments                                     |
| Agent UX      | Always stream output; never show indefinite spinner            |
| Agent UX      | Make every agent action undoable or confirmable                |
| Agent UX      | Surface confidence levels — don't make guesses look definitive |

---

_End of UI/UX Best Practices Library v1.0_
