export interface Service {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  shortDescription: string;
  whoNeedsThis: string[];
  problemItSolves: string;
  whatCanBeBuilt: string[];
  businessValue: string;
  approach: string[];
}

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Website Development",
    tagline: "High-performance, editorial websites engineered to establish credibility and capture high-intent inquiries.",
    badge: "Public-Facing Products",
    shortDescription: "Custom, responsive business websites built with Next.js, clean semantic HTML, and deliberate typography that position your brand as an industry authority.",
    whoNeedsThis: [
      "Growing companies replacing outdated templates or sluggish WordPress sites",
      "Service providers and agencies who require clear articulation of premium offerings",
      "Businesses launching new service verticals that need high-converting landing pages",
      "Brands wanting fast page-load speeds, structured SEO, and direct booking actions"
    ],
    problemItSolves: "Most business websites fail because they are either visually generic, slow to load, or confusing for prospective clients to navigate. I build websites that guide visitors directly toward making an enquiry.",
    whatCanBeBuilt: [
      "Multi-page corporate & business websites",
      "Service-specialised landing pages & lead capture hubs",
      "Interactive product & collection catalogues",
      "Dynamic content architectures with headless CMS integration",
      "Fully responsive, mobile-optimised touch experiences"
    ],
    businessValue: "Transforms web traffic into qualified business conversations by communicating capabilities clearly and removing friction from the contact pathway.",
    approach: [
      "Analyze your target customer profile and primary conversion action",
      "Design clean editorial wireframes and clear content hierarchy",
      "Develop with Next.js & Tailwind CSS for near-instant rendering",
      "Configure metadata, Open Graph assets, and semantic SEO tags"
    ]
  },
  {
    id: "custom-crm",
    title: "Custom CRM Development",
    tagline: "Internal lead and pipeline management systems tailored precisely to your company's operational rhythm.",
    badge: "Internal Business Systems",
    shortDescription: "Bespoke customer relationship management systems built for agencies, consultants, and service businesses needing focused lead-tracking without bloated SaaS overhead.",
    whoNeedsThis: [
      "Agencies overwhelmed by unorganised emails, WhatsApp chats, and spreadsheets",
      "Sales teams needing a bespoke qualification pipeline matching unique business stages",
      "Founders wanting complete data ownership without paying hefty per-seat SaaS subscriptions",
      "Businesses needing custom notification workflows when new enquiries arrive"
    ],
    problemItSolves: "Off-the-shelf CRMs often come with steep learning curves, expensive monthly per-seat fees, and dozens of unused features. A custom CRM matches your exact workflow from day one.",
    whatCanBeBuilt: [
      "Inbound lead capture and auto-assignment pipelines",
      "Custom sales stages (Discovery, Proposal Sent, Negotiation, Won/Lost)",
      "Client conversation logs, interaction notes, and document attachments",
      "Follow-up scheduling and notification reminders",
      "Role-based access levels for management vs. team members"
    ],
    businessValue: "Eliminates lost enquiries, ensures timely follow-ups, and provides leadership with instant visibility into active deals and pipeline velocity.",
    approach: [
      "Map every step an enquiry takes from initial contact to closed deal",
      "Structure data models and pipeline statuses around actual team habits",
      "Build fast, clutter-free interfaces focused on rapid data entry and review",
      "Deploy with secure authentication and automated daily backup routines"
    ]
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    tagline: "Purpose-built operational cockpits to manage inventory, bookings, content, and daily workflows.",
    badge: "Operations & Back-Office",
    shortDescription: "Robust internal administrative portals giving business owners and staff total command over their data, catalogue listings, order states, and customer requests.",
    whoNeedsThis: [
      "E-commerce or wholesale businesses needing easy product catalogue maintenance",
      "Transport and rental services requiring ride dispatch and fleet allocation controls",
      "Operations managers looking to replace vulnerable spreadsheets with reliable interfaces",
      "Companies with multiple staff roles requiring distinct view and edit permissions"
    ],
    problemItSolves: "Running daily operations on scattered spreadsheets leads to human errors, lost orders, and zero audit trails. A custom admin panel centralises control in a clean, unified dashboard.",
    whatCanBeBuilt: [
      "Product & inventory management portals (CRUD, batch updates, pricing tiers)",
      "Booking, reservation, and dispatch status control boards",
      "Customer account records and order history views",
      "Data export tools (CSV/Excel) and operational summaries",
      "Role-based permission gating (Admin, Manager, Staff)"
    ],
    businessValue: "Reduces daily administrative overhead by hours, eliminates manual data re-entry errors, and provides real-time operational clarity.",
    approach: [
      "Audit the manual processes that take the most daily team time",
      "Design dense, readable dashboard layouts optimized for rapid scanning",
      "Implement resilient database queries and audit logs for sensitive actions",
      "Provide comprehensive staff walk-throughs and ongoing technical support"
    ]
  },
  {
    id: "full-stack-web-apps",
    title: "Full-Stack Web Applications",
    tagline: "Custom web applications, client portals, and multi-role platforms engineered for reliability.",
    badge: "End-to-End Engineering",
    shortDescription: "Complete full-stack applications with bespoke business logic, secure authentication, reactive user interfaces, and scalable backend architecture.",
    whoNeedsThis: [
      "Founders turning a validated service into a structured digital platform or MVP",
      "Businesses offering client portals for document sharing, order tracking, or reporting",
      "Companies digitising complex manual service delivery workflows",
      "Teams needing a dedicated technical lead to oversee full architectural execution"
    ],
    problemItSolves: "Generic tools cannot accommodate proprietary business workflows or unique multi-party interactions. Custom web applications translate your unique competitive advantage into software.",
    whatCanBeBuilt: [
      "Multi-role web applications (Customer, Staff, Admin portals)",
      "Interactive data-driven calculators, configurators, and simulators",
      "Subscription or membership-gated web applications",
      "Secure document and file delivery client hubs",
      "Scalable RESTful microservices and backend API systems"
    ],
    businessValue: "Creates a proprietary digital asset tailored exclusively to your business model, unlocking new revenue channels and scalable operational efficiency.",
    approach: [
      "Thorough requirements elicitation and edge-case discovery",
      "Modular database schema design and API specification",
      "Iterative sprint development with functional milestone reviews",
      "Comprehensive validation, automated testing, and secure production deployment"
    ]
  },
  {
    id: "api-integrations",
    title: "API Integrations & Automation",
    tagline: "Bridging third-party services, real-time messaging, and automated webhooks into unified workflows.",
    badge: "Connectivity & Systems",
    shortDescription: "Reliable integration of external APIs, real-time communication channels (Socket.IO, Twilio), and payment or notification gateways.",
    whoNeedsThis: [
      "Businesses wanting automated SMS/WhatsApp alerts for incoming bookings",
      "Applications requiring real-time bi-directional data synchronisation",
      "Companies connecting web forms directly into internal databases and communication channels",
      "Teams looking to automate repetitive cross-software data transfer"
    ],
    problemItSolves: "Siloed applications force teams to manually copy data across tools. Robust API integrations connect disparate systems into seamless automated workflows.",
    whatCanBeBuilt: [
      "Twilio SMS & communication service integration",
      "Real-time event streaming and live UI updates using Socket.IO",
      "Headless CMS API wiring for dynamic multi-channel publishing",
      "Automated notification pipelines to email, WhatsApp, or operational dashboards",
      "Custom webhook listeners for secure third-party event handling"
    ],
    businessValue: "Accelerates response times, keeps distributed data synchronized without human intervention, and creates seamless customer experiences.",
    approach: [
      "Evaluate API documentation, rate limits, and authentication patterns",
      "Build resilient retry logic and error-handling wrappers",
      "Implement webhook security verification to safeguard against bad actors",
      "Monitor latency and throughput to maintain optimal application speed"
    ]
  }
];
