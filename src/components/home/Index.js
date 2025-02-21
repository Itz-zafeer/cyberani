import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Challenges from "./Challenges";
import WhatsNext from "./WhatsNext";
import Contact from "../common/contact/Contact";
import Cta from "./cta/Cta";

const HomePage = ({ arabic }) => {
  return (
    <>
      <Hero arabic={arabic} />
      <About arabic={arabic} />
      <Services arabic={arabic} />
      <Challenges arabic={arabic} />
      <Cta arabic={arabic} />
      <WhatsNext arabic={arabic} />
      <Contact arabic={arabic} />
    </>
  );
};

export default HomePage;
