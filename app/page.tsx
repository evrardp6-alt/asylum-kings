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
      setTimeout(() => setGlitch(false), 120);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-black mb-4">ASYLUM KINGS</h1>
        <p className="text-gray-400">Analog chaos meets digital pulse</p>
      </section>

      <section className="p-10">
        <h2 className="text-3xl mb-6">Tracks</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {tracks.map((t) => (
            <div
              key={t.title}
              onClick={() => setActive(t.title)}
              className="p-4 bg-zinc-900 cursor-pointer"
            >
              <h3>{t.title}</h3>
              <p className="text-gray-400">{t.tag}</p>
            </div>
          ))}
        </div>

        {active && (
          <p className="mt-6 text-center">
            Now playing: {active}
          </p>
        )}
      </section>

      <footer className="text-center py-10 text-gray-500">
        © 2026 ASYLUM KINGS
      </footer>
    </div>
  );
}