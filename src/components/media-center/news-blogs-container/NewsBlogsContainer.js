"use client";
import React from "react";
import TitleDesignLine from "../../common/TitleDesignLine";
import Search from "./Search";
import SortDropDown from "./SortDropDown";
import Image from "next/image";
import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import Link from "next/link";
import NewsBlogsCard from "@/components/common/news-blogs-card/NewsBlogsCard";
import Pagination from "./Pagination";

const NewsBlogsContainer = ({ fromBlogs, link }) => {
  return (
    <section
      className={`${
        fromBlogs
          ? "lg:py-sp140 pt-[150px] pb-[130px] text-black"
          : "lg:py-sp160 pt-10 pb-[130px] bg-dark-navy text-white"
      }`}
    >
      <div className="myContainer flex flex-col lg:items-start items-center lg:gap-y-sp48 gap-y-12">
        <div className="flex flex-col items-start">
          {fromBlogs ? (
            <h2 className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}>
              Our{""}
              {""} <span className={`text-bright-teal`}>Blogs</span>
            </h2>
          ) : (
            <h2 className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}>
              Latest News
            </h2>
          )}

          <TitleDesignLine {...(fromBlogs && { gradientLine: true })} />
        </div>
        <div className="flex flex-wrap lg:gap-sp20 justify-between gap-6 w-full">
          <Search fromBlogs={fromBlogs} />
          <SortDropDown fromBlogs={fromBlogs} />
        </div>
      </div>
      <div className="px-[5.12820512821vw] sm:px-[4.8vw] lg:px-0 lg:myContainer flex gap-5 lg:gap-sp48 my-12 lg:my-sp48 lg:justify-between whitespace-nowrap lg:whitespace-normal overflow-auto lg:overflow-visible hideScroll lg:flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((v, index) => (
          <NewsBlogsCard key={index} link={link} />
        ))}
      </div>
      <Pagination fromBlogs={fromBlogs} />
    </section>
  );
};

export default NewsBlogsContainer;
