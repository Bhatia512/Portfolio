import React from "react";

const skills = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 60 },
  { name: "Tailwind CSS", level: 70 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-8">
    <div className="flex justify-between mb-1">
      <span className="text-lg font-medium text-white">{name}</span>
      <span className="text-sm text-white">{level}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 h-2 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

function Skills() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 font-Ubuntu w-full py-10">
        {/* Skills Title */}
        <div className="flex justify-center items-center mt-9">
          <p className="text-3xl font-medium text-white border-b-2 border-red-500">
            SKILLS
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row w-full mt-10 lg:space-x-16 px-4 lg:px-20">
          {/* Skill Bars */}
          <div className="flex justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="max-w-md w-full mx-auto p-6 bg-slate-600/10 rounded-3xl shadow-md">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img className="w-64 lg:w-96" src={"html1.png"} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
