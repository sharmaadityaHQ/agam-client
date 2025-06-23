"use client";

import { useEffect, useRef } from "react";

const VideoPlayer = ({
  videoUrl,
  posterUrl,
  className,
}: {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      loop
      muted
      playsInline
      ref={videoRef}
      src={videoUrl}
      autoPlay={false}
      preload="metadata"
      poster={posterUrl}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export default VideoPlayer;
