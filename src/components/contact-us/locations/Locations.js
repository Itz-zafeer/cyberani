import React from "react";
import Content from "./Content";
import Image from "next/image";
import Location from "./location/Location";

const Locations = () => {
  return (
    <section>
      <Content />
      <div className="mt-[-82px] lg:mt-0 lg:py-sp120 pb-[150px] myContainer relative flex flex-wrap justify-end gap-12">
        <div className="z-[2] relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:lrf1 lg:w-[46.7361111111vw] lg:h-[57.1527777778vw] w-full h-[428px] lg:border12 border10 overflow-hidden">
          <div className="atlwh_Full z-[2]">
            <img
              src="/images/icons/marker.svg"
              alt="marker"
              className="[filter:drop-shadow(0px_4px_12px_rgba(0,0,0,0.30))] lg:size-[4.72222222222vw] size-[35px] absolute lg:top-[16.3194444444vw] ltr:lg:right-[9.44444444444vw] rtl:lg:left-[9.44444444444vw] top-[122px] ltr:right-[70px] rtl:left-[70px] cursor-pointer"
            />
            <img
              src="/images/icons/marker.svg"
              alt="marker"
              className="[filter:drop-shadow(0px_4px_12px_rgba(0,0,0,0.30))] lg:size-[4.72222222222vw] size-[35px] absolute lg:top-[20.3472222222vw] ltr:lg:right-[15.0694444444vw] rtl:lg:left-[15.0694444444vw] top-[150px] ltr:right-[112px] rtl:left-[112px] cursor-pointer"
            />
          </div>
          <div className="atlwh_Full">
            <Image
              fill
              alt="map"
              src={"/images/contact-us/map.jpg"}
              className="object-cover"
            />
          </div>
        </div>
        <Location />
      </div>
    </section>
  );
};

export default Locations;
