import React from "react";

const TextAreaField = ({ error, placeholder }) => {
  return (
    <div className={`w-full`}>
      <lable
        htmlFor={placeholder}
        className={`inputfields_basiccss lg:!h-[6.52777777778vw] !h-[94px] lg:py-sp18 py-[18px] !items-start`}
      >
        <textarea
          autoComplete="off"
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          className="input resize-none"
        ></textarea>
      </lable>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextAreaField;
