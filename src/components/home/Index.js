import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Challenges from "./Challenges";
import Cta from "./Cta";
import WhatsNext from "./WhatsNext";
import FormSection from "../common/form-section/FormSection";

const HomePage = ({ arabic }) => {
  return (
    <>
      <Hero arabic={arabic} />
      <About arabic={arabic} />
      <Services arabic={arabic} />
      <Challenges arabic={arabic} />
      <Cta arabic={arabic} />
      <WhatsNext arabic={arabic} />
      <FormSection arabic={arabic} />
    </>
  );
};

export default HomePage;
