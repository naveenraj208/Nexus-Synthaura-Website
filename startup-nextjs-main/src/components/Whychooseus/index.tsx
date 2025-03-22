"use client";

import { FaTools, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Expertise & Innovation",
    description: "We bring cutting-edge solutions tailored to your needs, ensuring optimal results with our deep industry expertise.",
    icon: <FaTools size={40} className="text-blue-500" />,
  },
  {
    title: "Customer-Centric Approach",
    description: "Your success is our priority. We work closely with you to deliver solutions that drive real impact.",
    icon: <FaUsers size={40} className="text-green-500" />,
  },
  {
    title: "Security & Reliability",
    description: "We ensure top-tier security and reliability in every project, guaranteeing safety and efficiency.",
    icon: <FaShieldAlt size={40} className="text-red-500" />,
  },
  {
    title: "Proven Results",
    description: "Our track record speaks for itself. We consistently deliver measurable improvements and business growth.",
    icon: <FaChartLine size={40} className="text-yellow-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-900 text-white">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl mx-auto">
          We go beyond the ordinary to provide **exceptional** solutions. Here’s what sets us apart.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-center">{feature.icon}</div>

              {/* Title */}
              <h3 className="mt-4 text-center text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-center text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
