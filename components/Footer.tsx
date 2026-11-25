import React from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/data/site";
import { ArrowUpRight, MessageSquare, Mail, MapPin, ShieldCheck } from "lucide-react";

const LinkedInIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
  </svg>
);

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#090a0c] border-t border-white/10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Identity & Main Positioning */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold tracking-tight text-white">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#d4f933]/15 text-[#d4f933] px-2 py-0.5 rounded border border-[#d4f933]/30">
                  Tech Lead
                </span>
              </div>
              <p className="text-sm text-zinc-300 max-w-sm mb-4 leading-relaxed">
                I build digital products that solve real business problems — from high-converting business websites to custom CRM and admin operations systems.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#d4f933]" />
                <span>{SITE_CONFIG.location}</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-emerald-400 font-medium">Available for select projects</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#d4f933] shrink-0" />
              <span>
                All 9 public case studies are independent freelance/client projects.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/services#business-websites" className="hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services#custom-crm" className="hover:text-white transition-colors">
                  Custom CRM Systems
                </Link>
              </li>
              <li>
                <Link href="/services#admin-dashboards" className="hover:text-white transition-colors">
                  Admin Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services#full-stack-web-apps" className="hover:text-white transition-colors">
                  Full-Stack Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services#api-integrations" className="hover:text-white transition-colors">
                  API &amp; Automations
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contact Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold mb-4">
              Verified Channels
            </h4>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-medium p-2.5 rounded-lg bg-[#12151b] border border-white/5 hover:border-white/20 text-zinc-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d4f933] transition-colors" />
              </a>

              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-medium p-2.5 rounded-lg bg-[#12151b] border border-white/5 hover:border-white/20 text-zinc-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Message</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d4f933] transition-colors" />
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-between text-xs font-medium p-2.5 rounded-lg bg-[#12151b] border border-white/5 hover:border-white/20 text-zinc-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#d4f933]" />
                  <span>Project Consultation</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d4f933] transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            &copy; {currentYear} {SITE_CONFIG.name}. Full-Stack Developer &amp; Tech Lead.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Built with Next.js &amp; TypeScript</span>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#d4f933] transition-colors">
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
