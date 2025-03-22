"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container">
        <SectionTitle
          title="Flexible Pricing for Every Business"
          paragraph="Choose a plan that fits your needs. Whether you're a startup or an enterprise, our pricing is designed to scale with you."
          center
          width="665px"
        />

        {/* Pricing Toggle */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <span
              onClick={() => setIsMonthly(true)}
              className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                isMonthly ? "text-primary" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative w-14 h-7 flex items-center bg-gray-700 dark:bg-gray-500 rounded-full cursor-pointer"
            >
              <div
                className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  isMonthly ? "translate-x-0" : "translate-x-7"
                }`}
              ></div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                !isMonthly ? "text-primary" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for startups and small businesses looking for essential services."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Unlimited Project Use" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Updates" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="A great balance of features for growing businesses."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Unlimited Project Use" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Priority Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Updates" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Advanced features and premium support for enterprises."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Unlimited Project Use" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="24/7 Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Updates" status="active" />
          </PricingBox>
        </div>
      </div>

      {/* Background Graphics */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
