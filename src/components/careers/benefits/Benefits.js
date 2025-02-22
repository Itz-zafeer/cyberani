import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";
import Card from "./Card";
const benefits = [
  {
    title: "Supportive Environment",
    img: "/images/careers/benefits/1.svg",
  },
  {
    title: "Flexibility in Working Hours",
    img: "/images/careers/benefits/2.svg",
  },
  {
    title: "Continuous Career Improvement",
    img: "/images/careers/benefits/3.svg",
  },
  {
    title: "Wonderful Place to Work At",
    img: "/images/careers/benefits/4.svg",
  },
];
const Benefits = () => {
  return (
    <section className="relative">
      <img
        src="/images/about/pioneering/pattern.png"
        alt="pattern"
        className="lg:size-[14.375vw] size-[140px] absolute top-0 lrf2 noflipped hidden lg:block"
      />
      <div className="myContainer lg:pt-sp140 lg:pb-sp128 pb-20 pt-[150px] relative z-[2] flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-black text32 lg:pb-0 pb-4">
            Cyberani <span className="text-bright-teal">Benefits</span>{" "}
          </h2>
          <div className="lg:hidden w-full flex justify-center">
            <TitleDesignLine gradientLine />
          </div>
        </div>
        <div className="flex flex-wrap justify-between lg:gap-sp24 gap-[27px] lg:mt-sp48 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
