// ---------------------------------------------------------------------------
// PORTFOLIO CONTENT — EDIT THIS FILE
// ---------------------------------------------------------------------------
// Everything the site displays lives here. Replace the placeholder text with
// your real details (name, bio, experience, skills, projects, education,
// contact links). No other files need to change to update your content.
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
  start: string;
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
  name: 'Your Name',
  headline: 'Software Engineer',
  tagline:
    'I build reliable, well-crafted software — from data pipelines to polished user experiences.',
  location: 'City, Country',
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',

  about: [
    'This is placeholder text. Write a short, friendly introduction here — who you are, what you focus on, and what you care about as an engineer.',
    'Add a second paragraph with a bit of personality: your interests, the kinds of problems you like to solve, or what you are currently learning.',
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourusername', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
  ],

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Company Name',
      location: 'City, Country',
      start: '2023',
      end: 'Present',
      summary: 'One-line summary of your role and the team/product.',
      highlights: [
        'Placeholder achievement — describe an impactful project and the result.',
        'Placeholder achievement — mention scale, metrics, or technologies used.',
        'Placeholder achievement — highlight collaboration or leadership.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Previous Company',
      location: 'City, Country',
      start: '2020',
      end: '2023',
      highlights: [
        'Placeholder achievement — what you shipped and why it mattered.',
        'Placeholder achievement — a technical challenge you solved.',
      ],
    },
  ],

  skills: [
    { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
    { category: 'Frameworks', items: ['Astro', 'React', 'Node.js', 'FastAPI'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
    { category: 'Data', items: ['PostgreSQL', 'Redis', 'ETL', 'BigQuery'] },
  ],

  projects: [
    {
      name: 'Project One',
      description:
        'Placeholder description of a project you are proud of. Explain the problem it solves and your role.',
      tech: ['TypeScript', 'Astro', 'PostgreSQL'],
      links: [
        { label: 'Live', href: 'https://example.com' },
        { label: 'Code', href: 'https://github.com/yourusername/project-one' },
      ],
      featured: true,
    },
    {
      name: 'Project Two',
      description:
        'Placeholder description. Highlight an interesting technical detail or the impact it had.',
      tech: ['Python', 'FastAPI', 'Docker'],
      links: [{ label: 'Code', href: 'https://github.com/yourusername/project-two' }],
      featured: true,
    },
    {
      name: 'Project Three',
      description: 'Placeholder description of another notable project.',
      tech: ['Go', 'Kubernetes'],
      links: [{ label: 'Code', href: 'https://github.com/yourusername/project-three' }],
    },
  ],

  education: [
    {
      degree: 'M.Sc. in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      start: '2018',
      end: '2020',
      details: 'Optional: thesis topic, specialization, or notable coursework.',
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      start: '2015',
      end: '2018',
    },
  ],

  seo: {
    title: 'Your Name — Software Engineer',
    description:
      'Portfolio of Your Name, a software engineer building reliable, well-crafted software.',
    ogImage: '/og-image.svg',
  },
};
