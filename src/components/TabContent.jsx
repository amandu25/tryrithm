import React from "react";
import SkillsSection from "./SkillsSection";
import TeamSection from "./TeamSection";

function TabContent({ activeTab }) {
  return (
    <div className="bento-item">
      {activeTab === "skills" && <SkillsSection />}
      {activeTab === "team" && <TeamSection />}
    </div>
  );
}

export default TabContent;
