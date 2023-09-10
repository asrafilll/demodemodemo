import React from "react";

export default function FullScreen({ images }) {
  if (!images || images.length === 0) {
    return (
      <div id="1" className="w-screen h-screen">
        <img
          src="https://placehold.co/1000x1000"
          className="w-full h-full object-center object-cover"
          alt="Placeholder"
        />
      </div>
    );
  }

  return (
    <div id="1" className="w-screen h-screen">
      <img
        src={images[0].url}
        className="w-full h-full object-center object-cover"
      />
    </div>
  );
}

{
  /* <div className="w-full h-full object-center object-cover">
        <ReactPlayer
          url={images[0].url}
          playing={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div> */
}
