# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring managers** evaluating Diogo for platform, DevOps, or cloud engineering roles. They arrive from LinkedIn, a CV, or a referral, skim quickly, and decide whether to reach out.
- **Fellow engineers and the tech community** checking who he is and what he has built, usually arriving from GitHub, LinkedIn, or a conversation.

Both need to grasp who Diogo is and the scale of his work within seconds, then reach him.

## Product Purpose

A personal portfolio for Diogo Francisco Costa, DevOps Cloud Platform Engineer at Critical TechWorks (BMW Group), that works as a professional calling card. Success means a visitor leaves convinced of his engineering credibility and contacts him by email or LinkedIn, or goes on to his GitHub.

## Positioning

Scale first, range second. Diogo builds and operates developer platform infrastructure at a scale few portfolios can claim truthfully: BMW Group's Cloud Developer Platform (Orbit Spaceship) handles 130,000+ builds and deployments daily across 1,300+ microservices for 3,000+ developers, and he runs CI/CD infrastructure executing 100k+ workflow jobs per day with runner availability under 10 seconds. His range (petabyte-scale data platforms on Azure, through cloud, to Kubernetes CI/CD) is the supporting proof.

## Operating Context

- A single static page at https://portfolio.dichico.com, read on desktop and mobile.
- Shared as a link on LinkedIn, in CVs, and in conversations, so its link preview (Open Graph) matters.

## Capabilities and Constraints

- **Stack:** Astro 5 and Tailwind CSS 4 with static output. The stack is flexible as long as the site deploys to GitHub Pages at `portfolio.dichico.com`: keep the custom-domain CNAME, `site` in `astro.config.mjs`, the GitHub Actions Pages workflow, and the Cloudflare front.
- **Content source:** all content lives in `src/config.ts` (name, title, about, skills, projects, experience, education, social links). Content and copy are fixed; only presentation may change. Any new microcopy (labels, headings) needs the owner's approval.
- **Structure:** a single page with About, Projects, Experience, and Education sections, plus contact links.
- **Social links on hand:** email (`developer@dichico.com`), LinkedIn, GitHub. There is no Twitter/X account.

## Brand Commitments

- Name: **Diogo Francisco Costa**. Title: **DevOps Cloud Platform Engineer**.
- The previous devportfolio-theme look is not a commitment; it is being replaced.

## Evidence on Hand

All in `src/config.ts`:

- BMW Group CI/CD Modernization (CDP / Orbit Spaceship): 130,000+ daily builds and deployments, 1,300+ microservices, hundreds of AWS accounts across regions, 50 reusable CI/CD building blocks, 3,000+ developers. Public AWS blog post linked.
- Critical TechWorks role: 100k+ workflow jobs/day, runner availability under 10 seconds, multi-cluster Kubernetes.
- SONAE MC: Azure data platform (Data Lakes, Databricks, Data Factory), Terraform and GitHub Actions tooling, petabyte-scale data.
- Education: Integrated Master's in Informatics Engineering, University of Minho; Prémio de Excelência (Excellence Award); certified Scrum Master.

Absent, and not to be fabricated: headshot, CV download, testimonials, client logos, writing or talks, additional metrics.

## Product Principles

1. **Lead with verified scale.** The numbers are real and sourced, so put them where a skimming visitor sees them first.
2. **Facts stay untouched.** Presentation can change; claims, copy, and metrics cannot.
3. **Every path ends in contact.** Email, LinkedIn, and GitHub are reachable from anywhere on the page.
4. **Engineered, not decorated.** The site itself should show care about performance, accessibility, and correctness.

## Accessibility & Inclusion

Target WCAG 2.2 AA: keyboard reachable, visible focus, sufficient contrast, semantic headings and landmarks, and respect for `prefers-reduced-motion`.
