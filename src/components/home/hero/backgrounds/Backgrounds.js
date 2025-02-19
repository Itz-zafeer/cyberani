import React from "react";
import Overlays from "./Overlays";

const Backgrounds = () => {
  return (
    <div className="atlwh_Full">
      <Overlays />
      <div className="atlwh_Full z-[-1]">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="atlwh_Full object-cover"
          src="/videos/home_hero.mp4"
          preload="auto"
          loading="lazy"
        ></video>
      </div>
    </div>
  );
};

export default Backgrounds;
