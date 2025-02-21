"use client";
import TitleDesignLine from "@/components/common/TitleDesignLine";
import useResponsivness from "@/hooks/useResponsivness";
import Image from "next/image";
import React from "react";

const BrowseServices = () => {
  const { isDesktop } = useResponsivness();
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
          <div className="flex items-center lg:gap-sp10 gap-2.5 lg:w-[56.3888888889vw] lg:h-sp64 h-12 border10 overflow-hidden bg-[#d9d9d94d] lg:px-sp20 px-5">
            <div className="relative lg:size-sp24 size-6 lg:min-w-sp24 min-w-6">
              <Image fill alt="search" src={"/images/icons/search.svg"} />
            </div>
            <input
              autoComplete="off"
              type="text"
              className="w-full outline-none bg-transparent text-black placeholder:text-black lg:text16 mtext18"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="lg:myContainer w-full px-5 sm:px-[4.8vw] lg:px-0">
        <div className="lg:mt-sp48 mt-6 flex whitespace-nowrap lg:whitespace-normal lg:overflow-visible overflow-auto hideScroll lg:gap-x-[3.125vw] gap-x-6">
          <button
            className={`${
              isDesktop ? "button_gradient" : "gradient_text"
            } lg:text18 mtext18 lg:text-white lg:border40 lg:border lg:border-dark-teal lg:py-[0.625vw] lg:px-[1.41173611111vw]`}
          >
            Managed Security Operations
          </button>
          <div className="lg:mt-sp64 mt-8 flex flex-wrap lg:gap-sp40 gap-10">
            <div className="lg:w-[19.4444444444vw] lg:h-[17.3611111111vw] relative w-[280px] h-[250px] border20 overflow-hidden flex items-end lg:pb-sp18 pb-[18px]">
              <div className="relative z-[2] text-white flex flex-col lg:gap-y-[0.97222222222vw] gap-3 lg:w-[16.25vw] w-[77.429%] mx-auto">
                <span className="button_gradient w-full h-[1px]"></span>
                <p className="lg:text20 mtext20 font-medium">dsa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseServices;
