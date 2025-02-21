import Image from "next/image";
import { useState } from "react";

const DropDownField = ({ error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select inquiry type");

  const options = [
    "inquiry type 1",
    "inquiry type 2",
    "inquiry type 3",
    "inquiry type 4",
    "inquiry type 5",
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <lable
            htmlFor={"dropDown"}
            className={`lg:h-[3.75vw] h-[54px] bg-[#1A3D5E] border8 w-full flex justify-between items-center lg:px-sp32 px-8 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <input
              id="dropDown"
              name="dropDown"
              type="text"
              onChange={() => setSelected(selected)}
              value={selected}
              className="outline-none bg-transparent lg:text16 mtext16 w-full no-caret cursor-pointer"
            />

            <div
              className={`lg:size-sp20 size-5 lg:min-w-sp20 min-w-5 relative transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <Image
                fill
                alt="chevron"
                src={"/images/icons/bright_teal_chevron.svg"}
              />
            </div>
          </lable>
          {error && <span className="error">{error}</span>}
        </div>
        <div
          className={`${
            isOpen
              ? "lg:max-h-[16vw] sm:max-h-[224px] max-h-[212px] overflow-y-auto opacity-100"
              : "max-h-0 lg:opacity-0"
          } w-full absolute lg:top-[calc(3.75vw+0.5vw)] top-[calc(54px+10px)] z-[2] bg-white border8 overflow-hidden transition-all duration-700 `}
        >
          <ul
            className={`border border-white text-black border8 overflow-hidden h-full`}
          >
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 bg-white lg:text16 mtext16 cursor-pointer transition hover:bg-dark-navy hover:text-white"
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
    </div>
  );
};

export default DropDownField;
