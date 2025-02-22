import Image from "next/image";
import React from "react";

const Card = ({ service, index }) => {
  return (
    <div className="lg:min-w-[19.4444444444vw] lg:w-[19.4444444444vw] min-w-[280px] w-[280px]">
      <div className="w-full lg:h-[17.3611111111vw] relative h-[250px] border20 overflow-hidden flex items-end lg:pb-sp18 pb-[18px] lg:pt-sp24 pt-6">
        <div className="atlwh_Full">
          <Image fill alt="banner" src={service.img} />
        </div>
        <div className="relative z-[2] flex flex-col justify-between text-white lg:w-[16.25vw] w-[83.577%] mx-auto h-full">
          <div className="lg:size-sp48 size-12 relative ltr:ml-auto rtl:mr-auto">
            <Image
              fill
              alt="chevron"
              src={"/images/icons/browse_services_card_chevron.svg"}
            />
          </div>
          <div className="flex flex-col lg:gap-y-[0.97222222222vw] gap-3 whitespace-normal">
            <span className="button_gradient w-full h-[1px]"></span>
            <p className="lg:text20 mtext20 font-medium">{service.title}</p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-center gap-[5px] mt-8">
        <span className="mtext18 font-semibold gradient_text">
          {index < 9 && 0}
          <span>{index + 1}</span>
        </span>
        <span className="mtext18">Services</span>
      </div>
    </div>
  );
};

export default Card;
