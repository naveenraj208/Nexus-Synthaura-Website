import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "B.U. Naveen Raj",
    designation: "AI Researcher & Developer",
    content:
      "This project showcases my expertise in AI and software development, delivering efficient and innovative solutions to complex problems.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Saiwin Lights",
    designation: "Technology Innovator",
    content:
      "An incredible journey of building futuristic tech solutions with a focus on modularity, efficiency, and real-world applications.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "AI & ML Community",
    designation: "Experts & Developers",
    content:
      "A cutting-edge AI-powered project that blends innovation with practicality, setting new standards in machine learning applications.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What People Say"
          paragraph="Hear from experts and innovators who have experienced the impact of our work in AI, technology, and software development."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
