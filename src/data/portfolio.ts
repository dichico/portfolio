// ---------------------------------------------------------------------------
// PORTFOLIO CONTENT — EDIT THIS FILE
// ---------------------------------------------------------------------------
// Everything the site displays lives here. Update these values to change the
// site content — no other files need editing.
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string;
  href: string;
  /** Inline SVG-friendly icon key. Supported: github, linkedin, email, twitter, website. */
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'website';
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  /** Optional. Omit to show a single year (uses `end`). */
  start?: string;
  end: string;
  details?: string;
}

export interface Portfolio {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl?: string;
  about: string[];
  socials: SocialLink[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: Project[];
  education: EducationItem[];
  /** Used for <title>, meta description and Open Graph tags. */
  seo: {
    title: string;
    description: string;
    /** Path (relative to site root) to the social share image. */
    ogImage: string;
  };
}

export const portfolio: Portfolio = {
  name: 'Diogo Costa',
  headline: 'DevOps Cloud Platform Engineer',
  tagline:
    'Building reliable, scalable developer infrastructure at Critical TechWorks for the BMW Group.',
  location: 'Porto, Portugal',
  email: 'developer@dichico.com',

  about: [
    "I'm a DevOps Cloud Platform Engineer at Critical TechWorks, working with the BMW Group on Orbit — a large-scale, multi-cluster Kubernetes environment that powers cloud connectivity for BMW vehicles. I build and operate distributed microservices and enterprise-grade CI/CD infrastructure that runs over 100,000 workflow jobs per day.",
    "I hold an Integrated Master's in Informatics Engineering from the University of Minho, where I specialized in Data Engineering and Cybersecurity. Before CTW, I trained at SONAE MC building cloud and big-data platforms on Azure. I work daily with AWS, Kubernetes, MongoDB Atlas and GitHub Enterprise, and I'm also a certified Scrum Master.",
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/dichico', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dichico', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:developer@dichico.com', icon: 'email' },
  ],

  experience: [
    {
      role: 'DevOps Cloud Platform Engineer',
      company: 'Critical TechWorks · BMW Group',
      location: 'Porto, Portugal',
      start: 'Dec 2023',
      end: 'Present',
      summary:
        'Part of the Orbit Platform team, running a multi-cluster Kubernetes environment that powers cloud connectivity for BMW vehicles and supports hundreds of internal microservices.',
      highlights: [
        'Operate and scale Orbit\u2019s multi-cluster Kubernetes platform for cloud-connected vehicle services.',
        'Run a global CI/CD service on GitHub Enterprise and self-hosted runners executing 100k+ workflow jobs/day with runner availability under 10 seconds.',
        'Build and maintain distributed microservices in NestJS, optimized for resiliency and observability.',
        'Manage high-throughput self-hosted runner infrastructure on AWS and MongoDB Atlas for distributed, high-availability data.',
        'Support GitHub Enterprise adoption, best practices and platform integration across BMW.',
      ],
    },
    {
      role: 'Data, Cloud & DevOps Engineer',
      company: 'SONAE MC',
      location: 'Maia, Porto, Portugal',
      start: 'Jul 2023',
      end: 'Nov 2023',
      highlights: [
        'Built and managed Data Lakes, Data Hubs, Databricks and Data Factories on Microsoft Azure.',
        'Worked with Cloudera Hadoop across both cloud and on-premise environments.',
        'Developed custom CI/CD solutions with Terraform, the Azure SDK, Python and GitHub Actions to speed up cloud resource delivery.',
      ],
    },
    {
      role: 'Big Data Engineer',
      company: 'SONAE MC',
      location: 'Maia, Porto, Portugal',
      start: 'Sep 2022',
      end: 'May 2023',
      highlights: [
        'Traineeship focused on developing and demonstrating skills across the Big Data area.',
        'Worked with petabyte-scale data solutions supporting SONAE\u2019s businesses.',
      ],
    },
  ],

  skills: [
    { category: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'NoSQL'] },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Microsoft Azure', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitHub Enterprise', 'CI/CD'],
    },
    {
      category: 'Data',
      items: ['MongoDB Atlas', 'Databricks', 'Azure Data Factory', 'Data Lakes', 'ETL', 'Cloudera Hadoop'],
    },
    {
      category: 'Frameworks & Practices',
      items: ['NestJS', 'Agile', 'Scrum', 'Cryptography'],
    },
    {
      category: 'Certifications',
      items: ['Azure Fundamentals', 'Professional Scrum Master I (PSM I)', 'GitHub Actions', 'Developing Android Apps'],
    },
  ],

  projects: [
    {
      name: "BMW Group's CI/CD Modernization",
      description:
        'Cloud Developer Platform (CDP) — internally known as Orbit Spaceship — facilitates over 130,000 builds and deployments daily, supporting 1,300+ microservices across hundreds of AWS accounts spanning multiple regions worldwide. It provides 50 reusable CI/CD building blocks to over 3,000 developers, enabling seamless integration, simplified maintenance and easy adoption of new features.',
      tech: ['AWS', 'Kubernetes', 'CI/CD', 'NestJS', 'GitHub Enterprise'],
      links: [
        {
          label: 'Read',
          href: 'https://aws.amazon.com/blogs/migration-and-modernization/an-engine-of-efficiency-bmw-groups-ci-cd-modernization-journey-with-aws/',
        },
      ],
      featured: true,
    },
    {
      name: 'SONAE Data & Cloud Platform',
      description:
        'Azure-based data platform (Data Lakes, Databricks, Data Factory) plus custom CI/CD tooling in Terraform and GitHub Actions to accelerate cloud resource delivery across SONAE.',
      tech: ['Azure', 'Databricks', 'Terraform', 'Python', 'GitHub Actions'],
      links: [],
      featured: true,
    },
    {
      name: 'Open Source & Experiments',
      description:
        'Side projects and experiments across cloud, data and web — explore my public work on GitHub.',
      tech: ['TypeScript', 'Python', 'Astro'],
      links: [{ label: 'Code', href: 'https://github.com/dichico' }],
    },
  ],

  education: [
    {
      degree: 'Integrated Master\u2019s (M.Sc.) in Informatics Engineering',
      institution: 'University of Minho',
      location: 'Braga, Portugal',
      start: '2015',
      end: '2021',
      details:
        'Specialized in Software Development, Databases and Cyber-security, with a focus on Data Engineering and Cryptography.',
    },
    {
      degree: 'Secondary Education — Sciences and Technologies',
      institution: 'Escola Secundária de Maximinos',
      location: 'Braga, Portugal',
      end: '2015',
    },
  ],

  seo: {
    title: 'Diogo Costa — DevOps Cloud Platform Engineer',
    description:
      'Diogo Costa is a DevOps Cloud Platform Engineer at Critical TechWorks (BMW Group), building reliable, scalable developer infrastructure with Kubernetes, AWS and CI/CD.',
    ogImage: '/og-image.svg',
  },
};
