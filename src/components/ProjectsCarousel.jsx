import React, { useEffect, useState, useRef } from "react";

function ProjectsCarousel() {
  // Dummy project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A scalable online shopping platform with integrated payment processing and inventory management.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description:
        "Real-time analytics dashboard for healthcare providers to monitor patient data and clinical outcomes.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Next.js", "TypeScript", "D3.js"],
    },
    {
      id: 3,
      title: "Finance Management App",
      description:
        "Personal finance tracking application with budget planning and investment portfolio analysis.",
      image:
        "https://images.unsplash.com/photo-1579170053380-58828eee5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 4,
      title: "Educational Platform",
      description:
        "Interactive learning platform with course management, video lectures, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description:
        "Advanced analytics platform for tracking social media performance and audience engagement.",
      image:
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["Python", "React", "TensorFlow"],
    },
    {
      id: 6,
      title: "IoT Control Center",
      description:
        "Centralized dashboard for monitoring and controlling smart home and industrial IoT devices.",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["React", "Node.js", "MQTT"],
    },
  ];

  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    let scrollInterval;

    if (autoScroll && carouselRef.current && !isTouching) {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          const maxScroll =
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

          // Reset to beginning when reaching the end
          if (scrollPosition >= maxScroll) {
            setScrollPosition(0);
            carouselRef.current.scrollLeft = 0;
          } else {
            const newPosition = scrollPosition + 1;
            setScrollPosition(newPosition);
            carouselRef.current.scrollLeft = newPosition;
          }
        }
      }, 20);
    }

    return () => clearInterval(scrollInterval);
  }, [scrollPosition, autoScroll, isTouching]);

  // Mouse events
  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    setIsTouching(true);
    setAutoScroll(false);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    const touchX = e.touches[0].clientX;
    const diff = touchStartX - touchX;

    if (carouselRef.current) {
      carouselRef.current.scrollLeft += diff / 2; // Smoother scrolling
      setScrollPosition(carouselRef.current.scrollLeft);
      setTouchStartX(touchX);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    setTimeout(() => setAutoScroll(true), 1000); // Resume auto-scroll after 1 second
  };

  return (
    <div className="bento-item col-span-3 py-4 md:py-6 overflow-hidden">
      <h2 className="text-shadow-sm mb-4 md:mb-6 text-xl md:text-2xl">
        Our Projects
      </h2>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar py-3 md:py-4 space-x-4 md:space-x-6"
          style={{ scrollBehavior: isTouching ? "auto" : "smooth" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-[80vw] sm:w-80 md:w-72 glassmorphism-card transition-transform duration-300 transform hover:scale-105"
            >
              <div className="h-36 sm:h-40 md:h-44 w-full overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-2 md:mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-0.5 md:px-2 md:py-1 text-xs rounded-full bg-purple-900 bg-opacity-50 text-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glassmorphism-card {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProjectsCarousel;
