import React from "react";

const Backgrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <span className="fixed top-0 lrf1 size-full about_overlay1 mix-blend-lighten"></span>
      <div className="fixed lrf1 bottom-0 w-full lg:h-[57.3611111111vw] h-full z-[-1]">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="atlwh_Full object-cover"
          src="/videos/about_bg.mp4"
          preload="auto"
          loading="lazy"
        ></video>
      </div>
      <span className="absolute top-0 w-full lg:h-[59.0277777778vw] h-full about_overlay2"></span>
    </div>
  );
};

export default Backgrounds;
