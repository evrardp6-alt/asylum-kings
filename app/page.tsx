"use client";

import { useEffect, useState } from "react";

type Track = {
  title: string;
  tag: string;
};

const tracks: Track[] = [
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,120,0.25),transparent_70%)] animate-pulse" />

        <h1
          className={`text-6xl md:text-8xl font-black tracking-tight mb-6 transition-transform duration-150 ${
            glitch ? "translate-x-1 opacity-80" : ""
          }`}
        >
          ASYLUM KINGS
        </h1>

        <p className="text-lg text-gray-300 max-w-xl">
          Analog chaos meets digital pulse.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-8 py-4 bg-white text-black font-bold">
            PLAY
          </button>
          <button className="px-8 py-4 border border-white">
            EXPLORE
          </button>
        </div>
      </section>

      {/* GLITCH STRIP */}
      <section className="py-6 border-y border-zinc-800 overflow-hidden">
        <div className="whitespace-nowrap text-2xl font-bold opacity-20 animate-[scroll_12s_linear_infinite]">
          NO RULES • SIGNAL LOST • ANALOG CHAOS • DIGITAL NOISE • ASYLUM KINGS •
        </div>
      </section>

      {/* TRACKS */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12">SELECT A TRACK</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track) => (
            <div
              key={track.title}
              onClick={() => setActive(track.title)}
              className={`cursor-pointer p-6 bg-zinc-900 border border-zinc-800 transition hover:scale-105 ${
                active === track.title ? "ring-2 ring-white" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{track.title}</h3>
              <p className="text-gray-400 text-sm">{track.tag}</p>
            </div>
          ))}
        </div>

        {active && (
          <div className="mt-12 text-center">
            <p className="text-gray-400">Now playing</p>
            <h3 className="text-2xl font-bold">{active}</h3>
          </div>
        )}
      </section>

      {/* VIDEO */}
      <section className="py-24 px-6 md:px-20 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-10">VISUAL EXPERIENCE</h2>

        <div className="aspect-video bg-black border border-zinc-800 flex items-center justify-center relative overflow-hidden">
          <div
            className={`absolute inset-0 transition-opacity duration-150 ${
              glitch ? "bg-white/10" : "opacity-0"
            }`}
          />
          <span className="z-10">VIDEO SIGNAL</span>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-5xl font-black mb-8">
          THIS IS

 A FREQUENCY
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Not music. Not genre. Transmission. Distortion. Movement.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-b from-black to-zinc-900">
        <h2 className="text-5xl font-black mb-6">
          ENTER THE SIGNAL
        </h2>
        <button className="px-12 py-6 text-xl bg-white text-black font-bold">
          JOIN
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-zinc-800">
        © 2026 ASYLUM KINGS
      </footer>
    </div>
  );
}