import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useServicesSelect } from "./ServicesSelectContext";
import { servicesList } from "./servicesList";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "./Footer";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { selectedServices, setSelectedServices } = useServicesSelect();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [] as string[],
  });

  // Keep formData.services in sync with selectedServices
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      services: selectedServices,
    }));
  }, [selectedServices]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-20 bg-[#111111] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#00d9c8] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#00b2a3] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 z-10 relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-space font-bold text-white mb-8">
            Ready to build
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-[#00d9c8] mb-6">
            something bold?
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's turn your wildest ideas into reality. Every great product
            starts with a conversation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div whileHover={{ scale: 1.05, x: 10 }} className="group">
              <h4 className="text-2xl font-space font-bold text-[#00d9c8] mb-4 group-hover:text-[#4fdecf] transition-colors duration-300">
                Let's Talk Business
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Ready to start your next big project? We're here to help you
                experiment, iterate, and execute.
              </p>
              <a
                href="mailto:hello@tryrithm.com"
                className="text-[#00d9c8] hover:text-[#4fdecf] transition-colors duration-300 text-lg font-medium inline-flex items-center gap-2 group"
              >
                hello@tryrithm.com
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, x: 10 }} className="group">
              <h4 className="text-2xl font-space font-bold text-[#00b2a3] mb-4 group-hover:text-[#00d9c8] transition-colors duration-300">
                Our Philosophy
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 italic">
                  "Trying is our core algorithm."
                </p>
                <p className="text-gray-300 italic">"In rhythm, we build."</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, x: 10 }} className="group">
              <h4 className="text-2xl font-space font-bold text-[#4fdecf] mb-4 group-hover:text-[#00d9c8] transition-colors duration-300">
                What We Build
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• MVPs that validate your vision</li>
                <li>• AI-powered products</li>
                <li>• Full-stack applications</li>
                <li>• Scalable digital platforms</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }} className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00d9c8] transition-colors duration-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:border-[#00d9c8] focus:outline-none focus:ring-2 focus:ring-[#00d9c8]/20 transition-all duration-300 text-white"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00d9c8] transition-colors duration-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:border-[#00d9c8] focus:outline-none focus:ring-2 focus:ring-[#00d9c8]/20 transition-all duration-300 text-white"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-[#00d9c8] transition-colors duration-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:border-[#00d9c8] focus:outline-none focus:ring-2 focus:ring-[#00d9c8]/20 transition-all duration-300 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {/* Services - Multi Select */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services Interested In
                </label>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {servicesList.map((service) => (
                    <label
                      key={service}
                      className="inline-flex items-center gap-x-2"
                    >
                      <Checkbox
                        name="services"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, service]);
                          } else {
                            setSelectedServices(
                              selectedServices.filter((s) => s !== service)
                            );
                          }
                        }}
                        className="border-[#00d9c8] data-[state=checked]:bg-[#00d9c8] data-[state=checked]:text-black"
                        id={`checkbox-${service}`}
                      />
                      <span className="text-gray-300 text-base">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0,217,200,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#00b2a3] to-[#00d9c8] px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <Footer />
      </motion.div>
    </section>
  );
};

export default ContactSection;
