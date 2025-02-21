import React from "react";
import LinkBtn from "../common/link-buttons/LinkBtn";
import TitleDesignLine from "../common/TitleDesignLine";
import Image from "next/image";

const DigitalDefense = () => {
  return (
    <div className="lg:py-[14.2361111111vw] pt-[128px] pb-[78px] relative">
      <div className="atlwh_Full">
        <span className="button_gradient atlwh_Full -scale-x-100 pointer-events-none"></span>
        <img
          src="/images/about/digital-defense/pattern.png"
          alt="pattern"
          className="lg:size-[18.3333333333vw] size-[140px] absolute bottom-0 lrf2 flipped"
        />
      </div>
      <div className="myContainer flex justify-center lg:justify-between flex-wrap lg:gap-48 gap-[82px] relative z-[2]">
        <div className="lg:w-[38.6805555556vw] flex flex-col items-start text-white">
          <div>
            <h2 className="text32">
              Empowering Digital Defense in Saudi Arabia and{" "}
              <span className="text-bright-teal">Beyond</span>.
            </h2>
            <div className="lg:hidden lg:mt-0 mt-2">
              <TitleDesignLine gradientLine />
            </div>
          </div>

          <p className="lg:text18 mtext22 lg:mt-sp30 mt-6">
            Cyberani is an Aramco Digital company playing a vital role in Saudi
            Arabia&apos;s national security and setting new standards in digital
            defense, ensuring protection and prosperity of current and future
            generations.
          </p>
          <div className="w-full flex justify-start lg:mt-sp48 mt-12">
            <LinkBtn text={"Visit Website"} link={"/"} />
          </div>
        </div>
        <div className="relative lg:w-[33.8888888889vw] lg:h-sp190 w-[284px] h-[110px] lg:mt-sp20">
          <Image
            fill
            alt="aramoc"
            src={"/images/about/digital-defense/aramco.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalDefense;
