import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";
import { getAssetPath } from "../../utils/paths";
import { getPathWithoutLang } from "../../utils/paths";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentPath = getPathWithoutLang(location.pathname);

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath.startsWith(path);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleNavClick = () => {
    closeDrawer();
  };

  const isRTL = i18n.language === "ar";
  const bodyFont = isRTL ? "font-arabic" : "font-exo2";

  const linkClass = (active) =>
    `transition-colors ${
      active ? "text-flik-light" : "text-white hover:text-flik-light"
    }`;

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 ${bodyFont} text-lg`}
    >
      <div className="px-3 pt-3 md:px-6 md:pt-4">
        <div className="container mx-auto max-w-7xl rounded-2xl border border-white/10 bg-flik-darker/85 px-3 py-3 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 md:px-5 md:py-3">
          <div className="flex justify-between items-center gap-3">
            <Link
              to={getPath("/")}
              className="flex min-w-0 items-center gap-2 md:gap-3"
            >
              <img
                src={getAssetPath("logo/icon.svg")}
                alt=""
                className="h-10 w-auto shrink-0 md:h-12"
                width={40}
                height={50}
              />
              <span className="font-exo2 truncate text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Flik Techs
              </span>
            </Link>

            <nav className="hidden items-center gap-6 font-title font-medium uppercase tracking-wide text-white lg:flex xl:gap-8">
              <Link to={getPath("/")} className={linkClass(isActive("/"))}>
                {t("nav.home")}
              </Link>

              <Link
                to={`${getPath("/")}#about`}
                className={linkClass(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to={`${getPath("/")}#services`}
                className={linkClass(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                to={getPath("/contact")}
                className={linkClass(isActive("/contact"))}
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden items-center gap-1 lg:flex">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>

              <ThemeToggle className="lg:hidden" />

              <button
                type="button"
                onClick={toggleDrawer}
                className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-flik-light lg:hidden rounded-full hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isDrawerOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeDrawer}
          aria-hidden
        />
      )}

      <div
        className={`fixed top-0 z-50 h-full w-[min(100vw,20rem)] transform border-flik-dark/80 bg-flik-darker transition-transform duration-300 ease-in-out dark:border-zinc-700/80 dark:bg-zinc-950 lg:hidden ${
          isRTL ? "left-0 border-e" : "right-0 border-s"
        } ${
          isDrawerOpen
            ? "translate-x-0"
            : isRTL
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-5">
          <div className="mb-8 flex items-center justify-between gap-2">
            <Link
              to={getPath("/")}
              onClick={handleNavClick}
              className="flex min-w-0 items-center gap-2"
            >
              <img
                src={getAssetPath("logo/icon.svg")}
                alt=""
                className="h-9 w-auto shrink-0"
              />
              <span className="font-exo2 truncate text-base font-semibold text-white">
                Flik Techs
              </span>
            </Link>
            <button
              type="button"
              onClick={closeDrawer}
              className="rounded-full p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-flik"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 font-title uppercase tracking-wide">
            <Link
              to={getPath("/")}
              onClick={handleNavClick}
              className={`border-b border-white/10 py-3 text-lg font-medium transition-colors ${linkClass(
                isActive("/")
              )}`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to={`${getPath("/")}#about`}
              onClick={handleNavClick}
              className={`border-b border-white/10 py-3 text-lg font-medium transition-colors ${linkClass(
                isActive("/about")
              )}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to={`${getPath("/")}#services`}
              onClick={handleNavClick}
              className={`border-b border-white/10 py-3 text-lg font-medium transition-colors ${linkClass(
                false
              )}`}
            >
              {t("nav.services")}
            </Link>
            <Link
              to={getPath("/contact")}
              onClick={handleNavClick}
              className={`border-b border-white/10 py-3 text-lg font-medium transition-colors ${linkClass(
                isActive("/contact")
              )}`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="mt-auto space-y-4 border-t border-white/15 pt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium uppercase tracking-wide text-white/70">
                {t("nav.theme")}
              </span>
              <ThemeToggle />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
