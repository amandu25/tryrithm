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
    <div className="h-auto min-h-[180px] sm:min-h-[220px] md:min-h-[280px] flex items-center justify-center w-full py-2 sm:py-4 md:py-6">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 w-full">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-500/70 mb-2 md:mb-3 group-hover:scale-105 transition-transform shadow-md group-hover:shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent group-hover:from-purple-500/40 transition-colors"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover relative z-0"
                loading="lazy"
              />
            </div>
            <h3 className="!text-[11px] !sm:text-xs !md:text-sm !font-semibold !text-white !text-center !font-['Poppins'] !leading-tight">
              {member.name}
            </h3>
            <p className="!text-[9px] !sm:text-[10px] !md:text-xs !text-gray-300 !text-center !font-['Open_Sans'] !leading-tight">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
