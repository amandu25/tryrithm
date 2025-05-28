import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesList } from "./servicesList";
import { useServicesSelect } from "./ServicesSelectContext";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { selectService } = useServicesSelect();

  const services = [
    {
      title: "Web & Mobile Development",
      description:
        "React, Node.js, performant SPAs that scale with your vision",
      tech: ["React", "Node.js", "TypeScript", "React Native"],
      color: "#00d9c8", // Turquoise
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern, intuitive interfaces that users love",
      tech: ["Figma", "Framer", "Design Systems", "User Research"],
      color: "#00b2a3", // Darker turquoise
    },
    {
      title: "Backend/API",
      description: "Scalable architecture that grows with your business",
      tech: ["GraphQL", "REST APIs", "Microservices", "Cloud"],
      color: "#4fdecf", // Lighter turquoise
    },
    {
      title: "Technical Writing",
      description: "Documentation that actually communicates and helps",
      tech: ["API Docs", "User Guides", "Technical Specs", "Content Strategy"],
      color: "#00d9c8", // Turquoise
    },
  ];

  const handleServiceClick = (serviceTitle: string) => {
    selectService(serviceTitle);
    // Scroll to contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="min-h-screen py-24 bg-[#111111] relative overflow-hidden"
    >
      {/* Decorative UI elements */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute left-[-40px] bottom-20 w-36 h-36 bg-[#00d9c8]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-28 right-[-60px] w-72 h-72 bg-[#00b2a3]/10 rounded-full blur-3xl"></div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,200,0.1),transparent_70%)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-space font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We build digital products that don't just work — they evolve, adapt,
            and scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.04,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group bg-[#1a1a1a] border border-[#333333] rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden relative shadow hover:shadow-lg hover:shadow-[#00d9c8]/10"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-space font-bold text-white group-hover:text-[#00d9c8] group-hover:scale-105 transition-all duration-300">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-[#00d9c8] transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </div>

                <p className="text-gray-300 text-lg mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: index * 0.1 + techIndex * 0.05,
                        duration: 0.3,
                      }}
                      style={{
                        backgroundColor: `${service.color}10`,
                        color: service.color,
                      }}
                      className="px-3 py-1 text-sm rounded-full border border-[#00d9c8]/30 group-hover:border-[#00d9c8]/60 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated background element */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00d9c8]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
