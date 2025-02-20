import React from "react";
import WhoWeAre from "./WhoWeAre";
import Image from "next/image";
import Backgrounds from "./Backgrounds";
import OurApproach from "./our-approach/OurApproach";

const About = () => {
  return (
    <section className="lg:pt-[9.16666666667vw] lg:pb-[19.8611111111vw] pt-[120px] pb-[50px] relative">
      <Backgrounds />

      <div className="relative z-[2] text-white flex flex-col lg:gap-y-sp180 gap-y-[140px] myContainer">
        <WhoWeAre />
        <OurApproach />
      </div>
    </section>
  );
};

export default About;
