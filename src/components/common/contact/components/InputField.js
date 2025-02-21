import React from "react";

const InputField = ({ error, type, placeholder, fullWidth }) => {
  return (
    <div
      className={`${fullWidth ? "w-full" : "lg:w-[48.806%] sm:w-[47%] w-full"}`}
    >
      <lable htmlFor={placeholder} className={`inputfields_basiccss`}>
        <input
          autoComplete="off"
          id={placeholder}
          name={placeholder}
          type={type ? type : "text"}
          placeholder={placeholder}
          className="input"
        />
      </lable>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
