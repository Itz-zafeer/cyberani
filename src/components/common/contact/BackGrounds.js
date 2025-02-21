import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <span className="formxfooter_overlay atlwh_Full"></span>
      <div className="atlwh_Full z-[-1]">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="atlwh_Full object-cover"
          src="/videos/cta_home.mp4"
          preload="auto"
          loading="lazy"
        ></video>
      </div>
    </div>
  );
};

export default BackGrounds;
