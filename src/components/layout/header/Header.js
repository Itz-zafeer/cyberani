"use client";
import useLangSwitcher from "@/hooks/useLangSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import DropDown from "./dropdown/DropDown";
import useResponsivness from "@/hooks/useResponsivness";
const navigationLinks = [
  {
    lable: "About Cyberani",
    link: "/about",
  },
  {
    lable: "Our Services",
    link: "/our-services",
    dropDown: [
      {
        category: "Managed Security Operations",
        subCategories: [
          {
            title: "Managed Detection and Response (MDR)",
            desc: "Cyberani's MDR services offer 24/7 cyber threat hunting, detection, and rapid response",
            link: {
              label: "Explore MDR",
              link: "/",
            },
          },
          {
            title: "MSOC IT & OT",
            desc: "Level up your IT and OT security with Cyberani",
            link: {
              label: "Explore Managed IT/OT SOC",
              link: "/",
            },
          },
          {
            title: "Cybersecurity Monitoring Services",
            desc: "Around-the-clock monitoring of networks and endpoints",
            link: {
              label: "Explore Cybersecurity Monitoring",
              link: "/",
            },
          },
          {
            title: "Brand Protection",
            desc: "Isolate impersonation assaults from impacting your reputation",
            link: {
              label: "Explore Brand Protection",
              link: "/",
            },
          },
          {
            title: "Threat Intelligence",
            desc: "Stay ahead of cybercriminals with precise threat intelligence",
            link: {
              label: "Explore Threat Intelligence",
              link: "/",
            },
          },
        ],
      },
      {
        category: "GRC Services",
        subCategories: [
          {
            title: "(GRC) Cybersecurity Strategy",
            desc: "Strengthen your cyber resilience with a solid cybersecurity strategy.",
            link: {
              label: "Explore Cybersecurity Strategy",
              link: "/",
            },
          },
          {
            title: "(GRC) Cybersecurity Program",
            desc: "Streamline your cybersecurity functions.",
            link: {
              label: "Explore Cybersecurity Program",
              link: "/",
            },
          },
          {
            title: "(GRC) Cybersecurity Awareness",
            desc: "Equip your employees with cybersecurity awareness.",
            link: {
              label: "Explore Cybersecurity Awareness",
              link: "/",
            },
          },
          {
            title: "(GRC) Cybersecurity Risk Assessment",
            desc: "Identify your cyber risks to enhance your cyber defenses.",
            link: {
              label: "Explore Cybersecurity Risk Assessment",
              link: "/",
            },
          },
          {
            title: "(GRC) Cybersecurity Compliance Assessment",
            desc: "Comply with cybersecurity standards and regulations.",
            link: {
              label: "Explore Compliance Assessment",
              link: "/",
            },
          },
          {
            title: "(GRC) Cybersecurity Maturity Assessment",
            desc: "Take your cybersecurity posture to the next level.",
            link: {
              label: "Explore Cybersecurity Maturity Assessment",
              link: "/",
            },
          },
        ],
      },
      {
        category: "Offensive Cybersecurity",
        subCategories: [
          {
            title: "Vulnerability Assessment",
            desc: "Advanced vulnerability scanning to ensure proactive defense.",
            link: {
              label: "Explore Vulnerability Assessment",
              link: "/",
            },
          },
          {
            title: "Penetration Testing",
            desc: "Fortify your IT environment with real-world attack preparedness.",
            link: {
              label: "Explore Penetration Testing",
              link: "/",
            },
          },
          {
            title: "Source Code Review",
            desc: "Advanced code assessment and analysis.",
            link: {
              label: "Explore Source Code Review",
              link: "/",
            },
          },
          {
            title: "Red Teaming",
            desc: "Simulated cyber attacks to test your cybersecurity posture.",
            link: {
              label: "Explore Red Teaming",
              link: "/",
            },
          },
          {
            title: "Mobile App Assessment",
            desc: "Mitigate mobile app weaknesses with expert review and assessment.",
            link: {
              label: "Explore Mobile App Assessment",
              link: "/",
            },
          },
          {
            title: "Web App Assessment",
            desc: "Mitigate web app vulnerabilities with expert review and assessment.",
            link: {
              label: "Explore Web App Assessment",
              link: "/",
            },
          },
        ],
      },
      {
        category: "OT Cybersecurity ",
        subCategories: [
          {
            title: "OT GRC",
            desc: "Protect critical systems and achieve peak compliance.",
            link: {
              label: "Explore OT GRC",
              link: "/",
            },
          },
          {
            title: "OT Maturity Risk Assessment",
            desc: "Enhance the defense maturity of your industrial systems.",
            link: {
              label: "Explore OT Risk Assessment",
              link: "/",
            },
          },
          {
            title: "OT Penetration Testing",
            desc: "Safeguard your industrial system with real-world attack preparedness.",
            link: {
              label: "Explore OT Penetration Testing",
              link: "/",
            },
          },
          {
            title: "OT Architectural",
            desc: "Protect your critical systems against cyber attacks.",
            link: {
              label: "Explore OT Architectural",
              link: "/",
            },
          },
          {
            title: "OT Automated Assets Discovery Solutions",
            desc: "Gain full control over your OT assets.",
            link: {
              label: "Explore OT Automated Assets Discovery",
              link: "/",
            },
          },
          {
            title: "OT DFIR",
            desc: "Restore industrial operations and find the root cause of intrusions.",
            link: {
              label: "Explore OT DFIR",
              link: "/",
            },
          },
          {
            title: "OT Cybersecurity Program",
            desc: "Streamline your industrial systems operations.",
            link: {
              label: "Explore OT Cybersecurity Program",
              link: "/",
            },
          },
          {
            title: "OT Cybersecurity Projects",
            desc: "Incorporate your industrial systems aspects in OT Projects.",
            link: {
              label: "Explore OT Cybersecurity Projects",
              link: "/",
            },
          },
        ],
      },
      {
        category: "DFIR ",
        subCategories: [
          {
            title: "Incident Response Retainer",
            desc: "Subscription-based support led by experts to ensure cyber resilience.",
            link: {
              label: "Explore Incident Response Retainer",
              link: "/",
            },
          },
          {
            title: "Compromise Assessment",
            desc: "Minimize impact of data breaches.",
            link: {
              label: "Explore Compromise Assessment",
              link: "/",
            },
          },
          {
            title: "Tabletop Exercise",
            desc: "Fine-tune your incident response with expert guidance.",
            link: {
              label: "Explore Tabletop Exercise",
              link: "/",
            },
          },
        ],
      },
      {
        category: "VAR ",
        subCategories: [
          {
            title:
              "Elite partnerships with leading Cybersecurity Technology vendors",
            link: {
              label: "Read More",
              link: "/",
            },
          },
        ],
      },
    ],
  },
  {
    lable: "Careers",
    link: "/careers",
  },
  {
    lable: "Media Center",
    link: "/media-center",
  },
];
export const Header = ({ arabic, blackHeader }) => {
  const { changeLocale } = useLangSwitcher();
  const { isDesktop } = useResponsivness();
  const dropDown = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  function toggleSidebar() {
    if (!isDesktop) {
      const body = document.querySelector("body");
      body.classList.toggle("active");
      setIsSidebarOpen(!isSidebarOpen);
    }
  }
  const toggleDropDownMob = (fromSubcategory) => {
    if (!isDesktop) {
      const dropDownEl = dropDown.current;
      const wrapperEl = dropDownEl.querySelector(".wrapper");
      if (!wrapperEl) return;
      const wrapperElHeight = wrapperEl.offsetHeight;
      const dropDownIndicatorEl = document.querySelector(".dropDownIndicator");

      if (fromSubcategory && dropDownEl.classList.contains("active")) {
        dropDownEl.style.maxHeight = `${wrapperElHeight}px`;
      } else {
        if (dropDownEl.classList.contains("active")) {
          dropDownEl.style.maxHeight = `0`;
          dropDownIndicatorEl.style.transform = "rotate(0deg)";
          dropDownEl.classList.remove("active");
        } else {
          dropDownEl.style.maxHeight = `${wrapperElHeight}px`;
          dropDownIndicatorEl.style.transform = "rotate(-180deg)";
          dropDownEl.classList.add("active");
        }
      }
    }
  };

  return (
    <header
      className={`fixed z-10 top-0 lrf1 w-full ${
        blackHeader ? "text-black" : "text-white"
      }`}
    >
      <div className="flex justify-between lg:px-sp100 lg:py-sp30 py-10 px-5">
        <Link
          href="/"
          className="relative z-[1] lg:w-[13.8888888889vw] lg:h-[4.44444444444vw] w-[30.7692307692vw] h-[9.74358974359vw] sm:w-[23vw] sm:h-[7vw]"
        >
          <Image
            fill
            alt="logo"
            src={"/images/icons/header_logo.svg"}
            className={`${blackHeader ? "opacity-0" : "opacity-[1]"}`}
          />
          <Image
            fill
            alt="logo"
            src={"/images/icons/header_logo_black.svg"}
            className={`${blackHeader ? "opacity-[1]" : "opacity-0"}`}
          />
        </Link>
        <nav
          className={`${
            isDesktop
              ? ""
              : isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          } transition bg-dark-navy lg:bg-transparent pt-[138px] pb-5 lg:py-[unset] px-5 absolute top-0 lrf1 fullVh fullSvh lg:!h-[unset] overflow-scroll lg:overflow-visible lg:static w-full lg:w-[unset] flex flex-wrap lg:items-center items-end justify-between lg:justify-normal lg:gap-sp32 gap-4`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-sp32 gap-[18px] w-full lg:w-[unset] mb-auto lg:mb-[unset]">
            {navigationLinks.map((navigationLink, index) => (
              <li
                key={index}
                className="group/color group/dropDown lg:text18 mtext18 pb-[18px] lg:pb-[unset] border-b border-[#FFFFFF1A] lg:border-0 last:border-0"
              >
                {navigationLink.dropDown ? (
                  <div>
                    <div
                      onClick={() => toggleDropDownMob()}
                      className={`${
                        pathname === navigationLink.link
                          ? "text-persian-green"
                          : ""
                      } relative z-[1] flex justify-between lg:justify-normal items-center lg:gap-sp10 gap-2 group-hover/color:lg:text-persian-green transition-all duration-500 cursor-pointer`}
                    >
                      {navigationLink.lable}
                      <svg
                        className="lg:size-sp24 size-6 group-hover/dropDown:lg:rotate-[-180deg] transition-all duration-500 dropDownIndicator"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M11.836 13.2169C12.4763 13.2169 13.0904 12.9626 13.5431 12.5098L17.336 8.71692L18.75 10.1309L11.836 17.0449L4.922 10.1309L6.336 8.71692L10.1289 12.5098C10.5816 12.9626 11.1957 13.2169 11.836 13.2169Z"
                          className={`${
                            blackHeader
                              ? "lg:fill-black fill-white"
                              : "fill-white"
                          }  group-hover/dropDown:lg:fill-persian-green`}
                        />
                      </svg>
                    </div>
                    <DropDown
                      dropDownData={navigationLink.dropDown}
                      dropDown={dropDown}
                      toggleDropDownMob={toggleDropDownMob}
                    />
                  </div>
                ) : (
                  <Link
                    href={`${navigationLink.link}`}
                    className={`${
                      pathname === navigationLink.link
                        ? "text-persian-green"
                        : ""
                    } group-hover/color:lg:text-persian-green transition-all duration-500 cursor-pointer relative z-[1]`}
                  >
                    {navigationLink.lable}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <span className="w-full h-[1px] bg-[#FFFFFF1A] block lg:hidden mt-auto"></span>
          <Link
            href="/"
            className="relative z-[1] lg:text16 mtext16 button_gradient border110 border border-dark-teal lg:py-[0.20833333333vw] lg:px-[1.19652777778vw] px-[17.245px] py-[2px]"
          >
            Contact Us
          </Link>
          <button
            onClick={() => changeLocale(arabic ? "en" : "ar")}
            className="lg:pb-sp10 pb-2 relative z-[1] lg:text18 mtext18 capitalize hover:text-persian-green transition-all duration-500"
          >
            {arabic ? "english" : "عربي"}
          </button>
        </nav>
        <div className="flex gap-4 items-center lg:hidden">
          <button
            onClick={() => changeLocale(arabic ? "en" : "ar")}
            className="relative z-[1] lg:pb-sp10 pb-2 lg:text18 mtext18 capitalize hover:text-persian-green transition-all duration-500"
          >
            {arabic ? "english" : "عربي"}
          </button>
          <div className="size-6 relative z-[1]">
            <svg
              onClick={toggleSidebar}
              className={`size-full absolute top-0 lrf1 ${
                isSidebarOpen ? "opacity-0" : "opacity-[1]"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4 18.0625H20C20.55 18.0625 21 17.6125 21 17.0625C21 16.5125 20.55 16.0625 20 16.0625H4C3.45 16.0625 3 16.5125 3 17.0625C3 17.6125 3.45 18.0625 4 18.0625ZM4 13.0625H20C20.55 13.0625 21 12.6125 21 12.0625C21 11.5125 20.55 11.0625 20 11.0625H4C3.45 11.0625 3 11.5125 3 12.0625C3 12.6125 3.45 13.0625 4 13.0625ZM3 7.0625C3 7.6125 3.45 8.0625 4 8.0625H20C20.55 8.0625 21 7.6125 21 7.0625C21 6.5125 20.55 6.0625 20 6.0625H4C3.45 6.0625 3 6.5125 3 7.0625Z"
                className={`${blackHeader ? "fill-black" : "fill-white"}`}
              />
            </svg>
            <svg
              onClick={toggleSidebar}
              className={`size-full absolute top-0 lrf1 ${
                isSidebarOpen ? "opacity-[1]" : "opacity-0"
              } `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5.00146 19.0571L19 5.05859M5.00146 5.05859L19 19.0571"
                stroke="white"
                strokeWidth="1.74982"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
