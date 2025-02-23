import TitleDesignLine from "@/components/common/TitleDesignLine";
import React from "react";

const Case = ({ title, desc }) => {
  return (
    <div className="flex flex-col lg:w-[34.0277777778vw]">
      <h5 className="lg:text24 mtext24 font-medium gradient_text lg:pb-[0.83333333333vw] pb-3">
        {title}
      </h5>
      <TitleDesignLine gradientLine />
      <p className="lg:text18 mtext18 lg:mt-sp24 mt-6">{desc}</p>
    </div>
  );
};

export default Case;
