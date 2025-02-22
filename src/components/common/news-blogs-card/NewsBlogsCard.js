import React from "react";
import ChevronLink from "../link-buttons/ChevronLink";
import Link from "next/link";
import BackGrounds from "./BackGrounds";

const NewsBlogsCard = ({ link }) => {
  return (
    <Link
      href={`${link}`}
      className="group text-white lg:min-w-[26.3194444444vw] lg:w-[26.3194444444vw] lg:h-[22.5vw] w-[327px] min-w-[327px] h-[280px] relative lg:border10 border8 overflow-hidden flex items-end lg:pb-sp24 pb-5"
    >
      <BackGrounds />
      <div className="relative z-[2] lg:w-[23.5416666667vw] mx-auto w-[89.606%] whitespace-normal">
        <span className="lg:text16 mtext12">24 Jul 2024</span>
        <h4 className="lg:text20 mtext18 leading-[24px] font-semibold lg:mt-sp10 lg:mb-sp16 mt-3 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
        <ChevronLink
          tag={"div"}
          text={"Read More"}
          link={"/"}
          textClasses={"lg:text20 mtext18 font-medium"}
        />
      </div>
    </Link>
  );
};

export default NewsBlogsCard;
