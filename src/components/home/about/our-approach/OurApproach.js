import React from "react";
import Approach from "./Approach";

const OurApproach = () => {
  return (
    <div>
      <h2 className="text-center text39">Our Approach</h2>
      <div className="flex justify-center flex-wrap lg:gap-sp48 gap-[100px] lg:mt-sp60 mt-[100px]">
        <Approach
          heading={`Efficient Monitoring and <span>Detection</span>`}
          desc=" We employ sophisticated SIEM, SOAR, UEBA, and threat intelligence tools
        to proactively identify and prevent unauthorised intrusions, data
        breaches, and operational disruptions."
          gif="/images/home/about/1.svg"
        />
        <Approach
          heading={`Vigilance Against Emerging  <span>Threats</span>`}
          desc=" We leverage the power of artificial intelligence to keep abreast of new threats in the digital space, such as data sprawls, shadow AI, and other vulnerabilities in AI-powered security systems."
          gif="/images/home/about/2.svg"
          translate="lg:translate-y-sp100"
        />
        <Approach
          heading={`Utmost  <span>Compliance</span>`}
          desc=" Our services ensure stringent compliance with the KSA National Cybersecurity Authority, ISO, SAMA, and Aramco requirements."
          gif="/images/home/about/3.svg"
          translate="lg:translate-y-sp180"
        />
      </div>
    </div>
  );
};

export default OurApproach;
