import React from "react";

const Search = ({ fromBlogs }) => {
  return (
    <lable
      htmlFor={"search"}
      className={`${
        fromBlogs ? "bg-[#0000000f] text-gray" : "bg-[#1A3D5E]"
      } lg:w-[65.2083333333vw] w-full lg:h-sp64 h-12 border8 overflow-hidden lg:px-sp32 px-8`}
    >
      <input
        name="search"
        id="search"
        autoComplete="off"
        type="text"
        className="size-full outline-none bg-transparent lg:text18 mtext18 placeholder:text-inherit"
        placeholder="Search"
      />
    </lable>
  );
};

export default Search;
