import React from "react";
import Card from "./Card";

export function processStatisticsData(data) {
  return data.map((item) => {
    let { title } = item;
    let prefix = null;
    let suffix = null;
    let decimal = null;

    // Detect and extract prefix (e.g., starting with a non-numeric character)
    const prefixMatch = title.match(/^[^\d]+/);
    if (prefixMatch) {
      prefix = prefixMatch[0].trim();
      title = title.replace(prefix, "").trim();
    }

    // Detect and extract suffix (e.g., ending with a non-numeric character)
    const suffixMatch = title.match(/[^\d]+$/);
    if (suffixMatch) {
      suffix = suffixMatch[0].trim();
      title = title.replace(suffix, "").trim();
    }

    // Remove commas for number parsing
    title = title.replace(/,/g, "");

    // Check for decimal places
    if (title.includes(".")) {
      decimal = title.split(".")[1]?.length || 0;
    }

    return {
      ...item,
      title: parseFloat(title), // Convert to a number
      prefix, // Detected prefix or null
      suffix, // Detected suffix or null
      decimal, // Number of decimal places or null
    };
  });
}

const CardsWrapper = ({ data }) => {
  const cardsData = processStatisticsData(data);
  return (
    <div className="flex justify-between flex-wrap lg:gap-sp48 gap-[72px]">
      {cardsData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default CardsWrapper;
