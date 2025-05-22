import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-glass sticky top-0 z-50 px-4 py-3 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="material-icons-outlined text-orange-400 mr-2 text-3xl">
            hub
          </span>
          <span className="font-semibold text-xl text-shadow-sm">
            InnovateSolutions
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            className="text-gray-300 hover:text-orange-400 transition-colors"
            href="#"
          >
            Services
          </a>
          <a
            className="text-gray-300 hover:text-orange-400 transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-gray-300 hover:text-orange-400 transition-colors"
            href="#"
          >
            Products
          </a>
          <a
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-orange-400 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-icons-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col items-start space-y-2 mt-3 pt-3 border-t border-gray-700`}
      >
        <a
          className="block text-gray-300 hover:text-orange-400 transition-colors py-1"
          href="#"
        >
          Services
        </a>
        <a
          className="block text-gray-300 hover:text-orange-400 transition-colors py-1"
          href="#"
        >
          About
        </a>
        <a
          className="block text-gray-300 hover:text-orange-400 transition-colors py-1"
          href="#"
        >
          Products
        </a>
        <a
          className="block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full text-center"
          href="#contact"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
