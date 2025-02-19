"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GlobalError = () => {
  return (
    <div>
      <div className="lg:p-[4.16666666667vw] p-[20px] fixed top-0 lrf1 w-full z-[9]">
        <Link
          href="/"
          className="relative block lg:w-[17.9261979167vw] lg:h-[4.32291666667vw] sm:w-[300px] sm:h-[180px] w-[200px] h-[120px]"
        >
          <Image fill src="/images/icons/Logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="w-full fullVh fullSvh pt-[47vw] pb-[25vh] lg:py-[24.0740740741vh] flex justify-center items-end bg-[#092F47] relative">
        <div className="atlwh_Full">
          <span className="error_Overlay atlwh_Full bottom-0 top-[unset] lg:h-[35.2604166667vw] h-[44.314%]"></span>
          <img
            src="/images/404-pattern1.png"
            alt="pattern"
            className="hidden lg:block flipped absolute lrf2 lg:top-[3.85416666667vw] top-[5%] lg:w-[17.0833333333vw] w-[30%]"
          />
          <img
            src="/images/mob-404-pattern1.png"
            alt="pattern"
            className="lg:hidden block flipped absolute lrf2 w-[23.722%] top-[105px]"
          />
          <img
            src="/images/404-pattern2.png"
            alt="pattern"
            className="hidden lg:block flipped absolute lg:bottom-[-3.02083333333vw] bottom-[-5%] lrf1 lg:w-[21.25vw] w-[40%]"
          />
          <img
            src="/images/mob-404-pattern2.png"
            alt="pattern"
            className="lg:hidden block flipped absolute lrf1 w-[40.466%] bottom-[-43px]"
          />
        </div>
        <div className="lg:w-[35.2083333333vw] myContainer flex flex-col items-center text-center relative z-[2]">
          <div className="relative lg:w-[19.1666666667vw] lg:h-[15.5555555556vh] sm:w-[47.7906976744vw] sm:h-[17.3255813953vw] w-[52.7906976744vw] h-[22.3255813953vw]">
            <Image fill alt="404" src="/images/icons/404.svg" />
          </div>
          <span className="text50 text-[#00AA93] lg:mt-[1.04166666667vw] lg:mb-[1.25vw] sm:mt-[2.28837209302vw] sm:mb-[3.1511627907vw] mt-[3.48837209302vw] mb-[4.6511627907vw]">
            Oops! Page not found
          </span>
          <p className="lg:text30 mtext20 text-white Tajawal lg:mb-[2.08333333333vw] sm:mb-[5.14186046512vw] mb-[7.44186046512vw]">
            Sorry! We couldn’t find the page you were looking for.
          </p>
          <Link
            href="/"
            className={` text-[#FF8450] group lg:text25 mtext16 f600 capitalize flex items-center justify-center  lg:gap-x-[0.52083333333vw] gap-x-[5px] `}
          >
            <div
              className={`${
                arabic
                  ? "lg:group-hover:translate-x-[0.52083333333vw] group-hover:translate-x-[1vw]"
                  : "lg:group-hover:translate-x-[-0.52083333333vw] group-hover:translate-x-[-1vw]"
              } relative lg:w-[1.25vw] lg:h-[1.25vw] w-[17px] h-[17px] transition-all duration-300`}
            >
              <Image
                fill
                src={`/images/icons/orange-r-chevron.svg`}
                alt="chevron"
                className="scale-x-[-1] noflipped"
              />
            </div>
            <span>Go Back to Home</span>
          </Link>
        </div>
      </div>
      <div className="relative bg-[#092F47] w-full">
        <div className="atlwh_Full overflow-hidden">
          <img
            src="/images/footer/footer-pattern.png"
            alt="pattern"
            className="  flipped absolute bottom-0  lg:w-[21.875vw] ltr:right-0 rtl:left-0"
          />
        </div>
        <div className="myContainer lg:pt-[3.54166666667vw] lg:pb-[2.83697916667vw] py-[32px] relative z-[2]">
          <div className="lg:w-[28.28125vw]">
            <Link
              href="/"
              className="relative block lg:w-[13.6458333333vw] lg:h-[3.28125vw] w-[217px] h-[50px]"
            >
              <Image fill src="/images/icons/footer-Logo.svg" alt="logo" />
            </Link>
            <p className="lg:text18 mtext18 mt20 lg:mt-[1.61458333333vw]  text-[#7DA2C5] Tajawal">
              EST. 2015, Saudi ministry oversight, offers Bachelor/Master
              programs across fields. At JIC, we aim to graduate leaders &
              entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
