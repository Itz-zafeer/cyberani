import React from "react";
import BackGrounds from "./BackGrounds";

const Cta = () => {
  return (
    <div className="z-[1] lg:py-[11.9444444444vw] py-[227px] relative">
      <BackGrounds />
      <div className="relative z-[2] myContainer text-white lg:w-[50.9027777778vw] text-center flex flex-col items-center">
        <h2 className="lg:text39 mtext24 font-medium">
          Securing Industry Pioneers
        </h2>
        <p className="text24 mt-8 lg:mt-sp32">
          Cyberani is the top choice for business leaders and government
          agencies in KSA, the Middle East, and North Africa. We drive digital
          transformation with custom cybersecurity services and advanced
          multilayered SOC.
        </p>
      </div>
    </div>
  );
};

export default Cta;
