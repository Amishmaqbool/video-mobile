import React, { useEffect, useRef } from 'react';

const VideoCard = ({ src, isActive, onInteraction, isMobile }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (isMobile) {
      if (isActive) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      if (isActive) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [isActive, isMobile]);

  const handleInteraction = () => {
    if (onInteraction) {
      onInteraction();
    }
  };

  return (
    <div
      className="relative"
      onClick={handleInteraction}
      onTouchStart={handleInteraction} 
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full max-w-full h-auto"
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoCard;
