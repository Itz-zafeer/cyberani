import Image from "next/image";
import React from "react";

const Card = ({ benefit }) => {
  return (
    <div className="flex flex-col lg:gap-y-[0.97222222222vw] gap-y-[14px] items-center text-center lg:w-[20.1388888889vw] lg:h-[13.4722222222vw] w-full h-[194px] border20 border-dark-teal border lg:p-sp24 p-6">
      <div className="lg:size-sp72 size-[72px] relative">
        <Image fill alt="icon" src={benefit.img} />
      </div>
      <span className="lg:text20 mtext20 font-medium text-black">
        {benefit.title}
      </span>
    </div>
  );
};

export default Card;
