import React from "react";
import Spline from "@splinetool/react-spline";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const Hero = () => {
  useGSAP(()=>{
    gsap.from("#hero-animation",{
      opacity:-1,
      y:100,
      delay:1,
      stagger:{

        amount:1.5,
        axis:"x"

      },
      scrollTrigger:{
        trigger:"#hero-content",
        scroller:"body",
        markers:true,
        top:"50%",
      }
    })
  },[])
  return (
    <section
      id="home"
      className=" w-full sm:w-full h-full items-center flex justify-between bg-font-color"
    >
      <div
        id="hero-content"
        className=" w-[50vw] sm:w-[50%] h-full flex flex-col p-4 py-5 pt-8 sm:px-16 sm:p-9 gap-2 sm:gap-4"
      >
        <h2 id="hero-animation" className="text-3xl flex items-center gap-1 sm:text-5xl text-white">Hello &#128075; ,</h2>
        <h1 id="hero-animation" className=" text-4xl text-hero-text sm:text-[90px] leading-none">
          I'm a web
        </h1>
        <span id="hero-animation" className="text-4xl text-hero-text sm:text-[90px] tracking-wider">
          <Typewriter words={["Developer."]} loop={false} cursor />
        </span>
        <h2 id="hero-animation" className="text-2xl sm:mt-4 text-white sm:text-4xl">I build things for web</h2>
        <div id="hero-icons" className="flex gap-2 py-4">
          <a  href="https://github.com/chiragsemwal">
            <AiFillGithub id="hero-animation" color="white" size={40} />
          </a>
          <a href="https://www.linkedin.com/in/chirag-sharma-860958239/">
            <FaLinkedin id="hero-animation" size={40} color="white" />
          </a>
          <FaInstagramSquare id="hero-animation" size={40} color="white" />
        </div>
      </div>
      <div className=" h-full overflow-hidden w-[50%]  md:hidden ">
      <Spline className=" md:hidden block" scene="https://prod.spline.design/rFMMkrryCcp0Ebgq/scene.splinecode" />
      </div>
      <div id="3d-object" className=" hidden md:block overflow-hidden w-[50%] h-screen sm:w-[50%] sm:h-full">
      <Spline id="hero-animation" scene="https://prod.spline.design/rFMMkrryCcp0Ebgq/scene.splinecode" />
      </div>

    </section>
  );
};

export default Hero;

