import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FlaskConical, Zap, Code } from "lucide-react";

const iconVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.4, type: "spring", bounce: 0.6 },
  }),
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // For animated gradient
  const [gradientPos, setGradientPos] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(logoRef.current, {
        duration: 0.12,
        x: () => Math.random() * 4 - 2,
        y: () => Math.random() * 4 - 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    // Animate gradient position for "TRYRITHM"
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 100);
    }, 60);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#111111] text-white"
    >
      {/* Decorative floating shapes */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute top-[-90px] left-[-60px] w-[200px] h-[200px] bg-[#00d9c8] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-[-60px] right-[-80px] w-[180px] h-[180px] bg-[#00b2a3] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-[#4fdecf] rounded-full blur-xl opacity-5"></div>
      </div>
      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Animated pill logo */}
        <div className="flex justify-center w-full">
          <div
            ref={logoRef}
            className="relative z-20 flex flex-col items-center mb-4 md:mb-8"
          >
            <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-[#111111] via-[#333333] to-[#111111] rounded-full opacity-30 blur-lg animate-pulse"></div>
            <div className="relative bg-[#111111] rounded-full px-8 py-4 shadow-xl border border-[#333333] flex items-center space-x-3 min-w-[210px]">
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                custom={0}
                className="bg-[#00d9c8]/25 p-3 rounded-full transform-gpu"
              >
                <FlaskConical size={24} className="text-[#00d9c8]" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                custom={1}
                className="bg-[#00b2a3]/20 p-4 rounded-full transform-gpu"
              >
                <Zap size={32} className="text-[#00b2a3]" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                custom={2}
                className="bg-[#4fdecf]/15 p-3 rounded-full transform-gpu"
              >
                <Code size={24} className="text-[#4fdecf]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Logo Title without animated dark gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1
            className="text-8xl md:text-9xl font-space font-bold glitch-text text-white"
            data-text="TRYRITHM"
            aria-label="TRYRITHM"
          >
            TRYRITHM
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4 mb-12"
        >
          <p className="text-xl md:text-2xl font-light text-gray-300">
            Where{" "}
            <span className="text-[#00d9c8] font-semibold">
              Experimentation
            </span>{" "}
            Meets{" "}
            <span className="text-[#4fdecf] font-semibold">Execution</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl font-space font-medium text-[#00b2a3]"
          >
            Try + Algorithm = Tryrithm
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,217,200,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-[#00b2a380] to-[#00d9c880] px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00d9c840] before:absolute before:inset-0 before:bg-[#ffffff10] before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
          >
            <span className="relative z-10">Start Experimenting</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="scroll-indicator mx-auto border-[#00d9c8]"
        >
          <div className="w-1 h-3 bg-[#00d9c8] rounded-full animate-bounce absolute top-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
