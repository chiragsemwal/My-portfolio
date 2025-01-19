import React, { useState } from "react";
import { AiOutlineMenu, AiFillMail } from "react-icons/ai";
import { navLogo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {

  useGSAP( () => {
      gsap.from("#nav-items", {
        opacity: 4,
         y: -50,
          delay: 1,
          stagger:{
            amount:1.5,
            axis:"x",
          }
      })
      gsap.from("#hireMe",{
        opacity:2,
        y: -700,
        delay:2,
      })
  },[] )

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" bg-nav-purple w-full px-4 py-2 sm:p-6 sm:px-14 ">
      <nav className=" flex items-center justify-between ">
        <div id="nav-logo">
          <img
            className=" w-32 sm:w-40 rounded-[49px]"
            src={navLogo}
            alt="mylogo"
          />
        </div>
        <div id="nav-items">
          <ul  className="hidden text-white font-medium text-lg sm:flex gap-7">
            <li id="nav-items" className=" cursor-pointer ">
              <a href="#home">Home</a>
            </li>
            <li id="nav-items">
              <a href="#about">About</a>
            </li>
            <li id="nav-items">
              <a href="#skills">Skills</a>
            </li>
            <li id="nav-items">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div id="nav-items" className={`sm:hidden block`}>
           {/* {isOpen? <ImCross  color="white" size={27} /> : <AiOutlineMenu onClick={()=>{  }}  color="white" size={27} /> }  */}
           <button>
            <AiOutlineMenu color="white" size={27} />
           </button>
          </div>
        <div id="hire-me " className=" hidden sm:pr-4 sm:flex">
          <button
            type="button"
            id="hireMe"
            className="bg-white border py-1 px-4 flex justify-around items-center gap-3 rounded-md text-font-color"
          >
            <AiFillMail />
            <a href="#hire">Hire me</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
