import React from "react";
import {
  Wifi,
  Wind,
  Tv,
  Bath,
  Sparkles,
  BedDouble,
  Car,
  KeyRound,
  FileCheck2,
  Clock,
} from "lucide-react";
import { PROJECT_PHOTOS } from "../config/photosConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ServiceCard, ServiceItemConfig } from "../components/ServiceCard";
import { EditorialBadge, MondrianDivider } from "../components/MondrianAccents";

const SERVICES_LIST: ServiceItemConfig[] = [
  {
    id: "wifi",
    title: "Le Wi-Fi",
    description:
      "Des équipements routeurs sont visibles dans les espaces photographiés. Contactez notre équipe pour connaître les modalités de connexion lors de votre séjour.",
    status: "visual-observed",
    statusLabel: "Équipement photographié",
    icon: Wifi,
    accent: "blue",
  },
  {
    id: "climatisation",
    title: "La climatisation",
    description:
      "Climatisation murale et brasseurs d'air visibles dans les hébergements photographiés. Renseignez-vous sur l'équipement précis de votre chambre.",
    status: "visual-observed",
    statusLabel: "Équipement photographié",
    icon: Wind,
    accent: "red",
  },
  {
    id: "television",
    title: "La télévision",
    description:
      "Téléviseurs à écran plat muraux installés face aux espaces nuit et bureau sur les photographies de la résidence.",
    status: "visual-observed",
    statusLabel: "Équipement photographié",
    icon: Tv,
    accent: "yellow",
  },
  {
    id: "salle-de-bain",
    title: "La salle de bain privative",
    description:
      "Salle d'eau contemporaine aux lignes noires et blanches avec vasque, miroir éclairé et douche à l'italienne visible dans le dossier photo.",
    status: "visual-observed",
    statusLabel: "Équipement photographié",
    icon: Bath,
    accent: "white",
  },
  {
    id: "menage",
    title: "Le ménage",
    description:
      "Les modalités et la fréquence d'entretien des chambres au cours du séjour vous sont précisées directement par notre équipe avant votre arrivée.",
    status: "on-inquiry",
    statusLabel: "Sur renseignement",
    icon: Sparkles,
    accent: "red",
  },
  {
    id: "linge",
    title: "Le linge de lit et de toilette",
    description:
      "Contactez-nous sur WhatsApp pour connaître le détail de la fourniture et du renouvellement du linge de lit et de toilette.",
    status: "on-inquiry",
    statusLabel: "Sur renseignement",
    icon: BedDouble,
    accent: "blue",
  },
  {
    id: "stationnement",
    title: "Le stationnement",
    description:
      "Pour organiser votre venue en véhicule à Saly Portudal, interrogez notre équipe sur les possibilités de stationnement aux abords de la résidence.",
    status: "on-inquiry",
    statusLabel: "Sur renseignement",
    icon: Car,
    accent: "yellow",
  },
  {
    id: "accueil",
    title: "Les modalités d'accueil",
    description:
      "Accueil personnalisé pour les 17 chambres de la résidence. Précisez votre heure d'arrivée estimée lors de votre échange sur WhatsApp.",
    status: "on-inquiry",
    statusLabel: "Sur renseignement",
    icon: KeyRound,
    accent: "white",
  },
  {
    id: "conditions",
    title: "Les conditions de séjour",
    description:
      "Durée de séjour, configuration des logements et informations spécifiques vous sont communiquées en toute transparence par notre équipe.",
    status: "on-inquiry",
    statusLabel: "Sur renseignement",
    icon: FileCheck2,
    accent: "red",
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F2] text-[#151515]">
      {/* SECTION 1 — INTRODUCTION */}
      <section aria-labelledby="services-intro-title" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 border-2 border-[#151515] bg-[#151515] p-[2px] shadow-[8px_8px_0px_0px_#151515]">
          <div className="lg:col-span-6 bg-[#F7F6F2] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <EditorialBadge label="Services & Équipements" accent="yellow" />
              <h1 id="services-intro-title" className="mt-6 font-serif-display text-3xl sm:text-5xl text-[#151515]">
                Les services du Mondrian.
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#151515]/85">
                Retrouvez les informations utiles pour préparer votre séjour au cœur de Saly Portudal. Notre équipe pourra vous renseigner sur les équipements, les services disponibles et les modalités d'accueil.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t-2 border-[#151515] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#151515]/75">
                Résidence de 17 chambres · Saly Portudal
              </span>
              <WhatsAppButton label="Réservation sur WhatsApp" variant="red" size="sm" />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 bg-[#151515] gap-[2px] min-h-[280px]">
            <div className="overflow-hidden bg-[#E7E5DF]">
              <img
                src={PROJECT_PHOTOS.kitchenetteDeskTv.src}
                alt={PROJECT_PHOTOS.kitchenetteDeskTv.alt}
                width={PROJECT_PHOTOS.kitchenetteDeskTv.width}
                height={PROJECT_PHOTOS.kitchenetteDeskTv.height}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden bg-[#E7E5DF]">
              <img
                src={PROJECT_PHOTOS.poolTerraceClose.src}
                alt={PROJECT_PHOTOS.poolTerraceClose.alt}
                width={PROJECT_PHOTOS.poolTerraceClose.width}
                height={PROJECT_PHOTOS.poolTerraceClose.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <MondrianDivider variant="a" />

      {/* SECTION 2 — PRÉSENTATION DES SERVICES */}
      <section aria-labelledby="services-grid-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <EditorialBadge label="Repères & Vérification" accent="blue" />
          <h2 id="services-grid-title" className="mt-4 font-serif-display text-3xl sm:text-4xl">
            Équipements et prestations à votre écoute.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#151515]/80">
            Afin de vous garantir une information exacte, nous distinguons les équipements visibles dans nos logements photographiés et les modalités de service qui vous sont précisées directement par notre équipe selon votre séjour.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <MondrianDivider variant="b" />

      {/* SECTION 3 — PRÉPARER SON SÉJOUR */}
      <section aria-labelledby="prepare-stay-title" className="bg-[#E7E5DF] py-16 sm:py-20 border-b-2 border-[#151515]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditorialBadge label="Informations pratiques" accent="red" />
            <h2 id="prepare-stay-title" className="mt-4 font-serif-display text-3xl sm:text-4xl lg:text-5xl">
              Les informations dont vous avez besoin.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#151515]/85">
              Les blocs ci-dessous rassemblent les repères pratiques de séjour. Les champs spécifiques non confirmés sont prêts à être complétés avant la mise en ligne définitive et vous sont précisés sur simple demande via WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Heures d'arrivée et de départ",
                field: "[À compléter avant mise en ligne — Horaires communiqués lors de votre demande sur WhatsApp]",
                accent: "border-t-4 border-t-[#D92727]",
              },
              {
                title: "Modalités de réservation",
                field: "Exclusivement par échange direct avec notre équipe via WhatsApp. Aucune réservation automatique en ligne.",
                accent: "border-t-4 border-t-[#1746A2]",
              },
              {
                title: "Conditions d'annulation",
                field: "[À compléter avant mise en ligne — Conditions détaillées transmises lors de votre demande de séjour]",
                accent: "border-t-4 border-t-[#F2C230]",
              },
              {
                title: "Moyens de paiement",
                field: "[À compléter avant mise en ligne — Modalités de règlement sur place ou à la réservation précisées sur WhatsApp]",
                accent: "border-t-4 border-t-[#151515]",
              },
              {
                title: "Règles de séjour",
                field: "[À compléter avant mise en ligne — Règlement intérieur de la résidence communiqué par l'équipe]",
                accent: "border-t-4 border-t-[#D92727]",
              },
              {
                title: "Informations pratiques",
                field: "Résidence hôtelière de 17 chambres située au cœur de Saly Portudal, Sénégal. Contactez-nous pour toute question particulière.",
                accent: "border-t-4 border-t-[#1746A2]",
              },
            ].map((block) => (
              <div
                key={block.title}
                className={`border-2 border-[#151515] bg-[#F7F6F2] p-6 shadow-[4px_4px_0px_0px_#151515] ${block.accent}`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151515]/60">
                  <Clock className="h-3.5 w-3.5 text-[#151515]" aria-hidden="true" />
                  <span>Fiche pratique</span>
                </div>
                <h3 className="mt-3 font-serif-display text-xl text-[#151515]">
                  {block.title}
                </h3>
                <p className="mt-3 border border-dashed border-[#151515]/40 bg-[#E7E5DF]/60 p-3 text-xs leading-relaxed text-[#151515]/85">
                  {block.field}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — UN RENSEIGNEMENT ? */}
      <section aria-labelledby="services-cta-title" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="border-2 border-[#151515] bg-[#F7F6F2] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#151515]">
          <div className="grid grid-cols-12 mb-6 h-3 border border-[#151515] bg-[#151515] gap-[2px]" aria-hidden="true">
            <div className="col-span-2 bg-[#1746A2]" />
            <div className="col-span-6 bg-[#F7F6F2]" />
            <div className="col-span-2 bg-[#D92727]" />
            <div className="col-span-2 bg-[#F2C230]" />
          </div>
          <h2 id="services-cta-title" className="font-serif-display text-3xl sm:text-5xl text-[#151515]">
            Parlons de votre séjour.
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#151515]/85">
            Vous souhaitez connaître les équipements disponibles ou obtenir des précisions avant votre arrivée ? Notre équipe est joignable directement sur WhatsApp.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Réservation sur WhatsApp" variant="red" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
};
