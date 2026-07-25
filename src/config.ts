export const siteConfig = {
  name: "Diogo Francisco Costa",
  title: "DevOps Cloud Platform Engineer",
  description:
    "Portfolio of Diogo Francisco Costa — DevOps Cloud Platform Engineer at Critical TechWorks (BMW Group), building reliable, scalable developer infrastructure with Kubernetes, AWS and CI/CD.",
  accentColor: "#3b5bdb",
  social: {
    email: "developer@dichico.com",
    linkedin: "https://www.linkedin.com/in/dichico",
    github: "https://github.com/dichico",
  },
  aboutMe:
    "I'm a DevOps Cloud Platform Engineer at Critical TechWorks, working with the BMW Group on Orbit — a large-scale, multi-cluster Kubernetes environment that powers cloud connectivity for BMW vehicles. I build and operate distributed microservices and enterprise-grade CI/CD infrastructure that runs over 100,000 workflow jobs per day. I hold an Integrated Master's in Informatics Engineering from the University of Minho, specialized in Data Engineering and Cybersecurity, and I'm a certified Scrum Master. I work daily with AWS, Kubernetes, MongoDB Atlas and GitHub Enterprise.",
  skills: [
    "AWS",
    "Kubernetes",
    "Azure",
    "Terraform",
    "GitHub Actions",
    "CI/CD",
    "NestJS",
    "Python",
    "SQL",
    "MongoDB Atlas",
    "Databricks",
    "Scrum",
  ],
  projects: [
    {
      name: "BMW Group's CI/CD Modernization",
      description:
        "Cloud Developer Platform (CDP) — internally known as Orbit Spaceship — facilitates over 130,000 builds and deployments daily, supporting 1,300+ microservices across hundreds of AWS accounts spanning multiple regions worldwide. It provides 50 reusable CI/CD building blocks to over 3,000 developers, enabling seamless integration, simplified maintenance and easy adoption of new features.",
      link: "https://aws.amazon.com/blogs/migration-and-modernization/an-engine-of-efficiency-bmw-groups-ci-cd-modernization-journey-with-aws/",
      skills: ["AWS", "Kubernetes", "CI/CD", "NestJS", "GitHub Enterprise"],
    },
    {
      name: "SONAE Data & Cloud Platform",
      description:
        "Azure-based data platform (Data Lakes, Databricks, Data Factory) plus custom CI/CD tooling in Terraform and GitHub Actions to accelerate cloud resource delivery across SONAE's businesses.",
      link: "https://github.com/dichico",
      skills: ["Azure", "Databricks", "Terraform", "Python"],
    },
    {
      name: "Open Source & Experiments",
      description:
        "Side projects and experiments across cloud, data and web — explore my public work on GitHub.",
      link: "https://github.com/dichico",
      skills: ["TypeScript", "Python", "Astro"],
    },
  ],
  experience: [
    {
      company: "Critical TechWorks · BMW Group",
      title: "DevOps Cloud Platform Engineer",
      dateRange: "Dec 2023 - Present",
      bullets: [
        "Operate and scale Orbit's multi-cluster Kubernetes platform powering cloud connectivity for BMW vehicles and hundreds of internal microservices.",
        "Run a global CI/CD service on GitHub Enterprise and self-hosted runners executing 100k+ workflow jobs/day with runner availability under 10 seconds.",
        "Build and maintain distributed microservices in NestJS, optimized for resiliency and observability.",
        "Manage high-throughput runner infrastructure on AWS and MongoDB Atlas for distributed, high-availability workloads.",
      ],
    },
    {
      company: "SONAE MC",
      title: "Data, Cloud & DevOps Engineer",
      dateRange: "Jul 2023 - Nov 2023",
      bullets: [
        "Built and managed Data Lakes, Data Hubs, Databricks and Data Factories on Microsoft Azure.",
        "Worked with Cloudera Hadoop across both cloud and on-premise environments.",
        "Developed custom CI/CD solutions with Terraform, the Azure SDK, Python and GitHub Actions.",
      ],
    },
    {
      company: "SONAE MC",
      title: "Big Data Engineer",
      dateRange: "Sep 2022 - May 2023",
      bullets: [
        "Traineeship focused on developing and demonstrating skills across the Big Data area.",
        "Worked with petabyte-scale data solutions supporting SONAE's businesses.",
      ],
    },
  ],
  education: [
    {
      school: "University of Minho",
      degree: "Integrated Master's (M.Sc.) in Informatics Engineering",
      dateRange: "2015 - 2021",
      achievements: [
        "Specialized in Software Development, Databases and Cyber-security",
        "Focus on Data Engineering and Cryptography",
        "Recipient of the Prémio de Excelência (Excellence Award)",
      ],
    },
    {
      school: "Escola Secundária de Maximinos",
      degree: "Secondary Education — Sciences and Technologies",
      dateRange: "2015",
      achievements: [],
    },
  ],
};
