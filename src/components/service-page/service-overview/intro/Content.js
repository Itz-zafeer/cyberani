import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
      <div className="lg:w-[45.5555555556vw] flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          {" "}
          <h2 className="text32 text-gray lg:pb-sp20 pb-5">
            Protect your enterprise against cyber threats with round-the-clock{" "}
            <span className="text-bright-teal">infrastructure security</span>{" "}
          </h2>
          <TitleDesignLine gradientLine />
        </div>
      </div>
      <div className="lg:text18 mtext18 lg:w-[57.0833333333vw] lg:mt-sp24 mt-6 flex flex-col lg:gap-y-sp20 defaultList">
        <p>
          In the age of AI, cyber threats evolve with alarming speed. To
          safeguard business continuity, enterprises ‘fight fire with fire’ by
          leveraging innovative solutions to identify and contain cyber threats
          before they wreak havoc. Cyberani&apso;s Managed Detection and
          Response (MDR) service equips your organisation with round-the-clock
          cybersecurity protection, optimising threat detection & response
          times. Our team ensures proactive prevention, detection, containment,
          and response to cyber threats.
        </p>
      </div>
    </div>
  );
};

export default Content;
