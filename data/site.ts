export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const SITE_CONFIG = {
  name: "Rajeshkumar R.",
  title: "Full-Stack Developer & Tech Lead",
  headline: "I build digital products that solve real business problems.",
  subheadline: "Full-Stack Developer and Tech Lead building business websites, custom CRM systems, admin dashboards, and scalable web applications.",
  location: "Pondicherry, India",
  siteUrl: "https://rajeshkumar-dev.vercel.app",
  social: {
    linkedin: "https://www.linkedin.com/in/r-rajeshkumar/",
    portfolio: "https://rajeshkumar-dev.vercel.app/",
    whatsapp: "https://wa.me/?text=Hi%20Rajesh,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project."
  },
  contact: {
    inquiryEmail: "contact@rajeshkumar.dev", // safe fallback presentation
    availability: "Available for Select Freelance & Contract Projects",
    typicalResponseTime: "Within 24 Hours",
    preferredContactMethods: ["Contact Form", "WhatsApp", "LinkedIn"]
  },
  credibilityCapabilities: [
    "Full-Stack Development",
    "Technical Leadership",
    "CRM & Admin Systems",
    "Business Websites",
    "Custom Web Applications"
  ],
  developmentProcess: [
    {
      step: "01",
      title: "Understand",
      description: "Deconstruct your business model, target users, and the core operational bottlenecks we need to solve before proposing technical solutions."
    },
    {
      step: "02",
      title: "Plan",
      description: "Define concrete user flows, system architecture, database schema, tech stack choices, and phased milestone deliverables."
    },
    {
      step: "03",
      title: "Build",
      description: "Develop the full-stack solution with clean, maintainable code, modern component architecture, and responsive styling."
    },
    {
      step: "04",
      title: "Validate",
      description: "Rigorously test edge cases, cross-device responsiveness, form validation, performance benchmarks, and user experience."
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploy to production infrastructure with SSL, domain configuration, SEO metadata tags, and end-to-end sanity verification."
    },
    {
      step: "06",
      title: "Support",
      description: "Provide onboarding documentation, operational guidance, and agreed post-launch technical support to ensure smooth adoption."
    }
  ]
};
