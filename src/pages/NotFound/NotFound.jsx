import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

function NotFound() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const params = useParams();
  const splat = params["*"];
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";
  const titleFont = i18n.language === "ar" ? "font-arabic" : "font-title";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t("notFound.seoTitle");
    return () => {
      document.title = previousTitle;
    };
  }, [t, i18n.language]);

  return (
    <div
      className={`flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center ${body}`}
    >
      <p
        className={`font-title text-7xl font-bold text-flik md:text-9xl ${titleFont}`}
        aria-hidden
      >
        404
      </p>
      <h1
        className={`mt-4 max-w-xl text-2xl font-semibold text-flik-darker dark:text-flik-light md:text-3xl ${titleFont}`}
      >
        {t("notFound.title")}
      </h1>
      <p className="mt-3 max-w-md text-flik-darker/85 dark:text-flik-light/85">
        {t("notFound.message")}
      </p>
      {splat ? (
        <p
          className="mt-2 max-w-lg break-all font-mono text-sm text-flik-dark dark:text-flik/80"
          dir="ltr"
        >
          /{splat}
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to={getPath("/")}
          className="rounded-full bg-flik px-6 py-3 font-semibold text-flik-darker transition-colors hover:bg-flik-hover dark:text-flik-darker"
        >
          {t("notFound.backHome")}
        </Link>
        <Link
          to={getPath("/contact")}
          className="rounded-full border border-flik-dark/25 px-6 py-3 font-semibold text-flik-darker transition-colors hover:border-flik hover:bg-flik-light/50 dark:border-flik/40 dark:text-flik-light dark:hover:bg-flik-darker/50"
        >
          {t("notFound.contact")}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
