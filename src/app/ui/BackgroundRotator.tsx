"use client";
import { useState, useEffect } from "react";

// Component to display the background image
function BackgroundImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center transition-opacity duration-1000 -z-20"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "rgba(0,0,0,0.50)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
          backdropFilter: "blur(8.5px)",
          WebkitBackdropFilter: "blur(8.5px)",
        }}
      />
    </div>
  );
}

// Main component that manages the background state
export default function BackgroundRotator() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "https://dreamtheater.net/wp-content/uploads/2017/07/trainofthought-background.jpg",
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000); // Change background every 15 seconds

    return () => clearInterval(rotationInterval);
  }, [backgrounds.length]);

  return <BackgroundImage imageUrl={backgrounds[backgroundIndex]} />;
}
