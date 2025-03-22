"use client";

import { motion } from "framer-motion";

const NexusSynthaura = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] bg-gray-900 text-white overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-pink-500/10 blur-[100px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          NEXUS SYNTHAURA
        </motion.h1>

        <motion.h2
          className="mt-2 text-lg md:text-2xl font-semibold text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          TECHNOLOGIES
        </motion.h2>

        {/* Glowing Border Box */}
        <motion.div
          className="mt-8 px-8 py-4 border border-blue-500/50 rounded-lg shadow-lg bg-gray-800/40 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <p className="text-gray-200">
            Innovating the Future with Advanced Tech Solutions 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NexusSynthaura;
