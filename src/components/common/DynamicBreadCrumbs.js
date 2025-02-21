import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicBreadCrumbs = ({ arabic, breadCrumbs }) => {
  return (
    <div
      data-aos="fade"
      className="flex flex-wrap items-center justify-center lg:justify-normal lg:gap-x-[0.48611111111vw] gap-[7px] capitalize lg:text20 mtext18 font-medium"
    >
      <Link
        href={(arabic ? "/ar" : "/en") + "/"}
        className="flex items-center lg:gap-x-[0.48611111111vw] gap-[7px]"
      >
        <div className="opacity_Hover relative lg:size-sp24 size-6">
          <Image fill src="/images/icons/home.svg" alt="home-icon" />
        </div>
        <span className="hidden lg:block">home</span>
      </Link>
      {breadCrumbs?.map((breadCrumb, index) => (
        <React.Fragment key={index}>
          <span>/</span>

          {breadCrumb.link ? (
            <Link href={`${breadCrumb.link}`} className="opacity_Hover">
              {breadCrumb.text}
            </Link>
          ) : (
            <span>{breadCrumb.text}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DynamicBreadCrumbs;
