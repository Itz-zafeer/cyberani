"use client";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import React, { useState } from "react";
import Search from "./Search";
import Category from "./Category";
import Card from "./Card";
const browseServices = [
  {
    category: "Managed Security Operations",
    services: [
      {
        img: "/images/our-services/browse-services/1/1.jpg",
        title: "Managed Detection and Response (MDR)",
      },
      {
        img: "/images/our-services/browse-services/1/2.jpg",
        title: "Managed SOC",
      },
      {
        img: "/images/our-services/browse-services/1/3.jpg",
        title: "Cybersecurity Monitoring Services",
      },
      {
        img: "/images/our-services/browse-services/1/4.jpg",
        title: "Threat Hunting",
      },
      {
        img: "/images/our-services/browse-services/1/5.jpg",
        title: "Threat Intelligence",
      },
    ],
  },
  {
    category: "GRC Services",
    services: [
      {
        img: "/images/our-services/browse-services/2/1.jpg",
        title: "(GRC) Cybersecurity Strategy",
      },
      {
        img: "/images/our-services/browse-services/2/2.jpg",
        title: "(GRC) Cybersecurity Program",
      },
      {
        img: "/images/our-services/browse-services/2/3.jpg",
        title: "(GRC) Cybersecurity Risk Assessment",
      },
      {
        img: "/images/our-services/browse-services/2/4.jpg",
        title: "(GRC) Cybersecurity Compliance Assessment",
      },
      {
        img: "/images/our-services/browse-services/2/5.jpg",
        title: "(GRC) Cybersecurity Maturity Assessment",
      },
    ],
  },
  {
    category: "Offensive Cybersecurity",
    services: [
      {
        img: "/images/our-services/browse-services/3/1.jpg",
        title: "Vulnerability Assessment",
      },
      {
        img: "/images/our-services/browse-services/3/2.jpg",
        title: "Penetration Testing",
      },
      {
        img: "/images/our-services/browse-services/3/3.jpg",
        title: "Source Code Review",
      },
      {
        img: "/images/our-services/browse-services/3/4.jpg",
        title: "Red Teaming",
      },
      {
        img: "/images/our-services/browse-services/3/5.jpg",
        title: "Mobile App Assessment",
      },
      {
        img: "/images/our-services/browse-services/3/6.jpg",
        title: "Web Assessment",
      },
    ],
  },
  {
    category: "OT Cybersecurity",
    services: [
      {
        img: "/images/our-services/browse-services/4/1.jpg",
        title: "OT GRC",
      },
      {
        img: "/images/our-services/browse-services/4/2.jpg",
        title: "OT Maturity Risk Assessment",
      },
      {
        img: "/images/our-services/browse-services/4/3.jpg",
        title: "OT Penetration Testing",
      },
      {
        img: "/images/our-services/browse-services/4/4.jpg",
        title: "OT Architectural",
      },
      {
        img: "/images/our-services/browse-services/4/5.jpg",
        title: "OT Automated Asset Discovery Solutions",
      },
      {
        img: "/images/our-services/browse-services/4/6.jpg",
        title: "OT DFIR",
      },
      {
        img: "/images/our-services/browse-services/4/7.jpg",
        title: "OT Cybersecurity Program",
      },
      {
        img: "/images/our-services/browse-services/4/8.jpg",
        title: "OT Cybersecurity Projects",
      },
    ],
  },
  {
    category: "DFIR",
    services: [
      {
        img: "/images/our-services/browse-services/5/1.jpg",
        title: "IR Retainer Hours",
      },
      {
        img: "/images/our-services/browse-services/5/2.jpg",
        title: "Compromise Assessment",
      },
      {
        img: "/images/our-services/browse-services/5/3.jpg",
        title: "Tabletop Exercise",
      },
    ],
  },
  {
    category: "VAR",
    services: [
      {
        img: "/images/our-services/browse-services/6/1.jpg",
        title:
          "Elite partnerships with leading Cybersecurity Technology vendors",
      },
    ],
  },
];

const BrowseServices = () => {
  const [active, setActive] = useState(0);
  const categories = browseServices.map((item) => item.category);
  return (
    <section className="lg:pt-sp180 lg:pb-sp110 pt-[110px] pb-[116px]">
      <div className="myContainer">
        <div className="flex flex-wrap justify-between items-start lg:gap-sp24 gap-6">
          <div className="flex flex-col items-start">
            <h2 className="text36 text-gray lg:pb-sp10 pb-4">
              Browse <span className="text-bright-teal">Services</span>
            </h2>
            <TitleDesignLine gradientLine />
          </div>
          <Search />
        </div>
      </div>
      <div className="lg:myContainer w-full px-5 sm:px-[4.8vw] lg:px-0">
        <div className="lg:mt-sp48 mt-6 flex whitespace-nowrap lg:whitespace-normal lg:overflow-visible overflow-auto hideScroll lg:gap-x-[3.125vw] gap-x-6">
          {categories.map((category, index) => (
            <Category
              category={category}
              setActive={setActive}
              active={active}
              key={index}
              index={index}
            />
          ))}
        </div>
        <div className="lg:mt-sp64 mt-8 flex lg:flex-wrap lg:gap-sp40 gap-10 whitespace-nowrap lg:whitespace-normal lg:overflow-visible overflow-auto hideScroll">
          {browseServices[active].services.map((service, index) => (
            <Card key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseServices;
