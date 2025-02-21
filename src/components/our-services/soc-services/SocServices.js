import React from "react";
import Backgrounds from "./Backgrounds";
import Content from "./Content";

const SocServices = () => {
  return (
    <section className="lg:pt-sp72 lg:pb-[12.7083333333vw] pt-[146px] pb-[58px] relative">
      <Backgrounds />

      <div className="relative z-[2] text-white flex flex-col lg:gap-y-sp180 gap-y-[140px] myContainer">
        <Content />
      </div>
    </section>
  );
};

export default SocServices;
