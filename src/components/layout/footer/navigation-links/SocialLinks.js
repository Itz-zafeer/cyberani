import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="lg:w-[19.0972222222vw] sm:w-[47%] w-full flex items-center flex-wrap sm:justify-normal justify-between sm:items-start sm:flex-col lg:gap-sp16 gap-2.5">
      <span className="lg:text12 mtext16 lg:font-bold font-medium">
        Follow Us
      </span>
      <ul className="flex items-center flex-wrap lg:gap-sp16 gap-4">
        <li className="opacity_Hover cursor-pointer">
          <Link
            href={`/`}
            target="_blank"
            className="block relative lg:size-sp16 size-4"
          >
            <Image
              fill
              src={"/images/icons/footer-social/twitter_x.svg"}
              alt="twitter_x"
            />
          </Link>
        </li>
        <li className="opacity_Hover cursor-pointer">
          <Link
            href={`/https://www.linkedin.com/`}
            target="_blank"
            className="block relative lg:size-sp16 size-4"
          >
            <Image
              fill
              src={"/images/icons/footer-social/linkedin.svg"}
              alt="linkedin"
            />
          </Link>
        </li>
        <li className="opacity_Hover cursor-pointer">
          <Link
            href={`/https://www.youtube.com/`}
            target="_blank"
            className="block relative lg:size-sp16 size-4"
          >
            <Image
              fill
              src={"/images/icons/footer-social/youtube.svg"}
              alt="youtube"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
