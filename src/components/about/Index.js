import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import Pioneering from "./Pioneering";
import DigitalDefense from "./DigitalDefense";
import Stats from "./stats/Stats";
import OurValues from "./our-values/OurValues";
import OurApproach from "./our-approach/OurApproach";
import Contact from "../common/contact/Contact";
const AboutPage = () => {
  const breadCrumbs = [{ text: "About Cyberani" }];
  return (
    <>
      <SubPageHero
        breadCrumbs={breadCrumbs}
        content={{
          heading: "Fostering Secure Future",
          desc: "Explore state-of-the-art SOC services powered by 100% Saudi calibres.",
        }}
        banner={{
          src: "/images/about/hero.jpg",
        }}
      />
      <Pioneering />
      <DigitalDefense />
      <Stats />
      <OurValues />
      <OurApproach />
      <Contact />
    </>
  );
};

export default AboutPage;
