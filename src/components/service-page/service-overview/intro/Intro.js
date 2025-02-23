import React from "react";
import Functions from "./functions/Functions";
import Image from "next/image";
import Content from "./Content";

const Intro = () => {
  return (
    <div className="lg:px-sp100 px-5 bg-white relative lg:pt-sp100 pt-[30px] lg:pb-sp140 pb-[70px] myContainer lg:w-full lg:border20 border15 !rounded-br-none !rounded-bl-none">
      <div className="lg:size-sp160 lg:h-[14.3055555556vw] absolute top-0 lg:mx-sp80 lrf2 hidden lg:block">
        <Image fill src="/images/service-page/shape.png" alt="shape" />
      </div>
      <Content />
      <Functions />
    </div>
  );
};

export default Intro;
