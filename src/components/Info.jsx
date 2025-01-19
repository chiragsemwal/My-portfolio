import React from "react";
import { css, express, html, javaScript, mongodb, node, react } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Info = () => {
  useGSAP(() => {
    gsap.from("#info-text-ani", {
      opacity: -2,
      y: 100,
      delay: 2.9,
      stagger: {
        axix: "x",
        amount: 0.5,
      },
    });
    gsap.from("#info-img-ani",{
      opacity: -2,
      y: 100,
      delay: 2.9,
      stagger: {
        axix: "x",
        amount: 0.5,
      },
    })
  }, []);
  return (
    <section className="bg-section-color">
      <div
        id="info-bar"
        className="flex flex-col gap-4 justify-center items-center py-4 px-5 sm:gap-0 sm:flex sm:flex-row sm:justify-between sm:items-center sm:py-7 sm:px-4"
      >
        <div id="info-bar-experience" className="flex gap-7 sm:gap-7  sm:p-4">
          <div className="flex gap-3 sm:gap-4 items-center">
            <span
              id="info-text-ani"
              className="text-white text-5xl sm:text-[90px]"
            >
              {0}
            </span>
            <div className="flex flex-col text-xl sm:text-3xl">
              <span id="info-text-ani" className="text-hero-text uppercase">
                years of
              </span>
              <span id="info-text-ani" className="text-hero-text uppercase">
                Experience
              </span>
            </div>
          </div>
          <div id="ifo-bar-project-completed">
            <div className="flex gap-3 sm:gap-4 items-center">
              <span
                id="info-text-ani"
                className="text-white text-5xl sm:text-[90px]"
              >
                4
              </span>
              <div className="flex flex-col text-xl sm:text-3xl">
                <span id="info-text-ani" className="text-hero-text uppercase">
                  Projects
                </span>
                <span id="info-text-ani" className="text-hero-text uppercase">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="info-bar-icons"
          className="flex w-full h-full justify-end items-center"
        >
          <div
            id="container"
            className="flex gap-5 flex-wrap items-center justify-center sm:flex sm:gap-5 sm:items-center"
          >
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={html}
              alt="htmlLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={css}
              alt="cssLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={javaScript}
              alt="jsLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={react}
              alt="reactLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={node}
              alt="nodeLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={express}
              alt="nodeLogo"
            />
            <img
              id="info-img-ani"
              className="w-[70px] h-[70px]"
              src={mongodb}
              alt="nodeLogo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
