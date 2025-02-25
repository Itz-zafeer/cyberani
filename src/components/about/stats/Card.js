"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Card = ({ data }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in milliseconds
      const startValue = 0;
      const endValue = data?.title || 0;
      const decimalPlaces = data?.decimal || 0;

      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = (
          startValue +
          (endValue - startValue) * percentage
        ).toFixed(decimalPlaces);
        setCurrentValue(value);

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, data]);

  return (
    <div ref={cardRef} className="lg:w-[25.5555555556vw]">
      <div className="flex flex-col lg:items-start items-center lg:text-start text-center lg:gap-sp20 gap-5">
        <div className="flex flex-wrap items-center">
          <span className="lg:text48 lg:leading-[3.33333333333vw] text-[48px] !font-bold flex gap-0.5 items-center">
            <span className="gradient_text">{currentValue}</span>
            <span className="gradient_text lg:text32 mtext32 font-medium">
              {data.suffix && data.suffix}
            </span>
          </span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="lg:text22 mtext18 text-black"
        ></div>
      </div>
    </div>
  );
};

export default Card;
