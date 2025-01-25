import React from "react";
import {
  adidas,
  aldente,
  css,
  express,
  html,
  iphone,
  javaScript,
  lineEffect,
  mongodb,
  node,
  react,
  todo,
  vscode,
  weather,
} from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillGithub } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const About = () => {

  useGSAP(()=>{
 
    gsap.from("#about-me",{
      x:700,
      opacity:0,
      scale:0,
      delay:2,
      duration:1,
      scrollTrigger:true,
    })
    gsap.from("#skills",{
      x:-700,
      opacity:0,
      scale:0,
      delay:2,
      duration:1,
      scrollTrigger:{
        trigger:"#skills",
        markers:true,
        scroller:"body",
        start:"top top",
      }
    })


  },[])

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="bg-secondary-section-color ">
      <div id="about" className="flex px-4 pt-4 sm:justify-start sm:px-7 sm:mb-5 sm:py-10">
        <div id="about-me" className="flex flex-col gap-10">
          <h2 className="text-section-color font-bold text-5xl">About me</h2>
          <p className="text-font-color font-light text-2xl">
            Hi, I’m Chirag Sharma, a dedicated full-stack developer <br />
            with a passion for building dynamic and user-friendly <br /> web
            applications. I use to create efficient and visually <br />
            appealing solutions. I thrive on solving complex
            <br /> problems and enjoy crafting intuitive user experiences.
          </p>
        </div>
      </div>

      <div
        id="svg-spliter"
        className=" sm:w-[79%] hidden sm:block sm:overflow-hidden sm:p-9 sm:absolute sm:right-[50px] sm:top-[500px] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1353 1209"
          transform="rotate(15)"
        >
          <path
            stroke="#291C3A"
            d="m.476 1208.1 184.997-181.3 157.208-66.116 58.067-131.016 247.116-101.733 79.238-205.198 252.931-88.684 201.377-128.574 69.32-209.494L1352.16.43"
          />
        </svg>
      </div>


      <div id="skills" className="flex items-center md:px-4 pt-4 mt-8 sm:justify-end sm:px-7 sm:py-10">
        <div className=" sm:px-0 sm:items-end  flex flex-col gap-4" id="skils-icons">
          <h2 className="text-section-color sm:mb-0 mb-7 sm:my-0 font-bold sm:mr-[257px] sm:pl-0 pl-4 text-5xl">My Skills</h2>
          <p className="text-font-color whitespace-pre-wrap tracking-tight sm:tracking-normal sm:whitespace-normal font-light sm:pl-0 pl-4 md:text-2xl text-[25px]">
            Technologies I've been working
             with recently
          </p>
          <div id="about-me-icons" className="flex  justify-between flex-col gap-4">
            <div id="container1" className="flex w-screen justify-end pr-6 sm:mx-0 sm:px-0 gap-2 sm:gap-4">
              <div className="bg-font-color  w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img className=" w-[70px] h-[70px]" src={html} alt="html" />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img className="w-[70px] h-[70px]" src={css} alt="css" />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img
                  className="w-[70px] h-[70px]"
                  src={javaScript}
                  alt="javascript"
                />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img className="w-[70px] h-[70px]" src={react} alt="react" />
              </div>
            </div>
            <div id="container2" className=" w-screen justify-end pr-6 sm:ml-7 flex gap-2 sm:gap-4">
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img className="w-[70px] h-[70px]" src={node} alt="node" />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img
                  className="w-[70px] h-[70px]"
                  src={express}
                  alt="express"
                />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img
                  className="w-[70px] h-[70px]"
                  src={mongodb}
                  alt="mongodb"
                />
              </div>
              <div className="bg-font-color w-[90px] h-[90px] flex justify-center items-center rounded-lg">
                <img className="w-[70px] h-[70px]" src={vscode} alt="vscode" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="svg-spliter"
        className=" w-[79%] sm:block hidden z-0 overflow-hidden p-9 absolute right-[50px] top-[900px] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1353 1209"
          transform="rotate(90)"
        >
          <path
            stroke="#291C3A"
            d="m.476 1208.1 184.997-181.3 157.208-66.116 58.067-131.016 247.116-101.733 79.238-205.198 252.931-88.684 201.377-128.574 69.32-209.494L1352.16.43"
          />
        </svg>
      </div>

      <div id="projects" className="px-7 relative py-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-section-color font-bold text-5xl">My Projects</h2>
          <p className="text-font-color font-light text-2xl">
            Some Things I've built so far
          </p>

          <div id="container" className=" relative mb-28">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              responsive={responsive}
            >
              <div className="bg-hero-text py-8 p-5 sm:w-[400px] h-[400px] flex flex-col justify-between gap-3 rounded-lg ">
                <img src={iphone} alt="iphone page" className="rounded-md" />
                <p className="text-font-color text-xl font-semibold">
                  iPhone Landing Page
                </p>
                <p className="text-font-color font-thin">
                  Build a landing page of iPhone
                </p>
                <div className=" flex justify-center ">
                  <button className="bg-font-color rounded-md text-white flex items-center gap-6 px-5 py-1">
                    <AiFillGithub />
                    <a href="https://github.com/chiragsemwal/iPhone-15-Landing-Page">
                      View code
                    </a>
                  </button>
                </div>
              </div>

              <div className="bg-hero-text py-8 p-5 sm:w-[400px] h-[400px] flex flex-col justify-between gap-3 rounded-lg ">
                <img src={adidas} alt="adidaspage" className="rounded-md" />
                <p className="text-font-color text-xl font-semibold">
                  Adidas Clone
                </p>
                <p className="text-font-color font-thin">
                  Clone of famous brand Adidas
                </p>
                <div className=" flex justify-center ">
                  <button className="bg-font-color rounded-md text-white flex items-center gap-6 px-5 py-1">
                    <AiFillGithub />
                    <a href="https://github.com/chiragsemwal/adidas">
                      View code
                    </a>
                  </button>
                </div>
              </div>

              <div className="bg-hero-text py-8 p-5 sm:w-[400px] h-[400px] flex flex-col justify-between gap-3 rounded-lg ">
                <img src={aldente} alt="aldentepage" className="rounded-md" />
                <p className="text-font-color text-xl font-semibold">
                  Aldente Clone
                </p>
                <p className="text-font-color font-thin">
                  Clone of famous Mac app Aldente
                </p>
                <div className=" flex justify-center ">
                  <button className="bg-font-color rounded-md text-white flex items-center gap-6 px-5 py-1">
                    <AiFillGithub />
                    <a href="https://github.com/chiragsemwal/Aldente">
                      View code
                    </a>
                  </button>
                </div>
              </div>

              <div className="bg-hero-text py-8 p-5 sm:w-[400px] h-[400px] flex flex-col justify-between gap-3 rounded-lg ">
                <img src={todo} alt="todolist" className="rounded-md" />
                <p className="text-font-color text-xl font-semibold">
                  OnePiece Theme Todo-List
                </p>
                <p className="text-font-color font-thin">
                  Build an OnePiece Theme Todo-List
                </p>
                <div className=" flex justify-center ">
                  <button className="bg-font-color rounded-md text-white flex items-center gap-6 px-5 py-1">
                    <AiFillGithub />
                    <a href="https://github.com/chiragsemwal/onePiece-theme-todo-list">
                      View code
                    </a>
                  </button>
                </div>
              </div>

              <div className="bg-hero-text py-8 p-5 sm:w-[400px] h-[400px] flex flex-col justify-between gap-3 rounded-lg ">
                <img
                  src={weather}
                  alt="weather-fetcher"
                  className="rounded-md"
                />
                <p className="text-font-color text-xl font-semibold">
                  Weather Fetcher
                </p>
                <p className="text-font-color font-thin">
                  Build an Weather Fetching App
                </p>
                <div className=" flex justify-center ">
                  <button className="bg-font-color rounded-md text-white flex items-center gap-6 px-5 py-1">
                    <AiFillGithub />
                    <a href="https://github.com/chiragsemwal/API-handling-weather-app">
                      View code
                    </a>
                  </button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
