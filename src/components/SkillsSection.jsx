import React from "react";
import reactSvg from "../assets/skills/react-svgrepo-com.svg";
import nodeSvg from "../assets/skills/node-js-svgrepo-com.svg";
import typescriptSvg from "../assets/skills/typescript-icon-svgrepo-com.svg";
import nextjsSvg from "../assets/skills/nextjs-icon-svgrepo-com.svg";
import figmaSvg from "../assets/skills/figma-svgrepo-com.svg";
import dockerSvg from "../assets/skills/docker-svgrepo-com.svg";
import gitSvg from "../assets/skills/git-svgrepo-com.svg";
import htmlSvg from "../assets/skills/html-5-svgrepo-com.svg";
import cssSvg from "../assets/skills/css-3-svgrepo-com.svg";
import jsSvg from "../assets/skills/js-svgrepo-com.svg";
import reduxSvg from "../assets/skills/redux-svgrepo-com.svg";
import seoSvg from "../assets/skills/seo-1-svgrepo-com.svg";
import writingSvg from "../assets/skills/writing-svgrepo-com.svg";

function SkillsSection() {
  const skills = [
    { name: "HTML5", svg: htmlSvg },
    { name: "CSS3", svg: cssSvg },
    { name: "JavaScript", svg: jsSvg },
    { name: "TypeScript", svg: typescriptSvg },
    { name: "React", svg: reactSvg },
    { name: "Redux", svg: reduxSvg },
    { name: "NextJS", svg: nextjsSvg },
    { name: "Node.js", svg: nodeSvg },
    { name: "Docker", svg: dockerSvg },
    { name: "Git", svg: gitSvg },
    { name: "Figma", svg: figmaSvg },
    { name: "SEO", svg: seoSvg },
    { name: "Technical Writing", svg: writingSvg },
  ];

  return (
    <div className="h-auto min-h-[300px] md:h-[400px] flex items-center justify-center w-full py-4 md:py-0">
      {/* <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2> */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 place-items-center w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-110"
          >
            <img
              src={skill.svg}
              alt={skill.name}
              title={skill.name}
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain hover:opacity-80"
            />
            {/* <span className="mt-2 text-sm text-center">{skill.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
