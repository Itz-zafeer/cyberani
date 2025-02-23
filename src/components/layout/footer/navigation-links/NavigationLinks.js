import React from "react";
import NavigationLink from "./NavigationLink";
import SocialLinks from "./SocialLinks";
const navigationLinks = [
  {
    title: "Managed Security Operations",
    links: [
      {
        label: "Managed Detection and Response (MDR)",
        link: "/",
      },
      {
        label: "MSOC IT & OT",
        link: "/",
      },
      {
        label: "Cybersecurity Monitoring Services",
        link: "/",
      },
      {
        label: "Brand Protection",
        link: "/",
      },
      {
        label: "Threat Intelligence",
        link: "/",
      },
    ],
  },
  {
    title: "GRC Services",
    links: [
      {
        label: "(GRC) Cybersecurity Strategy",
        link: "/",
      },
      {
        label: "(GRC) Cybersecurity Program",
        link: "/",
      },
      {
        label: "(GRC) Cybersecurity Awareness",
        link: "/",
      },
      {
        label: "(GRC) Cybersecurity Risk Assessment",
        link: "/",
      },
      {
        label: "(GRC) Cybersecurity Compliance Assessment",
        link: "/",
      },
      {
        label: "(GRC) Cybersecurity Maturity Assessment",
        link: "/",
      },
    ],
  },
  {
    title: "Offensive Cybersecurity",
    links: [
      {
        label: "Vulnerability Assessment",
        link: "/",
      },
      {
        label: "Penetration Testing",
        link: "/",
      },
      {
        label: "Source Code Review",
        link: "/",
      },
      {
        label: "Red Teaming",
        link: "/",
      },
      {
        label: "Mobile App Assessment",
        link: "/",
      },
      {
        label: "Web App Assessment",
        link: "/",
      },
    ],
  },
  {
    title: "OT Cybersecurity",
    links: [
      {
        label: "OT GRC",
        link: "/",
      },
      {
        label: "OT Maturity Risk Assessment",
        link: "/",
      },
      {
        label: "OT Penetration Testing",
        link: "/",
      },
      {
        label: "OT Architectural",
        link: "/",
      },
      {
        label: "OT Automated Asset Discovery Solutions",
        link: "/",
      },
      {
        label: "OT DFIR",
        link: "/",
      },
      {
        label: "OT Cybersecurity Program",
        link: "/",
      },
      {
        label: "OT Cybersecurity Projects",
        link: "/",
      },
    ],
  },
  {
    title: "DIIR",
    links: [
      {
        label: "Incident Response Retainer",
        link: "/",
      },
      {
        label: "Compromise Assessment",
        link: "/",
      },
      {
        label: "Tabletop Exercise",
        link: "/",
      },
    ],
  },
  {
    title: "VAR",
    links: [
      {
        label:
          "Elite partnerships with leading Cybersecurity Technology vendors",
        link: "/",
      },
    ],
  },
  {
    title: "Other",
    links: [
      {
        label: "Terms of Use",
        link: "/terms-of-use",
      },
      {
        label: "Privacy Policy",
        link: "/privacy-policy",
      },
    ],
  },
];
const NavigationLinks = () => {
  return (
    <div className="flex flex-wrap justify-between lg:justify-normal lg:gap-y-sp32 lg:gap-x-[3.05555555556vw] gap-[30px]">
      {navigationLinks.map((navigationLink, index) => (
        <NavigationLink key={index} navigationLink={navigationLink} />
      ))}
      <SocialLinks />
    </div>
  );
};

export default NavigationLinks;
