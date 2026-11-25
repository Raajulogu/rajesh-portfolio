import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const dimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11"
  }[size];

  return (
    <div
      className={`relative rounded-xl bg-gradient-to-br from-[#181c24] to-[#0d0f14] border border-white/15 p-1.5 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#d4f933]/60 group-hover:shadow-[#d4f933]/15 transition-all duration-300 ${dimensions} ${className}`}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-xl bg-[#d4f933]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Bespoke Geometric Monogram 'R' SVG Mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Subtle Tech Grid Motif */}
        <path
          d="M6 10H26M6 16H26M6 22H26"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Vertical Architectural Stem */}
        <rect
          x="7.5"
          y="7"
          width="4"
          height="18"
          rx="1.5"
          fill="#f4f4f6"
        />

        {/* Upper Loop of 'R' with Geometric Corner */}
        <path
          d="M11.5 7H19C22.3137 7 24.5 9.18629 24.5 12.5C24.5 15.8137 22.3137 18 19 18H11.5"
          stroke="#f4f4f6"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Electric Lime High-Impact Diagonal Kick */}
        <path
          d="M16 16.5L23.5 25"
          stroke="#d4f933"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Apex Tech Accent Node */}
        <circle
          cx="20.5"
          cy="12.5"
          r="1.75"
          fill="#d4f933"
        />
      </svg>
    </div>
  );
}
