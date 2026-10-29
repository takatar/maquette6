import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROJECT_PHOTOS } from "../config/photosConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { EditorialBlock } from "../components/EditorialBlock";
import {
  EditorialBadge,
  MondrianArtComposition,
  MondrianDivider,
} from "../components/MondrianAccents";

export const PresentationPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F2] text-[#151515]">
      {/* SECTION 1 — INTRODUCTION */}
      <section
        aria-labelledby="presentation-intro-title"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 border-2 border-[#151515] bg-[#151515] p-[2px] shadow-[8px_8px_0px_0px_#151515]">
          <div className="lg:col-span-7 bg-[#F7F6F2] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <EditorialBadge label="Présentation · Saly Portudal" accent="blue" />
              <h1
                id="presentation-intro-title"
                className="mt-6 font-serif-display text-3xl sm:text-5xl leading-[1.1] text-[#151515]"
              >
                Le Mondrian, une autre vision du séjour à Saly.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#151515]/85">
                Située au cœur de Saly Portudal, au Sénégal, la résidence
                hôtelière Le Mondrian propose un univers contemporain, marqué
                par l'équilibre des formes, la simplicité et une identité
                graphique distinctive.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 border-t-2 border-[#151515] pt-6 gap-4 text-xs">
              <div>
                <span className="font-bold uppercase tracking-wider text-[#D92727]">
                  Identité
                </span>
                <p className="mt-1 text-[#151515]/75">Géométrie & clarté</p>
              </div>
              <div className="border-l-2 border-[#151515] pl-4">
                <span className="font-bold uppercase tracking-wider text-[#1746A2]">
                  Capacité
                </span>
                <p className="mt-1 text-[#151515]/75">17 chambres</p>
              </div>
              <div className="border-l-2 border-[#151515] pl-4">
                <span className="font-bold uppercase tracking-wider text-[#151515]">
                  Destination
                </span>
                <p className="mt-1 text-[#151515]/75">Saly Portudal</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden bg-[#E7E5DF] min-h-[320px]">
            <img
              src={PROJECT_PHOTOS.exteriorFacadeStreet.src}
              alt={PROJECT_PHOTOS.exteriorFacadeStreet.alt}
              width={PROJECT_PHOTOS.exteriorFacadeStreet.width}
              height={PROJECT_PHOTOS.exteriorFacadeStreet.height}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <MondrianDivider variant="a" />

      {/* SECTION 2 — NOTRE CONCEPT */}
      <section aria-labelledby="concept-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <EditorialBadge label="Notre concept" accent="red" />
          <h2 id="concept-title" className="mt-4 font-serif-display text-3xl sm:text-4xl lg:text-5xl">
            L'équilibre dans chaque détail.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <EditorialBlock
            number="I"
            accent="red"
            title="L'esthétique"
            text="Un univers visuel inspiré des compositions géométriques de Piet Mondrian."
          />
          <EditorialBlock
            number="II"
            accent="blue"
            title="Le confort"
            text="Une approche de l'hébergement centrée sur le séjour et les besoins des voyageurs, sans promettre de prestations non vérifiées."
          />
          <EditorialBlock
            number="III"
            accent="yellow"
            title="La situation"
            text="Une résidence située au cœur de Saly Portudal, une station balnéaire du Sénégal."
          />
        </div>
      </section>

      <MondrianDivider variant="b" />

      {/* SECTION 3 — L'INSPIRATION MONDRIAN */}
      <section aria-labelledby="inspiration-title" className="bg-[#E7E5DF] py-16 sm:py-20 border-b-2 border-[#151515]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <EditorialBadge label="Hommage artistique" accent="yellow" />
              <h2 id="inspiration-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl">
                Quand l'art inspire l'hospitalité.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#151515]/85">
                Le nom Le Mondrian fait écho à Piet Mondrian et à sa recherche d'équilibre entre les lignes, les formes et les couleurs. Cette inspiration se retrouve dans notre identité visuelle : une composition claire, des contrastes affirmés et une attention particulière portée aux détails.
              </p>
              <div className="border-l-4 border-[#151515] bg-[#F7F6F2] p-4 text-xs leading-relaxed text-[#151515]/80">
                Cette démarche architecturale et graphique constitue une inspiration esthétique contemporaine, sans prétendre que Piet Mondrian ou ses ayants droit ont conçu ou approuvé l'établissement.
              </div>
            </div>

            <div className="lg:col-span-6">
              <MondrianArtComposition />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — UNE RÉSIDENCE DE 17 CHAMBRES */}
      <section aria-labelledby="format-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="border-2 border-[#151515] bg-[#E7E5DF] shadow-[5px_5px_0px_0px_#D92727] overflow-hidden aspect-[3/4]">
              <img
                src={PROJECT_PHOTOS.poolPavilionSpiralStair.src}
                alt={PROJECT_PHOTOS.poolPavilionSpiralStair.alt}
                width={PROJECT_PHOTOS.poolPavilionSpiralStair.width}
                height={PROJECT_PHOTOS.poolPavilionSpiralStair.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-2 border-[#151515] bg-[#E7E5DF] shadow-[5px_5px_0px_0px_#1746A2] overflow-hidden aspect-[3/4] mt-6">
              <img
                src={PROJECT_PHOTOS.staircaseMetalRailing.src}
                alt={PROJECT_PHOTOS.staircaseMetalRailing.alt}
                width={PROJECT_PHOTOS.staircaseMetalRailing.width}
                height={PROJECT_PHOTOS.staircaseMetalRailing.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <EditorialBadge label="17 Chambres · Saly Portudal" accent="red" />
            <h2 id="format-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl">
              Un format à taille humaine.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Le Mondrian compte 17 chambres et accueille les voyageurs dans une résidence hôtelière au cœur de Saly Portudal. Pour connaître les caractéristiques des chambres et les possibilités de séjour, contactez directement notre équipe.
            </p>
            <div className="pt-2">
              <WhatsAppButton label="Réservation" variant="red" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <MondrianDivider variant="c" />

      {/* SECTION 5 — CONCLUSION */}
      <section aria-labelledby="presentation-conclusion-title" className="bg-[#E7E5DF] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#151515] bg-[#F7F6F2] p-8 sm:p-12 text-center shadow-[8px_8px_0px_0px_#151515]">
            <h2 id="presentation-conclusion-title" className="font-serif-display text-3xl sm:text-5xl text-[#151515]">
              Bienvenue dans l'univers du Mondrian.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Découvrez notre résidence et préparez votre prochain séjour à Saly.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 border-2 border-[#151515] bg-[#151515] px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F6F2] shadow-[4px_4px_0px_0px_#F2C230] hover:bg-[#1746A2]"
              >
                <span>Nous contacter</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
