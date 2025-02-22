import React from "react";
import Overlays from "./Overlays";
import Image from "next/image";

const Backgrounds = ({ banner }) => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <Overlays />
      <div className="atlwh_Full z-[-1]">
        {banner?.video ? (
          <video
            muted
            loop
            autoPlay
            playsInline
            className="atlwh_Full object-cover"
            src={banner?.src}
            preload="auto"
            loading="lazy"
          ></video>
        ) : (
          <Image fill alt="banner" src={banner?.src} className="object-cover" />
        )}
      </div>
    </div>
  );
};

export default Backgrounds;
