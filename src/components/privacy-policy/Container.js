import React from "react";
import DynamicBreadCrumbs from "@/components/common/DynamicBreadCrumbs";
const content = `
  <p>
    Lorem ipsum dolor sit amet consectetur. Sed nibh maecenas purus sit pretium facilisis amet sed.
    Suspendisse ultricies eget commodo porttitor et feugiat nunc in duis. Eget tortor enim id eu. Nullam viverra
    cursus vel lacus. Condimentum sit amet felis duis turpis mauris. Iaculis nunc tellus tellus ut at quis at.
    Ornare tellus elit ut scelerisque egestas in. Amet vitae viverra eu tellus tortor lectus ipsum nisl.
    Scelerisque accumsan pretium nec sit at purus.
  </p>
  <h2>Lorem ipsum dolor sit amet,</h2>
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
  <h2>Lorem ipsum dolor sit amet,</h2>
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

const breadCrumbs = [{ text: "Privacy Policy " }];
const Container = () => {
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
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="lg:mt-sp56 mt-20 lg:pb-sp100 pb-[110px] terms_privacy__content"
        ></div>
      </div>
    </section>
  );
};

export default Container;
