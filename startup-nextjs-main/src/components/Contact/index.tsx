"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-24 lg:py-32 bg-gray-900 text-white flex justify-center items-center min-h-screen"
    >
      <motion.div 
        className="w-full max-w-3xl bg-gray-800 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
          Need Help? Open a Ticket
        </h2>
        <p className="text-lg text-gray-400 text-center mb-6">
          Our support team will respond to your request as soon as possible.
        </p>
        
        <div className="w-full flex justify-center">
          <iframe 
            width="100%" 
            height="500px" 
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Ys2766nA_0apLF8jAAhxZGwtbfg28yJDsNCeM_PE1A9UNjBaTktGMVpVQkpHNTFYSVBLUEhHQllFNi4u&embed=true" 
            frameBorder="0" 
            marginWidth={0} 
            marginHeight={0} 
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh", borderRadius: "12px" }}
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
