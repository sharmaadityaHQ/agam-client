"use client";

import { useEffect, useRef, VideoHTMLAttributes } from "react";

const VideoPlayer = ({
  videoUrl,
  posterUrl,
  className,
  ...rest
}: {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
} & VideoHTMLAttributes<HTMLVideoElement>) => {
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
      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
      className={`w-full h-full object-cover ${className}`}
      {...rest}
    />
  );
};

export default VideoPlayer;
