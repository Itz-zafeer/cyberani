import React from "react";
import Content from "./Content";
import Card from "./card/Card";
const approaches = [
  {
    img: "/images/about/our-approach/1.jpg",
    title: "Automated",
    desc: "Threat Intelligence and Response",
  },
  {
    img: "/images/about/our-approach/2.jpg",
    title: "Multilayered",
    desc: "Security Operations Centre Protection",
  },
  {
    img: "/images/about/our-approach/3.jpg",
    title: "Around-the-clock",
    desc: "Security Monitoring and Threat Detection",
  },
];
const OurApproach = () => {
  return (
    <section className="lg:pt-[8.68055555556vw] lg:pb-[10vw] py-[100px] relative">
      <img
        src="/images/about/pioneering/pattern.png"
        alt="pattern"
        className="lg:size-[18.3333333333vw] size-[140px] absolute top-0 lrf2 noflipped"
      />
      <div className="myContainer relative z-[2]">
        <Content />

        <div className="flex flex-wrap lg:gap-sp30 gap-[30px] lg:mt-sp48 mt-12">
          {approaches.map((approach, index) => (
            <Card approach={approach} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
