import HeroSection from "../../components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatisticsSection from "./components/StatisticsSection";
import OurPartnersSection from "./components/OurPartners";
import AboutSection from "./components/About";

function Home() {
  const banners = ["home-hero"];

  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <HeroSection banners={banners} />
      <ServicesSection />
      <AboutSection />
      <StatisticsSection />
      <OurPartnersSection />
    </div>
  );
}

export default Home;
