import React from "react";
import NavigationLinks from "./navigation-links/NavigationLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="lg:py-sp72 lg:pb-sp16 pb-5 pt-[110px] relative text-white">
      <span className="atlwh_Full formxfooter_overlay pointer-events-none"></span>
      <div className="relative z-[2] myContainer">
        <div className="lg:pb-sp48 pb-8 border-b border-[#FFFFFF1A] mb-8 lg:mb-0">
          <NavigationLinks />
        </div>
        <div className="lg:py-sp20 py-5 gap-10 flex flex-wrap items-center justify-center lg:justify-between">
          <span className="lg:text18 mtext18">All rights reserved @ 2024</span>
          <Link
            href="/"
            className="relative lg:w-[12.3611111111vw] lg:h-[3.88888888889vw] w-[45.641025641vw] h-[14.358974359vw] sm:w-[23vw] sm:h-[7vw]"
          >
            <Image fill alt="logo" src={"/images/icons/footer_logo.svg"} />
          </Link>
          <Link
            href={"https://brackets-tech.com/"}
            target="_blank"
            className="underline underline-offset-2 lg:text18 mtext14 opacity_Hover"
          >
            Developed By Brackets Technology
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
