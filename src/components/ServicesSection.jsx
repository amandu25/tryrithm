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
      <h2 className="text-shadow-sm mb-4 md:mb-6 text-xl md:text-2xl">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-3 md:space-x-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-purple-700 bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
              <span className="material-icons-outlined text-white text-base md:text-lg">
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5 md:mb-1">
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
