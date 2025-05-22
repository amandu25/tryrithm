import React from "react";

function ContactForm() {
  return (
    <div className="bento-item">
      <h2 className="text-shadow-sm mb-2 md:mb-4 text-lg md:text-2xl">
        Get in Touch
      </h2>
      <p className="text-xs md:text-sm mb-3 md:mb-6">
        Have a project in mind? We'd love to hear about it. Drop us a message
        and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-2 md:space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 md:p-3 bg-black/30 border border-white/10 rounded-lg text-white text-xs md:text-sm focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 md:p-3 bg-black/30 border border-white/10 rounded-lg text-white text-xs md:text-sm focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows="2"
            className="w-full p-2 md:p-3 bg-black/30 border border-white/10 rounded-lg text-white text-xs md:text-sm focus:outline-none focus:border-purple-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-xs md:text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
