---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components"]
---

# Surface brief: portfolio home (src/pages/index.astro)

**Scope:** the single-page portfolio at portfolio.dichico.com: header, hero, About, Projects, Experience, Education, footer. **Mode:** Persuade.

**Audience & job:** recruiters/hiring managers and fellow engineers, equally. Within seconds they grasp who Diogo is and the scale of his work, then contact him (email, LinkedIn) or go on to GitHub.

**Proof:** only the facts in `src/config.ts`. Lead with 130,000+ builds and deployments daily, then 1,300+ microservices, 3,000+ developers, 100k+ jobs/day, runner availability under 10 s. Range (data → cloud → DevOps) is supporting proof.

**Constraints:** config.ts facts and copy are fixed. New microcopy (labels, captions) needs owner approval. Static Astro output on GitHub Pages at portfolio.dichico.com. WCAG 2.2 AA.

## Direction contract

THESIS: The career is a transit system. The skill domains are lines, the roles are stations, and the scale figures are the ridership posted on the platform sign. It refuses the category default: a dark hero with a name, then cards with tech tags.

OWN-WORLD: White stock and a black enamel signage band set in a white neo-grotesk. Solid circular route bullets carry the domain lines: Cloud (blue #0039A6), Kubernetes (green #00933C), CI/CD (orange #FF6319), Data (yellow #FCCC0A). Lines are drawn at 14px with 45° jogs, and stations are white pills with black ticks. Colour appears only on lines and bullets that carry meaning; black and grey hold the frame. A numbered left margin column runs down the page.

STORY: The visitor reads the name and title on the sign, then sees 130,000+ builds a day at platform scale, then follows the lines down through the stations (BMW Group, SONAE MC, University of Minho) to Contact, which is the interchange.

FIRST VIEWPORT: A black sign band holds the nav, the name at about 78px, the route bullets with their legend, the title, and the Contact interchange (email, LinkedIn, GitHub) at right. Below it, station 01 (Critical TechWorks · BMW Group) heads the white body, then 130,000+ at about 200px with the service-information row, and the lines exit downward into station 02.

FORM: Vignelli/Unimark 1972 transit diagram and signage, position 3 on the ordered list; seed:37ed20abc76141c2. Raises: one continuous network from hero to footer; colour rationed to what moves; a strict numbered margin column.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- Approved microcopy (owner, 2026-11-10): line legend "Cloud" / "K8s" / "CI/CD" / "Data"; "builds and deployments, every day"; "Petabyte-scale data"; "runner availability"; "Contact". Anything new beyond these still needs approval.
