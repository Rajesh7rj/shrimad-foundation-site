"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StackingCards = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contents = document.querySelectorAll(".content");

    contents.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 32px",
        end: "top bottom",
        pin: true,
        pinSpacing: false,
        endTrigger: ".final",
        id: `${i + 1}`,
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div>

      <section className="w-full min-h-screen">
        <div className="content w-full mx-auto h-screen bg-gray-800 mb-8 flex justify-center items-center text-white text-6xl">
          <img
            className="hidden md:block w-full h-full"
            src="/banner/Banner_larger_Device.png"
            alt="banner"
          />
          <img
            className="md:hidden w-full h-full"
            src="/banner/Banner_small_device.png"
            alt="mobile banner"
          />
        </div>

        <div className="content w-full mx-auto h-screen bg-green-500 mb-8 flex justify-center items-center text-white text-6xl">
          <img
            className="hidden md:block w-full h-full"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/homepage-2.jpg?template=bleed-banner"
            alt="banner"
          />
          <img
            className="md:hidden w-full h-full"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/12/homepage-banner-m-revised.jpg?template=bleed-banner"
            alt="mobile banner"
          />
        </div>
      </section>
      <section className="w-full bg-transparent final"></section>
    </div>
  );
};

export default StackingCards;
