"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  &quot;Innovating the Future, Powering Possibilities.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Crafted With love by{" "}
              <a
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Nexus Synthaura Technologies
              </a>
            </p>
          </div>
        </div>

        {/* === 🌟 Animated Elements Across Middle to Right === */}
        <motion.div
          className="absolute left-1/2 top-16"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="url(#grad1)" opacity="0.7" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF73FA" />
                <stop offset="100%" stopColor="#2D8CFF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-20 bottom-10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="25,5 45,45 5,45" fill="url(#grad2)" />
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2D8CFF" />
                <stop offset="100%" stopColor="#FF73FA" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute left-1/3 bottom-16 w-6 h-6 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute right-1/4 top-14 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-2/3 bottom-28 w-10 h-10 bg-gradient-to-r from-blue-300 to-pink-400 rounded-full blur-lg opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </footer>
    </>
  );
};

export default Footer;
