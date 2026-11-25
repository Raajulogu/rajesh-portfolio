import React from "react";
import type { Metadata } from "next";
import { 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Globe
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import ContactForm from "@/components/ContactForm";

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact Rajeshkumar | Discuss a Web Development Project",
  description:
    "Have a website, CRM, admin dashboard, or custom software project? Get in touch to discuss your requirements and next steps.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            Get in Touch
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Let&apos;s build something useful.
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          Tell me what you&apos;re trying to improve. Let&apos;s discuss the right approach, scope, and next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
        {/* Contact Form Column */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Channels Card */}
          <div className="p-6 rounded-2xl bg-[#0f1217] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Direct Verified Channels
            </h3>

            <div className="space-y-3 text-xs">
              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#141822] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-[11px] text-zinc-400">Direct instant messaging</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#141822] border border-white/5 hover:border-sky-500/30 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
                  <div>
                    <div className="font-semibold text-white">LinkedIn</div>
                    <div className="text-[11px] text-zinc-400">Professional network</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400" />
              </a>

              {/* Deployment Mirror */}
              <a
                href={SITE_CONFIG.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#141822] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-semibold text-white">Online Portfolio</div>
                    <div className="text-[11px] text-zinc-400">Deployment Mirror</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Working Details */}
          <div className="p-6 rounded-2xl bg-[#0f1217] border border-white/10 space-y-4 text-xs font-mono">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Availability &amp; Standards
            </h3>

            <div className="space-y-3 text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Based in:</span>
                  <span>{SITE_CONFIG.location} (IST / UTC+5:30)</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Response SLA:</span>
                  <span>Within 24 Hours on business days</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Confidentiality:</span>
                  <span>NDAs respected for proprietary business workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
