"use client";
import BandMembers from "./components/BandMembers";
import { useState, useEffect } from "react";

export default function BandPage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "https://dreamtheater.net/wp-content/uploads/2017/09/Band53comp.jpg",
    "https://dreamtheater.net/wp-content/uploads/2017/09/DSC_0173comp.jpg",
    "https://dreamtheater.net/wp-content/uploads/2017/09/Band43comp.jpg",
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Dark smoky background effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      />

      <main className="relative z-10 min-h-screen text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <BandMembers />
        </div>
      </main>

      <footer className="relative z-10 bg-gray-900 bg-opacity-70 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© Dream Theater</p>
        </div>
      </footer>
    </div>
  );
}
