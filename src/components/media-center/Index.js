import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import NewsBlogsContainer from "./news-blogs-container/NewsBlogsContainer";
const MediaCenterPage = () => {
  const breadCrumbs = [{ text: "Careers" }];
  return (
    <>
      <SubPageHero
        breadCrumbs={breadCrumbs}
        content={{
          heading: "Explore our news and announcements",
        }}
        banner={{
          src: "/images/media-center/hero.jpeg",
        }}
      />
      <NewsBlogsContainer link={"/media-center/news-single-page"} />
      <NewsBlogsContainer fromBlogs />
    </>
  );
};

export default MediaCenterPage;
