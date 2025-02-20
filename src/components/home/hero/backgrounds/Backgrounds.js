import React from "react";
import Overlays from "./Overlays";
import Image from "next/image";

const Backgrounds = () => {
  return (
    <div className="atlwh_Full">
      <div
        onClick={() => scrollTo(0, window.innerHeight)}
        className="absolute lg:bottom-sp18 bottom-[26px] left-1/2 -translate-x-1/2 lg:size-sp48 size-[34px] z-[2] cursor-pointer"
      >
        <Image fill alt="play" src="/gifs/scroll_section.gif" />
      </div>
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
