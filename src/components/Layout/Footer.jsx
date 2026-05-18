import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { socialMediaLinks } from "../../constants/social-media";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";
import { getAssetPath } from "../../utils/paths";
import { CONTACT_MAILTO, CONTACT_PHONE_TEL } from "../../constants/contact";

function Footer() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-exo2";

  return (
    <footer
      className={`pt-16 w-full bg-gradient-to-b from-flik-dark to-flik-darker text-white dark:from-zinc-950 dark:to-black ${bodyFont}`}
    >
      <div className="container mx-auto px-24">
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-8 w-full">
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
            <img
              src={getAssetPath("logo/icon.svg")}
              alt=""
              className="h-16 w-auto md:h-24 opacity-95"
            />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-exo2 text-2xl md:text-5xl font-semibold tracking-tight">
                Flik Techs
              </span>
              <p className="text-flik-light/90 text-lg md:text-xl mt-2 max-w-xs text-center md:text-start">
                {t("tagline.p1")} &quot;
                <span className="text-flik">{t("tagline.p2")}</span>&quot;{" "}
                {t("tagline.p3")}
              </p>
              {/* <div className="flex gap-3 mt-5">
                {socialMediaLinks.map((item) => {
                  const IconComponent = {
                    facebook: FaFacebook,
                    x: FaXTwitter,
                    instagram: FaInstagram,
                    linkedin: FaLinkedin,
                    youtube: FaYoutube,
                    tiktok: FaTiktok,
                  }[item.icon.toLowerCase()];

                  return (
                    <a
                      href={item.url}
                      key={item.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-flik-darker hover:text-flik-darker transition-colors h-10 w-10 bg-flik-light hover:bg-white rounded-full flex items-center justify-center"
                      aria-label={item.name}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div> */}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-start font-title border-s-0 sm:border-s border-flik-light/25 ps-0 sm:ps-8 uppercase tracking-wide text-sm">
            <Link
              to={getPath("/")}
              className="hover:text-flik-light transition-colors py-1"
            >
              {t("footer.home")}
            </Link>
            <Link
              to={`${getPath("/")}#about`}
              className="hover:text-flik-light transition-colors py-1"
            >
              {t("footer.about")}
            </Link>
            <a
              href={`${getPath("/")}#services`}
              className="hover:text-flik-light transition-colors py-1"
            >
              {t("footer.services")}
            </a>
            <Link
              to={getPath("/contact")}
              className="hover:text-flik-light transition-colors py-1"
            >
              {t("footer.contact")}
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start border-s-0 sm:border-s border-flik-light/25 ps-0 sm:ps-8 text-center md:text-start">
            <h3 className="font-title uppercase tracking-wide text-flik-light text-sm mb-3">
              {t("footer.contact-us")}
            </h3>
            <p className="text-flik-light/90">{t("footer.location")}</p>
            <a
              href={CONTACT_MAILTO}
              className="mt-2 text-white hover:text-flik-light transition-colors break-all"
            >
              {t("footer.email")}
            </a>
            <a
              href={CONTACT_PHONE_TEL}
              className="mt-1 text-white hover:text-flik-light transition-colors"
              dir="ltr"
            >
              {t("footer.phone")}
            </a>
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-white/10 py-4">
          <p className="text-flik-light/80 text-xs sm:text-sm">
            {t("footer.copyright")}{" "}
            <span className="font-exo2 font-semibold text-white">
              Flik Techs
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
