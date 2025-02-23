import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBtn = ({
  link,
  text,
  black,
  arabic,
  tag: Tag = Link,
  isLoading,
  translationText,
  classes,
}) => {
  if (!text) {
    return <></>;
  }
  return (
    <Tag
      {...(Link ? { href: link } : {})}
      className={`${black ? "text-black" : "text-white"} ${
        classes ? classes : "w-full sm:w-[unset]"
      }
      ${isLoading ? "pointer-events-none" : ""} 
      group group-hover:text-white hover:text-white overflow-hidden 
      lg:py-[0.625vw] lg:px-[1.54305555556vw] 
      py-2 px-[22px] sm:py-4 sm:px-12 lg:text22 mtext22 font-medium capitalize 
      flex items-center justify-center lg:gap-x-sp10 gap-x-[5px] 
      relative border_button_gradient_hoverhandler transition-all duration-300`}
    >
      <span className="atlwh_Full border-2 border-transparent border_button_gradient border80 transition-all duration-1000"></span>
      <span className="relative z-[2]">
        {isLoading ? translationText : text}
      </span>
      {!isLoading && (
        <div
          className={`${
            arabic
              ? "lg:group-hover:translate-x-[-0.34722222222vw] group-hover:translate-x-[-1vw]"
              : "lg:group-hover:translate-x-[0.34722222222vw] group-hover:translate-x-[1vw]"
          } relative lg:size-sp24 size-[17px] transition-all duration-300`}
        >
          <svg
            className="flipped size-full relative z-[2]"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.172 13.914C12.172 13.2737 11.9176 12.6596 11.4649 12.2069L7.672 8.414L9.086 7L16 13.914L9.086 20.828L7.672 19.414L11.4649 15.6211C11.9176 15.1684 12.172 14.5543 12.172 13.914Z"
              className={`${
                black ? "fill-black" : "fill-white"
              } group-hover:fill-white hover:fill-white transition-all duration-300`}
            />
          </svg>
        </div>
      )}
    </Tag>
  );
};

export default LinkBtn;
