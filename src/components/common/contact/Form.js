import React from "react";
import DropDownField from "./components/DropDownField";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import LinkBtn from "../link-buttons/LinkBtn";

const Form = () => {
  return (
    <form className="common_form lg:w-[46.5277777778vw] w-full flex flex-col lg:gap-y-sp40 gap-10 text-white font-medium">
      <div className="flex flex-wrap justify-between lg:gap-x-[0.97222222222vw] lg:gap-y-sp20 gap-5">
        <DropDownField />
        <InputField placeholder={"Name"} />
        <InputField placeholder={"Email"} type={"email"} />
        <InputField placeholder={"Message Subject "} fullWidth />
        <TextAreaField placeholder={"Message Subject "} />
      </div>
      <div className="w-full flex sm:justify-center lg:justify-start">
        <LinkBtn text={"Send a Request"} link={"/"} />
      </div>
    </form>
  );
};

export default Form;
