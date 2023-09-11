import React from "react";

export default function FullScreen({ images }) {
  if (!images || images.length === 0) {
    return (
      <div id="1" className="w-screen h-screen">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
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
