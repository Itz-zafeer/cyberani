"use client";
import React, { useRef, useState } from "react";
import Backgrounds from "./backgrounds/Backgrounds";
import MyLightBox from "@/components/common/MyLightBox/Index";
import Image from "next/image";
import ContentWrapper from "./ContentWrapper";

const SubPageHero = ({ content, breadCrumbs, banner, showCaseVideo }) => {
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
      <section className="minfullVh minfullSvh relative flex items-end lg:pt-[14.3055555556vw] lg:pb-sp120 pt-40 pb-12 sm:pb-[12.3076923077vw]">
        <Backgrounds banner={banner} />
        <div className="myContainer relative z-[2]">
          <ContentWrapper
            handleOpen={handleOpen}
            setSlideIndex={setSlideIndex}
            breadCrumbs={breadCrumbs}
            content={content}
            showCaseVideo={showCaseVideo}
          />
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
          sources={[{ source: showCaseVideo, type: "video" }]}
          // sources={[{ source: data?.youtubeId, type: "youtube" }]}
        />
      )}
    </>
  );
};

export default SubPageHero;
