import React from "react";
import Overlays from "./Overlays";
import Image from "next/image";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full">
      <Overlays />
      <div className="atlwh_Full z-[-1]">
        <Image
          fill
          alt="banner"
          src={"/images/service-page/hero.jpg"}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BackGrounds;
