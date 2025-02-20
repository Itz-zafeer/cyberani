import TitleDesignLine from "@/components/common/TitleDesignLine";
import Image from "next/image";
import React from "react";

const Approach = ({ gif, heading, desc, translate }) => {
  return (
    <div
      className={`${translate} lg:w-[28.1944444444vw] last:lg:w-[22.9861111111vw] flex flex-col items-center lg:items-start text-center lg:text-start`}
    >
      <div className="relative lg:size-sp80 size-[80px]">
        <Image
          fill
          alt="play"
          className="flipped mix-blend-plus-lighter"
          src={gif}
        />
      </div>
      <div className="relative  lg:mt-sp72 lg:mb-sp20 my-12">
        <div
          dangerouslySetInnerHTML={{ __html: heading }}
          className="lg:text28 mtext28 approach_title pb-[32px] lg:pb-[unset] w-[78%] mx-auto lg:mx-[unset]"
        ></div>

        <div className="lg:w-[78%] w-full">
          <TitleDesignLine />
        </div>
      </div>
      <p className="lg:text22 mtext22">{desc}</p>
    </div>
  );
};

export default Approach;
