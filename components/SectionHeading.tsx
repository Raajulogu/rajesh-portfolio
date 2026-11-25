import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className = ""
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 lg:mb-14 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
