import React from "react";
import Office from "./Office";
import Link from "next/link";
import Image from "next/image";

const Location = () => {
  return (
    <div className="lg:w-[34.0277777778vw] flex flex-col lg:gap-y-sp24 gap-y-6 text-black">
      <Office
        name={"Riyadh Office"}
        adress={
          "Building Number 7633-2505 Riyadh 12329, King Khalid Road - Saudi Arabia"
        }
      />
      <Office
        name={"Dhahran Office"}
        adress={
          "Al Abdulkareem Tower 8514 King Fahd Bin Abdulaziz Road - Al Qashla District Dhahran 34232-4233 Saudi Arabia"
        }
      />
      <div>
        <h4 className="lg:text32 mtext32">Reach Us </h4>
        <ul className="flex flex-wrap justify-between lg:gap-y-sp16 gap-y-4 lg:mt-sp24 mt-6">
          <li className="opacity_Hover">
            <Link
              href={"mailto:info@cyberani.sa"}
              target="_blank"
              className="flex lg:gap-sp10 gap-2.5 items-center"
            >
              <div className="relative lg:size-sp20 size-5 lg:min-w-sp20 min-w-5">
                <Image fill alt="icon" src={"/images/icons/email.svg"} />
              </div>
              <p className="lg:text16 mtext16 underline underline-offset-2">
                info@cyberani.sa
              </p>
            </Link>
          </li>
          <li className="opacity_Hover">
            <Link
              href={"tel:+966 135122600"}
              target="_blank"
              className="flex lg:gap-sp10 gap-2.5 items-center"
            >
              <div className="relative lg:size-sp20 size-5 lg:min-w-sp20 min-w-5">
                <Image fill alt="icon" src={"/images/icons/phone.svg"} />
              </div>
              <p className="lg:text16 mtext16 underline underline-offset-2">
                +966 135122600
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Location;
