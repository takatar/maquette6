import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { NAVIGATION_ITEMS } from "../config/siteConfig";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F6F2]/95 backdrop-blur-sm border-b-2 border-[#151515]">
      {/* Filet supérieur Mondrian discret */}
      <div
        aria-hidden="true"
        className="grid h-1.5 w-full grid-cols-12 bg-[#151515] gap-[2px]"
      >
        <div className="col-span-6 bg-[#F7F6F2]" />
        <div className="col-span-2 bg-[#D92727]" />
        <div className="col-span-2 bg-[#1746A2]" />
        <div className="col-span-2 bg-[#F2C230]" />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Navigation principale sur ordinateur */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-xs lg:text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "bg-[#151515] text-[#F7F6F2]"
                    : "text-[#151515] hover:bg-[#E7E5DF]"
                }`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center gap-2">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 bg-[#F2C230] inline-block"
                    />
                  )}
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions à droite (Bouton Réservation toujours accessible + Menu mobile) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Sur mobile : bouton Réservation compact mais immédiatement visible dans le header */}
          <div className="block md:hidden">
            <WhatsAppButton
              label="Réservation"
              variant="red"
              size="sm"
            />
          </div>

          {/* Sur ordinateur : bouton Réservation principal */}
          <div className="hidden md:block">
            <WhatsAppButton
              label="Réservation"
              variant="primary"
              size="md"
            />
          </div>

          {/* Bouton d'ouverture du menu mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center border-2 border-[#151515] bg-[#F7F6F2] text-[#151515] hover:bg-[#E7E5DF] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Navigation mobile"
          className="md:hidden border-t-2 border-[#151515] bg-[#F7F6F2]"
        >
          <div className="grid grid-cols-1 divide-y-2 divide-[#151515]">
            {NAVIGATION_ITEMS.map((item, index) => {
              const accents = ["bg-[#D92727]", "bg-[#1746A2]", "bg-[#F2C230]", "bg-[#151515]"];
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] ${
                      isActive
                        ? "bg-[#151515] text-[#F7F6F2]"
                        : "bg-[#F7F6F2] text-[#151515] hover:bg-[#E7E5DF]"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 border border-[#151515] ${accents[index % accents.length]}`}
                  />
                </NavLink>
              );
            })}
            <div className="p-4 bg-[#E7E5DF]">
              <WhatsAppButton
                label="Réservation sur WhatsApp"
                variant="red"
                size="md"
                fullWidth
              />
              <p className="mt-2 text-center text-[11px] text-[#151515]/75">
                Réponse directe par notre équipe · Saly Portudal, Sénégal
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
