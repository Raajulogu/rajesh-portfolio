import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #181c24 0%, #090a0c 100%)",
          borderRadius: 8,
          border: "1px solid rgba(212, 249, 51, 0.4)",
          position: "relative",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vertical Stem */}
          <rect x="7" y="6" width="4.5" height="20" rx="1.5" fill="#ffffff" />
          
          {/* Upper Loop */}
          <path
            d="M11.5 6.5H19C22.5 6.5 24.5 8.7 24.5 12C24.5 15.3 22.5 17.5 19 17.5H11.5"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Electric Lime Kick */}
          <path
            d="M16 16L23.5 25"
            stroke="#d4f933"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Accent Node */}
          <circle cx="20.5" cy="12" r="1.8" fill="#d4f933" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
