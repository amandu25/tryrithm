import React from "react";
import SkillsSection from "./SkillsSection";
import TeamSection from "./TeamSection";

function TabContent({ activeTab }) {
  return (
    <div className="bento-item tab-content-container overflow-hidden">
      <div className="h-full">
        {activeTab === "skills" && <SkillsSection />}
        {activeTab === "team" && <TeamSection />}
      </div>
    </div>
  );
}

export default TabContent;
