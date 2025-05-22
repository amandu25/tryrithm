import React from "react";

function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      icon: "code",
    },
    {
      name: "Sarah Miller",
      role: "UI/UX Designer",
      icon: "palette",
    },
    {
      name: "David Chen",
      role: "Project Manager",
      icon: "assignment",
    },
    {
      name: "Maya Rodriguez",
      role: "Backend Engineer",
      icon: "storage",
    },
  ];

  return (
    <div className="space-y-4">
      {team.map((member, index) => (
        <div
          key={index}
          className="flex bg-black/30 border border-white/10 p-4 rounded-lg backdrop-blur-lg"
        >
          <div className="p-3">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-700 bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                <span className="material-icons-outlined text-white">
                  {member.icon}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{member.role}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamSection;
