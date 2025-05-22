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
    <div className="h-auto min-h-[300px] md:h-[400px] flex items-center justify-center w-full py-4 md:py-0">
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-purple-500 mb-3 md:mb-4 hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white text-center">
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
