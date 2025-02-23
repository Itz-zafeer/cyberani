import React from "react";

const Function = ({ funtion, index }) => {
  return (
    <div className="lg:w-[47.733%] w-full flex flex-col lg:gap-y-sp16 gap-y-4">
      <span className="lg:text48 text-[48px] gradient_text !font-bold">
        {" "}
        {index < 9 && 0}
        <span>{index + 1}</span>
      </span>
      <h4 className="lg:text24 mtext24 font-medium">{funtion.heading}</h4>
      <p className="lg:text18 lg:leading-[1.45833333333vw] mtext18">
        {funtion.desc}
      </p>
    </div>
  );
};

export default Function;
