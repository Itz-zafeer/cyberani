import React from "react";
import DynamicBreadCrumbs from "../../DynamicBreadCrumbs";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
const singlePageContent = `
  <p>24 Jul 2024</p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
`;
const Container = () => {
  const breadCrumbs = [{ text: "Media Center" }];

  return (
    <section className="lg:pt-sp190 pt-40">
      <div className="myContainer">
        <div className="flex flex-col lg:items-start items-center lg:text-start text-center lg:gap-sp24 gap-4">
          <DynamicBreadCrumbs breadCrumbs={breadCrumbs} blackVarient />
          <div className="flex flex-col lg:gap-0 gap-7 lg:w-[81.6666666667vw] w-full">
            <h2 className="text40">Lorem ipsum dolor sit amet,</h2>
            <p className="text24">
              Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus
              sit pretium facilisis amet sed
            </p>
          </div>
        </div>
        <div className="w-full lg:h-[30.0694444444vw] h-[433px] relative border10 overflow-hidden lg:mt-sp40 mt-[54px]">
          <span className="atlwh_Full single_page_banner_overlay z-[1]"></span>
          <div className="atlwh_Full">
            <Image
              fill
              alt="banner"
              src={"/images/news-single-page/banner.jpg"}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between lg:gap-sp48 gap-[70px] lg:pt-[4.58333333333vw]">
          <SocialLinks />
          <div
            dangerouslySetInnerHTML={{ __html: singlePageContent }}
            className="lg:w-[75.2777777778vw] lg:text22 mtext22 flex flex-col lg:gap-sp24 gap-6"
          ></div>
        </div>
      </div>
      <span className="bg-[#0003] h-[1px] lg:myContainer w-full block lg:mt-[6.25vw] mt-[50px]"></span>
    </section>
  );
};

export default Container;
