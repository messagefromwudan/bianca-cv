# Design Audit — bianca.sys
**Prepared for:** Bianca Arghiri  
**Auditor Role:** Senior UI/UX Designer & Front-End Developer  
**Scope:** Full-page visual, structural, and UX audit based on submitted screenshot  
**Severity Levels:** 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low

---

## 1. LAYOUT & SPACING

---

### 1.1 🔴 Hero Section — Vertical Imbalance Between Text and Photo

**Problem:** The hero text block (name, tagline, CTAs) and the profile photo are vertically misaligned. The photo appears flush to the top-right edge while the text block hangs lower, creating a lopsided center of gravity.

**Why it's a problem:** First impressions are formed in under 100ms. A misaligned hero destroys perceived professionalism before the user reads a single word.

**Fix:**
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center; /* vertically center both columns */
  min-height: 90vh;
  padding: 0 80px;
  gap: 40px;
}

.hero__photo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```

---

### 1.2 🟠 Global Section Padding — Inconsistent Vertical Rhythm

**Problem:** Sections do not share a consistent vertical spacing system. Some sections feel cramped (Work Experience, Academic Background), while others have too much gap above them. No consistent `section-gap` token exists.

**Why it's a problem:** Inconsistent rhythm makes the page feel stitched together rather than designed as a system. It signals lack of attention to detail to technical recruiters.

**Fix:** Define a spacing scale and apply it globally:
```css
:root {
  --space-section: 96px;     /* between major sections */
  --space-block: 48px;       /* between sub-sections */
  --space-element: 24px;     /* between cards/items */
  --space-inner: 16px;       /* inner padding of components */
}

section {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
```

---

### 1.3 🟠 Horizontal Padding — Content Reaches Page Edges

**Problem:** On wider viewports, text and content bleed too close to the horizontal edges. No maximum content width container is enforced uniformly.

**Fix:**
```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}
```
Wrap every section's inner content in `.container`.

---

### 1.4 🟡 "The Lab" Section — Cards Lack Breathing Room

**Problem:** The project card for "Tuto" and the grid of smaller cards (Exelion AI, Beauty Business System, Restaurant Automation) are tightly packed with minimal gap between them.

**Fix:**
```css
.lab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.lab-card {
  padding: 24px;
  border-radius: 12px;
}
```

---

### 1.5 🟡 Builder Timeline — Cramped Date Labels

**Problem:** The horizontal timeline in the "Builder Timeline" section shows years (2019, 2024, 2025, 2026) with very tight spacing between nodes and text. On any viewport narrower than 1200px this will collapse into illegibility.

**Fix:** Convert to a vertical timeline on screens below 900px:
```css
@media (max-width: 900px) {
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .timeline__connector {
    display: none;
  }
}
```

---

### 1.6 🟡 "Currently Building" Dark Panel — Abrupt Visual Break

**Problem:** The dark-on-dark panel containing the live project list creates a jarring, uncontextualized block. It has no top/bottom spacing that separates it from adjacent sections cleanly.

**Fix:**
```css
.currently-building-panel {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 40px 48px;
  margin: 64px 0;
}
```

---

### 1.7 🟡 Professional Skills — Three-Column Layout Without Clear Dividers

**Problem:** The three skill columns (Business & Entrepreneurship / Digital & Technical / Communication & Leadership) are visually indistinguishable — no gutters, borders, or background contrast separates them. They read as one unbroken text block.

**Fix:**
```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.skills-column {
  padding: 32px;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.skills-column:last-child {
  border-right: none;
}
```

---

## 2. TYPOGRAPHY

---

### 2.1 🔴 Section Meta-Labels — Illegibly Small, Low Contrast

**Problem:** Small all-caps labels above section headings (e.g., "ABOUT", "EXPLORE", "ASSIGNMENT") are rendered at approximately 9–10px in a low-opacity gray. They are unreadable at normal viewing distance.

**Why it's a problem:** These labels are supposed to provide context and wayfinding. If they can't be read, they add visual noise without value.

**Fix:**
```css
.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5); /* minimum for decorative labels */
  margin-bottom: 8px;
}
```
If the labels serve navigation (section identifiers), increase to `color: rgba(255,255,255,0.65)` and `font-size: 12px`.

---

### 2.2 🔴 Body Text Size — Too Small for Sustained Reading

**Problem:** Body text in the "About" section, project descriptions, and work experience entries appears to be set at approximately 13–14px. Dark backgrounds require larger text for comfortable reading due to halation effects.

**Why it's a problem:** Users will bounce from text-heavy content before reading it if the font is too small. WCAG 2.1 recommends a minimum of 16px for body text on dark backgrounds.

**Fix:**
```css
body {
  font-size: 16px;
  line-height: 1.7;
}

.project-description,
.experience-description,
.about-body {
  font-size: 16px;
  line-height: 1.75;
  max-width: 65ch; /* optimal reading measure */
}
```

---

### 2.3 🟠 Typographic Scale — Insufficient Contrast Between H2 and H3

**Problem:** Section headings ("The Lab", "Work Experience", "Academic Background") and sub-headings within those sections (job titles, project names) are too close in size. The hierarchy collapses.

**Fix:** Enforce a strict modular scale:
```css
h1 { font-size: clamp(40px, 6vw, 72px); font-weight: 700; }
h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 700; }
h3 { font-size: 20px; font-weight: 600; }
h4 { font-size: 16px; font-weight: 600; }
p  { font-size: 16px; font-weight: 400; }
```

---

### 2.4 🟠 "Things I'm Thinking About" — Left Column Size Mismatch

**Problem:** The left column (article titles: "Why students misuse AI", "Automation will change small businesses", "Thinking is a skill") is rendered in a dramatically larger font than the right-column explanatory text. The jump is too abrupt and unbalanced.

**Fix:**
```css
.ideas-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.ideas-body {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255,255,255,0.75);
}
```

---

### 2.5 🟡 Line Length — Uncontrolled Text Width on Wide Viewports

**Problem:** In the "About" section and project descriptions, text lines span the full container width (potentially 700–900px), far exceeding the optimal 50–75 character reading measure.

**Fix:**
```css
.readable-text {
  max-width: 65ch;
}
```
Apply this class to all paragraphs of body copy.

---

### 2.6 🟡 Hero Tagline — Missing Weight Contrast

**Problem:** "I build systems." is styled in the same weight as the surrounding body text. As the primary value proposition, it should be visually dominant.

**Fix:**
```css
.hero-tagline {
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}
```

---

### 2.7 🟡 Language Section Labels — "Romanian", "English", "Russian" Contrast

**Problem:** In the Communication/Languages section, the language labels are white but sit against a very dark background with minimal size differentiation from the progress bars. The visual grouping is unclear.

**Fix:**
```css
.language-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.language-label {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
}
```

---

## 3. COLOR & CONTRAST

---

### 3.1 🔴 Purple Accent on Black — Verify WCAG AA Compliance

**Problem:** The purple used for "Arghiri", section headings, and highlighted text (approximately `#7B5CF5` or similar) on a pure black `#000000` or near-black background must be verified. Many purple shades fail WCAG AA (minimum 4.5:1 contrast ratio for normal text).

**Why it's a problem:** Failing contrast means the most important branded elements — your name — are inaccessible to users with low vision.

**Fix:** Test the exact hex value at webaim.org/resources/contrastchecker. If below 4.5:1, shift to:
```css
:root {
  --accent: #9B7FF4; /* lighter purple, typically passes AA on #0A0A0A */
  --bg: #0A0A0A;
}
```
Run: contrast ratio of `#9B7FF4` on `#0A0A0A` = ~5.8:1 ✓

---

### 3.2 🟠 Secondary Text Color — Gray-on-Black Contrast Failure Risk

**Problem:** Descriptive text, company names in smaller format, and section meta-labels appear to be in a gray color around `rgba(255,255,255,0.45–0.55)`. On a `#0A0A0A` background, this equates to approximately `#737373`, giving a contrast ratio of ~4.0:1 — below WCAG AA for body text.

**Fix:**
```css
/* Ensure secondary text meets 4.5:1 minimum */
.text-secondary {
  color: rgba(255, 255, 255, 0.65); /* ~6.2:1 on #0A0A0A */
}

.text-tertiary {
  color: rgba(255, 255, 255, 0.50); /* Use only for decorative/non-essential */
}
```

---

### 3.3 🟠 Link Colors (Company Names in Blue) — Unclear Interactive State

**Problem:** Blue text (e.g., "Clothing Store — Chișinău, Moldova" in the work experience section) is used both as hyperlinks and as non-clickable category labels. Users cannot distinguish interactive from decorative uses of color.

**Fix:** Standardize link affordances:
```css
a.interactive-link {
  color: #7B9CF4;
  text-decoration: underline;
  text-underline-offset: 3px;
}

span.category-tag {
  color: #7B9CF4;
  text-decoration: none;
  cursor: default;
}
```

---

### 3.4 🟡 Status Indicators in "Currently Building" — Color-Only Encoding

**Problem:** The project status indicators (colored squares/dots: green, orange, blue) rely on color alone to communicate status. This fails WCAG 1.4.1 (Use of Color).

**Fix:** Add text labels alongside color:
```html
<span class="status-dot status-dot--active" aria-label="Active"></span>
<span class="status-label">Active</span>
```
```css
.status-dot::after {
  content: attr(aria-label);
  /* screen reader only — or make visible */
}
```

---

### 3.5 🟡 CTA Buttons in Hero ("View Projects", "Read My Ideas", "Contact") — Low Visual Weight

**Problem:** The three CTA buttons in the hero appear as simple text links with minimal styling. On a dark background, they blend into surrounding body copy and fail to function as clear action triggers.

**Fix:**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.85);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
}
```

---

## 4. NAVIGATION & INFORMATION ARCHITECTURE

---

### 4.1 🔴 Navigation — No Active State

**Problem:** The top navigation bar (About · Projects · Ideas · Status · Contact) shows no active/current page indicator. Users cannot orient themselves within the site structure.

**Fix:**
```css
nav a.active {
  color: #fff;
  position: relative;
}

nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}
```
Add `.active` class via JavaScript on scroll or on page load based on current section in viewport.

---

### 4.2 🟠 Navigation — Too Small and Low Contrast

**Problem:** Nav links appear at approximately 13px with ~50% opacity. On a dark background at normal screen distance, they require effort to read. Navigation is the primary wayfinding tool — it should be effortlessly visible.

**Fix:**
```css
nav a {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

nav a:hover {
  color: rgba(255, 255, 255, 1);
}
```

---

### 4.3 🟠 No Sticky Navigation

**Problem:** On a page this long, if the navigation is not sticky/fixed, users scrolling through Work Experience and Academic Background sections have no way to jump to another section without scrolling all the way back up.

**Fix:**
```css
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 40px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* Offset first section to account for fixed header */
main {
  padding-top: 70px;
}
```

---

### 4.4 🟡 "BIANCA.SYS" Logo — Too Small, No Visual Weight

**Problem:** The site name/logo "BIANCA.SYS" in the top-left is rendered at approximately 11–12px. It functions as neither a recognizable brand mark nor a functional home-link affordance.

**Fix:**
```css
.logo {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #fff;
  text-decoration: none;
  font-family: monospace; /* preserves the .SYS tech aesthetic */
}
```

---

### 4.5 🟡 Page Flow — Missing "Back to Top" Affordance

**Problem:** The page has no back-to-top button or anchor. On a single-page site this long, this is a significant friction point, especially on mobile.

**Fix:** Add a scroll-to-top button that appears after 400px of scroll:
```javascript
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.opacity = window.scrollY > 400 ? '1' : '0';
  backToTop.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```
```css
#back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  background: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  z-index: 999;
}
```

---

## 5. VISUAL CONSISTENCY

---

### 5.1 🔴 Floating "N" Avatar Icons — Unexplained UI Element

**Problem:** A dark circular icon bearing the letter "N" appears multiple times down the left side of the page. This appears to be a Notion-style avatar or comment indicator that was unintentionally left in from a design tool export. It has no clear functional purpose on the published site.

**Why it's a problem:** It looks like a UI bug. First-time visitors will be confused. It introduces a completely foreign design language (chat/collaboration) into a personal website context.

**Fix:** Remove all instances:
```css
/* Temporary hide while investigating source */
[class*="notion-avatar"],
[class*="presence-indicator"],
.floating-n-icon {
  display: none !important;
}
```
Identify whether these are rendered by a CMS/Notion embed and disable them at the source.

---

### 5.2 🟠 Section Header Treatment — Three Different Styles in Use

**Problem:** Section headings use at least three different visual treatments:
1. Large white text only (e.g., "The Lab")
2. Large white text with small green section-label above (e.g., "Currently Building")
3. Large white text with a different small-caps style above (e.g., "Work Experience")

**Fix:** Standardize to a single section header component:
```html
<div class="section-header">
  <span class="section-header__label">SECTION TYPE</span>
  <h2 class="section-header__title">Section Title</h2>
</div>
```
```css
.section-header__label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 8px;
}

.section-header__title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  margin: 0;
}
```

---

### 5.3 🟠 Project Cards — Inconsistent Card Anatomy

**Problem:** "Tuto" is displayed as a large dark feature card with a brain emoji image. The three smaller cards below (Exelion AI, Beauty Business System, Restaurant Automation) have a completely different structure — smaller, with different text hierarchy, icon placement, and tag styling.

**Fix:** Create a unified card component:
```css
.project-card {
  background: #111;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(255,255,255,0.18);
  transform: translateY(-2px);
}

.project-card__type {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.project-card__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.project-card__description {
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255,255,255,0.65);
}
```

---

### 5.4 🟡 Tag Pills — Inconsistent Styling Across Sections

**Problem:** Tag pills (e.g., "Ethical Areas", "Business thinking" in Tuto; "Bookings, Delivery, Customer communication" in Restaurant Automation) have different sizes, padding, and border treatments depending on which section they appear in.

**Fix:** Create a single tag component:
```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.75);
  border: 1px solid rgba(255,255,255,0.1);
  white-space: nowrap;
}
```

---

### 5.5 🟡 Emoji Icons in "About" Sub-sections — Inconsistent Scale

**Problem:** The four "role" indicators under the About section (Business Planning Student, Founder, Creator, Participant) use emoji icons at inconsistent visual sizes relative to their text labels. Emoji rendering varies significantly across operating systems.

**Fix:** Replace emoji with SVG icons or a consistent icon library (e.g., Lucide Icons):
```html
<div class="role-item">
  <svg class="role-icon" width="20" height="20"><!-- icon --></svg>
  <span class="role-label">Founder</span>
  <span class="role-context">Exelion AI</span>
</div>
```
```css
.role-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.role-icon {
  color: var(--accent);
  width: 20px;
  height: 20px;
}
```

---

## 6. RESPONSIVENESS

---

### 6.1 🔴 Horizontal Timeline — Will Break on Mobile

**Problem:** The "Builder Timeline" uses a horizontal layout with 5 time nodes spread across the full page width. On any screen below ~800px, this will either overflow horizontally (forcing scroll) or collapse the text illegibly.

**Fix:** Already referenced above (Issue 1.5). Additionally:
```css
.timeline-node {
  min-width: 0; /* prevent overflow */
}

.timeline-date {
  font-size: clamp(11px, 1.5vw, 14px);
}
```

---

### 6.2 🔴 Three-Column Skills Grid — Not Mobile-Adaptable

**Problem:** The Professional Skills section uses a fixed three-column layout. This will collapse on tablet/mobile without responsive breakpoints.

**Fix:**
```css
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### 6.3 🟠 Hero Layout — Stacked Column Behavior Not Specified

**Problem:** The hero two-column layout (text left / photo right) needs an explicit stacking order for mobile. The photo should appear above the text on small screens.

**Fix:**
```css
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 24px;
  }

  .hero__photo {
    order: -1; /* photo appears first on mobile */
    justify-content: center;
  }

  .hero__photo img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%; /* circular on mobile saves space */
  }
}
```

---

## 7. IMAGERY & MEDIA

---

### 7.1 🟠 Profile Photo — No Defined Aspect Ratio Container

**Problem:** The profile photo appears to lack a constrained container with a defined aspect ratio. On different viewport widths, this can cause the image to stretch, squash, or overflow its container.

**Fix:**
```css
.hero__photo-wrapper {
  aspect-ratio: 4/5;
  max-width: 440px;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.hero__photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
```

---

### 7.2 🟡 Tuto Card Image — Low-Fidelity Brain Emoji

**Problem:** The "Tuto" project card uses what appears to be a large brain emoji (🧠) or low-resolution image as its visual. This looks placeholder-quality next to a professional portfolio.

**Fix:** Replace with a proper SVG illustration, a screenshot of the actual product, or a designed graphic:
```css
.project-card__visual {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  object-fit: cover;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}
```
If keeping an icon, use an SVG brain icon from Lucide or Phosphor Icons at 64px, centered on a subtle gradient background.

---

### 7.3 🟡 Missing `loading="lazy"` and `alt` Attributes

**Problem:** No `alt` text or lazy-loading attributes are visible in the design. These are assumed absent given the screenshot source.

**Fix:** Apply to every image:
```html
<img
  src="/assets/bianca-profile.jpg"
  alt="Bianca Arghiri — business builder based in Chișinău"
  width="440"
  height="550"
  loading="lazy"
  decoding="async"
/>
```

---

## 8. ACCESSIBILITY

---

### 8.1 🔴 Focus States — No Visible Keyboard Focus Indicator

**Problem:** No custom `:focus-visible` styles are defined. Browser defaults are often removed by CSS resets, leaving keyboard-only users with no navigation affordance.

**Fix:**
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Remove outline for mouse users only */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

### 8.2 🔴 Missing `<main>` Landmark and Semantic Structure

**Problem:** If the page is structured entirely in `<div>` elements, it fails WCAG 1.3.1 (Info and Relationships) and makes screen reader navigation impossible.

**Fix:**
```html
<header role="banner">
  <nav aria-label="Primary navigation">...</nav>
</header>

<main id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Bianca Arghiri</h1>
    ...
  </section>

  <section aria-labelledby="lab-heading">
    <h2 id="lab-heading">The Lab</h2>
    ...
  </section>
</main>

<footer role="contentinfo">...</footer>
```

---

### 8.3 🟠 Interactive Cards — No `role` or Keyboard Support

**Problem:** If the project cards in "The Lab" are clickable, they must be keyboard-accessible. If they are plain `<div>` elements with click handlers, they are inaccessible to keyboard and screen reader users.

**Fix:** Use `<a>` tags for card-level links or add proper ARIA:
```html
<a class="project-card" href="/projects/tuto" aria-label="Tuto — AI study companion for students">
  ...
</a>
```

---

### 8.4 🟡 Language Progress Bars — No Machine-Readable Values

**Problem:** The language proficiency bars (Romanian, English, Russian) communicate proficiency visually but provide no programmatic representation of the value.

**Fix:**
```html
<div role="progressbar"
     aria-label="English proficiency"
     aria-valuenow="90"
     aria-valuemin="0"
     aria-valuemax="100"
     class="language-bar">
  <div class="language-bar__fill" style="width: 90%"></div>
</div>
```

---

## 9. PERFORMANCE & LOAD PERCEPTION

---

### 9.1 🟠 No Skeleton/Loading States Defined

**Problem:** The screenshot shows a content-heavy page with no loading skeleton or progressive reveal strategy visible. On slower connections, users will see a flash of unstyled content or blank sections.

**Fix:** Add skeleton screens for key sections:
```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.04) 25%,
    rgba(255,255,255,0.08) 37%,
    rgba(255,255,255,0.04) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
  border-radius: 4px;
}

@keyframes skeleton-loading {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

### 9.2 🟡 Font Loading — No `font-display: swap` Visible

**Problem:** Custom fonts without `font-display: swap` cause FOIT (Flash of Invisible Text), where text is invisible during font load. This is especially damaging for a text-heavy site.

**Fix:**
```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/yourfont.woff2') format('woff2');
  font-display: swap; /* Show system font until custom font loads */
}
```

---

### 9.3 🟢 Page is Visually Very Long — No Section-Based Lazy Rendering

**Problem:** All sections (Timeline, Skills, Languages, Experience) are rendered on page load. For a portfolio of this scope, progressive rendering using Intersection Observer would reduce initial load perception.

**Fix:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
  el.classList.add('section--hidden');
  observer.observe(el);
});
```
```css
.section--hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.section--visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 10. PRIORITY IMPLEMENTATION ORDER

| Priority | Issue |
|----------|-------|
| 🔴 1 | Remove phantom "N" avatar icons (Issue 5.1) |
| 🔴 2 | Fix nav — sticky + active state (Issues 4.1, 4.3) | 
| 🔴 3 | Increase body font to 16px (Issue 2.2) |
| 🔴 4 | Add semantic HTML landmarks (Issue 8.2) |
| 🔴 5 | Verify and fix accent color contrast (Issue 3.1) | 
| 🟠 6 | Standardize section header components (Issue 5.2) | 
| 🟠 7 | Add responsive breakpoints for hero and skills (Issues 6.2, 6.3) |
| 🟠 8 | Unify project card design system (Issue 5.3) | 
| 🟠 9 | Improve CTA button visual weight (Issue 3.5) | 
| 🟠 10 | Fix vertical rhythm with spacing tokens (Issue 1.2) | 
| 🟡 11 | Add back-to-top button (Issue 4.5) | 
| 🟡 12 | Keyboard focus states (Issue 8.1) |
| 🟡 13 | Unified tag pill component (Issue 5.4) |
| 🟡 14 | Mobile timeline (Issue 6.1) | 
| 🟢 15 | Intersection Observer animations (Issue 9.3) |
---


