import React from "react";
import Content from "./Content";
import Service from "./Service";
import LinkBtn from "@/components/common/link-buttons/LinkBtn";
const services = [
  {
    img: "/images/home/services/1.jpeg",
    title: "Managed Security Operations ",
    desc: "Experience around-the-clock network visibility, proactive threat intelligence, and automated endpoint detection.",
    link: "/",
  },
  {
    img: "/images/home/services/2.jpeg",
    title: "GRC Services",
    desc: "Ensure lasting enterprise resilience with expert audits and industry-specific compliance certifications.",
    link: "/",
  },
  {
    img: "/images/home/services/3.jpeg",
    title: "Offensive Cybersecurity",
    desc: "Proactively identify and address vulnerabilities with scanning and pen testing services.Proactively identify and address vulnerabilities with scanning and pen testing services.",
    link: "/",
  },
  {
    img: "/images/home/services/4.jpeg",
    title: "OT Cybersecurity ",
    desc: "Protect your operational infrastructure with specialised engineering, pen testing, assessment, and incident response services.",
    link: "/",
  },
  {
    img: "/images/home/services/5.jpeg",
    title: "DFIR",
    desc: "Minimise downtimes and restore IT system integrity with a 24/7 monitoring and response.",
    link: "/",
  },
  {
    img: "/images/home/services/6.jpeg",
    title: "VAR",
    desc: "Elite partnerships with leading Cybersecurity Technology vendors",
    link: "/",
  },
];
const Services = () => {
  return (
    <section className="lg:py-sp120 pt-[135px] flex flex-col items-center lg:gap-y-sp48 gap-y-12">
      <Content />
      <div className="lg:myContainer w-full flex lg:gap-sp20 gap-5 px-5 sm:px-[4.8vw] lg:px-0 lg:overflow-hidden lg:whitespace-normal whitespace-nowrap overflow-auto hideScroll">
        {services.map((service, index) => (
          <Service service={service} key={index} index={index} />
        ))}
      </div>
      <div className="myContainer flex justify-center">
        <LinkBtn text={"Read More"} link={"/"} black />
      </div>
    </section>
  );
};

export default Services;
