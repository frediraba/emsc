import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #3b0d0d 25%, #d62828 60%, #1a1a1a 100%)",
          color: "#fff",
          padding: 64,
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -1 }}>EMSC</div>
        <div style={{ fontSize: 40, marginTop: 8 }}>Estonian Motorsport Safety Crew</div>
        <div style={{ fontSize: 28, opacity: 0.85, marginTop: 16 }}>
          Professionaalne ohutus mootorispordi võistlustel ja üritustel
        </div>
      </div>
    ),
    size,
  );
}
