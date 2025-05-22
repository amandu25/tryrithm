import React from "react";

function AboutCard() {
  const stats = [
    { icon: "rocket_launch", label: "Projects Delivered", value: "150+" },
    { icon: "calendar_today", label: "Founded", value: "2018" },
    { icon: "people", label: "Team Members", value: "24" },
  ];

  return (
    <div className="bento-item flex flex-col justify-between h-full">
      <div>
        <h2 className="text-shadow-sm mb-2 md:mb-3 text-base md:text-xl font-bold">
          We Build Bold, Scalable Digital Products
        </h2>
        <p className="text-xs md:text-sm mb-2 md:mb-4">
          From MVPs to full-stack platforms — we turn ideas into
          high-performance web & mobile experiences with rhythm, speed, and
          precision.
        </p>

        <div className="mb-2 md:mb-4">
          <div className="grid grid-cols-1 gap-1 md:gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-lg bg-purple-700 bg-opacity-20 flex items-center justify-center backdrop-blur-sm mr-2 md:mr-3">
                  <span className="material-icons-outlined text-white text-xs md:text-sm">
                    {stat.icon}
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <span className="text-gray-300 text-xs">{stat.label}</span>
                  <span className="text-white font-semibold text-xs md:text-sm">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-purple-600 hover:bg-purple-500 text-white py-1 md:py-1.5 px-2 md:px-3 rounded-lg transition-all shadow-lg hover:shadow-xl text-xs md:text-sm">
          Let's Build Together
        </button>
      </div>
    </div>
  );
}

export default AboutCard;
