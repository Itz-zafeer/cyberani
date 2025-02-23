import React from "react";
import Container from "../common/newsblogs-singlepage/container/Container";
import RelatedSwiper from "../common/newsblogs-singlepage/related-swiper/RelatedSwiper";
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const NewsSinglePage = () => {
  return (
    <>
      <Container />
      <RelatedSwiper data={data} newsCard title1={"Related"} title2={"News"} />
    </>
  );
};

export default NewsSinglePage;
