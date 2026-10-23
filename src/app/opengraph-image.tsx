import { ImageResponse } from "next/og";

// La imagen que sale al compartir la web por WhatsApp, redes o en los resultados enriquecidos.
export const alt = "Vexel: diseño web para negocios, con boceto gratis y pago al final";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "white",
          background: "linear-gradient(135deg, #0b1020 0%, #16204a 55%, #2a1a5e 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>
          <span>ve</span>
          <span style={{ color: "#7c8cff" }}>x</span>
          <span>el</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Diseño web para negocios
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#c7cdf5" }}>
            Boceto gratis · Pagas al final · Desde 500 €
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
