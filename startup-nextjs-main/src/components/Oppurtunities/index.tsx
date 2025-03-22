'use client'
import { motion } from "framer-motion";

const Opportunities = () => {
  return (
    <section
      id="opportunities"
      className="relative z-10 overflow-hidden bg-gray-50 dark:bg-gray-900 py-16 px-6 md:py-20 md:px-12"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2 
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Opportunities & Internships
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Join <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold">Nexus Synthaura</span> and work on cutting-edge AI, software, and hardware innovations.
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Outreach Team", desc: "Connect with industry leaders, clients, and partners." },
            { title: "Software Engineers", desc: "Develop AI-driven applications and automation." },
            { title: "Electronics Engineers", desc: "Work on smart hardware, IoT, and embedded systems." }
          ].map((role, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="mailto:naveenrajbu2082@gmail.com" 
            className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:scale-105"
          >
            📩 Send Your Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunities;
