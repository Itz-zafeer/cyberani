"use client";
import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import useResponsivness from "@/hooks/useResponsivness";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Service = ({ index, service }) => {
  const animatedPartRef = useRef(null);
  const { isDesktop } = useResponsivness();
  const [maxHeight, setMaxHeight] = useState("0px");

  const setIsHovered = (onEnter) => {
    if (animatedPartRef.current && isDesktop) {
      setMaxHeight(
        onEnter ? `${animatedPartRef.current.scrollHeight}px` : "0px"
      );
    }
  };
  return (
    <Link
      onMouseEnter={() => setIsHovered(true, index)}
      onMouseLeave={() => setIsHovered(false, index)}
      href={"/"}
      className="group hover:lg:w-[40.9722222222vw] hover:lg:min-w-[40.9722222222vw] transition-all duration-700 cursor-pointer lg:w-sp190 lg:min-w-sp110 w-[325px] min-w-[325px] lg:h-[36.1111111111vw] h-[520px] border15 overflow-hidden relative flex items-end lg:pb-sp32 pb-8"
    >
      <div className="atlwh_Full">
        <span className="atlwh_Full button_gradient opacity-[0.3] mix-blend-lighten z-[1]"></span>
        <span className="atlwh_Full service_card_verlay"></span>
        <div className="atlwh_Full z-[-1]">
          <Image fill alt="image" src={service.img} className="object-cover" />
        </div>
      </div>
      <div className="relative z-[2] whitespace-normal text-white group-hover:lg:w-[36.7361111111vw] lg:w-sp110 flex flex-col lg:gap-y-sp16 gap-y-4 lg:px-[0.625vw] group-hover:lg:px-[1.80555555556vw] px-[22px] transition-all duration-1000">
        <h4 className="lg:text20 mtext20 font-semibold lg:truncate">
          {service.title}
        </h4>
        <div
          ref={animatedPartRef}
          style={{ maxHeight: isDesktop ? maxHeight : "" }}
          className="lg:min-w-[36.7361111111vw] lg:w-[36.7361111111vw] flex flex-col lg:gap-y-sp16 gap-y-4 lg:max-h-0 lg:opacity-0 group-hover:opacity-100 lg:translate-y-full group-hover:translate-y-0 overflow-hidden transition-all duration-1000"
        >
          <p className="lg:text18 mtext18 line-clamp-2 lg:line-clamp-none">
            {service.desc}
          </p>
          <ChevronLink
            tag={"button"}
            text={"Read More"}
            textClasses={"lg:text14 mtext20 font-medium"}
            svgSizes={"lg:size-sp24 size-6"}
          />
        </div>
      </div>
    </Link>
  );
};

export default Service;
