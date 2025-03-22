"use client";

import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const founders = [
  {
    name: "B.U. Naveen Raj",
    title: "Director | AI Researcher & Developer",
    description:
      "An innovative AI researcher and developer, pioneering next-gen technology solutions with a passion for efficiency and modularity.",
    image: "/images/founders/naveen.png",
    linkedin: "https://www.linkedin.com/in/b-u-naveen-raj",
    instagram: "https://www.instagram.com/naveenraj",
    whatsapp: "https://wa.me/8095981108",
  },
  {
    name: "Karthik Vijaykumar",
    title: "Director | Technology Strategist",
    description:
      "A visionary tech leader focused on creating sustainable and scalable technology solutions for the future.",
    image: "/images/founders/karthik.png",
    linkedin: "https://www.linkedin.com/in/karthik-vijaykumar",
    instagram: "https://www.instagram.com/karthikv",
    whatsapp: "https://wa.me/XXXXXXXXXX",
  },
];

const FoundersSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-900 text-white">
      <div className="container">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Meet Our Founders
        </h2>

        {/* Founder Boxes */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800 p-8 shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-blue-500"
                />
              </div>

              {/* Name & Title */}
              <h3 className="mt-4 text-center text-2xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="text-center text-lg font-medium text-blue-400">
                {founder.title}
              </p>

              {/* Description */}
              <p className="mt-4 text-center text-gray-300">{founder.description}</p>

              {/* Social Icons */}
              <div className="mt-6 flex justify-center space-x-6">
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={28} className="text-blue-500 hover:text-blue-400 transition-all" />
                </a>
                <a href={founder.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} className="text-pink-500 hover:text-pink-400 transition-all" />
                </a>
                <a href={founder.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={28} className="text-green-500 hover:text-green-400 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
