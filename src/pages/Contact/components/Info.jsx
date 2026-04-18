import { useTranslation } from "react-i18next";

function InfoSection() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";
  const titleFont = i18n.language === "ar" ? "font-arabic" : "font-title";

  return (
    <div className="textured-paper">
      <section className="py-36 flex flex-col items-center justify-center gap-24 px-4 md:px-24">
        <h2
          className={`mx-auto mb-8 max-w-4xl text-center text-3xl font-bold text-flik-darker dark:text-flik-light md:text-4xl ${titleFont} ${body} font-body`}
        >
          {t("contact.info.desc")}
        </h2>
      </section>
    </div>
  );
}

export default InfoSection;
