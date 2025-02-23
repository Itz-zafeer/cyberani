import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center lg:gap-sp10 gap-2.5 lg:w-[56.3888888889vw] w-full lg:h-sp64 h-12 border10 overflow-hidden bg-[#d9d9d94d] lg:px-sp20 px-5">
      <div className="relative lg:size-sp24 size-6 lg:min-w-sp24 min-w-6">
        <Image fill alt="search" src={"/images/icons/search.svg"} />
      </div>
      <input
        autoComplete="off"
        type="text"
        className="w-full outline-none bg-transparent text-black placeholder:text-black lg:text16 mtext18"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
