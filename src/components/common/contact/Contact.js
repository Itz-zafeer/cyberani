import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackGrounds from "./BackGrounds";
import Form from "../form/Form";

const Contact = () => {
  return (
    <section className="lg:py-sp128 py-[150px] relative z-[2]">
      <BackGrounds />
      <div className="myContainer flex flex-wrap justify-between lg:gap-sp48 gap-12 relative z-[2]">
        <div className="lg:w-[29.0972222222vw] text-white">
          <div className="lg:pb-sp32 lg:mb-sp32 lg:border-b lg:border-[#FFFFFF1A] mb-8 flex flex-col items-center lg:items-start text-center lg:text-start">
            <h4 className="text36">Get In Touch</h4>
            <p className="lg:text18 mtext18 mt-1">
              Step Up in Your Cybersecurity Career: Explore Employment
              Opportunities at Cyberani
            </p>
          </div>
          <ul className="flex flex-wrap lg:gap-[1.04166666667vw] sm:gap-4 gap-3 sm:justify-center justify-between items-center lg:items-start flex-row lg:flex-col">
            <li className="opacity_Hover">
              <Link
                href={"mailto:info@cyberani.sa"}
                className="flex flex-wrap items-center lg:gap-sp10 gap-2.5"
              >
                <div className="relative lg:size-sp20 size-5">
                  <Image fill alt="mail" src={"/images/icons/email.svg"} />
                </div>
                <span className="lg:text16 mtext16 underline underline-offset-2">
                  info@cyberani.sa
                </span>
              </Link>
            </li>
            <li className="opacity_Hover">
              <Link
                href={"tel:+966 135122600"}
                className="flex flex-wrap items-center lg:gap-sp10 gap-2.5"
              >
                <div className="relative lg:size-sp24 size-6">
                  <Image fill alt="phone" src={"/images/icons/phone.svg"} />
                </div>
                <span className="lg:text16 mtext16 underline underline-offset-2">
                  +966 135122600
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
