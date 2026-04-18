import { useTranslation } from "react-i18next";
import {
  FaPalette,
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileScreenButton,
  FaShieldHalved,
  FaDiagramProject,
} from "react-icons/fa6";

const iconWrap =
  "flex h-[120px] w-[120px] items-center justify-center md:h-[160px] md:w-[160px]";

const iconClass =
  "h-14 w-14 text-flik md:h-[4.5rem] md:w-[4.5rem] dark:text-flik-light";

const services = [
  {
    key: "product-design",
    Icon: FaPalette,
  },
  {
    key: "cloud-infrastructure",
    Icon: FaCloud,
  },
  {
    key: "data-apis",
    Icon: FaCode,
  },
  {
    key: "custom-software",
    Icon: FaLaptopCode,
  },
  {
    key: "devops-reliability",
    Icon: FaServer,
  },
  {
    key: "mobile-apps",
    Icon: FaMobileScreenButton,
  },
  {
    key: "security-compliance",
    Icon: FaShieldHalved,
  },
  {
    key: "strategy-architecture",
    Icon: FaDiagramProject,
  },
];

function ServicesSection() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";

  return (
    <section
      id="services"
      className="z-10 scroll-mt-24 px-4 pb-16 pt-8 md:pb-36 md:pt-16"
    >
      <div className={`container mx-auto max-w-6xl ${body}`}>
        <h2
          className={`mb-8 text-center text-4xl font-title tracking-tight text-flik-darker dark:text-flik-light md:mb-20 lg:text-6xl ${
            i18n.language === "ar" ? "font-arabic font-bold" : "font-semibold"
          }`}
          data-aos="fade-up"
        >
          {t("home.experts.title")}
        </h2>

        <div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
          dir="ltr"
        >
          {services.map((item, index) => {
            const { Icon } = item;
            const showDivider = index % 4 !== 3;

            return (
              <div
                key={item.key}
                className="relative group flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`${iconWrap} mb-2 rounded-2xl bg-white/80 p-4 ring-1 ring-flik/20 transition-colors group-hover:bg-flik-light-hover dark:bg-flik-darker/55 dark:ring-flik/30 dark:group-hover:bg-flik-dark/40 md:mb-8`}
                >
                  <Icon className={iconClass} aria-hidden />
                </div>
                <p
                  className={`text-lg text-flik-darker dark:text-flik-light md:text-3xl ${
                    i18n.language === "ar"
                      ? "font-arabic font-bold"
                      : "font-medium"
                  }`}
                >
                  {t(`services.${item.key}`)}
                </p>
                {showDivider && (
                  <div className="absolute bottom-0 -right-4 hidden h-16 w-0.5 -translate-y-1/2 transform bg-flik-dark/30 dark:bg-flik/35 md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
