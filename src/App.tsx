import React, { useEffect } from "react";
import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { HomePage } from "./pages/HomePage";
import { PresentationPage } from "./pages/PresentationPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { PAGE_SEO } from "./config/siteConfig";

export function normalizePathname(rawPath: string): string {
  const clean = rawPath.replace(/\/index\.html$/i, "").replace(/\.html$/i, "");
  if (clean.endsWith("/presentation")) return "/presentation";
  if (clean.endsWith("/services")) return "/services";
  if (clean.endsWith("/contact")) return "/contact";
  return "/";
}

function detectBasename(rawPath: string): string {
  const match = rawPath.match(
    /^(.*?)(?:\/(?:index|presentation|services|contact)(?:\.html)?|\/)?$/i
  );
  return match && match[1] ? match[1] : "";
}

const RouteController: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    const normalized = normalizePathname(pathname);
    const seo = PAGE_SEO[normalized] || PAGE_SEO["/"];
    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, [pathname]);

  return null;
};

export const AppLayout: React.FC = () => {
  return (
    <>
      <RouteController />
      <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#151515] overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:border-2 focus:border-[#151515] focus:bg-[#F2C230] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase"
        >
          Aller au contenu principal
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/presentation.html" element={<PresentationPage />} />
            <Route path="/presentation/index.html" element={<PresentationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services.html" element={<ServicesPage />} />
            <Route path="/services/index.html" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact.html" element={<ContactPage />} />
            <Route path="/contact/index.html" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  );
};

export const App: React.FC = () => {
  const isFileProtocol =
    typeof window !== "undefined" && window.location.protocol === "file:";

  if (isFileProtocol) {
    const initialRoute = normalizePathname(window.location.pathname);
    return (
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppLayout />
      </MemoryRouter>
    );
  }

  const basename =
    typeof window !== "undefined"
      ? detectBasename(window.location.pathname)
      : "";

  return (
    <BrowserRouter basename={basename}>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;


