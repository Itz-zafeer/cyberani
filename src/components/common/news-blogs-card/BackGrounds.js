import Image from "next/image";
import React from "react";

const BackGrounds = () => {
  return (
    <div className="atlwh_Full">
      <span className="atlwh_Full news_blog_card_overlay z-[1]"></span>
      <div className="atlwh_Full">
        <Image
          fill
          alt="banner"
          src={"/images/media-center/news/1.jpg"}
          className="object-cover group-hover:lg:scale-[1.09] transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default BackGrounds;
