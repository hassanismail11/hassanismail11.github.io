import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";

function OurPartnersSection() {
  const { t, i18n } = useTranslation();
  const totalImages = 12;

  const partnerImages = Array.from({ length: totalImages }, (_, i) =>
    getAssetPath(`img/partners/p-${i + 1}.png`)
  );

  return (
    <section className="relative px-4 w-full mb-20">
      <div className="container mx-auto pt-28 max-w-6xl relative z-10">
        <h2
          className={`mb-8 text-center font-bold tracking-tight text-flik-darker dark:text-flik-light md:mb-20 ${
            i18n.language === "ar" ? "font-arabic" : "font-title"
          }`}
          data-aos="fade-up"
        >
          {t("home.partners.title-1") && (
            <span className="text-4xl lg:text-6xl">
              {t("home.partners.title-1")}{" "}
            </span>
          )}
          <br />
          <span className="text-6xl lg:text-8xl">
            {t("home.partners.title-2")}
          </span>
        </h2>

        <div
          className="flex flex-wrap gap-4 md:gap-8 justify-center items-center"
          dir="ltr"
        >
          {partnerImages.map((partnerImage, index) => (
            <div
              className="flex items-center justify-center rounded-lg bg-white dark:bg-white border border-flik-light dark:border-flik-darker p-4 aspect-square opacity-80 hover:opacity-100 transition-opacity"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={partnerImage}
                alt=""
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSection;
