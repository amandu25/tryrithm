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
      <h2 className="text-shadow-sm mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-purple-700 bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
              <span className="material-icons-outlined text-white">
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
