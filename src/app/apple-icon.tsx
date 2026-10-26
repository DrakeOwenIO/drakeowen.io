import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0B0A10",
        color: "#F5F3FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 90,
        fontWeight: 700,
      }}
    >
      do<span style={{ color: "#A78BFA" }}>.</span>
    </div>,
    size,
  );
}
