import React from "react";

function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Miller",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Chen",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  ];

  return (
    <div className="h-auto min-h-[200px] sm:min-h-[250px] md:h-[400px] flex items-center justify-center w-full py-2 sm:py-4 md:py-0">
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 w-full">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-purple-500 mb-2 md:mb-4 hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 text-center">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
