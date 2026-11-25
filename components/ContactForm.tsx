"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  AlertCircle,
  Clock
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    description: "",
    budget: "",
    timeline: ""
  });

  const [copied, setCopied] = useState(false);
  const [submittedDirectly, setSubmittedDirectly] = useState(false);
  const [validationError, setValidationError] = useState("");

  const projectTypes = [
    "Business Website",
    "CRM System",
    "Admin Dashboard",
    "Full-Stack Web App",
    "API Integration",
    "Other"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (validationError) setValidationError("");
  };

  const getFormattedMessage = () => {
    return `Hi Rajesh,

I would like to discuss a project with you.

Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline || "Flexible"}
Budget: ${formData.budget || "To be discussed"}

Project Overview:
${formData.description || "Looking forward to hearing your approach."}
`;
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setValidationError("Please enter your name so I know whom to address.");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Please enter a valid email address so I can reply.");
      return false;
    }
    if (!formData.description.trim()) {
      setValidationError("Please describe your project requirements or what you are trying to solve.");
      return false;
    }
    return true;
  };

  // Direct Mail Client trigger
  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(getFormattedMessage());
    const mailtoUrl = `mailto:${SITE_CONFIG.contact.inquiryEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmittedDirectly(true);
  };

  // WhatsApp trigger
  const handleWhatsAppSend = () => {
    if (!validate()) return;

    const text = encodeURIComponent(getFormattedMessage());
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmittedDirectly(true);
  };

  // Clipboard copy fallback
  const handleCopy = () => {
    const formatted = getFormattedMessage();
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#101319] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Project Inquiry Form
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Choose to send via your email client or WhatsApp directly. No automated blackholes.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shrink-0">
          <Clock className="w-3.5 h-3.5" />
          <span>Response: Within 24 Hours</span>
        </div>
      </div>

      {validationError && (
        <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{validationError}</span>
        </div>
      )}

      <form onSubmit={handleEmailSend} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
              Your Name <span className="text-[#d4f933]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Anand Sharma"
              className="w-full bg-[#161a22] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#d4f933] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
              Your Email Address <span className="text-[#d4f933]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. anand@company.com"
              className="w-full bg-[#161a22] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#d4f933] transition-colors"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Project Category <span className="text-[#d4f933]">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {projectTypes.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setFormData({ ...formData, projectType: type })}
                className={`py-2.5 px-3 rounded-lg text-xs font-medium text-left transition-all border ${
                  formData.projectType === type
                    ? "bg-[#d4f933] text-[#090a0c] font-semibold border-[#d4f933]"
                    : "bg-[#161a22] text-zinc-300 border-white/5 hover:border-white/20"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
            Project Description &amp; Problem to Solve <span className="text-[#d4f933]">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell me what you're trying to build or improve. What are your main requirements, current bottlenecks, or desired features?"
            className="w-full bg-[#161a22] border border-white/10 rounded-lg p-4 text-sm text-white placeholder-zinc-500 focus:border-[#d4f933] transition-colors"
          />
        </div>

        {/* Optional Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
              Budget Range <span className="text-zinc-500">(Optional)</span>
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              placeholder="e.g. $1.5k – $5k / ₹1L – ₹3L"
              className="w-full bg-[#161a22] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#d4f933] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
              Target Timeline <span className="text-zinc-500">(Optional)</span>
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              placeholder="e.g. 4-6 Weeks / Immediate"
              className="w-full bg-[#161a22] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#d4f933] transition-colors"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          {/* Primary Email Submit */}
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#d4f933] text-[#090a0c] font-semibold text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email Client</span>
          </button>

          {/* WhatsApp Direct Option */}
          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#161a22] border border-white/10 text-white font-medium text-sm hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Send via WhatsApp</span>
          </button>

          {/* Copy Message Fallback */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 text-xs font-mono transition-colors"
            title="Copy pre-formatted inquiry text"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#d4f933]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Action Notification */}
        {submittedDirectly && (
          <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
            <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold">Inquiry Prepared</p>
              <p className="text-zinc-300 mt-0.5">
                Your message has been opened in your chosen application. You can review and send it directly. I reply promptly within 24 hours.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
