import { useTranslation } from "react-i18next";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { switchLanguage } = useLocalizedNavigation();

  const handleLanguageChange = (newLang) => {
    switchLanguage(newLang);
  };

  const btn =
    "font-exo2 transition-colors text-white hover:text-flik-light focus:outline-none focus-visible:ring-2 focus-visible:ring-flik rounded px-1";

  return (
    <div className="flex gap-2 px-3 py-1 text-lg uppercase tracking-wide">
      {i18n.language === "ar" && (
        <button type="button" onClick={() => handleLanguageChange("en")} className={btn}>
          {t("nav.switch-lang")}
        </button>
      )}
      {i18n.language === "en" && (
        <button type="button" onClick={() => handleLanguageChange("ar")} className={btn}>
          {t("nav.switch-lang")}
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
