import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time data visualization with machine learning insights for modern businesses.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      bgColor: "bg-pastel-coral",
      tag: "AI, ANALYTICS",
    },
    {
      title: "E-commerce Platform",
      description:
        "Scalable marketplace with advanced search and recommendation algorithms.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      bgColor: "bg-pastel-peach",
      tag: "E-COMMERCE, PLATFORM",
    },
    {
      title: "Mobile Health App",
      description:
        "Cross-platform wellness tracking with IoT integration and health insights.",
      tech: ["React Native", "Firebase", "IoT", "ML"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      bgColor: "bg-pastel-lavender",
      tag: "MOBILE, HEALTH",
    },
    {
      title: "Blockchain DeFi Protocol",
      description:
        "Decentralized finance platform with smart contracts and yield farming.",
      tech: ["Solidity", "Web3", "React", "Ethereum"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      bgColor: "bg-pastel-mint",
      tag: "BLOCKCHAIN, DEFI",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold text-gradient-turquoise glitch-text mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Crafting human-centered digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.bgColor} rounded-3xl overflow-hidden group cursor-pointer`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-gray-800 tracking-wider">
                    {project.tag}
                  </span>
                  <span className="text-xs font-medium text-gray-700/70 tracking-wider">
                    {String(index + 1).padStart(3, "0")}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-space font-bold text-gray-900 mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/60 text-gray-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
