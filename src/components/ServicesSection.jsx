import React from "react";

function ServicesSection() {
  const services = [
    {
      icon: "devices",
      title: "Responsive Web Development",
      description:
        "Create responsive, performant websites that work across all devices and platforms.",
    },
    {
      icon: "app_shortcut",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications with intuitive user experiences.",
    },
    {
      icon: "design_services",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that balance aesthetics with functionality.",
    },
    {
      icon: "cloud",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies for your applications.",
    },
  ];

  return (
    <div className="bento-item col-span-3">
      <h2 className="text-shadow-sm mb-3 md:mb-6 text-xl md:text-2xl">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-2 md:space-x-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-purple-700 bg-opacity-20 flex items-center justify-center backdrop-blur-sm shrink-0">
              <span className="material-icons-outlined text-white text-sm md:text-lg">
                {service.icon}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5 md:mb-1">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
