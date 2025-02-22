import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import Locations from "./locations/Locations";
import Contact from "./contact/Contact";

const ContactUsPage = () => {
  const breadCrumbs = [{ text: "Contact Us" }];

  return (
    <>
      <SubPageHero
        breadCrumbs={breadCrumbs}
        content={{
          heading: "Fortify Your Digital Infrastructure",
          desc: "Elevate your cybersecurity posture with our next-generation services.",
        }}
        banner={{
          src: "/images/contact-us/hero.jpg",
        }}
      />
      <Locations />
      <Contact />
    </>
  );
};

export default ContactUsPage;
