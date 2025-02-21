import Image from "next/image";
import React from "react";

const BackGrounds = ({ approach }) => {
  return (
    <div className="atlwh_Full pointer-events-none">
      <div className="atlwh_Full">
        <span className="atlwh_Full about_overlay1 mix-blend-color"></span>
        <span className="atlwh_Full top-[unset] bottom-0 service_card_verlay lg:h-[13.6111111111vw] h-[71.911%]"></span>
      </div>
      <div className="atlwh_Full z-[-1]">
        <Image
          fill
          alt="banner"
          src={approach.img}
          className="object-cover group-hover:lg:scale-[1.09] transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default BackGrounds;
