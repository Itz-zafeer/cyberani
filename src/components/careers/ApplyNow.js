import React from "react";
import LinkBtn from "../common/link-buttons/LinkBtn";

const ApplyNow = () => {
  return (
    <div className="lg:-mb-sp30 -mb-10 myContainer relative z-[2] border20 overflow-hidden lg:py-sp72 lg:px-[4.02777777778vw] px-5 py-[42px]">
      <span className="atlwh_Full applynow_gradient"></span>
      <div className="relative z-[2] text-white flex flex-col lg:gap-y-sp24 gap-y-6 items-center text-center">
        <h2 className="text32">Apply Now</h2>
        <p className="lg:text18 mtext18 lg:w-[69.7222222222vw]">
          We provide exceptional solutions in the ever-evolving and demanding
          cybersecurity industry by recruiting the most talented individuals and
          providing a collaborative and diverse work environment that supports
          your career development.
        </p>
        <LinkBtn text={"Apply"} link={"/"} />
      </div>
    </div>
  );
};

export default ApplyNow;
