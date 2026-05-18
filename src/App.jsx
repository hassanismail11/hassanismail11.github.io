import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import { getBaseUrlWithoutSlash, getLangFromPath } from "./utils/paths";

// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import SEO from "./components/SEO/SEO";

// Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

// Language route wrapper component
function LanguageRoute({ children }) {
  const location = useLocation();
  const { i18n } = useTranslation();

  const pathLang = getLangFromPath(location.pathname);

  // If language in URL doesn't match current i18n language, update i18n
  useEffect(() => {
    if (pathLang && pathLang !== i18n.language) {
      i18n.changeLanguage(pathLang);
    }
  }, [pathLang, i18n]);

  return children;
}

function AppContent() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
    AOS.refresh();
  }, [location.pathname, location.hash]);

  return (
    <LanguageRoute>
      <SEO />
      <div className="flex min-h-screen flex-col overflow-hidden bg-flik-light text-flik-darker transition-colors dark:bg-zinc-950 dark:text-flik-light">
        <Navbar />
        <main className="flex-1 relative ">
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* Language-prefixed routes (specific paths before `/:lang`) */}
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/*" element={<NotFound />} />

            {/* No language prefix — send to default locale */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageRoute>
  );
}

function App() {
  const basename = getBaseUrlWithoutSlash();

  return (
    <BrowserRouter basename={basename}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
