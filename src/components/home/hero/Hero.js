"use client";
import React, { useRef, useState } from "react";
import Backgrounds from "./backgrounds/Backgrounds";
import MyLightBox from "@/components/common/MyLightBox/Index";
import Image from "next/image";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showNow, setShowNow] = useState(false);
  const handleOpen = () => {
    setShowLightBox(true);
    if (!showLightBox) {
      setTimeout(() => {
        const container = document.querySelector(".lightboxContainer");
        container.classList.remove("opacity-0");
        container.classList.remove("pointer-events-none");
        setShowNow(true);
      }, 1500);
    } else {
      const container = document.querySelector(".lightboxContainer");
      container.classList.remove("opacity-0");
      container.classList.remove("pointer-events-none");
      setTimeout(() => {
        setShowNow(true);
      }, 1500);
    }
  };
  return (
    <>
      <section className="minfullVh minfullSvh relative flex items-end lg:pt-[14.3055555556vw] lg:pb-[9.51388888889vw] py-40">
        <Backgrounds />
        <div className="myContainer relative z-[2]">
          <div className="lg:w-[44.3055555556vw] text-white flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 className="text40">Protecting Cyberspace</h1>
            <p className="lg:text24 mtext18 lg:w-[43.2638888889vw] lg:mt-sp10 mt-2.5">
              Next-generation cybersecurity services for industry leaders in KSA
              and beyond.
            </p>
            <button
              onClick={() => {
                handleOpen();
                setSlideIndex(0);
              }}
              className="opacity_Hover flex items-center lg:mt-sp32 mt-8"
            >
              <div className="relative lg:size-[4.86111111111vw] size-[70px]">
                <Image
                  fill
                  alt="play"
                  className="flipped mix-blend-plus-lighter"
                  src="/gifs/watch_video.gif"
                />
              </div>
              <span className="lg:text24 font-medium mtext18">
                Watch a Video
              </span>
            </button>
          </div>
        </div>
      </section>
      {showLightBox && (
        <MyLightBox
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          // sources={[
          //   {
          //     source: getYouTubeVideoId(youtubeLink),
          //     type: "youtube"
          //   }
          // ]}
          sources={[{ source: "/videos/home_hero.mp4", type: "video" }]}
          // sources={[{ source: data?.youtubeId, type: "youtube" }]}
        />
      )}
    </>
  );
};

export default Hero;
