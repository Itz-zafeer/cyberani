import React from "react";
import Hero from "./hero/Hero";
import ServiceOverview from "./service-overview/ServiceOverview";
import Contact from "../common/contact/Contact";

const ServicePage = () => {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <Contact />
    </>
  );
};

export default ServicePage;
