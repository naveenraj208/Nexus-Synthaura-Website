import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features"; // Assuming Features is index.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Nexus Synthaura",
  description: "Discover our innovative services at Nexus Synthaura, tailored to drive success and efficiency.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Explore the cutting-edge solutions offered by Nexus Synthaura to empower your business and drive growth."
      />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default ServicesPage;
