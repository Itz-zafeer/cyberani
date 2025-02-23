import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";
import Case from "./Case";

const UseCases = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:pb-sp140 lg:pt-sp100 py-[100px] lg:px-sp100 px-5 bg-white lg:border20 lg:rounded-tr-none lg:rounded-tl-none">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
        {" "}
        <h2 className="lg:text32 mtext32 font-medium text-gray lg:pb-sp20 pb-5">
          Use <span className="text-bright-teal">Cases</span>{" "}
        </h2>
        <TitleDesignLine gradientLine />
      </div>
      <div className="flex justify-between flex-wrap lg:gap-sp32 gap-[72px] lg:mt-sp48 mt-12">
        <Case
          title={"Education"}
          desc={
            "Universities store vast amounts of sensitive student information, including personal details and academic records, which may be a target of advanced persistent threats (APT). Leveraging our Managed Detection and Response service, institutions can benefit from an AI-powered anomaly detection framework that identifies unusual network patterns and activates response protocols, isolating the threat, preventing data exfiltration, and enabling the university to strengthen its defences against future attacks."
          }
        />
        <Case
          title={"Telecommunications"}
          desc={` Telecommunication providers handle massive volumes of data traffic, facing constant threats from cybercriminals aiming to disrupt services or steal sensitive customer data. Our 24/7 monitoring and threat detection capabilities identify intrusions early on, with our MDR experts conducting thorough investigations to trace the attack's pathway and contain the threat, reducing time-to-detect (TTD) and time-to-respond (TTR) to cyber threats to a matter of minutes.`}
        />
      </div>
    </div>
  );
};

export default UseCases;
