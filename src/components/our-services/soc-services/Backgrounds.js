import React from "react";

const Backgrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <span className="atlwh_Full about_overlay1 mix-blend-lighten"></span>
      <div className="absolute bottom-0 w-full lg:h-[57.3611111111vw] h-full z-[-1]">
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
      <span className="absolute top-0 w-full lg:h-[34.5833333333vw] h-full about_overlay2"></span>
    </div>
  );
};

export default Backgrounds;
