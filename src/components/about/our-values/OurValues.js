import React from "react";
import Card from "./Card";
const values = [
  {
    img: "/images/about/our-values/1.svg",
    title: "Excellence",
    desc: "We strive to deliver superior service quality and efficiency, being a cybersecurity provider of choice for clients across various industries.",
  },
  {
    img: "/images/about/our-values/2.svg",
    title: "Reliability",
    desc: "We guarantee high availability and precision in every aspect of our operations.",
  },
  {
    img: "/images/about/our-values/3.svg",
    title: "Resilience",
    desc: "We maintain a forward-looking approach, ensuring our services always remain at the forefront of cybersecurity.",
  },
  {
    img: "/images/about/our-values/4.svg",
    title: "Integrity",
    desc: "We operate transparently and openly, ensuring every interaction with our clients is built on trust, compliance, and awareness. ",
  },
];
const OurValues = () => {
  return (
    <section className="lg:py-sp100 py-[100px] button_gradient relative">
      <div className="atlwh_Full">
        <span className="atlwh_Full cta_home_overlay opacity-[0.6] z-[1]"></span>
        <span className="atlwh_Full bg-black opacity-[0.8]"></span>
      </div>
      <div className="relative z-[2] text-white myContainer">
        <h2 className="lg:text36 text-center text-[36px] leading-[54px] font-medium">
          Our Values
        </h2>
        <div className="flex lg:gap-sp48 gap-12 justify-between flex-wrap items-center lg:items-stretch lg:mt-sp100 mt-[100px]">
          {values.map((value, index) => (
            <Card value={value} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
