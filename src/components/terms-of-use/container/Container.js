"use client";
import React, { useState } from "react";
import DynamicBreadCrumbs from "@/components/common/DynamicBreadCrumbs";
const content = `
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
`;
const breadCrumbs = [{ text: "Terms of Use " }];
const Container = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <section className="lg:pt-sp190 pt-40">
      <div className="myContainer">
        <div className="flex flex-col lg:items-start items-center lg:text-start text-center lg:gap-sp24 gap-4">
          <DynamicBreadCrumbs breadCrumbs={breadCrumbs} blackVarient />
          <div className="flex flex-col lg:gap-0 gap-7 lg:w-[81.6666666667vw] w-full">
            <h2 className="text40">Lorem ipsum dolor sit amet,</h2>
            <p className="text24">
              Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus
              sit pretium facilisis amet sed
            </p>
          </div>
        </div>
        <div className="lg:mt-sp72 mt-[66px] lg:pb-sp140 pb-[72px] flex items-start flex-wrap justify-between lg:gap-sp72 gap-6">
          <ul className="text24 font-medium lg:w-[18.125vw] w-full lg:px-0 px-[18px] lg:gap-0 gap-[22px] border10 flex lg:flex-col whitespace-nowrap lg:whitespace-normal overflow-auto lg:overflow-visible hideScroll bg-[#d9d9d933]">
            {[1, 2, 3, 4].map((item, index) => (
              <li
                onClick={() => setActiveTopic(index)}
                key={index}
                className={`relative flex cursor-pointer lg:px-sp18`}
              >
                {activeTopic === index && (
                  <span className="lg:w-[0.34722222222vw] lg:h-[2.91666666667vw] bg-bright-teal hidden lg:block absolute lrf1 top-1/2 -translate-y-1/2"></span>
                )}
                <span
                  className={`${
                    activeTopic === index ? "gradient_text" : ""
                  } relative z-[2] lg:py-[1.52777777778vw] py-6 lg:px-sp16 w-full lg:border-b lg:border-[#000] lg:border-opacity-[0.1]`}
                >
                  Topic 0{item}
                </span>
              </li>
            ))}
          </ul>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="lg:w-[62.4305555556vw] terms_privacy__content"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Container;
