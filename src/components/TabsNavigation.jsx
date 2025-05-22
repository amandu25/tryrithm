import React from "react";

function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="flex w-full px-2 sm:px-3 rounded-lg backdrop-blur-lg border border-white/10 bg-black/30 bg-blend-hard-light shadow-lg">
      <a
        onClick={() => setActiveTab("skills")}
        className={`cursor-pointer flex-1 text-center ${
          activeTab === "skills"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-2 md:py-3 px-3 md:px-4 text-xs sm:text-sm font-semibold transition-all`}
      >
        Our Skills
      </a>
      <a
        onClick={() => setActiveTab("team")}
        className={`cursor-pointer flex-1 text-center ${
          activeTab === "team"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-2 md:py-3 px-3 md:px-4 text-xs sm:text-sm font-semibold transition-all`}
      >
        Our Team
      </a>
    </nav>
  );
}

export default TabsNavigation;
