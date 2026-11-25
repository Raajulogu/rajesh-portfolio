import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#0f1217] border border-white/10 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center mx-auto mb-4 border border-[#d4f933]/20">
          <Compass className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono text-[#d4f933] mb-1 font-semibold">
          ERROR 404
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-xs text-zinc-400 mb-6">
          The requested page or case study does not exist or has been relocated.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4f933] text-[#090a0c] font-semibold text-xs hover:bg-[#c4eb22] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
