import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>

        <div className='bg-font-color flex  sm:gap-4 justify-center items-center p-14 rounded-b-md' >
            <p className='text-white' >Build with &#9829; by Chirag Sharma</p>
        
                <div id="hero-icons" className="flex gap-2 py-4">
                  <a  href="https://github.com/chiragsemwal">
                    <AiFillGithub on color="white" size={40} />
                  </a>
                  <a href="https://www.linkedin.com/in/chirag-sharma-860958239/">
                    <FaLinkedin size={40} color="white" />
                  </a>
                  <FaInstagramSquare size={40} color="white" />
                </div>


              </div>

    </footer>
  )
}

export default Footer