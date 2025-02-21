import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <div className="atlwh_Full">
        <span className="atlwh_Full cta_home_overlay opacity-[0.6] z-[1]"></span>
        <span className="atlwh_Full bg-black opacity-[0.6]"></span>
      </div>
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
