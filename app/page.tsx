"use client";

import { useState } from "react";

const tracks = [
  { title: "Burn The Frequency", tag: "Hard Rock / Electro" },
  { title: "Concrete Jungle Pulse", tag: "Reggae / Indie" },
  { title: "Static Dreams", tag: "Trip-Hop" },
  { title: "Midnight Transmission", tag: "80s Electro" },
];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        ASYLUM KINGS
      </h1>

      <p style={{ marginBottom: "40px", color: "#888" }}>
        Analog chaos meets digital pulse
      </p>

      <h2>Tracks</h2>

      <div style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
        {tracks.map((t) => (
          <div
            key={t.title}
            onClick={() => setActive(t.title)}
            style={{
              padding: "10px",
              background: "#111",
              cursor: "pointer"
            }}
          >
            <strong>{t.title}</strong>
            <div style={{ color: "#666" }}>{t.tag}</div>
          </div>
        ))}
      </div>

      {active && (
        <p style={{ marginTop: "30px" }}>
          Now playing: {active}
        </p>
      )}

    </div>
  );
}