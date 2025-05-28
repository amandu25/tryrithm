import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pastelColors = [
  "bg-pastel-mint",
  "bg-pastel-coral",
  "bg-pastel-lavender",
];

const cardPastelHover = [
  "hover:bg-pastel-mint",
  "hover:bg-pastel-coral",
  "hover:bg-pastel-lavender",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
      gsap.fromTo(
        quoteRef.current,
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "100+", label: "Projects Shipped" },
    { number: "50+", label: "Happy Clients" },
    { number: "12", label: "Team Size" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-28"
    >
      {/* Decorative UI elements */}
      <div className="absolute inset-0 pointer-events-none animate-fade-in">
        <div className="absolute bottom-12 left-24 w-40 h-40 bg-pastel-mint rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-6 right-40 w-32 h-32 bg-pastel-coral rounded-full blur-2xl opacity-25"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 text-center z-10 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-4 md:mb-8">
          <h2 className="text-6xl md:text-7xl font-space font-bold text-gradient-turquoise mb-2 md:mb-3">
            About Us
          </h2>
          {/* New about paragraph */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mt-4 font-montserrat">
            We are a passionate team of creators and engineers dedicated to
            turning bold ideas into remarkable digital products. With a strong
            focus on experimentation, design, and robust execution, we help
            businesses innovate and succeed in a rapidly changing world.
          </p>
        </motion.div>

        <motion.div
          ref={quoteRef}
          variants={itemVariants}
          className="max-w-4xl mx-auto space-y-7 md:space-y-9 z-10 mt-0 md:mt-0 mb-20 md:mb-28 relative"
          style={{ marginTop: "-40px" }}
        >
          <blockquote className="text-3xl md:text-4xl font-space font-medium leading-tight text-[#232323]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-summer-coral"
            >
              "We try, we build, we break, we learn —
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-summer-pink"
            >
              all in rhythm."
            </motion.span>
          </blockquote>
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl font-space font-bold text-summer-mint mt-3 md:mt-5 text-[#232323]"
          >
            "Trying is our core algorithm."
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-2 md:mt-4 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto z-30 relative mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.07,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`bg-[#f9f9fa] border border-summer-coral/20 rounded-2xl p-8 transition-all duration-300 shadow hover:shadow-lg cursor-pointer ${
                cardPastelHover[index % cardPastelHover.length]
              }`}
              style={{
                color: "#232323",
              }}
            >
              <div className="text-4xl font-space font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/90 font-medium text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
