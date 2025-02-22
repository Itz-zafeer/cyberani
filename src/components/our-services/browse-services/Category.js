import useResponsivness from "@/hooks/useResponsivness";
import React from "react";

const Category = ({ category, setActive, active, index }) => {
  const { isDesktop } = useResponsivness();

  return (
    <button
      onClick={() => setActive(index)}
      className={`${
        active === index
          ? isDesktop
            ? "button_gradient text-white"
            : "gradient_text"
          : "text-black"
      } lg:text18 mtext18 lg:border40 lg:border lg:border-gray lg:py-[0.625vw] lg:px-[1.41173611111vw]`}
    >
      {category}
    </button>
  );
};

export default Category;
