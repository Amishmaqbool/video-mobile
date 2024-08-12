import React, { useEffect, useRef } from 'react';

const VideoCard = ({ src, isActive, onInteraction }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (isActive) {
      video.play();
    } else {
      video.pause();
    }
  }, [isActive]);

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
