import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import Benefits from "./benefits/Benefits";
import ApplyNow from "./ApplyNow";
import Contact from "../common/contact/Contact";

const CareersPage = () => {
  const breadCrumbs = [{ text: "Careers" }];

  return (
    <>
      <SubPageHero
        breadCrumbs={breadCrumbs}
        content={{
          heading: "Join Cyberani",
          desc: "Welcoming workplace that encourages teamwork and advance your career improvement.",
        }}
        banner={{
          src: "/images/careers/hero.jpeg",
        }}
      />
      <Benefits />
      <ApplyNow />
      <Contact />
    </>
  );
};

export default CareersPage;
