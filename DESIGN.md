---
name: Diogo Francisco Costa
description: A career drawn as a transit network, in 1972 subway-diagram signage.
colors:
  ink: "#111111"
  paper: "#ffffff"
  rule: "#d6d6d6"
  mute: "#4d4d4d"
  faint: "#6b6b6b"
  on-ink-mute: "#c9c9c9"
  cloud: "#0039a6"
  k8s: "#00843d"
  cicd: "#ff6319"
  data: "#fccc0a"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 10.5vw, 4.875rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.75rem, 14.5vw, 11rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  figure-service:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  sign:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.15
  body-lead:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.9vw, 1.5rem)"
    fontWeight: 450
    lineHeight: 1.5
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.1875rem)"
    fontWeight: 500
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  station-number:
    fontFamily: "Archivo Variable, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
rounded:
  none: "0px"
  focus: "2px"
  pill: "999px"
  circle: "50%"
spacing:
  page-max: "90rem"
  content-pad: "1.25rem"
  content-pad-md: "2.5rem"
  margin-col: "2rem"
  margin-col-md: "4rem"
  margin-col-lg: "6rem"
  rail-col: "3.75rem"
  rail-col-md: "12rem"
  rail-col-lg: "18rem"
  gutter: "0.75rem"
  gutter-md: "1rem"
  lane-gap: "0.75rem"
  lane-gap-md: "2.5rem"
  lane-gap-lg: "4rem"
  stroke: "0.25rem"
  stroke-md: "0.625rem"
  stroke-lg: "0.875rem"
  bullet: "1.75rem"
  bullet-md: "2.25rem"
  bullet-lg: "3.125rem"
  pill-h: "1.25rem"
  pill-h-md: "2rem"
  pill-h-lg: "2.5rem"
  pill-pad: "0.375rem"
  pill-pad-md: "1rem"
  pill-pad-lg: "1.25rem"
  pill-border: "0.125rem"
  pill-border-md: "0.25rem"
  pill-border-lg: "0.3125rem"
  tick: "0.1875rem"
  tick-md: "0.375rem"
  tick-lg: "0.5rem"
components:
  nav-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3.625rem"
  sign-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  station-sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.sign}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.75rem 1rem"
  route-bullet-cloud:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    size: "{spacing.bullet-lg}"
  route-bullet-k8s:
    backgroundColor: "{colors.k8s}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    size: "{spacing.bullet-lg}"
  route-bullet-cicd:
    backgroundColor: "{colors.cicd}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "{spacing.bullet-lg}"
  route-bullet-data:
    backgroundColor: "{colors.data}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "{spacing.bullet-lg}"
  express-stop:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "{spacing.pill-h-lg}"
  local-stop:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.circle}"
  offline-stop:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    size: "{spacing.pill-h-lg}"
  transfer-disc:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "3rem"
  terminus:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
  skip-link:
    backgroundColor: "{colors.data}"
    textColor: "{colors.ink}"
    padding: "0.75rem 1rem"
---

# Design System: Diogo Francisco Costa

## Overview

**Creative North Star: "The Network Diagram"**

The page is one continuous transit diagram in the Vignelli/Unimark 1972 tradition: white stock, black enamel signage, a white neo-grotesk, and four coloured route lines that run down a rail column from the hero to the footer. Skill domains are lines, roles and schools are stations, and the scale figures are posted like the service information on a platform sign. Every section stacks into the same three-column row (numbered margin, rail, content), so the diagram never breaks between sections.

Density is generous and vertical. Station names and figures are set big and tight; supporting copy is set in a measured column beside the rail. Colour is rationed: black and grey hold the frame, and hue appears only where a line or a route bullet carries a domain. Depth is absent; everything is flat paint on paper or enamel, as signage is.

The motion grammar is a single moment: in the first viewport the lines draw downward into station 01. After that the diagram is still, and interaction is limited to small, quick state changes on links.

**Key Characteristics:**
- One continuous network: every row shares the margin, rail and content columns.
- Four route lines (A Cloud, K K8s, C CI/CD, D Data) in fixed lane order, left to right.
- Black enamel bands and signs with a thin white inset stripe.
- Flat surfaces, square corners, and fully round stops and bullets; nothing in between.
- Archivo set heavy and tight for names and figures, tabular lining numerals.
- One motion moment (the lane draw), off under reduced motion.

## Colors

A black-and-white signage frame with four transit route colours that appear only where they mean something.

### Primary
- **Enamel Black** (ink): the signage colour. Sign band, nav strip, section signs, footer, station pill borders, local stop dots, ticks and transfer connectors, and all primary text on paper. Also the `theme-color`.

### Secondary
The four route colours are a closed set, one per skill domain, always in lane order A K C D.
- **Route Blue** (cloud): the A line, Cloud. Letter in paper.
- **Route Green** (k8s): the K line, K8s. Letter in paper.
- **Route Orange** (cicd): the C line, CI/CD. Letter in ink, because paper on orange fails contrast.
- **Route Yellow** (data): the D line, Data. Letter in ink. Also the selection highlight and the skip link background, both with ink text.

### Neutral
- **Paper White** (paper): the page stock, sign lettering, express stop fill, off-line ring fill, transfer discs and the inset stripe on signs.
- **Platform Grey** (mute): secondary text on paper: station meta, tick lists, project descriptions, figure labels.
- **Faint Grey** (faint): the quietest mark on paper, used for separators such as the slash between project technologies.
- **Hairline Grey** (rule): 1px hairlines only, such as the station-number margin rule and skill-list row dividers.
- **Enamel Grey** (on-ink-mute): secondary text on black: hero legend labels, the contact list under "Contact", the colophon.

### Named Rules
**The Rationed Colour Rule.** A route colour appears only on a lane, a route bullet, or the yellow selection/skip-link affordance. Headings, buttons, backgrounds and borders stay black, white or grey.

**The Closed Network Rule.** There are exactly four lines, in lane order A, K, C, D. A new domain maps onto one of them or rides no line; it never adds a fifth colour.

**The Bullet Letter Rule.** Cloud and K8s bullets take paper letters; CI/CD and Data bullets take ink letters. C and D are never lettered in white.

## Typography

**Display Font:** Archivo Variable (self-hosted via @fontsource-variable, with Helvetica Neue, Helvetica, Arial fallbacks)
**Body Font:** Archivo Variable (same stack)

**Character:** one neo-grotesk family does everything, as on transit signage. Weight carries the hierarchy: 700 for names, signs and figures; 500 for meta and labels; 450 for the about lead; 400 for running text. Large sizes tighten tracking progressively (down to -0.04em on the lead figure).

### Hierarchy
- **Figure**: the posted ridership number on a platform sign (130,000+). The largest type on the page, tabular lining numerals, slight negative left margin to sit optically flush.
- **Display**: the name in the sign band.
- **Headline**: "Contact" in the footer terminus.
- **Figure-service**: the service-information row under the lead figure, each value optionally prefixed by its route bullet at half size.
- **Sign**: section signs; steps down to 1.5rem below 48rem.
- **Title**: station names (company, project, school), with the served route bullets inline at 0.75em.
- **Subtitle**: the job title in the sign band, vertically centred on the legend bullets.
- **Body-lead**: the about paragraph, max 62ch.
- **Body**: tick lists and project descriptions in Platform Grey, max 65ch; steps up to 1.125–1.1875rem at 48rem.
- **Meta**: the role and date line under a station name ("Title · Date range"), with dates as figure numerals and an en dash range.
- **Label**: nav items (1rem, 1.25rem from 48rem), legend labels (0.8125rem on the rail), skills and colophon.
- **Station-number**: the two-digit margin numbers; 1rem below 48rem.

### Named Rules
**The Figures Are Numerals Rule.** Every number that is data (figures, dates, station numbers, the copyright year) is set with tabular lining numerals.

**The One Family Rule.** Hierarchy comes from weight, size and tracking within Archivo; no second family and no italics.

## Layout

The page is a stack of network rows. Each row is a three-column grid capped at the page max width: a numbered margin column with a 1px Hairline Grey rule at its right edge, the rail column that carries the lanes, and a content column with a left gutter. Sections, stations, signs and the about block all use this same row, which is what keeps the lines continuous.

The geometry is token-driven and steps at two breakpoints (48rem and 80rem); the base, -md and -lg spacing tokens are the three tiers. Lanes sit at a fixed pitch: the first lane is one pitch in from the rail's left edge (lane-x0 equals lane-gap at every tier), and each following lane is one more pitch to the right. Line stroke reaches 14px on wide screens.

**Route planning.** Lines are routed per stop, not drawn as decorative stripes. A line starts at the sign band when it serves the first station, otherwise at its first stop, and ends at its last stop. Between those it passes every row, including signs, the about block and stations it does not serve, like an express. Where a line starts or ends, it meets the stop at the vertical centre of the station name's first line.

**Rhythm.** Express stations pad 3rem top / 2.5rem bottom (4.5rem / 3.5rem from 48rem); local stations are tighter (2.25rem / 2rem, then 3.25rem / 2.5rem). Section signs sit 3.5rem below the previous row (6rem from 48rem). The first Experience sign is kept for assistive tech but hidden visually, so the lines flow straight from the sign band into station 01.

**Responsive.** Below 48rem the rail narrows to 3.75rem, the hero legend becomes a wrapping row of bullets with labels, and the footer interchange becomes a compact row of bullets on a bar. From 48rem the legend bullets and footer interchange sit exactly on their lanes. The service-figure row is two columns, four from 64rem.

## Elevation & Depth

Flat. There are no drop shadows anywhere; depth is conveyed by paint alone: black enamel against white stock, and z-order inside the rail (stops over lanes, lanes over transfer connectors). The only box-shadows are inset ones that paint the white signage stripe inside black signs and the footer; they are a printed stripe, not elevation.

### Named Rules
**The Enamel Rule.** Surfaces are flat paint. Never lift an element with a shadow, blur or glow; separate with black, white, a 3px ink rule, or a 1px hairline.

## Shapes

Two shapes only: the rectangle and the circle. Bands, signs, rules and connector bars have square corners. Stops, bullets, transfer discs and nav dots are fully round, and express stops are full pills. There are no intermediate radii; the 2px radius exists only on the focus outline.

Lines are straight vertical strokes. Rules come in two weights: 3px Enamel Black for structural rules (nav strip bottom edge in white, top of the service-figure row, top of the skills list, footer top) and 1px for hairlines.

## Components

### Navigation
Sticky black strip, items right-aligned, with a 3px white bottom edge that reads as the band's stripe.
- **Items:** Label type in paper, each preceded by a 0.5rem round station dot in currentColor. "Contact" is bold.
- **Hover:** the dot scales to 1.6× (200ms, expo-out) and the text underlines.
- **Mobile:** the list scrolls horizontally with a right-edge fade; no menu toggle.

### Sign Band (hero)
The black sign band that opens the page: name in Display type aligned to the first lane, the A K C D route-bullet legend sitting on the lanes with labels beneath, the job title in Subtitle type, and the contact interchange at the right.

### Route Bullet
Solid circle in the line colour with its letter (700 weight). Two sizes: small (1.125em, scales with surrounding text, min 0.875rem letter) inline after station names, figures and skills; medium (bullet token) on the legend and footer interchange. A bullet announces "{Line} line" to assistive tech unless a visible label sits beside it.

### Station Sign (section heading)
White Archivo 700 on a black enamel rectangle, with a 3px white stripe inset 5px from the top edge. Square corners, inline-block width.

### Express Stop
The station marker for roles and schools. A white pill with an ink border spanning the contiguous lanes the station serves. When served lanes are not adjacent, the stop splits into one pill per contiguous group, joined by an ink transfer bar that runs underneath passing lines, so a stop never covers a line it does not serve. A black tick runs from the pill's right edge into the content column. Express stops carry a two-digit station number in the margin; numbering continues across sections.

### Local Stop
The marker for projects: a black dot on each served lane, joined by an ink bar when there are several, with the tick leaving from the last dot. Local stops are unnumbered.

### Off-line Stop
A station with no lines: a white ring with an ink border on the first lane position, its tick passing under any lanes running through, so it never reads as a stop on those lines.

### Platform Sign (figures)
The lead figure in Figure type with its label below in 500 weight, then a 3px ink rule and the service-information row: value in Figure-service with an optional half-size route bullet, label beneath in Platform Grey. An optional bold highlight line can follow ("Petabyte-scale data").

### Tick List
Running bullets for a station: Body type in Platform Grey, max 65ch, each marked by a short 0.875rem × 3px ink tick instead of a glyph.

### Skills Legend
A grid of skills under a 3px ink rule, each row divided by a hairline, each skill prefixed by its route bullet, or by a plain black stop when it rides no line.

### Transfer Interchange (contact)
Contact links as an interchange. In the sign band: white discs with ink icons joined by short white connector bars, next to a bold "Contact" link and a list of handles in Enamel Grey. In the footer: discs stacked vertically on a continuous white connector, each beside its handle. Discs scale to 1.08× on hover (220ms, expo-out); text underlines.

### Terminus (footer)
Black band with a 3px white inset stripe at the top, "Contact" in Headline type, and all four route bullets joined by one white transfer bar on their lanes: every line's final interchange. A hairline divides the colophon.

### Project Link
Station-name links draw their underline from left to right (320ms, expo-out) and nudge the up-right arrow diagonally on hover.

### Focus and Selection
Focus is a 3px currentColor outline, 4px offset, 2px radius, on every interactive element (paper on the sign-band discs). Selection is Route Yellow with ink text. The skip link is Route Yellow with ink text.

### Named Rules
**The Routed Line Rule.** Lines are computed from the stops, never painted on. A line exists only between its first stop (or the sign band) and its last stop, and its lane position never changes.

**The One Motion Rule.** The only choreographed motion is the lane draw in the first viewport: lines scale down from the top over 900ms on expo-out, staggered by 90ms per lane. It is disabled under prefers-reduced-motion, as is smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** place every new section, station and block inside the network row so the margin, rail and lanes stay continuous.
- **Do** derive which lines pass a row from the route plan in `src/network.ts`; add new rows to its row order in page order.
- **Do** split an express stop into contiguous lane groups joined by an ink transfer bar whenever its served lanes are not adjacent.
- **Do** use express stops (white pill, numbered) for roles and schools, local stops (black dots, unnumbered) for projects, and an off-line ring for anything on no line.
- **Do** head every section with a black enamel station sign carrying the white inset stripe.
- **Do** set every data number in tabular lining numerals and date ranges with an en dash.
- **Do** keep ink letters on the C and D bullets.
- **Do** keep focus as a 3px currentColor outline with a 4px offset.

### Don't:
- **Don't** use a route colour on headings, text, backgrounds, buttons or borders; colour lives on lanes and bullets only.
- **Don't** add a fifth line colour or reorder the lanes.
- **Don't** add drop shadows, blurs or glows; the inset stripe is the only box-shadow and it is paint.
- **Don't** introduce intermediate corner radii; shapes are square or fully round.
- **Don't** draw a line past its last stop or before its first, and don't let a stop cover a lane it does not serve.
- **Don't** add choreographed motion beyond the first-viewport lane draw.
- **Don't** introduce a second typeface or italics.
