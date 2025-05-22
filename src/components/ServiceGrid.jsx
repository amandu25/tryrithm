function ServiceItem({ title, description, colSpan = "" }) {
  return (
    <div className={`service-item ${colSpan}`}>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ServiceGrid() {
  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "Crafting high-performance applications tailored to your needs.",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences.",
    },
    {
      title: "API Integration & Backend Development",
      description: "Building robust and scalable backend systems.",
    },
    {
      title: "Full-Stack Product Builds",
      description: "From concept to deployment, we handle it all.",
    },
    {
      title: "Technical Writing",
      description:
        "Providing clear and concise technical documentation as per your requirements.",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <div className="bento-item col-span-3">
      <h2 className="text-shadow-sm mb-4">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            colSpan={service.colSpan}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceGrid;
