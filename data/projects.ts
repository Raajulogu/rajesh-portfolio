export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  industry: string;
  liveUrl: string | null;
  liveDomain: string;
  heroImage: string;
  classification: "Freelance / Client Project" | "Platform Planning & Technical Scope";
  featured: boolean;
  featuredOrder?: number;
  featuredRole: string;
  shortDescription: string;
  businessChallenge: string;
  solution: string;
  features: string[];
  hasInternalSystem: boolean;
  internalSystemType?: "Private CRM" | "Private Admin Panel";
  internalSystemDescription?: string;
  internalSystemHighlights?: string[];
  myContribution: string[];
  technologies: string[];
  statsOrBadges: { label: string; value: string }[];
  accentColor: string;
  seoTitle: string;
  metaDescription: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ranji-textiles",
    slug: "ranji-textiles",
    title: "Ranji Textiles",
    tagline: "Wholesale Product Catalogue & Operations Admin",
    category: "Wholesale Product Catalogue + Private Admin Panel",
    industry: "Textiles & Manufacturing",
    liveUrl: "https://ranji-textiles.vercel.app/",
    liveDomain: "ranji-textiles.vercel.app",
    heroImage: "/images/projects/ranji-textiles-hero.jpg",
    classification: "Freelance / Client Project",
    featured: true,
    featuredOrder: 1,
    featuredRole: "Product Catalogue + Admin Panel",
    shortDescription: "A wholesale muslin babywear catalogue engineered for B2B buyers with interactive filtering, custom-print specifications, and an internal admin operations panel.",
    businessChallenge: "Wholesale textile buyers needed a structured, fast method to browse product collections, inspect fabric specifications, understand tiered wholesale pricing, and place custom manufacturing enquiries without manual WhatsApp catalog back-and-forth.",
    solution: "Built a responsive, high-performance product catalogue featuring real-time category filtering, search, detailed product modal views, and minimum-order guidelines, accompanied by a private admin management workflow.",
    features: [
      "Structured wholesale product catalogue with high-resolution collection displays",
      "Dynamic product filtering by garment category, age tier, and fabric weave",
      "Instant search bar with zero-lag client-side query matching",
      "Wholesale volume pricing tiers and minimum order quantity (MOQ) displays",
      "Custom-print specification guidelines for private-label apparel clients",
      "Integrated direct wholesale enquiry triggers pre-populated with item metadata",
      "Mobile-optimised buyer browsing for regional and international distributors"
    ],
    hasInternalSystem: true,
    internalSystemType: "Private Admin Panel",
    internalSystemDescription: "Private administrative back-office system built for the business owner to maintain catalogue items, update stock statuses, adjust wholesale pricing tiers, and review incoming wholesale bulk order requests.",
    internalSystemHighlights: [
      "Product catalogue CRUD management (add, edit, archive product lines)",
      "Category and collection grouping tools",
      "Tiered wholesale price updates and discount configuration",
      "Enquiry logging and B2B buyer follow-up status tracker"
    ],
    myContribution: [
      "End-to-end frontend architecture and component development",
      "Responsive catalogue UI implementation with rapid filtering & modal detail states",
      "Private admin dashboard interface design and operational workflow wiring",
      "Deployment pipeline setup and performance tuning on Vercel"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Project" },
      { label: "Platform Type", value: "B2B Catalogue + Admin" },
      { label: "Internal System", value: "Private Admin Panel" }
    ],
    accentColor: "#f59e0b",
    seoTitle: "Ranji Textiles Website Case Study | Wholesale Catalogue",
    metaDescription: "A wholesale muslin babywear catalogue with product categories, size and price details, custom-print information, and a private admin panel."
  },
  {
    id: "lumos-digital-media",
    slug: "lumos-digital-media",
    title: "Lumos Digital Media",
    tagline: "Growth Agency Website & Private Operations CRM",
    category: "Digital Marketing Website + Private CRM",
    industry: "Digital Marketing & Creative Agency",
    liveUrl: "https://www.lumosdigitalmedia.in/",
    liveDomain: "lumosdigitalmedia.in",
    heroImage: "/images/projects/lumos-digital-media-hero.webp",
    classification: "Freelance / Client Project",
    featured: true,
    featuredOrder: 2,
    featuredRole: "Agency Website + CRM",
    shortDescription: "A modern digital agency presence showcasing creative capabilities and paid media offerings, paired with a custom internal CRM for managing inbound leads and consultation pipelines.",
    businessChallenge: "The agency needed to clearly differentiate its multi-disciplinary services (performance marketing, creative branding, SEO, local growth) while providing an internal system to track prospect enquiries from initial touchpoint to signed retainer.",
    solution: "Engineered an editorial, high-converting agency website that communicates service depth and client value propositions, coupled with a private CRM system designed around the agency's lead-intake and follow-up workflow.",
    features: [
      "Editorial agency showcase presenting cross-channel marketing capabilities",
      "Interactive service breakdowns across Performance Ads, Content, and Local SEO",
      "High-intent conversion funnels with structured consultation request forms",
      "Mobile-first responsive architecture designed for executive evaluation",
      "Fast page load speed optimised for SEO rankings and organic discoverability"
    ],
    hasInternalSystem: true,
    internalSystemType: "Private CRM",
    internalSystemDescription: "Private CRM system developed specifically for the agency's management to track incoming client leads, log discovery calls, organise pipeline stages, and manage outreach follow-ups.",
    internalSystemHighlights: [
      "Inbound lead pipeline stages (New, Discovery, Proposal Sent, Won/Lost)",
      "Client contact profiles with interaction history and consultation notes",
      "Automated notification triggers for new inbound consultation submissions",
      "Weekly inquiry summary reports and conversion tracking"
    ],
    myContribution: [
      "Full-stack development of the public agency website",
      "Design and implementation of conversion-focused landing sections and interactive UI",
      "Architecture and development of the private internal CRM interface and data flow",
      "Technical setup, domain routing, and SEO optimization"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Project" },
      { label: "Platform Type", value: "Agency Web + Custom CRM" },
      { label: "Internal System", value: "Private Inbound CRM" }
    ],
    accentColor: "#8b5cf6",
    seoTitle: "Lumos Digital Media Website & CRM Case Study",
    metaDescription: "A digital marketing agency website paired with a private CRM development project for business and lead-management workflows."
  },
  {
    id: "singapore-maxi-cabs",
    slug: "singapore-maxi-cabs",
    title: "Singapore Maxi Cabs",
    tagline: "Chauffeur Transport Platform & Operations Dispatch",
    category: "Transportation Website / Booking Experience",
    industry: "Transportation & Chauffeur Services",
    liveUrl: "https://smc-sigma-six.vercel.app/",
    liveDomain: "smc-sigma-six.vercel.app",
    heroImage: "/images/projects/singapore-maxi-cabs-hero.png",
    classification: "Freelance / Client Project",
    featured: true,
    featuredOrder: 3,
    featuredRole: "Booking Website + Admin Panel",
    shortDescription: "A luxury maxi-cab and chauffeur service web portal in Singapore with interactive ride enquiry flows, fleet selection, and an internal back-office admin system.",
    businessChallenge: "Transportation travellers, corporate clients, and tourists require quick answers regarding fleet seating capacities, luggage limits, airport transfer flat rates, and child seat requirements before initiating a booking.",
    solution: "Developed a premium, confidence-inspiring web application with an intuitive vehicle fleet browser, transparent service tier descriptions, structured pickup/dropoff booking flow, and direct WhatsApp dispatch integration.",
    features: [
      "Comprehensive transport offerings: airport transfers, hourly charters, corporate travel",
      "Fleet explorer with accurate passenger capacity and luggage tolerance guides",
      "Structured ride enquiry form capturing flight numbers, terminal, and passenger counts",
      "Instant WhatsApp booking trigger transferring formatted trip parameters to dispatch",
      "Transparent pricing cards explaining standard and peak transfer rates",
      "Strict mobile-first layout built for travelers booking on the go at Changi Airport"
    ],
    hasInternalSystem: true,
    internalSystemType: "Private Admin Panel",
    internalSystemDescription: "Private administrative dispatch console built for fleet operators to review incoming ride requests, assign vehicles, monitor dispatch status, and log booking records.",
    internalSystemHighlights: [
      "Live trip request intake and status tracking (Pending, Dispatched, Completed)",
      "Fleet availability and driver assignment controls",
      "Customer itinerary and contact history view",
      "Booking log export and operational summary dashboard"
    ],
    myContribution: [
      "Complete frontend engineering of the passenger booking platform",
      "Vehicle fleet component design and booking configuration logic",
      "Operations admin panel development for back-office trip management",
      "End-to-end deployment and mobile UX optimization"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Project" },
      { label: "Platform Type", value: "Transport Web + Admin" },
      { label: "Internal System", value: "Private Dispatch Admin" }
    ],
    accentColor: "#d4f933",
    seoTitle: "Singapore Maxi Cabs Website Case Study | Web Development",
    metaDescription: "A transportation website presenting maxi-cab services, fleet options, trip enquiries, vehicle selection, and booking pathways."
  },
  {
    id: "zenith-automations",
    slug: "zenith-automations",
    title: "Zenith Automations",
    tagline: "Smart Home Experience & Project Specification CRM",
    category: "Premium Smart Home Automation Website + Private CRM",
    industry: "IoT & Smart Home Automation",
    liveUrl: "https://www.zenithautomations.in/",
    liveDomain: "zenithautomations.in",
    heroImage: "/images/projects/zenith-automations-hero.jpg",
    classification: "Freelance / Client Project",
    featured: true,
    featuredOrder: 4,
    featuredRole: "Interactive Automation Website + CRM",
    shortDescription: "An interactive smart-home automation website featuring multi-scene environment simulations (Day, Evening, Movie, Night) paired with an internal CRM for tracking automation consultations.",
    businessChallenge: "Smart home automation is difficult to explain through static brochures. High-end homeowners and architects need to visually experience how lighting scenes, motorised shading, and climate control adapt to daily life.",
    solution: "Created an interactive residential showcase where clients toggle simulated living scenes to see real-time UI ambiance transformations, backed by a private CRM to manage high-ticket automation enquiries.",
    features: [
      "Interactive smart-home scene switcher simulating Day, Evening, Movie, and Night modes",
      "Visual architectural walkthroughs across lighting, climate, security, and shading",
      "Bespoke solution breakdowns for luxury villas and modern apartments",
      "Technical integration overview covering home audio, smart switches, and access control",
      "High-touch consultation booking workflow tailored for homeowners and interior architects"
    ],
    hasInternalSystem: true,
    internalSystemType: "Private CRM",
    internalSystemDescription: "Internal CRM created to manage multi-week automation proposals, consultation site visits, client room specifications, and proposal follow-ups.",
    internalSystemHighlights: [
      "Architectural lead and homeowner enquiry management",
      "Room-by-room automation requirement checklists",
      "Quote pipeline tracking and site survey scheduling",
      "Client correspondence history and follow-up reminders"
    ],
    myContribution: [
      "Interactive scene simulation engine and frontend architecture",
      "Responsive state management for dynamic lighting and environment preview UI",
      "Private CRM workflow interface development for client inquiry tracking",
      "Cross-device performance optimization and production deployment"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Project" },
      { label: "Platform Type", value: "Interactive Web + CRM" },
      { label: "Internal System", value: "Private Specification CRM" }
    ],
    accentColor: "#38bdf8",
    seoTitle: "Zenith Automations Website & CRM Case Study",
    metaDescription: "A premium smart-home website featuring interactive automation experiences, connected-home solutions, and a private CRM project."
  },
  {
    id: "lumiwaves",
    slug: "lumiwaves",
    title: "Lumiwaves",
    tagline: "Sustainable Energy & Technical Home Systems",
    category: "Smart Home, Solar & Automation Website",
    industry: "Renewable Energy & Home Technology",
    liveUrl: "https://lumiwaves.in/",
    liveDomain: "lumiwaves.in",
    heroImage: "/images/projects/lumiwaves-hero.jpg",
    classification: "Freelance / Client Project",
    featured: false,
    featuredRole: "Energy & Automation Website",
    shortDescription: "A clear, accessible product and installation website for residential solar systems, smart automation, water-level controllers, and acoustic home cinema installations.",
    businessChallenge: "Lumiwaves provides varied technical home solutions (solar power, automated water controllers, home cinema). Customers required clear educational content to understand how these systems save energy and integrate into their properties.",
    solution: "Designed a clean, well-categorized product presentation platform that explains complex technical benefits in simple homeowner terms, backed by direct consultation pathways.",
    features: [
      "Residential rooftop solar solution breakdowns with capacity and savings guidance",
      "Automated overhead tank water-level controller specifications and sensor benefits",
      "Dedicated home theatre acoustic and 4K projection showcase",
      "Structured consultation call-to-actions for on-site assessment scheduling",
      "Warranty, maintenance, and support transparency documentation"
    ],
    hasInternalSystem: false,
    myContribution: [
      "Full frontend development and component structure",
      "Information architecture designed around homeowner decision stages",
      "SEO-friendly semantic HTML structure for renewable energy search visibility",
      "Deployment setup and mobile responsiveness verification"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Project" },
      { label: "Platform Type", value: "Technical Services Website" },
      { label: "Focus", value: "Solar & Smart Systems" }
    ],
    accentColor: "#10b981",
    seoTitle: "Lumiwaves Website Case Study | Smart Home & Solar",
    metaDescription: "A website presenting smart-home automation, solar solutions, water-level controllers, and home cinema services."
  },
  {
    id: "circledot-design-studio",
    slug: "circledot-design-studio",
    title: "CircleDot Design Studio",
    tagline: "Creative Direction & Brand Experience Showcase",
    category: "Design & Development Studio Website",
    industry: "Design & Creative Studio",
    liveUrl: "https://www.circledotdesign.in/",
    liveDomain: "circledotdesign.in",
    heroImage: "/images/projects/circledot-design-studio-hero.svg",
    classification: "Freelance / Client Project",
    featured: false,
    featuredRole: "Studio Website",
    shortDescription: "A bold, modern website for an independent design and development studio showcasing visual identity, digital design, and brand growth case studies.",
    businessChallenge: "A design and development studio requires a portfolio presence that itself reflects uncompromising design craft, confident typography, and modern digital standards to win discerning clients.",
    solution: "Engineered a high-polish studio portfolio with editorial typography, smooth layout reveals, curated case study presentations, and friction-free project enquiry triggers.",
    features: [
      "High-impact editorial studio hero with modern aesthetic treatment",
      "Visual capability cards detailing Brand Strategy, UI/UX, and Digital Build",
      "Interactive portfolio showcase highlighting past creative engagements",
      "Minimalist typography hierarchy emphasizing clarity and design confidence",
      "Direct project kickoff enquiry form with project scope selectors"
    ],
    hasInternalSystem: false,
    myContribution: [
      "Frontend engineering and responsive implementation of studio designs",
      "Typography system and layout composition execution",
      "Interactive component behavior and fluid responsive adaptation",
      "Performance optimization ensuring rapid initial render"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Client Project" },
      { label: "Platform Type", value: "Creative Studio Portfolio" },
      { label: "Focus", value: "Editorial Brand Experience" }
    ],
    accentColor: "#ec4899",
    seoTitle: "CircleDot Design Studio Website Case Study",
    metaDescription: "A design and development studio website project focused on presenting services, brand identity, and digital capabilities."
  },
  {
    id: "vilvam-foundation",
    slug: "vilvam-foundation",
    title: "Vilvam Foundation",
    tagline: "Community Outreach & Social Impact Platform",
    category: "Non-profit / Community Foundation Website",
    industry: "Social Impact & Community Welfare",
    liveUrl: "https://www.vilvamfoundation.in/",
    liveDomain: "vilvamfoundation.in",
    heroImage: "/images/projects/vilvam-foundation-hero.jpg",
    classification: "Freelance / Client Project",
    featured: false,
    featuredRole: "Community Foundation Website",
    shortDescription: "A trusted digital hub for a community non-profit organization communicating food distribution, student education scholarships, medical aid, and emergency relief programs.",
    businessChallenge: "Community foundations need transparent, trustworthy communication to connect with donors, beneficiaries, and volunteers, providing clear visibility into humanitarian initiatives.",
    solution: "Built a warm, accessible website articulating the foundation's core pillars, displaying programme photo journals, and offering direct WhatsApp and phone contact channels for assistance seekers.",
    features: [
      "Four core initiative hubs: Nutrition & Food, Education Grants, Healthcare, and Relief",
      "Clear mission, vision, and organizational governance transparency",
      "Photo archives showcasing community distribution drives across Tamil Nadu and Puducherry",
      "Direct volunteer and donor contact pathways with verified contact numbers",
      "Mobile-friendly interface easily accessible by community members on all devices"
    ],
    hasInternalSystem: false,
    myContribution: [
      "Frontend development for all program and outreach pages",
      "Image optimization for real-world outreach documentation",
      "Accessible typography and semantic structure ensuring easy community navigation",
      "Deployment and DNS configuration"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance / Community Project" },
      { label: "Platform Type", value: "Non-Profit Web Portal" },
      { label: "Focus", value: "Community Transparency" }
    ],
    accentColor: "#06b6d4",
    seoTitle: "Vilvam Foundation Website Case Study | Community Support",
    metaDescription: "A community foundation website presenting food, education, medical, and financial support initiatives."
  },
  {
    id: "mangai-clinic",
    slug: "mangai-clinic",
    title: "Mangai Clinic",
    tagline: "Women's Health & Fertility Consultation Portal",
    category: "Healthcare Website / Appointment Information",
    industry: "Healthcare & Women's Health",
    liveUrl: "https://mangai-clinic.vercel.app/",
    liveDomain: "mangai-clinic.vercel.app",
    heroImage: "/images/projects/mangai-clinic-hero.jpg",
    classification: "Freelance / Client Project",
    featured: false,
    featuredRole: "Healthcare Portal",
    shortDescription: "A dedicated women's healthcare and clinical services website detailing obstetrics, antenatal care, gynaecology, and fertility pathways with streamlined appointment guidance.",
    businessChallenge: "Expectant mothers and gynaecology patients require empathetic, clear information regarding medical procedures, doctor credentials, clinic timings, and appointment booking steps.",
    solution: "Developed an approachable, reassuring clinical website featuring categorized care services, doctor profile summaries, location maps, and clear links to external appointment pathways.",
    features: [
      "Comprehensive medical service guides: Obstetrics, High-Risk Pregnancy, Gynaecology, Fertility",
      "Physician profile highlighting qualifications, clinical ethos, and consultation hours",
      "Structured patient FAQs explaining first-trimester care and appointment protocols",
      "Clear pathway directing patients to external booking or direct telephone confirmation",
      "Clinic location information with embedded Google Maps directions"
    ],
    hasInternalSystem: false,
    myContribution: [
      "Patient-first UI/UX implementation and frontend engineering",
      "Accessibility-focused typography and reassuring color palette execution",
      "Routing and external appointment pathway integration",
      "Vercel deployment setup with strict mobile responsive testing"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Client Project" },
      { label: "Platform Type", value: "Healthcare Information Web" },
      { label: "Focus", value: "Patient Guidance" }
    ],
    accentColor: "#f43f5e",
    seoTitle: "Mangai Clinic Website Case Study | Women's Healthcare",
    metaDescription: "A women's healthcare clinic website presenting obstetrics, gynaecology, fertility services, doctor information, and appointment options."
  },
  {
    id: "priya-woodland",
    slug: "priya-woodland",
    title: "Priya Woodland",
    tagline: "Artisanal Woodworking & Bespoke Furniture Catalogue",
    category: "Furniture & Woodworking Business Website",
    industry: "Craftsmanship & Solid-Wood Furniture",
    liveUrl: "https://priya-woodland.vercel.app/",
    liveDomain: "priya-woodland.vercel.app",
    heroImage: "/images/projects/priya-woodland-hero.jpg",
    classification: "Freelance / Client Project",
    featured: false,
    featuredRole: "Craftsmanship Catalogue",
    shortDescription: "A visual craftsmanship website showcasing solid teak, rosewood, and antique furniture collections, custom architectural carvings, and bespoke carpentry enquiries.",
    businessChallenge: "Custom woodwork buyers and homeowners need to examine timber grain, craftsmanship details, and past custom carpentry builds before commissioning bespoke furniture pieces.",
    solution: "Engineered an artisanal furniture showcase highlighting curated collections across dining tables, antique cabinets, temple doors, and living sets with direct WhatsApp quote enquiry actions.",
    features: [
      "Visual product showcase categorised by living, dining, bedroom, and antique collections",
      "Custom woodworking process overview explaining wood selection, curing, and hand-carving",
      "High-resolution item photography emphasizing joinery and natural timber finishes",
      "One-click WhatsApp enquiry buttons with specific furniture product tags",
      "Physical workshop location and direct artisan consultation contact"
    ],
    hasInternalSystem: false,
    myContribution: [
      "Responsive catalogue layout development highlighting artisanal imagery",
      "Categorized gallery filtering and fluid mobile touch navigation",
      "Integration of WhatsApp enquiry actions pre-filled with product titles",
      "Production deployment and asset optimization"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Freelance Client Project" },
      { label: "Platform Type", value: "Artisan Catalogue Website" },
      { label: "Focus", value: "Custom Woodcraft" }
    ],
    accentColor: "#d97706",
    seoTitle: "Priya Woodland Website Case Study | Custom Wooden Furniture",
    metaDescription: "A furniture website showcasing solid-wood craftsmanship, antique furniture, custom woodwork, tables, cabinets, and carved pieces."
  },
  {
    id: "laundry-management-saas",
    slug: "laundry-management-saas",
    title: "Laundry Management Platform",
    tagline: "Multi-Role Operational Architecture & Chemical Scope",
    category: "Multi-role Business Management Platform",
    industry: "Commercial Laundry & Service Operations",
    liveUrl: null,
    liveDomain: "internal-arch://laundry-saas",
    heroImage: "/images/projects/laundry-blueprint.svg",
    classification: "Platform Planning & Technical Scope",
    featured: false,
    featuredRole: "Architecture & Technical Scope",
    shortDescription: "A comprehensive 9-week technical architecture and software blueprint scoped for commercial laundry facilities, covering Admin, Staff, and Customer portals with modular chemical management.",
    businessChallenge: "Commercial laundry facilities struggle with fragmented manual tracking across garment intake, wash stage tracking, delivery logistics, customer billing, and industrial chemical dosage consumption.",
    solution: "Architected a modular multi-role software specification breaking down operations into dedicated portals with role-based access control, estimated across a phased 9-week roadmap (7 weeks laundry core + 2 weeks chemical administration).",
    features: [
      "Admin Portal Architecture: Centralized operational overview, financial summaries, customer accounts",
      "Staff Portal Workflow: Order intake tagging, barcode batch scanning, wash status progression",
      "Customer Portal Experience: Order submission, live status tracking, invoice downloads",
      "Role-Based Access Control (RBAC): Strict permission boundaries across admin, front desk, and operators",
      "Dedicated Chemical Scope: 2-week modular plan for detergent stock tracking and machine dosage tracking",
      "Phased 9-Week Implementation Roadmap: Detailed milestones from schema design to production launch"
    ],
    hasInternalSystem: true,
    internalSystemType: "Private Admin Panel",
    internalSystemDescription: "Detailed technical specification and mock prototype architecture for the multi-role operational engine, designed to replace paper chits and disjointed spreadsheets.",
    internalSystemHighlights: [
      "Multi-tenant database schema planning with role-based segregation",
      "Real-time garment status pipeline (Sorting, Washing, Drying, Pressing, Dispatched)",
      "Chemical inventory burn-rate calculations and replenishment alerts",
      "Customer communication hooks via SMS and automated receipts"
    ],
    myContribution: [
      "Full technical requirement gathering and business process mapping",
      "System architecture design across Admin, Staff, and Customer user flows",
      "Entity relationship design and modular database schema definition",
      "Phased 9-week technical delivery estimation and operational milestone planning"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    statsOrBadges: [
      { label: "Classification", value: "Platform Planning & Scope" },
      { label: "Architecture", value: "Multi-Role RBAC Platform" },
      { label: "Roadmap Scope", value: "9-Week Phased Plan" }
    ],
    accentColor: "#0ea5e9",
    seoTitle: "Laundry Management Platform Architecture & Scope | Rajeshkumar R.",
    metaDescription: "Technical architecture and scope for a multi-role laundry operations platform covering Admin, Staff, and Customer workflows with chemical inventory planning."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
}

export function getAllProjects(): Project[] {
  return PROJECTS;
}
