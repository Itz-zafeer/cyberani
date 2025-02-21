import LinkBtn from "@/components/common/link-buttons/LinkBtn";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center text-center lg:gap-y-sp56 gap-y-[56px] lg:w-[56.9444444444vw] mx-auto">
      <div className="flex flex-col items-center">
        <div className="relative lg:size-[13.6111111111vw] size-[120px] lg:mb-sp40 mb-9">
          <Image fill alt="play" className="flipped" src="/gifs/who.gif" />
        </div>
        <div className="flex flex-col items-center lg:gap-y-sp36 gap-y-10">
          <h2 className="text32 lg:w-[76.1805555556vw]">
            Get Advanced SOC Cybersecurity Services in Saudi Arabia
          </h2>
          <div className="lg:text18 mtext18 flex flex-col lg:gap-y-sp20 gap-y-5 lg:w-[64.375vw]">
            <p>
              The scope of threats in the digital landscape is evolving. In
              2022, 110 million cyber threats were detected in KSA, with
              breaches in this region costing 1.7 times the global average. From
              intelligent phishing to industrial-scale shadow AI, enterprises
              are faced with the strategic task of fortifying their digital
              assets and infrastructures. 
            </p>
            <p>
              {`As a cybersecurity leader, you need to leverage AI-powered solutions
            to 'fight fire with fire' by proactively identifying and containing
            cyberattacks. Secure the best-fit protection for your business with
            our advanced AI-powered Security Operations Centre.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
