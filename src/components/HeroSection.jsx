import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAssetPath } from "../utils/paths";
import { useLocalizedNavigation } from "../hooks/useLocalizedNavigation";

const BANNER_FILES = {
  "home-hero": "img/hero.jpg",
};

function HeroSection({
  banners = ["home-hero"],
  minHeight = "80vh",
  showCTA = true,
}) {
  const { t, i18n } = useTranslation();
  const key = banners[0] || "home-hero";
  const candidate = BANNER_FILES[key] || BANNER_FILES["home-hero"];
  const [showImage, setShowImage] = useState(true);
  const isAr = i18n.language === "ar";
  const { getPath } = useLocalizedNavigation();

  return (
    <section
      className={`relative flex min-h-[${minHeight}] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-flik-light pb-24 pt-28 dark:from-transparent dark:to-zinc-950 md:pb-32`}
      aria-label={t("hero.tagline")}
    >
      {showImage && (
        <img
          src={getAssetPath(candidate)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          onError={() => setShowImage(false)}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-flik-light dark:from-transparent dark:to-zinc-950 pointer-events-none"
        aria-hidden
      />

      <div
        className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
        data-aos="fade-up"
      >
        <h1
          className={`text-flik-darker dark:text-white text-4xl sm:text-5xl md:text-6xl  font-semibold capitalize tracking-tight mb-4 md:mb-6 ${
            isAr ? "font-arabic" : "font-title"
          }`}
        >
          {t("tagline.p1")} <br />
          &quot;<span className="text-flik">{t("tagline.p2")}</span>&quot;{" "}
          <br />
          {t("tagline.p3")}
        </h1>

        {showCTA && (
          <Link
            to={getPath("/contact")}
            className={`bg-flik text-flik-darker dark:text-white px-4 py-2 my-4 rounded-md text-lg font-semibold ${
              isAr ? "font-arabic" : "font-exo2"
            }`}
            data-aos-delay="100"
          >
            {t("contact.contact-us")}
          </Link>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
