"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsBlogsCard from "../../news-blogs-card/NewsBlogsCard";
const RelatedSwiper = ({ data, newsCard, title1, title2 }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth >= 1024 ? (window.innerWidth / 100) * 3.33333333333 : 20
    );
  });
  return (
    <section className="lg:mt-sp180 my-[84px] lg:mb-sp190">
      <Title title1={title1} title2={title2} />
      <Swiper
        className={`px-[5.12820512821vw] sm:px-[4.8vw] lg:px-[6.94444444444vw] lg:mt-sp40 mt-12 cursor-grab`}
        spaceBetween={swiperGap}
        slidesPerView={"auto"}
      >
        {data?.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${
              newsCard
                ? "lg:!w-[26.3194444444vw] !w-[93.429%] sm:!w-[55%]"
                : "lg:!w-[34.0277777778vw] !w-[93.429%] sm:!w-[55%]"
            } select-none`}
          >
            {newsCard ? <NewsBlogsCard formSwiper /> : ""}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedSwiper;
