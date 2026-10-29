import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";
import { LegalModal } from "./LegalModal";
import {
  DEMO_CONTACT_INFO,
  NAVIGATION_ITEMS,
  WHATSAPP_RESERVATION_URL,
} from "../config/siteConfig";

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<"mentions" | "privacy" | null>(null);

  return (
    <footer className="border-t-2 border-[#151515] bg-[#151515] text-[#F7F6F2]">
      <div
        aria-hidden="true"
        className="grid h-4 w-full grid-cols-12 border-b-2 border-[#151515] bg-[#151515] gap-[2px]"
      >
        <div className="col-span-3 bg-[#F7F6F2]" />
        <div className="col-span-2 bg-[#D92727]" />
        <div className="col-span-4 bg-[#E7E5DF]" />
        <div className="col-span-2 bg-[#1746A2]" />
        <div className="col-span-1 bg-[#F2C230]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Logo variant="light" />
              <p className="max-w-sm text-sm leading-relaxed text-[#E7E5DF]/85">
                Résidence hôtelière de 17 chambres située au cœur de la station
                balnéaire de Saly Portudal, au Sénégal. Une adresse à taille
                humaine alliant confort contemporain et identité graphique
                inspirée de Piet Mondrian.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="inline-grid h-8 w-44 grid-cols-6 border border-[#F7F6F2]/40 bg-[#151515] gap-[2px] p-[2px]"
            >
              <span className="col-span-2 bg-[#D92727]" />
              <span className="col-span-2 bg-[#F7F6F2]" />
              <span className="col-span-1 bg-[#F2C230]" />
              <span className="col-span-1 bg-[#1746A2]" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h2 className="font-serif-display text-base tracking-wider uppercase text-[#F2C230]">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-[#E7E5DF] hover:text-[#F2C230] transition-colors"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#D92727]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-serif-display text-base tracking-wider uppercase text-[#F2C230]">
                Coordonnées
              </h2>
              <span className="border border-[#F2C230]/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#F2C230]">
                Démo à remplacer
              </span>
            </div>

            <ul className="space-y-3 text-sm text-[#E7E5DF]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#D92727] mt-1" />
                <span>{DEMO_CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#F2C230]" />
                <span>{DEMO_CONTACT_INFO.phoneDisplay} (démo)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#1746A2]" />
                <span className="break-all">{DEMO_CONTACT_INFO.email}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={WHATSAPP_RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-[#F7F6F2] bg-[#D92727] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F7F6F2] hover:bg-[#F2C230] hover:text-[#151515]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#F7F6F2]/20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E7E5DF]/70">
          <p>
            © {new Date().getFullYear()} {DEMO_CONTACT_INFO.name} — Résidence
            hôtelière à Saly Portudal, Sénégal.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal("mentions")}
              className="underline underline-offset-4 hover:text-[#F2C230] cursor-pointer"
            >
              Mentions légales
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="underline underline-offset-4 hover:text-[#F2C230] cursor-pointer"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </footer>
  );
};
