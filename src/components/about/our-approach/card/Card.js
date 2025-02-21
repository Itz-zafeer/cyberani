import Image from "next/image";
import React from "react";
import BackGrounds from "./BackGrounds";

const Card = ({ approach }) => {
  return (
    <div className="group cursor-pointer flex items-end lg:pb-[2.36111111111vw] pb-8 lg:w-[27.2916666667vw] w-full lg:h-[27.7777777778vw] h-[356px] border10 overflow-hidden relative">
      <BackGrounds approach={approach} />
      <div className="relative z-[2] text-white flex flex-col lg:gap-y-[0.97222222222vw] gap-3 lg:w-[21.1111111111vw] w-[77.429%] mx-auto">
        <h4 className="lg:text24 mtext22 font-medium">{approach.title}</h4>
        <span className="button_gradient w-full h-[1px]"></span>
        <p className="lg:text18 mtext16">{approach.desc}</p>
      </div>
    </div>
  );
};

export default Card;
