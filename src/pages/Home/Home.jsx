import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatisticsSection from "./components/StatisticsSection";
import OurPartnersSection from "./components/OurPartners";
import AboutSection from "./components/About";

function Home() {
  const location = useLocation();
  const banners = ["home-hero"];

  useEffect(() => {
    if (location.hash === "#services") {
      requestAnimationFrame(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.hash, location.pathname]);

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
