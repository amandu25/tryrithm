import React from "react";

function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="flex w-full p-1.5 sm:p-2 rounded-full backdrop-blur-lg border border-white/10 bg-black/30 bg-blend-hard-light shadow-lg overflow-hidden gap-2 sm:gap-3">
      <a
        onClick={() => setActiveTab("skills")}
        className={`cursor-pointer flex-1 text-center ${
          activeTab === "skills"
            ? "bg-white/20 text-white shadow-inner"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base md:text-lg font-semibold transition-all font-['Poppins'] rounded-full`}
      >
        Our Skills
      </a>
      <a
        onClick={() => setActiveTab("team")}
        className={`cursor-pointer flex-1 text-center ${
          activeTab === "team"
            ? "bg-white/20 text-white shadow-inner"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base md:text-lg font-semibold transition-all font-['Poppins'] rounded-full`}
      >
        Our Team
      </a>
    </nav>
  );
}

export default TabsNavigation;
