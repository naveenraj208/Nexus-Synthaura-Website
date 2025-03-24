import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content: Page Title & Description */}
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-3xl font-bold sm:text-4xl">{pageName}</h1>
              <p className="text-lg font-medium leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Content: Breadcrumb Navigation */}
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-lg font-medium hover:underline"
                  >
                    Home
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                </li>
                <li className="text-lg font-semibold">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Breadcrumb;
