"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 dark:from-blue-400 dark:to-pink-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        {/* Contact Details */}
        <div className="mt-10 flex flex-col items-center space-y-6">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/8095981108"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg font-semibold px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FaWhatsapp size={24} className="text-green-500 dark:text-green-400" />
            +91 80959 81108
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:naveenrajbu208@gmail.com"
            className="flex items-center gap-4 text-lg font-semibold px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaEnvelope size={24} className="text-yellow-500 dark:text-yellow-400" />
            naveenrajbu208@gmail.com
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/naveen-raj-b-u-139b44214/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg font-semibold px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FaLinkedin size={24} className="text-blue-600 dark:text-blue-400" />
            linkedin.com/in/naveen-raj-b-u-139b44214
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
