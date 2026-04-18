import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_MAILTO,
  CONTACT_PHONE_TEL,
} from "../../../constants/contact";

function ContactDetails() {
  const { t, i18n } = useTranslation();
  const body = i18n.language === "ar" ? "font-arabic" : "font-exo2";
  const titleFont = i18n.language === "ar" ? "font-arabic" : "font-title";

  const cardClass =
    "flex flex-1 flex-col items-center gap-4 rounded-2xl border border-flik/20 bg-white/90 p-8 text-center shadow-sm transition-colors hover:border-flik/40 hover:bg-flik-light/80 dark:border-flik/25 dark:bg-flik-darker/50 dark:hover:bg-flik-dark/30 sm:items-start sm:text-start";

  return (
    <section
      className={`border-t border-flik-dark/10 bg-flik-light/40 px-4 py-16 dark:border-flik/20 dark:bg-zinc-950/40 md:py-20 ${body}`}
      aria-labelledby="contact-details-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <h2
          id="contact-details-heading"
          className={`mb-3 text-center text-3xl font-bold text-flik-darker dark:text-flik-light md:text-4xl ${titleFont}`}
          data-aos="fade-up"
        >
          {t("contact.details.title")}
        </h2>
        <p
          className="mb-10 text-center text-flik-darker/85 dark:text-flik-light/85 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {t("contact.details.subtitle")}
        </p>

        <div
          className="flex flex-col gap-6 sm:flex-row sm:justify-center"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <a href={CONTACT_MAILTO} className={`group ${cardClass}`}>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flik/15 text-flik dark:bg-flik/25 dark:text-flik-light">
              <FaEnvelope className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-flik-dark dark:text-flik-light/80">
                {t("contact.details.emailLabel")}
              </p>
              <p className="mt-1 break-all font-medium text-flik-darker group-hover:text-flik dark:text-flik-light dark:group-hover:text-white md:text-lg">
                {CONTACT_EMAIL_ADDRESS}
              </p>
            </div>
          </a>

          <a
            href={CONTACT_PHONE_TEL}
            className={`group ${cardClass}`}
            dir="ltr"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flik/15 text-flik dark:bg-flik/25 dark:text-flik-light">
              <FaPhone className="h-6 w-6" aria-hidden />
            </span>
            <div className="w-full sm:text-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-flik-dark dark:text-flik-light/80">
                {t("contact.details.phoneLabel")}
              </p>
              <p className="mt-1 font-medium text-flik-darker group-hover:text-flik dark:text-flik-light dark:group-hover:text-white md:text-lg">
                {t("footer.phone")}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
