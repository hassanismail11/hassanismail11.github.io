import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";

  return (
    <section className="textured-paper py-20 px-4" id="about">
      <h2 className="text-center text-4xl font-title tracking-tight text-flik-darker dark:text-flik-light md:mb-20 lg:text-6xl">
        {t("contact.why-us.title")}
      </h2>
      <div
        className={`container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-32 px-4 pb-8 font-body text-center ${body}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-sm font-medium text-flik-darker dark:text-flik-light/95 sm:text-base md:text-xl flex flex-col gap-8">
          <span className="font-title text-lg font-bold text-flik-darker dark:text-flik-light sm:text-xl md:text-2xl capitalize">
            {t("home.who.p1.bold")}{" "}
          </span>
          <br />
          {t("home.who.p1.text")}
        </p>
        <p className="mt-4 text-sm font-medium text-flik-darker dark:text-flik-light/95 sm:text-base md:text-xl flex flex-col gap-8">
          <span className="font-title text-lg font-bold text-flik-darker dark:text-flik-light sm:text-xl md:text-2xl capitalize">
            {t("home.who.p2.bold")}{" "}
          </span>
          <br />
          {t("home.who.p2.text")}
        </p>
        <p className="mt-4 text-sm font-medium text-flik-darker dark:text-flik-light/95 sm:text-base md:text-xl flex flex-col gap-8">
          <span className="font-title text-lg font-bold text-flik-darker dark:text-flik-light sm:text-xl md:text-2xl capitalize">
            {t("home.who.p3.bold")}{" "}
          </span>
          <br />
          {t("home.who.p3.text")}
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
