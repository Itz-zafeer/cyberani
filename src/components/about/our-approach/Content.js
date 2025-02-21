import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";

const Content = () => {
  return (
    <div className="lg:w-[58.9583333333vw] flex flex-col items-start">
      <div>
        <h2 className="text36 text-gray lg:pb-sp10 pb-4">
          Our <span className="text-bright-teal">Approach</span>
        </h2>
        <TitleDesignLine gradientLine />
      </div>
      <p className="text-black lg:mt-sp10 mt-4 lg:text18 mtext18">
        Setting the standard for cyber resilience, we match the power of
        industry expertise, automation, and artificial intelligence to ensure
        around-the-clock cyber defence for enterprises in KSA and beyond.
      </p>
    </div>
  );
};

export default Content;
