import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";
import Function from "./Function";
const funtions = [
  {
    heading: "Round-the-Clock Cybersecurity Protection",
    desc: "Our experts ensure 24/7 monitoring of your digital environment to detect and respond to threats in real time, ensuring threats are identified and mitigated proactively.",
  },
  {
    heading: "Prioritisation and Threat Hunting",
    desc: "Our MDR team excels in identifying and prioritising cyber threats, employing advanced analytics to hunt down potential security breaches before they escalate.",
  },
  {
    heading: "Investigation and Remediation",
    desc: "Upon detection, we conduct thorough investigations to understand the scope and impact of the threat, followed by swift remediation actions to neutralise it, ensuring minimal disruption to your operations.",
  },
  {
    heading: "Proactive Defence",
    desc: "Leveraging insights gained from incidents, we continuously refine our security strategies to prevent future threats, enhancing your organisation’s resilience against cyberattacks.",
  },
];

const Functions = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:mt-sp150 mt-[100px]">
      {" "}
      <div className="lg:w-[60.6944444444vw] w-[82.582%] flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          {" "}
          <h2 className="text32 text-gray lg:pb-sp20 pb-5">
            Managed Detection and Response (MDR) Service{" "}
            <span className="text-bright-teal">Functions</span>{" "}
          </h2>
          <TitleDesignLine gradientLine />
        </div>
      </div>
      <div className="flex flex-wrap justify-between lg:items-start lg:gap-x-sp48 lg:gap-y-sp32 gap-8 lg:mt-sp32 mt-8">
        {funtions.map((funtion, index) => (
          <Function funtion={funtion} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Functions;
