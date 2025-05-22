import React from "react";

function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="flex px-3 rounded-lg backdrop-blur-lg border border-white/10 bg-black/30 bg-blend-hard-light shadow-lg">
      <a
        onClick={() => setActiveTab("skills")}
        className={`cursor-pointer ${
          activeTab === "skills"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-3 px-4 text-sm font-semibold transition-all`}
      >
        Our Skills
      </a>
      <a
        onClick={() => setActiveTab("team")}
        className={`cursor-pointer ${
          activeTab === "team"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:bg-white/15 hover:text-white"
        } tracking-wide py-3 px-4 text-sm font-semibold transition-all`}
      >
        Our Team
      </a>
    </nav>
  );
}

export default TabsNavigation;
