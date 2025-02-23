import React from "react";
import TitleDesignLine from "../../TitleDesignLine";

const Title = ({ title1, title2 }) => {
  return (
    <div className="myContainer flex flex-col items-center lg:items-start">
      <div className="flex flex-col items-start">
        <h2 className={`lg:text32 mtext32 font-medium lg:pb-sp10 pb-5`}>
          {title1} {""}
          {""} <span className={`text-bright-teal`}>{title2}</span>
        </h2>

        <TitleDesignLine gradientLine />
      </div>
    </div>
  );
};

export default Title;
