import ChevronLink from "@/components/common/link-buttons/ChevronLink";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Categories from "./categories/Categories";
import SubCategories from "./subcategories/SubCategories";

const DropDown = ({ dropDownData, dropDown, toggleDropDownMob }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = dropDownData.map((item) => item.category);
  const [offsets, setOffsets] = useState([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Measure heights dynamically
    if (itemsRef.current.length > 0) {
      const newOffsets = itemsRef.current.map((el, index) =>
        index === 0
          ? 0
          : itemsRef.current
              .slice(0, index)
              .reduce((acc, item) => acc + item.offsetHeight, 0)
      );
      setOffsets(newOffsets);
    }
  }, []);

  return (
    <div
      ref={dropDown}
      className="group-hover/dropDown:lg:pointer-events-auto group-hover/dropDown:lg:opacity-[1] lg:opacity-[0] opacity-100 lg:pointer-events-none lg:max-h-[unset] max-h-0 overflow-hidden lg:overflow-visible transition-all duration-500 text-white lg:absolute top-0 lrf1 w-full bg-dark-navy lg:border-b-2 lg:border-light-teal"
    >
      <img
        src="./images/header/dropdown_active.png"
        alt="dropdown_active"
        style={{
          transform: `translateY(${offsets[activeCategory] || 0}px)`,
        }}
        className="absolute lg:top-sp72 lrf1 lg:w-[5.625vw] transition-all duration-500 hidden lg:block"
      />
      <div className="lg:myContainer lg:pt-sp140 lg:pb-sp40 pt-2.5 wrapper">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-sp60 gap-[30px]">
          <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            itemsRef={itemsRef}
            activeCategory={activeCategory}
            toggleDropDownMob={toggleDropDownMob}
          />
          <SubCategories
            dropDownData={dropDownData}
            activeCategory={activeCategory}
          />
        </div>
        <div className="flex lg:justify-center lg:mt-sp48 lg:pt-sp20 mt-[30px] lg:border-t lg:border-[#FFFFFF1A]">
          <ChevronLink
            text={"View All Services"}
            link={"/"}
            textClasses={"lg:text14 font-light"}
            svgSizes={"lg:size-sp24 size-6"}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
