export interface ExperienceItem {
  id: string;
  role: string;
  companyOrContext: string;
  isCurrent: boolean;
  period: string;
  location: string;
  employmentType: "Full-Time Employment" | "Professional Engineering Background";
  summary: string;
  highlights: string[];
  technologies: string[];
  techLeadResponsibilities?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "seedatamd",
    role: "Full-Stack Developer & Tech Lead Responsibilities",
    companyOrContext: "SeedataMD",
    isCurrent: true,
    period: "March 2025 – Present",
    location: "Salem, India",
    employmentType: "Full-Time Employment",
    summary: "Driving full-stack engineering and technical ownership across scalable MERN applications, real-time communication systems, and team collaboration.",
    highlights: [
      "Engineered scalable, SEO-optimised web platforms leveraging Next.js, React, Node.js, and MongoDB.",
      "Architected and implemented real-time features using Socket.IO alongside Twilio communication integrations.",
      "Customised and extended headless CMS structures (Prismic CMS) to empower editorial teams with dynamic content workflows.",
      "Collaborated closely with UI/UX designers to translate complex product specifications into intuitive, responsive user experiences."
    ],
    techLeadResponsibilities: [
      "Breaking down product requirements into actionable engineering sprints and task backlogs.",
      "Evaluating architectural trade-offs, tech stack selections, and performance considerations.",
      "Mentoring and guiding developers through the BuddyUp onboarding programme to ensure rapid team productivity.",
      "Upholding code quality, review standards, and technical coordination across frontend and backend modules."
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Twilio",
      "Prismic CMS",
      "Tailwind CSS"
    ]
  },
  {
    id: "prior-fullstack",
    role: "Full-Stack Developer (MERN Stack & SEO)",
    companyOrContext: "Full-Stack Engineering Experience",
    isCurrent: false,
    period: "January 2024 – February 2025",
    location: "Salem, India",
    employmentType: "Professional Engineering Background",
    summary: "Focused on scalable MERN applications, database architecture, RESTful API design, and search engine optimization enhancements.",
    highlights: [
      "Engineered SEO-optimised features and structured data implementations to increase search visibility and organic reach.",
      "Built resilient server-side architectures, database schemas, and RESTful APIs using Node.js and MongoDB.",
      "Refined frontend UI/UX using modern design systems for heightened user engagement and minimal friction.",
      "Monitored web performance and technical health using Google Search Console, iterating on data-backed speed improvements."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML5 / CSS3",
      "REST APIs",
      "Git"
    ]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
  focus: string;
}

export const EDUCATION: EducationItem = {
  degree: "B.Sc., Statistics",
  institution: "Indira Gandhi College of Arts and Science",
  duration: "2022 – 2026",
  status: "Undergraduate Studies",
  focus: "Statistical modelling, quantitative analysis, data structures, and mathematical problem-solving."
};

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "3rd Place — Guru's Codekata Challenge",
    subtitle: "Competitive Algorithmic Programming",
    description: "Secured 3rd place in an intensive coding challenge evaluating algorithmic efficiency, memory management, and edge-case execution.",
    badge: "Podium Finish"
  },
  {
    title: "500+ Problems Solved",
    subtitle: "Guru's Codekata Platform",
    description: "Consistent problem-solving track record across data structures, string manipulation, recursion, mathematical logic, and dynamic programming.",
    badge: "500+ Solved"
  }
];

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; iconName?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Modern, component-driven client architecture with exceptional performance and accessibility.",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & Semantic DOM", level: "Mastery" },
      { name: "CSS3 & Modern Layouts", level: "Advanced" },
      { name: "Material UI (MUI)", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Scalable server logic, RESTful API architecture, and asynchronous event processing.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Authentication & RBAC", level: "Proficient" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Schema design, query optimization, indexing, and data modelling.",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "Mongoose ODM", level: "Advanced" },
      { name: "Database Schema Design", level: "Proficient" }
    ]
  },
  {
    category: "Real-Time & Communications",
    description: "Live data synchronisation, bi-directional event streaming, and telecom APIs.",
    skills: [
      { name: "Socket.IO", level: "Proficient" },
      { name: "Twilio API", level: "Proficient" },
      { name: "WebSockets", level: "Proficient" }
    ]
  },
  {
    category: "CMS & Platforms",
    description: "Headless content management and structured data modelling for editorial teams.",
    skills: [
      { name: "Prismic CMS", level: "Proficient" },
      { name: "Custom Content Slices", level: "Proficient" }
    ]
  },
  {
    category: "Tooling & Collaboration",
    description: "Version control, code quality, deployment pipelines, and team coordination.",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Technical Planning", level: "Tech Lead Level" },
      { name: "Vercel Deployment", level: "Advanced" }
    ]
  }
];
