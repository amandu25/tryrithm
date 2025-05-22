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

function SkillsSection() {
  // For mobile view, limit the number of skills to show
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
  ];

  return (
    <div className="h-auto min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center justify-center w-full py-2 sm:py-4 md:py-6">
      {/* <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2> */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2 md:gap-4 place-items-center w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-110"
          >
            <img
              src={skill.svg}
              alt={skill.name}
              title={skill.name}
              className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain hover:opacity-80"
              loading="lazy"
            />
            <span className="mt-1 md:mt-2 text-xs sm:text-sm text-center font-['Open_Sans'] text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
