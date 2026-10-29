import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { PROJECT_PHOTOS } from "../config/photosConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { RoomCard } from "../components/RoomCard";
import { EditorialBlock } from "../components/EditorialBlock";
import { EditorialBadge, MondrianDivider } from "../components/MondrianAccents";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F2] text-[#151515]">
      {/* SECTION 1 — HERO */}
      <section
        aria-labelledby="hero-title"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#151515] bg-[#151515] gap-[2px] shadow-[8px_8px_0px_0px_#151515]">
          {/* Colonne gauche éditoriale (7 colonnes sur grand écran) */}
          <div className="lg:col-span-6 bg-[#F7F6F2] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <EditorialBadge label="Résidence hôtelière · 17 chambres" accent="red" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#151515]/70">
                  Saly Portudal, Sénégal
                </span>
              </div>

              <h1
                id="hero-title"
                className="mt-6 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[#151515]"
              >
                L'art de séjourner à Saly.
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#151515]/85 max-w-xl">
                Au cœur de Saly Portudal, Le Mondrian vous accueille dans une
                résidence hôtelière de 17 chambres où l'élégance contemporaine
                rencontre l'esprit de la côte sénégalaise.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/presentation"
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-[#151515] bg-[#F7F6F2] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#151515] shadow-[4px_4px_0px_0px_#151515] transition-colors hover:bg-[#F2C230]"
                >
                  <span>Découvrir la résidence</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <WhatsAppButton
                  label="Réservation"
                  variant="red"
                  size="md"
                  className="py-3.5 px-6"
                />
              </div>
            </div>

            {/* Bandeau géométrique bas du bloc Hero */}
            <div className="mt-10 pt-6 border-t-2 border-[#151515] grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block font-serif-display text-2xl text-[#151515]">17</span>
                <span className="uppercase tracking-wider text-[#151515]/70 font-semibold">
                  Chambres
                </span>
              </div>
              <div className="border-l-2 border-[#151515] pl-4">
                <span className="block font-serif-display text-2xl text-[#1746A2]">Saly</span>
                <span className="uppercase tracking-wider text-[#151515]/70 font-semibold">
                  Portudal · Sénégal
                </span>
              </div>
              <div className="border-l-2 border-[#151515] pl-4">
                <span className="block font-serif-display text-2xl text-[#D92727]">Direct</span>
                <span className="uppercase tracking-wider text-[#151515]/70 font-semibold">
                  Contact WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* Colonne droite visuelle asymétrique (6 colonnes) */}
          <div className="lg:col-span-6 grid grid-cols-6 grid-rows-6 bg-[#151515] gap-[2px]">
            {/* Photographie principale chargée en priorité */}
            <div className="col-span-6 row-span-5 relative overflow-hidden bg-[#E7E5DF] min-h-[280px] sm:min-h-[380px]">
              <img
                src={PROJECT_PHOTOS.poolOverviewMondrianWall.src}
                alt={PROJECT_PHOTOS.poolOverviewMondrianWall.alt}
                width={PROJECT_PHOTOS.poolOverviewMondrianWall.width}
                height={PROJECT_PHOTOS.poolOverviewMondrianWall.height}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Accents géométriques Mondrian sous la photo du Hero */}
            <div className="col-span-2 row-span-1 bg-[#D92727] p-3 flex items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7F6F2]">
                Architecture
              </span>
            </div>
            <div className="col-span-3 row-span-1 bg-[#E7E5DF] px-4 py-2 flex items-center">
              <p className="text-xs font-medium text-[#151515] line-clamp-2">
                {PROJECT_PHOTOS.poolOverviewMondrianWall.caption}
              </p>
            </div>
            <div className="col-span-1 row-span-1 bg-[#F2C230]" aria-hidden="true" />
          </div>
        </div>
      </section>

      <MondrianDivider variant="a" />

      {/* SECTION 2 — PRÉSENTATION DE LA RÉSIDENCE */}
      <section aria-labelledby="home-presentation-title" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 grid grid-cols-6 border-2 border-[#151515] bg-[#151515] gap-[2px] shadow-[6px_6px_0px_0px_#1746A2]">
            <div className="col-span-4 aspect-[3/4] overflow-hidden bg-[#E7E5DF]">
              <img
                src={PROJECT_PHOTOS.mondrianCornerTower.src}
                alt={PROJECT_PHOTOS.mondrianCornerTower.alt}
                width={PROJECT_PHOTOS.mondrianCornerTower.width}
                height={PROJECT_PHOTOS.mondrianCornerTower.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between bg-[#F7F6F2]">
              <div className="h-16 bg-[#F2C230] border-b-2 border-[#151515] p-3 flex items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest">Saly</span>
              </div>
              <div className="flex-1 overflow-hidden bg-[#E7E5DF]">
                <img
                  src={PROJECT_PHOTOS.verandaDiningMondrianPoolView.src}
                  alt={PROJECT_PHOTOS.verandaDiningMondrianPoolView.alt}
                  width={PROJECT_PHOTOS.verandaDiningMondrianPoolView.width}
                  height={PROJECT_PHOTOS.verandaDiningMondrianPoolView.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-12 bg-[#1746A2] border-t-2 border-[#151515]" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <EditorialBadge label="La résidence" accent="blue" />
            <h2 id="home-presentation-title" className="mt-5 font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Une adresse singulière au cœur de Saly.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Pensé comme un lieu de séjour à l'identité affirmée, Le Mondrian associe une esthétique contemporaine à une approche simple et accueillante de l'hospitalité. Ses 17 chambres en font une résidence à taille humaine, située au cœur de l'une des destinations balnéaires les plus connues du Sénégal.
            </p>
            <div className="mt-8">
              <Link
                to="/presentation"
                className="inline-flex items-center gap-2.5 border-2 border-[#151515] bg-[#151515] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F7F6F2] shadow-[4px_4px_0px_0px_#F2C230] hover:bg-[#1746A2]"
              >
                <span>En savoir plus</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MondrianDivider variant="b" />

      {/* SECTION 3 — LES CHAMBRES */}
      <section aria-labelledby="home-rooms-title" className="bg-[#E7E5DF] py-16 sm:py-20 border-b-2 border-[#151515]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditorialBadge label="Hébergement · 17 Chambres" accent="yellow" />
            <h2 id="home-rooms-title" className="mt-4 font-serif-display text-3xl sm:text-4xl lg:text-5xl">
              17 chambres pour vivre votre séjour à votre rythme.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Découvrez l'univers du Mondrian et contactez-nous pour connaître les caractéristiques de nos chambres ainsi que les disponibilités correspondant à vos dates.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RoomCard
              indexLabel="Vue I"
              accentColor="red"
              photo={PROJECT_PHOTOS.bedroomSuiteWide}
              title="Espace nuit & lumière naturelle"
              description="Aperçu d'un hébergement lumineux ouvrant sur l'extérieur. Contactez notre équipe pour connaître la configuration correspondant à votre séjour."
            />
            <RoomCard
              indexLabel="Vue II"
              accentColor="blue"
              photo={PROJECT_PHOTOS.bedroomTwinDeskWindow}
              title="Chambre & espace bureau"
              description="Aménagement sobre avec literie, rangements intégrés et coin bureau. Renseignements et disponibilités sur simple demande via WhatsApp."
            />
            <RoomCard
              indexLabel="Vue III"
              accentColor="yellow"
              photo={PROJECT_PHOTOS.bathroomWalkInShower}
              title="Lignes graphiques & salle d'eau"
              description="Détail d'une salle d'eau aux contrastes noirs et blancs fidèles à l'esprit géométrique de la résidence."
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-[#151515] bg-[#F7F6F2] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#151515] shadow-[4px_4px_0px_0px_#151515] hover:bg-[#F2C230]"
            >
              <span>Découvrir les services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <WhatsAppButton label="Réservation" variant="red" size="md" className="py-3.5 px-6" />
          </div>
        </div>
      </section>

      {/* SECTION 4 — L'EXPÉRIENCE LE MONDRIAN */}
      <section aria-labelledby="home-experience-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10">
          <EditorialBadge label="L'expérience Le Mondrian" accent="red" />
          <h2 id="home-experience-title" className="mt-4 font-serif-display text-3xl sm:text-4xl lg:text-5xl">
            L'expérience Le Mondrian
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialBlock
              number="01"
              accent="red"
              title="Une identité singulière"
              text="Un univers visuel inspiré de l'équilibre des formes et des lignes."
              className="h-full"
            />
          </div>
          <div className="lg:col-span-4">
            <EditorialBlock
              number="02"
              accent="blue"
              title="Une résidence à taille humaine"
              text="17 chambres pour accueillir les voyageurs dans un cadre contemporain."
              className="h-full"
            />
          </div>
          <div className="lg:col-span-3">
            <EditorialBlock
              number="03"
              accent="yellow"
              title="Une adresse à Saly Portudal"
              text="Une situation au cœur de la station balnéaire pour profiter de votre séjour au Sénégal."
              className="h-full"
            />
          </div>
        </div>
      </section>

      <MondrianDivider variant="c" />

      {/* SECTION 5 — LOCALISATION */}
      <section aria-labelledby="home-location-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-5">
            <EditorialBadge label="Destination · Sénégal" accent="blue" />
            <h2 id="home-location-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl">
              Séjournez au cœur de Saly Portudal.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Découvrez Le Mondrian, une résidence hôtelière située au cœur de la station balnéaire de Saly Portudal, au Sénégal.
            </p>
            <div className="border-2 border-[#151515] bg-[#E7E5DF] p-4 text-xs leading-relaxed">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                <MapPin className="h-4 w-4 text-[#D92727]" />
                <span>Repère de situation</span>
              </div>
              <p className="mt-2 text-[#151515]/80">
                Station balnéaire de Saly Portudal, Sénégal. Espace prévu pour une carte ou indication de localisation précise lorsque l'adresse officielle est confirmée.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 border-2 border-[#151515] bg-[#151515] gap-[2px] shadow-[6px_6px_0px_0px_#151515]">
            <div className="sm:col-span-7 aspect-[4/3] overflow-hidden bg-[#E7E5DF]">
              <img
                src={PROJECT_PHOTOS.courtyardWideView.src}
                alt={PROJECT_PHOTOS.courtyardWideView.alt}
                width={PROJECT_PHOTOS.courtyardWideView.width}
                height={PROJECT_PHOTOS.courtyardWideView.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="sm:col-span-5 bg-[#F7F6F2] p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#1746A2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F7F6F2]">
                  Sénégal
                </span>
                <h3 className="mt-4 font-serif-display text-2xl">Saly Portudal</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#151515]/75">
                  Cadre réservé au plan d'accès officiel de la résidence.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-[#151515]">
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-[#D92727]">
                  <span>Coordonnées & accès</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — APPEL À L'ACTION */}
      <section aria-labelledby="home-cta-title" className="border-t-2 border-[#151515] bg-[#E7E5DF] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#151515] bg-[#F7F6F2] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#151515]">
            <div className="grid grid-cols-12 mb-6 h-3 border border-[#151515] bg-[#151515] gap-[2px]" aria-hidden="true">
              <div className="col-span-3 bg-[#D92727]" />
              <div className="col-span-5 bg-[#F7F6F2]" />
              <div className="col-span-2 bg-[#F2C230]" />
              <div className="col-span-2 bg-[#1746A2]" />
            </div>
            <h2 id="home-cta-title" className="font-serif-display text-3xl sm:text-5xl text-[#151515]">
              Votre séjour à Saly commence ici.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#151515]/85">
              Une question sur nos chambres ou sur les disponibilités ? Contactez directement Le Mondrian sur WhatsApp.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Réservation" variant="red" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
