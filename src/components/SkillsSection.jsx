import React from "react";
import reactSvg from "../assets/skills/react-svgrepo-com.svg";
import nodeSvg from "../assets/skills/node-js-svgrepo-com.svg";
import nextjsSvg from "../assets/skills/nextjs-icon-svgrepo-com.svg";
import figmaSvg from "../assets/skills/figma-svgrepo-com.svg";
import dockerSvg from "../assets/skills/docker-svgrepo-com.svg";
import gitSvg from "../assets/skills/git-svgrepo-com.svg";
import htmlSvg from "../assets/skills/html-5-svgrepo-com.svg";
import cssSvg from "../assets/skills/css-3-svgrepo-com.svg";
import jsSvg from "../assets/skills/js-svgrepo-com.svg";
import seoSvg from "../assets/skills/seo-1-svgrepo-com.svg";

function SkillsSection() {
  // Skills arranged in a grid like the image
  const skillsByRow = [
    // First row
    [
      {
        name: "HTML",
        svg: htmlSvg,
        color: "#E44D26", // HTML orange
      },
      {
        name: "CSS",
        svg: cssSvg,
        color: "#1572B6", // CSS blue
      },
      {
        name: "Figma",
        svg: figmaSvg, // Using Figma as a substitute for SASS since we don't have a SASS icon
        color: "#CD6799", // SASS pink
      },
      {
        name: "JAVASCRIPT",
        svg: jsSvg,
        color: "#F7DF1E", // JavaScript yellow
      },
      {
        name: "REACT JS",
        svg: reactSvg,
        color: "#61DAFB", // React blue
      },
    ],
    // Second row
    [
      {
        name: "GIT",
        svg: gitSvg,
        color: "#FFFFFF", // GitHub white
      },
      {
        name: "NODE JS",
        svg: nodeSvg,
        color: "#339933", // Node.js green
      },
      {
        name: "SEO",
        svg: seoSvg, // Using SEO as a substitute for Firebase
        color: "#FFCA28", // Firebase yellow
      },
      {
        name: "NextJs",
        svg: nextjsSvg, // Using Next.js as a substitute for MongoDB
        color: "#47A248", // MongoDB green
      },
      {
        name: "DOCKERS",
        svg: dockerSvg,
        color: "#2496ED", // Docker blue
      },
    ],
  ];

  // Helper for the SVG styling based on the skill
  const getSvgStyle = (skill) => {
    // Special case for JS (which should be yellow background with black JS text)
    if (skill.name === "JAVASCRIPT") {
      return {
        backgroundColor: skill.color,
        padding: "4px",
        borderRadius: "4px",
        filter: "none", // No inversion
      };
    }

    // Special case for GitHub (which should be white)
    if (skill.name === "GITHUB") {
      return {
        filter: "invert(1)", // Invert to get white
      };
    }

    // For other icons, use their color
    return {
      filter: `drop-shadow(0px 0px 3px ${skill.color})`,
    };
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillsByRow.flat().map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg transition-transform hover:scale-105 border border-gray-800"
            style={{ aspectRatio: "1/1" }}
          >
            <div className="mb-6 flex items-center justify-center h-16">
              <img
                src={skill.svg}
                alt={skill.name}
                title={skill.name}
                className="h-16 w-16 object-contain"
                style={getSvgStyle(skill)}
              />
            </div>
            <div className="text-white text-center font-bold tracking-wider text-sm">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
