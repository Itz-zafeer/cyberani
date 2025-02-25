import Image from "next/image";
import { useState } from "react";

const SortDropDown = ({ fromBlogs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Latest");

  const options = ["Latest", "A - Z"];

  return (
    <div className="relative lg:w-[19.3055555556vw] w-full">
      <div>
        <lable
          htmlFor={"dropDown"}
          className={`${
            fromBlogs ? "bg-[#0000000f] text-gray" : "bg-[#1A3D5E]"
          } lg:h-sp64 h-12 border8 flex justify-between items-center lg:px-sp24 px-6 cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            id="dropDown"
            name="dropDown"
            type="text"
            onChange={() => setSelected(selected)}
            value={selected}
            className="outline-none bg-transparent lg:text18 mtext18 w-full no-caret cursor-pointer"
          />

          <div
            className={`lg:size-sp24 size-6 lg:min-w-sp24 min-w-6 relative transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              className="size-full"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M11.836 12.7501C12.4763 12.7501 13.0904 12.4958 13.5431 12.043L17.336 8.25013L18.75 9.66412L11.836 16.5781L4.922 9.66412L6.336 8.25012L10.1289 12.043C10.5816 12.4958 11.1957 12.7501 11.836 12.7501Z"
                className="fill-current"
              />
            </svg>
          </div>
        </lable>
      </div>
      <div
        className={`${
          isOpen
            ? "lg:max-h-[19.3055555556vw] sm:max-h-[224px] max-h-[212px] overflow-y-auto opacity-100"
            : "max-h-0 lg:opacity-0"
        } ${
          fromBlogs ? "bg-[#F0F0F0]" : "bg-[#1A3D5E]"
        } w-full absolute lg:top-[calc(4.51388888889vw+0.5vw)] top-[calc(54px+10px)] z-[2] border8 overflow-hidden transition-all duration-700 `}
      >
        <ul className={`border8 overflow-hidden h-full flex flex-col`}>
          {options.map((option) => (
            <li
              key={option}
              className="lg:px-sp24 px-4 lg:py-[0.90277777777vw] py-4 lg:text18 mtext18 cursor-pointer hover:opacity-50"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortDropDown;
