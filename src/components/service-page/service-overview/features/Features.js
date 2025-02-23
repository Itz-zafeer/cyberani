import Image from "next/image";
import React from "react";
import Feature from "./Feature";
import BackGrounds from "./backgrounds/BackGrounds";
import Content from "./Content";
const features = [
  {
    heading: "Advanced Endpoint Detection and Response (EDR)",
    desc: "Our EDR tools automate the detection and response process at the endpoint level, providing immediate containment of threats and safeguarding your network's integrity.",
  },
  {
    heading: "Threat Intelligence Feeds",
    desc: "We integrate high-quality cyber threat intelligence into our operations, enabling real-time security monitoring, identifying threats, and avoiding potential MDR action gaps against attacks.",
  },
  {
    heading: "Integrated Security Stack",
    desc: "Our security stack seamlessly includes firewalls, SIEM, vulnerability scanners, and endpoint protection, unifying your cybersecurity systems, all working together for enhanced security.",
  },
  {
    heading: "Advanced Digital Forensics",
    desc: "In the event of a security breach, our forensic analysis capabilities allow deep-dive investigations into incidents, uncovering root causes and facilitating effective countermeasures.",
  },
  {
    heading: "Customized Security Protocols",
    desc: "Our tailored protection suite applies to your unique security needs, ensuring proactive security enforcement that mitigates risk against evolving cyber threats.",
  },
];

const Features = () => {
  return (
    <div className="relative border border-[#fff3]">
      <BackGrounds />
      <div className="flex flex-col lg:flex-row justify-between lg:gap-sp56 gap-16 lg:py-sp140 pt-[140px] pb-[100px] ltr:lg:pl-sp100 rtl:lg:pr-sp100 lg:ltr:pr-0 lg:rtl:pl-0 px-[30px] text-white relative z-[2]">
        {/* <Content /> */}
        <div className="lg:w-[unset] w-full">
          <h2 className="text32 text-white lg:text-start text-center">
            Managed Detection and Response (MDR) Service{" "}
            <span className="text-bright-teal">Features</span>{" "}
          </h2>
        </div>
        <div className="flex items-start lg:gap-x-sp20">
          <div className="flex flex-col lg:gap-y-sp64 gap-y-16 lg:min-w-[40.6944444444vw] lg:w-[40.6944444444vw] w-full">
            {features.map((feature, index) => (
              <Feature key={index} feature={feature} />
            ))}
          </div>
          <div className="lg:min-w-sp80 lg:w-sp80 lg:h-[11.25vw] sticky lg:top-sp180 lg:mt-sp32 hidden lg:block">
            <Image
              fill
              src="/images/service-page/indicator.png"
              alt="indicator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
