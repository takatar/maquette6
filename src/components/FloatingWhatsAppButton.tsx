import React from "react";
import { WHATSAPP_RESERVATION_URL } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppButton";

/**
 * Bouton WhatsApp flottant en bas à droite de l'écran.
 * Discret, accessible sur mobile et ordinateur, ne masque ni la navigation ni les formulaires.
 */
export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
      <a
        href={WHATSAPP_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Le Mondrian sur WhatsApp pour une demande de réservation"
        title="Réservation via WhatsApp"
        className="pointer-events-auto group flex items-center gap-2.5 border-2 border-[#151515] bg-[#F7F6F2] px-3.5 py-2.5 sm:px-4 sm:py-3 text-[#151515] shadow-[4px_4px_0px_0px_#151515] transition-all duration-200 hover:bg-[#F2C230] focus-visible:outline-3 focus-visible:outline-[#1746A2]"
      >
        <span
          aria-hidden="true"
          className="flex h-7 w-7 items-center justify-center border border-[#151515] bg-[#D92727] text-[#F7F6F2] transition-colors group-hover:bg-[#151515]"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
