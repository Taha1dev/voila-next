// Components
import Proposal from "@/components/Home/proposal/Proposal";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import HeroBanner from "@/components/highlight/HeroBanner";
import NavBar from "@/components/nav/NavBar";

const Contact = () => {
  return (
    <>
      <HeroBanner />
      <ContactForm />
      <Proposal />
    </>
  );
};

export default Contact;
