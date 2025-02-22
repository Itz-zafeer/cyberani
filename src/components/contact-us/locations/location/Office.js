import Image from "next/image";
import Link from "next/link";
import React from "react";

const Office = ({ name, adress }) => {
  return (
    <div className="border-b-[1px] border-[#0003] lg:pb-sp24 pb-6">
      <h4 className="lg:text32 mtext32 font-medium">{name}</h4>
      <ul className="flex flex-col lg:gap-y-sp16 gap-y-4 lg:mt-sp24 mt-6">
        <li className="opacity_Hover">
          <Link
            href={"/"}
            target="_blank"
            className="flex lg:gap-sp10 gap-2.5 items-start"
          >
            <div className="relative lg:size-sp20 size-5 lg:min-w-sp20 min-w-5">
              <Image fill alt="icon" src={"/images/icons/location.svg"} />
            </div>
            <p className="lg:text16 mtext16">{adress}</p>
          </Link>
        </li>
        <li className="opacity_Hover">
          <Link
            href={"/"}
            target="_blank"
            className="flex lg:gap-sp10 gap-2.5 items-center"
          >
            <div className="relative lg:size-sp20 size-5 lg:min-w-sp20 min-w-5">
              <Image fill alt="icon" src={"/images/icons/map.svg"} />
            </div>
            <p className="lg:text16 mtext16 text-bright-teal underline underline-offset-2">
              Open in Google Map
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Office;
