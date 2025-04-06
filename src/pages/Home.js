import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div
      className="flex flex-col h-screen bg-slate-900 w-full lg:flex-row justify-center items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(1.jpg)` }}
    >
      {/* Empty Div for Future Use or Decoration */}
      <div className="hidden lg:flex lg:w-1/2"></div>

      {/* Main Content */}
      <div className="flex w-full lg:w-1/2 flex-col font-Ubuntu justify-center items-center lg:justify-start lg:items-start">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 ">
          <div className="text-lg text-black flex justify-center w-full">Hello, I'm</div>

          <h1 className="lg:w-full lg:flex lg:justify-center text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Naman Bhatia
          </h1>

          <p className="text-xl text-black lg:text-2xl font-medium lg:flex lg:justify-center lg:w-full">
            Frontend Developer
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a href={"naman-cv.docx"} download={"naman-cv.docx"}>
              <button className="duration-300 border font-Ubuntu hover:shadow-lg text-black py-2 px-4 lg:px-6 rounded-full border-gray-800 bg-cyan-400 hover:text-white font-bold">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button className="duration-300 border font-Ubuntu hover:shadow-lg text-black py-2 px-4 lg:px-6 rounded-full border-gray-800 bg-cyan-400 hover:text-white font-bold">
                Contact Info
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-center text-2xl text-black mt-4 lg:w-full">
            <a href="https://www.linkedin.com/in/namanbhatia1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-blue-500" />
            </a>
            <a href="https://github.com/namanbhatia1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
