"use client";
import React from "react";
import DropDownField from "./components/DropDownField";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import LinkBtn from "../link-buttons/LinkBtn";

const Form = ({ fromContactPage }) => {
  return (
    <form
      className={`${
        fromContactPage ? "lg:w-[54.3055555556vw]" : "lg:w-[46.5277777778vw]"
      } common_form w-full flex flex-col lg:gap-y-sp40 gap-10 text-white font-medium`}
    >
      <div className="flex flex-wrap justify-between lg:gap-x-[0.97222222222vw] lg:gap-y-sp20 gap-5">
        <DropDownField />
        <InputField placeholder={"Name"} />
        <InputField placeholder={"Email"} type={"email"} />
        <InputField placeholder={"Message Subject "} fullWidth />
        <TextAreaField placeholder={"Message Subject "} />
      </div>
      <div
        className={`${
          fromContactPage ? "lg:justify-center" : "lg:justify-start"
        } w-full flex sm:justify-center `}
      >
        <LinkBtn
          text={fromContactPage ? "Send" : "Send a Request"}
          link={"/"}
        />
      </div>
    </form>
  );
};

export default Form;
