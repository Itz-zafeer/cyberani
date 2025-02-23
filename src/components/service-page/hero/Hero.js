import React from "react";
import BackGrounds from "./backgrounds/BackGrounds";
import DynamicBreadCrumbs from "@/components/common/DynamicBreadCrumbs";
const breadCrumbs = [
  {
    text: "Our Services",
    link: "our-services",
  },
  { text: "MDR" },
];

const Hero = () => {
  return (
    <section className="relative minfullVh minfullSvh flex items-start lg:pt-[33.625vh] pt-[250px]">
      <BackGrounds />
      <div className="relative z-[2] myContainer text-white">
        <div className="lg:w-[62.9166666667vw] flex flex-col lg:gap-y-[4vh] gap-y-4 lg:items-start items-center lg:text-start text-center">
          <DynamicBreadCrumbs breadCrumbs={breadCrumbs} />
          <h1 className="text40">
            Managed Detection and Response (MDR) Service
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
