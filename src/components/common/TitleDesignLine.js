import React from "react";

const TitleDesignLine = ({ gradientLine }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {gradientLine ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          height={2}
          viewBox="0 0 624 2"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 1H624" stroke="url(#paint0_linear_2880_6676)" />
          <defs>
            <linearGradient
              id="paint0_linear_2880_6676"
              x1={624}
              y1="1.5"
              x2={0}
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A4E4" />
              <stop offset="0.79" stopColor="#00B6B5" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          height={2}
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 1H100" stroke="white" strokeWidth="2" />
        </svg>
      )}
      <span
        className={`${
          gradientLine ? "border-dark-teal" : " border-white"
        } lg:size-sp10 lg:min-w-sp10 size-2.5 min-w-2.5 block border rounded-full`}
      ></span>
    </div>
  );
};

export default TitleDesignLine;
