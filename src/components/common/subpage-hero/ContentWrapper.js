import Image from "next/image";
import React from "react";
import DynamicBreadCrumbs from "../DynamicBreadCrumbs";

const ContentWrapper = ({
  handleOpen,
  setSlideIndex,
  breadCrumbs,
  content,
  showCaseVideo,
}) => {
  return (
    <div className="lg:w-[66.8055555556vw] text-white flex flex-col lg:gap-y-sp56 gap-y-8 items-center lg:items-start text-center lg:text-start">
      <div className="flex flex-col lg:gap-y-sp32 gap-y-4">
        <DynamicBreadCrumbs breadCrumbs={breadCrumbs} />
        <div>
          <h1 className="text48 lg:leading-[4.16666666667vw]">
            {content.heading}
          </h1>
          {content.desc && (
            <p className="lg:text20 mtext18 lg:mt-sp10 mt-4">{content.desc}</p>
          )}
        </div>
      </div>
      {showCaseVideo && (
        <button
          onClick={() => {
            handleOpen();
            setSlideIndex(0);
          }}
          className="opacity_Hover hidden lg:flex items-center"
        >
          <div className="relative lg:size-[4.86111111111vw] size-[70px]">
            <Image
              fill
              alt="play"
              className="flipped mix-blend-plus-lighter"
              src="/gifs/watch_video.gif"
            />
          </div>
          <span className="lg:text24 font-medium mtext18">Watch a Video</span>
        </button>
      )}
    </div>
  );
};

export default ContentWrapper;
