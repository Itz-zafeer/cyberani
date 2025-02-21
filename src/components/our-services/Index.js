import React from "react";
import SubPageHero from "../common/subpage-hero/SubPageHero";
import SocServices from "./soc-services/SocServices";
import BrowseServices from "./browse-services/BrowseServices";

const OurServicesPage = () => {
  const breadCrumbs = [{ text: "Our Services" }];
  return (
    <>
      <SubPageHero
        breadCrumbs={breadCrumbs}
        content={{
          heading: "Step Up to a New Level of Cyber Resilience",
          desc: "Explore how our next-generation services can protect your assets and business operations.",
        }}
        showCaseVideo={"/videos/hero_showcase_home.mp4"}
        banner={{
          video: true,
          src: "/videos/about_hero.mp4",
        }}
      />
      <SocServices />
      <BrowseServices />
    </>
  );
};

export default OurServicesPage;
