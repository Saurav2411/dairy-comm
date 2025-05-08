import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="lg:container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-[#007580] mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="bg-[#f0f9fa] rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#272343]">Get in Touch</h3>
          <p className="mb-6 text-gray-600">We’d love to hear from you. Feel free to reach out with any questions or feedback.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <FaPhone className="text-[#029fae]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-[#029fae]" />
              <span>support@gokuldairy.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-[#029fae]" />
              <span>Dehradun, Uttarakhand, India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-xl p-6 shadow-lg space-y-5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007580] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007580] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007580] outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#029fae] hover:bg-[#027f90] text-white font-medium px-6 py-2 rounded-md transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
