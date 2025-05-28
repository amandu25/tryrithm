import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIcons = [
    { icon: Twitter, link: "https://twitter.com/tryrithm" },
    { icon: Instagram, link: "https://instagram.com/tryrithm" },
    { icon: Linkedin, link: "https://linkedin.com/company/tryrithm" },
    { icon: Github, link: "https://github.com/tryrithm" },
  ];

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mt-20 pt-12 border-t border-[#333333]"
    >
      <div className="flex justify-center items-center space-x-4 mb-8">
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff1a] transition-all duration-300 hover:bg-[#00d9c820] hover:border-[#00d9c840] hover:shadow-[0_0_15px_rgba(0,217,200,0.3)] group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <social.icon
              size={20}
              className="text-white/70 group-hover:text-[#00d9c8] transition-colors duration-300"
            />
          </motion.a>
        ))}
      </div>

      <p className="text-gray-500 mb-4">
        © {new Date().getFullYear()} Tryrithm. Where Experimentation Meets
        Execution.
      </p>
      <p className="text-[#00d9c8] font-space font-medium">
        Try + Algorithm = Tryrithm
      </p>
    </motion.div>
  );
};

export default Footer;
