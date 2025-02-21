import Image from "next/image";
import React from "react";

const Pioneering = () => {
  return (
    <section className="relative bg-dull-white lg:pt-sp180 pt-[120px]">
      <img
        src="/images/about/pioneering/pattern.png"
        alt="pattern"
        className="lg:size-[18.3333333333vw] size-[140px] absolute top-0 lrf1 flipped"
      />
      <div className="myContainer relative z-[2] lg:mb-[-2.5vw] -mb-6 flex items-start justify-between flex-wrap lg:gap-sp60 gap-12">
        <div className="lg:w-[48.8194444444vw] text-black">
          <h2 className="text32">
            Pioneering Cyber Resilience with Two{" "}
            <span className="text-bright-teal">SOC Sites</span>
          </h2>
          <div className="lg:text18 lg:leading-[1.73611111111vw] mtext18 flex flex-col lg:gap-y-sp18 gap-y-5 lg:mt-sp32 mt-10">
            <p>
              At Cyberani, we are dedicated to safeguarding the digital
              frontiers of industry leaders and government agencies. Founded
              with the vision to set the standard for cyber resilience, our
              mission is crystal clear: to ensure steady protection for our
              client assets and operations with next-generation preventive and
              responsive cybersecurity services. We are committed to delivering
              next-generation cybersecurity services that ensure steady
              protection and regulatory compliance for industry leaders and
              government authorities alike.
            </p>
            <p>
              Cyberani offers a comprehensive suite of proactive and reactive
              services to prevent, detect, and mitigate cybersecurity threats.
              Leveraging AI-powered tools and the deep expertise of our
              cybersecurity professionals, we provide both proactive and
              reactive services tailored to the unique needs of our clients,
              ensuring a resilient IT ecosystem and robust cyber readiness. We
              strive to ensure a secure digital future where our clients can
              operate with confidence, knowing their assets and operations are
              shielded from cyberattacks.
            </p>
          </div>
        </div>
        <div className="relative lg:w-[32.4305555556vw] lg:h-[39.4444444444vw] w-full h-[425px] lg:border20 border15 overflow-hidden">
          <Image
            fill
            alt="banner"
            src={"/images/about/pioneering/banner.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Pioneering;
