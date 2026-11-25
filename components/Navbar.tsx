"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Rajeshkumar R. - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#161920] border border-white/10 flex items-center justify-center text-[#d4f933] group-hover:border-[#d4f933]/50 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#d4f933] transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Full-Stack &amp; Tech Lead
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12151b]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#d4f933] text-[#090a0c] font-semibold shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#d4f933] text-[#090a0c] hover:bg-[#c4eb22] transition-colors duration-200 shadow-sm shadow-[#d4f933]/20"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#d4f933] text-[#090a0c]"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#161920] border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#090a0c]/98 border-b border-white/10 p-6 backdrop-blur-xl shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#d4f933] text-[#090a0c] font-semibold"
                      : "text-zinc-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold">
                      Active
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full text-center text-sm font-semibold py-3 rounded-lg bg-[#d4f933] text-[#090a0c] hover:bg-[#c4eb22] transition-colors"
            >
              Discuss a Project
            </Link>
            <div className="text-center">
              <span className="text-xs font-mono text-zinc-500">
                Pondicherry, India &bull; Available for freelance &amp; contracts
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
