import { useTranslation } from "react-i18next";

function StatisticsSection() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";

  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-flik-darker px-8 dark:bg-black" dir="ltr">
        <div className="container mx-auto py-12 sm:py-20 md:py-28 lg:py-36 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-title font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  6
                </span>
                <span className="text-flik font-bold font-title text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-flik-light font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${body}`}
              >
                {t("home.stats.years")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-title font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  10
                </span>
                <span className="text-flik font-title font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-flik-light font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${body}`}
              >
                {t("home.stats.professionals")}
              </p>
            </div>
            <div
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-title font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
                  23
                </span>
                <span className="text-flik font-title font-bold text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
                  +
                </span>
              </div>
              <p
                className={`text-flik-light font-bold text-sm sm:text-base md:text-2xl lg:text-4xl uppercase ${body}`}
              >
                {t("home.stats.projects")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
