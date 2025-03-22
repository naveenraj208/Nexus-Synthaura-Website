import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nexus Synthaura",
  description: "Get in touch with the Nexus Synthaura team for inquiries, collaborations, and support.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Nexus Synthaura"
        description="Have a question or need support? Reach out to Nexus Synthaura. We're here to help you with cutting-edge solutions."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
