import React from "react";

export const Video = ({ url, mimeType }) => {
  return (
    <video
      controls
      loop
      autoPlay
      muted
      className="w-full h-full object-center object-fill"
    >
      <source src={url} type={mimeType} />
    </video>
  );
};
