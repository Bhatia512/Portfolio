import React from "react";

function About() {
  return (
    <div className="font-Ubuntu w-full bg-slate-900 min-h-screen flex flex-col justify-center items-center px-4">
      {/* Section Title */}
      <div className="flex justify-center items-center mb-10">
        <p className="text-3xl font-medium text-white border-b-2 border-red-500">INTRODUCTION</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-end lg:space-x-10 w-full">
        {/* Profile Image */}
        <div className="w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <img
            className="w-64 lg:w-80 rounded-b-full select-none hover:animate-pulse"
            src={"about1.png"}
            alt="Profile"
          />
        </div>

        {/* Introduction Text */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <p className="text-lg lg:text-2xl font-bold text-center lg:text-center leading-loose text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            I'm a passionate front-end web developer with a knack for creating
            visually stunning and highly interactive user experiences. With a
            strong foundation in HTML, CSS, and JavaScript, I specialize in
            bringing designs to life, ensuring they not only look great but
            perform seamlessly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
