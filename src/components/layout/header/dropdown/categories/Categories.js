import React from "react";

const Categories = ({
  categories,
  setActiveCategory,
  itemsRef,
  activeCategory,
  toggleDropDownMob,
}) => {
  return (
    <div className="lg:text18 mtext18 flex gap-6 lg:gap-0 flex-row whitespace-nowrap hideScroll lg:whitespace-normal overflow-auto lg:overflow-visible lg:flex-col items-start lg:min-w-[25.5555555556vw] lg:w-[25.5555555556vw] lg:ltr:border-r lg:rtl:border-l lg:border-[#FFFFFF1A]">
      {categories.map((category, index) => (
        <button
          ref={(el) => (itemsRef.current[index] = el)}
          onClick={() => {
            setActiveCategory(index);
            toggleDropDownMob(true);
          }}
          key={index}
          style={{
            backgroundImage:
              activeCategory === index
                ? "linear-gradient(270deg, #00A4E4 0%, #00B6B5 79%)"
                : "",
          }}
          className={`${
            activeCategory === index ? "text-transparent" : "text-white"
          } bg-clip-text lg:pb-sp24`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
