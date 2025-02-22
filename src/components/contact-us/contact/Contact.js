import Form from "@/components/common/form/Form";
import React from "react";

const Contact = () => {
  return (
    <section className="lg:pt-[15.0694444444vw] lg:pb-sp150 py-[150px] bg-dark-navy relative">
      <img
        src="/images/about/pioneering/pattern.png"
        alt="pattern"
        className="lg:size-[17.2222222222vw] size-[160px] absolute top-0 lrf2 noflipped"
      />
      <div className="relative z-[2] myContainer flex flex-col items-center lg:gap-sp48 gap-12">
        <div className="lg:w-[58.75vw] mx-auto text-white flex flex-col items-center text-center">
          <h2 className="text32">Get In Touch</h2>
          <p className="lg:text18 mtext18 lg:mt-sp24 mt-1.5">
            Explore Employment Opportunities at Cyberani
          </p>
        </div>
        <Form fromContactPage />
      </div>
    </section>
  );
};

export default Contact;
