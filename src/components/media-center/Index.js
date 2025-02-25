import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import NewsBlogsContainer from "./news-blogs-container/NewsBlogsContainer";
import Contact from "../common/contact/Contact";
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
      <NewsBlogsContainer fromBlogs link={"/media-center/blogs-single-page"} />
      <Contact />
    </>
  );
};

export default MediaCenterPage;
