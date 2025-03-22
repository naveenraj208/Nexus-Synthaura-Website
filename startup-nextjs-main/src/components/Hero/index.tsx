import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[900px] text-center">
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                Elevate Your Business with{" "}
                <span className="text-primary">Nexus Synthaura</span>
              </h1>
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl">
                We provide cutting-edge digital solutions tailored to your needs. 
                From AI-driven automation to custom software development, 
                Nexus Synthaura transforms your ideas into reality.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/services"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg duration-300 ease-in-out hover:bg-primary/80"
                >
                  🚀 Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-900 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-md duration-300 ease-in-out hover:bg-gray-900 hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                >
                  Get a Free Consultation
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Trusted by leading businesses worldwide 🌍
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
