import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Whychooseus from "@/components/Whychooseus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Synthaura Technologies",
  description: "This is Home for Nexus Synthaura website",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Whychooseus />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      
    </>
  );
}
