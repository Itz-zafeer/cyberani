import React from "react";
import Backgrounds from "./backgrounds/Backgrounds";

const Hero = () => {
  return (
    <section className="minfullVh minfullSvh relative flex items-end lg:py-[14.3055555556vw]">
      <Backgrounds />
      <div className="myContainer relative z-[2]">
        <div className="lg:w-[44.3055555556vw] text-white">
          <h1 className="text40">Protecting Cyberspace</h1>
          <p className="lg:text24 lg:w-[43.2638888889vw] mt-sp10">
            Next-generation cybersecurity services for industry leaders in KSA
            and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
