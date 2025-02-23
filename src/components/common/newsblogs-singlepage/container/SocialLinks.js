import Image from "next/image";
import Link from "next/link";
import React from "react";
const socialLinks = [
  {
    img: "/images/icons/single-page/twitter-x.svg",
    link: "https://twitter.com/",
  },
  {
    img: "/images/icons/single-page/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    img: "/images/icons/single-page/linkedin.svg",
    link: "https://www.linkedin.com/",
  },
  {
    img: "/images/icons/single-page/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    img: "/images/icons/single-page/youtube.svg",
    link: "https://www.youtube.com/",
  },
];
const SocialLinks = () => {
  return (
    <div className="lg:w-[7.15277777778vw] w-full flex flex-col items-center lg:gap-[0.83333333333vw] gap-3">
      <span className="lg:text22 mtext22">Share This</span>
      <ul className="flex flex-wrap lg:flex-col items-center justify-center lg:gap-[0.83333333333vw] gap-3 w-full">
        {socialLinks.map((social, index) => (
          <li key={index} className="opacity_Hover">
            <Link
              href={social.link}
              target="_blank"
              className="bg-bright-teal lg:size-sp40 size-10 rounded-full flex justify-center items-center"
            >
              <div className="relative lg:size-sp16 size-4">
                <Image fill alt="social-icon" src={social.img} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
