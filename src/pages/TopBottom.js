import React from "react";
import ReactPlayer from "react-player";

export default function TopBottom() {
  return (
    <div className="w-screen h-screen">
      <div id="1" className="h-1/2">
        <img
          src="https://images.unsplash.com/photo-1694187068493-174431d09d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="h-1/2">
        <ReactPlayer
          url="https://youtu.be/ZSt9tm3RoUU4"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}
