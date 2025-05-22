import React from "react";

function ContactForm() {
  return (
    <div className="bento-item">
      <h2 className="text-shadow-sm mb-4">Get in Touch</h2>
      <p className="text-sm mb-6">
        Have a project in mind? We'd love to hear about it. Drop us a message
        and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-black/30 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-black/30 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows="3"
            className="w-full p-3 bg-black/30 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
