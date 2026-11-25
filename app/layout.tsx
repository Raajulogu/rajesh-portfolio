import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Rajeshkumar R. | Full-Stack Developer & Tech Lead",
    template: "%s | Rajeshkumar R."
  },
  description:
    "Full-Stack Developer and Tech Lead building business websites, custom CRM systems, admin dashboards, and scalable web applications.",
  keywords: [
    "Rajeshkumar R",
    "Full-Stack Developer",
    "Tech Lead",
    "Business Websites",
    "Custom CRM Development",
    "Admin Dashboards",
    "MERN Stack",
    "Next.js Developer",
    "Pondicherry Web Developer",
    "React TypeScript Node.js"
  ],
  authors: [{ name: "Rajeshkumar R.", url: SITE_CONFIG.siteUrl }],
  creator: "Rajeshkumar R.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    siteName: "Rajeshkumar R. Portfolio",
    title: "Rajeshkumar R. | Full-Stack Developer & Tech Lead",
    description:
      "I build digital products that solve real business problems — business websites, custom CRM systems, and admin operations panels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeshkumar R. | Full-Stack Developer & Tech Lead",
    description:
      "Full-Stack Developer and Tech Lead building business websites, custom CRM systems, and scalable web applications."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#person`,
        name: "Rajeshkumar R.",
        jobTitle: "Full-Stack Developer & Tech Lead",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pondicherry",
          addressCountry: "India"
        },
        sameAs: [
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.portfolio
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "Technical Leadership",
          "Next.js",
          "React.js",
          "Node.js",
          "MongoDB",
          "CRM Systems",
          "Admin Dashboards"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: "Rajeshkumar R. - Developer Portfolio",
        publisher: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090b] text-[#f4f4f6] relative selection:bg-[#d4f933] selection:text-[#08090b]">
        {/* Dynamic Atmospheric Background System */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Subtle Technical Grid with Radial Vignette */}
          <div className="absolute inset-0 bg-tech-grid mask-radial-vignette opacity-70" />
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full glow-orb-lime animate-pulse-glow" />
          <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] rounded-full glow-orb-cyan opacity-80" />
          <div className="absolute top-[70%] right-[-5%] w-[550px] h-[550px] rounded-full glow-orb-purple opacity-70" />
        </div>

        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
