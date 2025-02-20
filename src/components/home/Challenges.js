import React from "react";
import TitleDesignLine from "../common/TitleDesignLine";
import LinkBtn from "../common/link-buttons/LinkBtn";
import Image from "next/image";

const Challenges = () => {
  return (
    <div className="myContainer flex flex-wrap lg:gap-sp40 gap-[108px] lg:items-start justify-center lg:justify-between lg:py-sp150 py-[150px]">
      <div className="lg:w-[55.2083333333vw] flex flex-col items-start">
        <div>
          <h2 className="text-gray text36">
            Stay Ahead of Tomorrow’s{" "}
            <span className="text-bright-teal">Challenges</span>
          </h2>
          <TitleDesignLine gradientLine />
        </div>
        <p className="lg:text22 mtext22 text-black lg:mt-sp30 mt-8">
          Try our next-generation cybersecurity services to protect and empower
          your business with robust security and seamless operations. Partner
          with us to safeguard your digital assets and drive innovation
          securely.
        </p>
        <div className="w-full flex justify-start lg:mt-sp48 mt-12">
          <LinkBtn text={"Contact Us"} link={"/"} black />
        </div>
      </div>
      <div className="relative lg:w-[17.5vw] lg:h-[18.0555555556vw] w-[192px] h-[196px]">
        <Image fill alt="pattern" src={"/gifs/pattern-home.gif"} />
      </div>
    </div>
  );
};

export default Challenges;
