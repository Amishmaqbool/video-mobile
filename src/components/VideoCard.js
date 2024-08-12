import React, { useEffect, useRef } from 'react';

const VideoCard = ({ src, isActive, onClick, onTouch }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (isActive) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full max-w-full h-auto cursor-pointer"
      loop
      muted
      playsInline
      onClick={onClick}
      onTouchStart={onTouch} // Handle touch events
    />
  );
};

export default VideoCard;
