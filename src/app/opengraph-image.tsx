import { ImageResponse } from "next/og";
export const alt = "Drake Owen — IT work and side projects.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0B0A10",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        color: "#F5F3FF",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 28, display: "flex" }}>
        drake<span style={{ color: "#A78BFA" }}>.</span>owen
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          letterSpacing: -3,
        }}
      >
        <span>IT work</span>
        <span style={{ color: "#A78BFA" }}>and side projects.</span>
      </div>
      <div style={{ color: "#A1A1AA", fontSize: 21 }}>
        IT OPERATIONS MANAGER / WESTERN NORTH CAROLINA
      </div>
    </div>,
    size,
  );
}
