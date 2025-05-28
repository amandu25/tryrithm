import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section-based highlighting logic
      const sectionIds = ["about", "services", "projects", "contact"];
      let foundSection = null;

      // Find which section takes up most of the viewport
      const viewportHeight = window.innerHeight;
      let maxVisibleHeight = 0;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // If this section has more visible content than previous sections
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            foundSection = id;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/90 backdrop-blur-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] mx-6 mt-4 rounded-full"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-6 py-4 flex justify-between items-center ${
          isScrolled ? "max-w-7xl" : ""
        }`}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-space font-bold text-white cursor-pointer flex items-center"
          onClick={() => {
            const el = document.getElementById("hero");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            whileHover={{
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.6 },
            }}
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00d9c8" />
                <stop offset="100%" stopColor="#00b2a3" />
              </linearGradient>
            </defs>
            <path
              d="M14 2C7.373 2 2 7.373 2 14C2 20.627 7.373 26 14 26C20.627 26 26 20.627 26 14C26 7.373 20.627 2 14 2ZM20.5 15.5L14 22L7.5 15.5L10.5 12.5L14 16L17.5 12.5L20.5 15.5ZM10.5 6.5L14 10L17.5 6.5L20.5 9.5L14 16L7.5 9.5L10.5 6.5Z"
              fill="url(#logoGradient)"
            />
          </motion.svg>
          <motion.span
            whileHover={{
              background: "linear-gradient(90deg, #00d9c8, #00b2a3, #00d9c8)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
          >
            Tryrithm
          </motion.span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#00d9c8" }}
              className={`text-sm font-medium ${
                isScrolled ? "text-white" : "text-[#00d9c8]"
              } hover:text-[#00d9c8] transition-colors duration-200 relative ${
                activeSection === item.id
                  ? 'text-[#00d9c8] font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#00d9c8] after:rounded-full'
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#00b2a3] to-[#00d9c8] px-6 py-2 rounded-full text-white font-medium text-sm hover:shadow-lg hover:shadow-[#00d9c8]/25 transition-all duration-200"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Let's Work
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
