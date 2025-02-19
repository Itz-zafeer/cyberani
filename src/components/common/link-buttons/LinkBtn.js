import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBtn = ({
  link,
  text,
  white,
  arabic,
  tag: Tag = Link,
  isLoading,
  translationText
}) => {
  if (!text) {
    return <></>;
  }
  return (
    <Tag
      {...(Link ? { href: link } : {})}
      className={`${white ? "text-white" : "text-[#FF8450]"}   ${
        isLoading ? " pointer-events-none" : ""
      } group lg:text25 mtext16 capitalize flex items-center justify-center  lg:gap-x-[0.52083333333vw] gap-x-[5px] `}
    >
      <span>{isLoading ? translationText : text}</span>
      {isLoading || (
        <div
          className={`${
            arabic
              ? "lg:group-hover:translate-x-[-0.52083333333vw] group-hover:translate-x-[-1vw]"
              : "lg:group-hover:translate-x-[0.52083333333vw] group-hover:translate-x-[1vw]"
          } relative lg:w-[1.25vw] lg:h-[1.25vw] w-[17px] h-[17px] transition-all duration-300`}
        >
          <Image
            fill
            src={`/images/icons/${
              white ? "white-r-chevron" : "orange-r-chevron"
            }.svg`}
            alt="chevron"
            className=" flipped"
          />
        </div>
      )}
    </Tag>
  );
};

export default LinkBtn;
