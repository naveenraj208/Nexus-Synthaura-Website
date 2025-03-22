import Image from "next/image";

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-9 transform transition duration-300 hover:scale-105">
    <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 sm:text-2xl lg:text-xl xl:text-2xl">
      {title}
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      {description}
    </p>
  </div>
);

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="Services"
                width={500}
                height={500}
                className="drop-shadow-lg dark:hidden"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Services Dark Mode"
                width={500}
                height={500}
                className="hidden dark:block"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <Feature title="Full-Stack Development" description="Building high-performance web applications with Next.js, React, and modern frameworks." />
              <Feature title="Machine Learning & AI" description="Developing AI models, including NLP, sentiment analysis, and network security solutions." />
              <Feature title="UI/UX & Animations" description="Creating visually appealing, interactive designs with smooth animations and effects." />
              <Feature title="Embedded Systems & IoT" description="Designing intelligent systems, such as traffic management and energy allocation solutions." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
