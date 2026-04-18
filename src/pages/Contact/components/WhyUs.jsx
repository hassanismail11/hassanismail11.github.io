import { useTranslation } from "react-i18next";

function WhyUsSection() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";
  const titleFont = i18n.language === "ar" ? "font-arabic" : "font-title";

  return (
    <div className="relative bg-gradient-to-br from-flik-darker via-flik-dark to-flik-darker overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #16c5a2 0, transparent 45%), radial-gradient(circle at 80% 60%, #e8f9f6 0, transparent 40%)",
        }}
      />
      <section className="relative z-10 py-24 md:py-32 flex flex-col items-center justify-center gap-10 px-4 md:px-24">
        <div
          className="flex flex-col justify-center items-center w-full max-w-4xl"
          data-aos="fade-right"
        >
          <h2
            className={`text-white text-center text-4xl md:text-6xl mb-4 ${titleFont} ${
              i18n.language === "ar" ? "font-bold" : "font-semibold"
            } tracking-tight`}
          >
            {t("contact.why-us.title")}
          </h2>
          <p
            className={`font-exo2 text-flik-light text-center text-2xl md:text-3xl font-semibold tracking-wide`}
          >
            Flik Techs
          </p>
        </div>
        <div
          className={`container mx-auto md:max-w-6xl pb-12 md:pb-16 px-4 ${body} font-body`}
        >
          <p className="text-flik-light/95 text-center text-lg md:text-2xl font-normal leading-relaxed">
            {t("contact.why-us.desc")}
          </p>
          <p className="text-black dark:text-white text-center font-title font-semibold text-xl md:text-2xl mt-6">
            {t("contact.why-us.accent")}
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhyUsSection;
