import HeroSection from "../../components/HeroSection";
import InfoSection from "./components/Info";
import ContactDetails from "./components/ContactDetails";
import WhyUsSection from "./components/WhyUs";

function Contact() {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <HeroSection banners={["contact-us"]} />
      <InfoSection />
      <ContactDetails />
      <WhyUsSection />
    </div>
  );
}

export default Contact;
