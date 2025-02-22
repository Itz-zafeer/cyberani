import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";

const Content = () => {
  return (
    <div className="bg-dark-navy text-white">
      <div className="lg:pt-sp72 pt-[120px] pb-[202px] lg:pb-[15.1388888889vw] myContainer">
        <div className="lg:w-[68.5416666667vw] flex flex-col items-start">
          <div className="flex flex-col items-start">
            <h2 className="text32 lg:pb-sp16 pb-4">
              Get to know the benefits of our two SOC sites for your enterprise
            </h2>
            <TitleDesignLine gradientLine />
          </div>
          <p className="lg:text18 mtext18 lg:mt-sp24 mt-4">
            Cyberani provides next-generation services to ensure effortless and
            steady protection of your digital assets and processes. Please use
            the email below and contact us directly to explore how our complex
            AI-powered cyber defence services can support your business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
