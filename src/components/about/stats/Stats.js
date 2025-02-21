import Image from "next/image";
import React from "react";
import CardsWrapper from "./CardsWrapper";
import TitleDesignLine from "@/components/common/TitleDesignLine";
const data = {
  statistics: [
    {
      title: "00%",
      description:
        "<p>COf KSA business leaders see modernised cyberinfrastructure as their top investment concern</p>",
    },
    {
      title: "00.0Million",
      description:
        "<p>Total cost of data breaches for organisations in the Middle East</p>",
    },
    {
      title: "0.00Million",
      description:
        "<p>Average operational savings from AI-powered cybersecurity services</p>",
    },
  ],
};

const Stats = () => {
  return (
    <section className={`lg:py-sp160 py-[100px]`}>
      <div className="lg:w-[86.1111111111vw] w-[79.489%] mx-[auto] flex flex-col items-start lg:gap-y-[5.97222222222vw] gap-y-12">
        <div>
          <h2 className="text36 text-gray lg:pb-sp10 pb-4">
            Why Your Business Needs a Cybersecurity{" "}
            <span className="text-bright-teal">Partner</span>.
          </h2>
          <TitleDesignLine gradientLine />
        </div>

        <CardsWrapper data={data?.statistics} />
      </div>
    </section>
  );
};

export default Stats;
