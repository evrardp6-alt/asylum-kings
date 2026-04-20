"use client";

import { useEffect, useState } from "react";

const tracks = [
  { title: "Burn The Frequency", tag: "Hard Rock / Electro" },
  { title: "Concrete Jungle Pulse", tag: "Reggae / Indie" },
  { title: "Static Dreams", tag: "Trip-Hop" },
  { title: "Midnight Transmission", tag: "80s Electro" },
];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      overflowX: "hidden",
      fontFamily: "Arial"
    }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative"
      }}>

        <h1 style={{
          fontSize: "80px",
          fontWeight: "900",
          letterSpacing: "4px",
          transform: glitch ? "translateX(3px)" : "none",
          transition: "0.1s"
        }}>
          ASYLUM KINGS
        </h1>

        <p style={{ color: "#888", marginTop: "20px" }}>
          Analog chaos meets digital pulse
        </p>

      </section>

      {/* TRACKS */}
      <section style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          SELECT A TRACK
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {tracks.map((t) => (
            <div
              key={t.title}
              onClick={() => setActive(t.title)}
              style={{
                padding: "20px",
                background: "#111",
                border: "1px solid #222",
                cursor: "pointer",
                transform: active === t.title ? "scale(1.05)" : "scale(1)",
                transition: "0.2s"
              }}
            >
              <strong>{t.title}</strong>
              <div style={{ color: "#666", marginTop: "5px" }}>
                {t.tag}
              </div>
            </div>
          ))}
        </div>

        {active && (
          <div style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "20px"
          }}>
            Now playing: {active}
          </div>
        )}
      </section>

      {/* MANIFEST */}
      <section style={{
        padding: "80px",
        textAlign: "center",
        background: "#0a0a0a"
      }}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          THIS IS NOT MUSIC
        </h2>
        <p style={{ color: "#777" }}>
          This is transmission. This is interference.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px",
        color: "#555",
        fontSize: "14px"
      }}>
        © 2026 ASYLUM KINGS
      </footer>

    </div>
  );
}