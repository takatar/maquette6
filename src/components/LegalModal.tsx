import React from "react";
import { X } from "lucide-react";
import { DEMO_CONTACT_INFO } from "../config/siteConfig";

interface LegalModalProps {
  type: "mentions" | "privacy" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515]/80 p-4"
    >
      <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border-2 border-[#151515] bg-[#F7F6F2] p-6 sm:p-8 text-[#151515] shadow-[8px_8px_0px_0px_#D92727]">
        <div className="flex items-start justify-between gap-4 border-b-2 border-[#151515] pb-4">
          <h3
            id="legal-modal-title"
            className="font-serif-display text-2xl text-[#151515]"
          >
            {type === "mentions"
              ? "Mentions légales"
              : "Politique de confidentialité"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="border-2 border-[#151515] bg-[#E7E5DF] p-1.5 hover:bg-[#D92727] hover:text-[#F7F6F2] transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {type === "mentions" ? (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <p className="border-l-4 border-[#F2C230] bg-[#E7E5DF] p-3 font-medium">
              Note importante : Les informations ci-dessous incluent des
              coordonnées de démonstration qui devront être remplacées par les
              données juridiques officielles de l'établissement avant la
              publication définitive du site.
            </p>
            <p>
              <strong>Établissement présenté :</strong> Le Mondrian, résidence
              hôtelière de 17 chambres située au cœur de Saly Portudal, Sénégal.
            </p>
            <p>
              <strong>Adresse (démonstration) :</strong>{" "}
              {DEMO_CONTACT_INFO.address}
            </p>
            <p>
              <strong>Téléphone (démonstration) :</strong>{" "}
              {DEMO_CONTACT_INFO.phoneDisplay}
            </p>
            <p>
              <strong>E-mail (démonstration, non opérationnel) :</strong>{" "}
              {DEMO_CONTACT_INFO.email}
            </p>
            <p>
              <strong>Référence artistique :</strong> Le nom « Le Mondrian » et
              l'identité visuelle du site constituent un hommage esthétique aux
              recherches d'équilibre géométrique de Piet Mondrian, sans
              prétendre que l'artiste ou ses ayants droit ont conçu ou approuvé
              l'établissement.
            </p>
            <p>
              <strong>Crédits photographiques :</strong> Toutes les
              photographies diffusées sur ce site proviennent exclusivement du
              dossier photographique du projet Le Mondrian.
            </p>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Demandes de réservation via WhatsApp :</strong> Le site Le
              Mondrian ne comporte aucun moteur de réservation autonome ni
              système de paiement en ligne. Toute demande de disponibilité ou de
              réservation s'effectue directement via WhatsApp.
            </p>
            <p>
              <strong>Utilisation des données :</strong> Les informations que
              vous communiquez lors d'un échange WhatsApp (identité, dates de
              séjour souhaitées, questions) sont destinées uniquement au
              traitement de votre demande par l'équipe du Mondrian.
            </p>
            <p>
              <strong>Formulaire de contact :</strong> En l'absence de serveur
              d'envoi d'e-mails connecté sur cette maquette, le formulaire de
              contact ne stocke aucune donnée sur un serveur tiers et ne simule
              aucun envoi fictif. Il vous permet de préparer votre message pour
              le transmettre directement via WhatsApp.
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end border-t border-[#151515]/20 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="border-2 border-[#151515] bg-[#151515] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#F7F6F2] hover:bg-[#D92727] cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
