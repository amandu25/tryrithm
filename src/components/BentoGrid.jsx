import React, { useState } from "react";
import AboutCard from "./AboutCard";
import ServicesSection from "./ServicesSection";
import TabsNavigation from "./TabsNavigation";
import TabContent from "./TabContent";
import ContactForm from "./ContactForm";
import ProjectsCarousel from "./ProjectsCarousel";

function BentoGrid() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="bento-grid pt-2 sm:pt-4 md:pt-8">
        {/* Company Name - Left Side (61.8% width) with Neomorphism effect */}
        <div className="company-title golden-left row-span-1">
          <div className="company-title-inner">
            <div className="logo-container">
              <span className="material-icons-outlined logo-icon">hub</span>
            </div>
            <h1 className="company-name">TRYRITHM</h1>
          </div>
        </div>

        {/* About Card - Right Side (38.2% width), same height as company name */}
        <div className="golden-right row-span-1">
          <AboutCard />
        </div>

        {/* Services Section - Below both sections */}
        <div className="col-span-3 row-span-1">
          <ServicesSection />
        </div>

        {/* Projects Carousel - Same width as Services Section */}
        <div className="col-span-3 row-span-1">
          <ProjectsCarousel />
        </div>

        {/* Tabs and Contact section - responsive grid for different screen sizes */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-6 mt-2 sm:mt-3 md:mt-6">
          {/* Left side: Tabs navigation + Tab content stacked vertically */}
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 mb-2 sm:mb-3 md:mb-0">
            {/* Tabs navigation bar */}
            <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Tab content */}
            <TabContent activeTab={activeTab} />
          </div>

          {/* Right side: Contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
