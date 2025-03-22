"use client";

import { useTheme } from "next-themes";

const NewsletterBox = () => {
  const { resolvedTheme } = useTheme(); // More SSR-friendly

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Stay updated with the latest news and exclusive updates.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          aria-label="Enter your name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <button
          type="submit"
          className="mb-5 w-full cursor-pointer rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit transition duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Subscribe
        </button>
        <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          No spam guaranteed. We respect your privacy.
        </p>
      </div>

      {/* SVG Background Elements */}
      <div>
        <span className="absolute left-2 top-7">
          <svg width="57" height="65" viewBox="0 0 57 65" fill="none">
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill={resolvedTheme === "light" ? "#4A6CF7" : "#fff"}
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsletterBox;
