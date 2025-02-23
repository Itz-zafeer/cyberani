import React from "react";
import Intro from "./intro/Intro";
import Features from "./features/Features";
import UseCases from "./use-cases/UseCases";

const ServiceOverview = () => {
  return (
    <section className="lg:mt-[-46.125vh] mt-[-435px] relative">
      <span className="atlwh_Full top-[unset] bottom-0 bg-dark-navy h-[93%] pointer-events-none"></span>
      <div className="lg:w-[87.5vw] w-full mx-auto lg:pb-sp100 lg:border lg:border20 lg:border-[#0000001a] relative z-[2]">
        <Intro />
        <Features />
        <UseCases />
      </div>
    </section>
  );
};

export default ServiceOverview;
